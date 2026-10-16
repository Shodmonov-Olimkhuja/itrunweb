
import { useTranslation } from "react-i18next";

import book from "../../../../../public/main/book.png";
import diplomat from "../../../../../public/main/diplomat.png";
import handshake from "../../../../../public/main/handshake.png";
import kepka from "../../../../../public/main/kepka.png";

export default function SecondSection() {
    const { t } = useTranslation();

    const stats = [
        {
            id: "01",
            number: "5+",
            label: t("main.firstSection.Опыт преподавания"),
            image: book,
            accent: "from-orange-400/20 via-orange-300/5 to-transparent",
        },
        {
            id: "02",
            number: "1000+",
            label: t("main.firstSection.Шумораи хатмкардагон"),
            image: kepka,
            accent: "from-blue-400/20 via-blue-300/5 to-transparent",
        },
        {
            id: "03",
            number: "+74%",
            label: t("main.firstSection.Дар ширкатҳои IT соҳиби кор шуданд"),
            image: diplomat,
            accent: "from-emerald-400/20 via-emerald-300/5 to-transparent",
        },
        {
            id: "04",
            number: "98%",
            label: t("main.firstSection.Тайёранд моро тавсия диҳанд"),
            image: handshake,
            accent: "from-violet-400/20 via-violet-300/5 to-transparent",
        },
    ];

    return (
        <section className="relative z-10 py-6 sm:py-10">
            <div className="mx-auto grid max-w-300 grid-cols-1 gap-4 px-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-5 lg:px-0">
                {stats.map((item) => (
                    <article
                        key={item.id}
                        className="group relative isolate min-h-[245px] overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/[0.06] sm:min-h-[270px] sm:p-7 lg:min-h-[290px]"
                    >
                        {/* Soft background gradient */}
                        <div
                            className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${item.accent} opacity-70 transition-opacity duration-500 group-hover:opacity-100`}
                        />

                        {/* Decorative circles */}
                        <div className="pointer-events-none absolute -right-12 -top-12 -z-10 h-36 w-36 rounded-full border border-slate-200/60 transition-transform duration-700 group-hover:scale-125 group-hover:border-orange-200/70" />

                        <div className="pointer-events-none absolute -right-6 -top-6 -z-10 h-24 w-24 rounded-full bg-orange-300/10 blur-2xl transition-colors duration-500 group-hover:bg-orange-300/20" />

                        {/* Top row */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-bold tracking-[0.22em] text-slate-400">
                                {item.id}
                            </span>

                            <span className="h-2 w-2 rounded-full bg-[#ff9735] ring-4 ring-orange-100 transition-transform duration-300 group-hover:scale-125" />
                        </div>

                        {/* Statistic */}
                        <div className="relative z-10 mt-7">
                            <h3 className="text-4xl font-black tracking-[-0.05em] text-slate-900 sm:text-[2.6rem] lg:text-5xl">
                                {item.number}
                            </h3>

                            <p className="mt-3 max-w-[220px] text-sm font-semibold leading-relaxed text-slate-600 sm:text-base">
                                {item.label}
                            </p>
                        </div>

                        {/* Decorative image */}
                        <div className="pointer-events-none absolute -bottom-5 -right-4 flex h-32 w-32 items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 sm:h-36 sm:w-36 lg:h-40 lg:w-40">
                            <div className="absolute inset-4 rounded-full bg-white/70 blur-xl" />

                            <img
                                src={item.image}
                                alt=""
                                aria-hidden="true"
                                loading="lazy"
                                className="relative h-24 w-24 object-contain drop-shadow-[0_10px_15px_rgba(15,23,42,0.10)] sm:h-28 sm:w-28 lg:h-32 lg:w-32"
                            />
                        </div>

                        {/* Bottom accent */}
                        <div className="absolute bottom-0 left-6 right-6 h-[3px] origin-left scale-x-0 rounded-full bg-[#ff9735] transition-transform duration-500 group-hover:scale-x-100 sm:left-7 sm:right-7" />
                    </article>
                ))}
            </div>
        </section>
    );
}
