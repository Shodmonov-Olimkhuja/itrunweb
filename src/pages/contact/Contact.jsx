import { t } from "i18next";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const audiences = [t("contact.Ребёнок (7–12 лет)"), t("contact.Подросток (13–17 лет)"), t("contact.Студент"), t("contact.Взрослый")];
const courses = ["Python", "Web (Frontend / PHP)", "Android (Kotlin)", "C#", "Дизайн (Figma)", "Дата-аналитика", "Цифровая грамотность", "Пока не знаю"];
const inputCls =
    "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-200";

const Field = ({ label, children }) => (
    <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-slate-700">{label}</span>
        {children}
    </label>
);

export default function Contact() {
    const [form, setForm] = useState({ name: "", phone: "", city: "Худжанд", audience: audiences[0], course: courses[courses.length - 1], message: "" });
    const [sent, setSent] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const { t } = useTranslation()


    const offices = [
        {
            city: t("contact.Худжанд"),
            note: t("contact.Головной центр, работает с марта 2020 года"),
            address: t("contact.Улица Сомони 51А, Худжанд, Таджикистан"),
            phone: "+992 92 725 6060",
            hours: "Пн–Сб, 9:00–18:00",
            map: "https://maps.app.goo.gl/gkQva2nzzqe5hiUe9",
        },
        {
            city: t("contact.Душанбе"),
            note: t("contact.Филиал, работает с августа 2020 года"),
            address: t("contact.ул. Айни 166, Малика Собирова 35, Душанбе, Таджикистан"),
            phone: "+992 55 900 6060",
            hours: "Пн–Сб, 9:00–18:00",
            map: "https://maps.app.goo.gl/yDi2y81cp6PhsPeo6",
        },
    ];



    const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });


    const submit = async (e) => {
        e.preventDefault();
        setError("");

        if (form.name.trim().length < 2) {
            setError("Укажите имя");
            return;
        }

        if (form.phone.replace(/\D/g, "").length < 9) {
            setError("Укажите телефон полностью, например +992 900 00 00 00");
            return;
        }

        setLoading(true);

        try {
            const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
            const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

            if (!supabaseUrl || !supabaseKey) {
                throw new Error("Не настроены переменные окружения Supabase.");
            }

            const response = await fetch(
                `${supabaseUrl}/functions/v1/alfacrm-lead`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "apikey": supabaseKey,
                        "Authorization": `Bearer ${supabaseKey}`,
                    },
                    body: JSON.stringify({
                        name: form.name.trim(),
                        phone: form.phone.trim(),
                        city: form.city,
                        course: [
                            form.course,
                            `Кто будет учиться: ${form.audience}`,
                            form.message.trim()
                                ? `Комментарий: ${form.message.trim()}`
                                : "",
                        ].filter(Boolean).join(". "),
                    }),
                }
            );

            const result = await response.json();

            if (!response.ok || !result.success) {
                throw new Error(
                    result.error || "Не удалось отправить заявку."
                );
            }

            setSent(true);
        } catch (err) {
            console.error("Ошибка отправки заявки:", err);
            setError(
                err.message || "Ошибка соединения. Попробуйте ещё раз."
            );
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="min-h-screen bg-white text-slate-800 font-sans">
            <section className="mx-auto max-w-6xl py-16 grid lg:grid-cols-5 gap-10">
                <div id="form" className="lg:col-span-3 rounded-2xl border border-slate-200 mx-4 p-6 md:p-8 shadow-sm scroll-mt-24">
                    {sent ? (
                        <div className="py-10 text-center" role="status">
                            <div className="mx-auto h-14 w-14 rounded-full bg-green-100 text-green-600 grid place-items-center text-2xl">✓</div>
                            <h2 className="mt-5 text-2xl font-bold text-[#0f2a43]">Заявка отправлена</h2>
                            <p className="mt-2 text-slate-600">Мы позвоним вам по номеру {form.phone} в ближайшее рабочее время.</p>
                            <button
                                onClick={() => { setSent(false); setForm({ ...form, name: "", phone: "", message: "" }); }}
                                className="mt-6 rounded-xl bg-slate-600 hover:bg-slate-700 transition-colors px-6 py-3 text-sm font-semibold text-white"
                            >
                                Отправить ещё одну заявку
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={submit} noValidate className="space-y-5">
                            <h2 className="text-2xl font-bold text-[#0f2a43]">{t("navbar.Оставить заявку")}</h2>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field label={t("contact.Имя")} >
                                    <input className={inputCls} placeholder="Как к вам обращаться" value={form.name} onChange={update("name")} />
                                </Field>
                                <Field label={t("contact.Телефон")} >
                                    <input className={inputCls} type="tel" placeholder="+992 900 00 00 00" value={form.phone} onChange={update("phone")} />
                                </Field>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-5">
                                <Field label={t("contact.Город")} >
                                    <select className={inputCls} value={form.city} onChange={update("city")}>
                                        <option>Худжанд</option>
                                        <option>Душанбе</option>
                                    </select>
                                </Field>
                                <Field label={t("contact.Кто будет учиться")} >
                                    <select className={inputCls} value={form.audience} onChange={update("audience")}>
                                        {audiences.map((a) => <option key={a}>{a}</option>)}
                                    </select>
                                </Field>
                            </div>
                            <Field label={t("contact.Направление")} >
                                <select className={inputCls} value={form.course} onChange={update("course")}>
                                    {courses.map((c) => <option key={c}>{c}</option>)}
                                </select>
                            </Field>
                            <Field label={t("contact.Комментарий (необязательно)")} >
                                <textarea className={inputCls} rows={4} placeholder="Уровень подготовки, удобное время, вопросы" value={form.message} onChange={update("message")} />
                            </Field>
                            {error && <p className="text-sm text-red-600" role="alert">{error}</p>}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full rounded-xl bg-orange-400 hover:bg-orange-500
    disabled:cursor-not-allowed disabled:opacity-60
    transition-colors px-6 py-3.5 font-semibold text-white"
                            >
                                {loading
                                    ? "Отправка заявки..."
                                    : t("contact.Записаться на бесплатный урок")}
                            </button>
                        </form>
                    )}
                </div>

                <aside className="lg:col-span-2 mx-4 space-y-6">
                    {offices.map((o) => (
                        <div key={o.city} className="rounded-2xl bg-[#12304a] text-white p-6">
                            <h3 className="text-xl font-bold">{o.city}</h3>
                            <p className="text-sm text-slate-300 mt-1">{o.note}</p>
                            <dl className="mt-5 space-y-3 text-sm">
                                <div>
                                    <dt className="text-slate-400">{t("contact.Адрес")}</dt>
                                    <dd>{o.address}</dd>
                                </div>
                                <div>
                                    <dt className="text-slate-400">{t("contact.Телефон")}</dt>
                                    <dd><a href={`tel:${o.phone.replace(/\s/g, "")}`} className="hover:text-orange-300">{o.phone}</a></dd>
                                </div>
                                <div>
                                    <dt className="text-slate-400">{t("contact.Часы работы")}</dt>
                                    <dd>{o.hours}</dd>
                                </div>
                            </dl>
                            <a href={o.map} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-lg bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 text-sm font-medium">
                                {t("contact.Открыть на карте")}
                            </a>
                        </div>
                    ))}
                </aside>
            </section>
        </div>
    );
}