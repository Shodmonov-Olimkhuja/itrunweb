import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import SecondSection from "../main/components/secondSection/SecondSection";


const Heading = ({ children, sub }) => (
    <div className="mb-10 max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-extrabold ">{children}</h2>
        {sub && <p className="mt-3  leading-relaxed">{sub}</p>}
    </div>
);

export default function About() {
    const { t } = useTranslation()

    const timeline = [
        { year: t("aboutus.Март 2020"), text: t("aboutus.Начало работы в Худжанде — обучение детей программированию в разгар пандемии") },
        { year: t("aboutus.Август 2020"), text: t("aboutus.Открытие филиала в Душанбе") },
        { year: t("aboutus.Май 2021"), text: t("aboutus.Первые проекты с международными организациями") },
        { year: "2023 – 2025", text: t("aboutus.Собственные IT-хакатоны и курсы с трудоустройством выпускников") },
    ];

    const projects = [
        { name: t("aboutus.Программирование и цифровая грамотность для начинающих"), period: "Апр – Ноя 2021", donor: "ПРООН" },
        { name: t("aboutus.Программирование для одарённых детей из уязвимых семей"), period: "Май – Авг 2021", donor: "Silk Road Professionals" },
        { name: t("aboutus.Girls who Code — «Девушки, которые кодят»"), period: "Фев – Июл 2022", donor: "ПРООН" },
        { name: t("aboutus.Подготовка IT-специалистов для аутсорса"), period: "Авг 2022 – Окт 2023", donor: "USAID-FGI" },
        { name: t("aboutus.Data Science на Python для девушек"), period: "Окт 2022 – Фев 2023", donor: "ПРООН" },
        { name: t("aboutus.IT-хакатон: цифровое решение по трудоустройству"), period: "Май 2023", donor: "ПРООН" },
        { name: t("aboutus.Цифровая грамотность и фронтенд для афганских беженцев и местного сообщества"), period: "Сен 2023 – Май 2024", donor: "IOM" },
        { name: t("aboutus.IT-курсы для 120 девушек с трудоустройством"), period: "Сен 2023 – Окт 2024", donor: "ПРООН" },
    ];

    const hackathons = [
        { title: t("aboutus.IT-хакатон по трудоустройству"), date: t("aboutus.25–27 мая 2023"), text: t("aboutus.60 участников из Согдийской области и Душанбе создавали цифровые решения для поиска работы. Одна из команд представила платформу, где ИИ помогает составить резюме"), partner: "ПРООН, Бизнес-инкубатор Таджикистана" },
        { title: "DataHack OneDay", date: t("aboutus.16 августа 2025"), text: t("aboutus.Более 35 участников анализировали данные вымышленных компаний и прогнозировали продажи и прибыль"), partner: "Сиёма, Мегафон, Freedom IT Hub" },
        { title: "BioDivCode+", date: t("aboutus.19–21 сентября"), text: t("aboutus.Трёхдневный хакатон во Freedom IT Hub с участием более 45 человек"), partner: "ПРООН" },
    ];

    const partners = ["Freedom IT Hub", "IT Park Таджикистана", "ПРООН", "USAID-FGI", "Silk Road Professionals", "Робитаи Нав", "IOM", "Банк Эсхата", "Коммерцбанк", "Банк Арванд", "Хумо", "Мегафон Таджикистан", "Ливо", "Хумо Лаб"];

    const awards = [
        t("aboutus.Победитель в номинации «Женщины в электронной коммерции» — Национальный конкурс «Электронная коммерция Таджикистана», 2024"),
        t("aboutus.Победитель конкурса «25 успешных женщин-предпринимателей Таджикистана», 2024 (АФОТ)"),
        t("aboutus.Благодарственное письмо Госкомитета по инвестициям и управлению госимуществом за вклад в развитие IT и женского предпринимательства"),
    ];


    return (
        <div className="min-h-screen bg-white font-sans">
            <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 text-center items-center">
                <div className="">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight ">
                        {t("aboutus.Учим программировать так же, как учат читать")}
                    </h1>
                    <p className="mt-6 text-lg leading-relaxed">
                        {t("aboutus.«Новый Алгоритм» с 2020 года обучает детей, подростков и взрослых программированию и цифровой грамотности в Худжанде и Душанбе, а затем помогает выпускникам найти первую работу в IT")}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-center gap-4 pt-4">
                        <Link
                            to="/register"
                            className="hidden sm:flex items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0"
                        >
                            {t("main.firstSection.Ба дарси ройгон номнавис шудан")}
                        </Link>
                        <Link
                            to="/courses"
                            className="hidden sm:flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-[#12304ad0] text-white shadow-sm transition-all duration-200 hover:bg-[#12304A] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0"
                        >
                            {t("main.firstSection.Посмотреть все курсы")}
                        </Link>
                    </div>
                </div>
            </section>
            <SecondSection />
            <section className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-5 gap-12">
                <div className="md:col-span-3">
                    <Heading>{t("aboutus.Наша история")}</Heading>
                    <p className=" leading-relaxed">
                        {t("aboutus.Мы начали в марте 2020 года, на пике пандемии COVID-19, с детских курсов программирования в Худжанде. Родители и дети увидели результаты и доверились нам, а в августе 2020 года мы открыли филиал в Душанбе")}
                    </p>
                    <p className="mt-4  leading-relaxed">
                        {t("aboutus.Спрос на качественное IT-образование среди молодёжи растёт, поэтому с мая 2021 года мы работаем с международными организациями и грантовыми программами. Проводим встречи и презентации в университетах и школах, а на каждый курс собираем более 300 заявок и отбираем студентов вдумчиво")}
                    </p>
                    <p className="mt-4  leading-relaxed">
                        {t("aboutus.Кроме hard skills мы проводим тренинги по soft skills с сертифицированными менторами и экспертами")}
                    </p>
                </div>
                <ol className="md:col-span-2 border-l-2 border-orange-300 pl-6 space-y-8">
                    {timeline.map((t) => (
                        <li key={t.year} className="relative">
                            <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full bg-orange-400" />
                            <div className="font-bold text-[#0f2a43]">{t.year}</div>
                            <p className="text-sm  mt-1">{t.text}</p>
                        </li>
                    ))}
                </ol>
            </section>
            <section className="bg-slate-50">
                <div className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                    <Heading sub={t("aboutus.Проекты, которые мы реализовали вместе с международными и местными партнёрами")}>
                        {t("aboutus.Реализованные проекты")}
                    </Heading>
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-[#12304a] text-white">
                                <tr>
                                    <th className="px-5 py-3 font-semibold">{t("aboutus.Проект")}</th>
                                    <th className="px-5 py-3 font-semibold whitespace-nowrap">{t("aboutus.Период")}</th>
                                    <th className="px-5 py-3 font-semibold">{t("aboutus.Донор")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((p) => (
                                    <tr key={p.name} className="border-t border-slate-100">
                                        <td className="px-5 py-4 ">{p.name}</td>
                                        <td className="px-5 py-4 whitespace-nowrap ">{p.period}</td>
                                        <td className="px-5 py-4 ">{p.donor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
                <Heading sub={t("aboutus.Хакатоны, которые мы организовали в школе программирования ITRUN")} >{t("aboutus.Хакатоны")}</Heading>
                <div className="grid md:grid-cols-3 gap-6">
                    {hackathons.map((h) => (
                        <article key={h.title} className="rounded-2xl border border-slate-200 p-6 flex flex-col">
                            <span className="self-start rounded-full bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1">{h.date}</span>
                            <h3 className="mt-4 text-xl font-bold ">{h.title}</h3>
                            <p className="mt-3 text-sm  leading-relaxed flex-1">{h.text}</p>
                            <p className="mt-4 text-xs text-slate-500">{t("aboutus.Партнёры")}: {h.partner}</p>
                        </article>
                    ))}
                </div>
            </section>
            <section className="bg-[#0f2a43] text-white">
                <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-extrabold">{t("aboutus.Награды")}</h2>
                        <ul className="mt-6 space-y-4">
                            {awards.map((a) => (
                                <li key={a} className="flex gap-3 text-slate-200 leading-relaxed">
                                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-400" />
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-3xl font-extrabold">{t("aboutus.Партнёры и работодатели")}</h2>
                        <p className="mt-3 text-slate-300 text-sm">
                            {t("aboutus.У нас есть меморандумы о сотрудничестве по трудоустройству студентов")}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-2">
                            {partners.map((p) => (
                                <span key={p} className="rounded-lg bg-white/10 px-3 py-1.5 text-sm">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}