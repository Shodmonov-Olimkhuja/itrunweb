
const l1 = "/main/Partners/1.png";
const l2 = "/main/Partners/2.png";
const l3 = "/main/Partners/3.png";
const l4 = "/main/Partners/4.png";
const l5 = "/main/Partners/5.png";
const l6 = "/main/Partners/6.png";
const l7 = "/main/Partners/7.webp";
const l8 = "/main/Partners/8.png";
const l9 = "/main/Partners/9.png";
const l10 = "/main/Partners/10.png";
const l11 = "/main/Partners/11.png";
const l12 = "/main/Partners/12.png";
const l13 = "/main/Partners/13.png";
const l14 = "/main/Partners/14.png";
const l15 = "/main/Partners/15.png";
const l16 = "/main/Partners/16.png";
const l17 = "/main/Partners/17.png";
const l18 = "/main/Partners/18.png";
const leskhata = "/main/Partners/eskhata.png";

import { useTranslation } from "react-i18next";

export default function PartnersSection() {
    const { t } = useTranslation();

    const logoCompanies = [
        l1, l2, l3, l4, l5, l6, l7, l8, l9, l10,
        l11, l12, l13, l14, l15, l16, l17, l18,
        leskhata,
    ];

    return (
        <section className="relative z-10 py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-300 px-4 sm:px-6 lg:px-8">

                {/* Section heading */}
                <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12 lg:mb-14">
                    <span className="mb-3 inline-block rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#ff8410] sm:text-sm">
                        IT-RUN
                    </span>

                    <h2 className="mb-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
                        {t("main.firstSection.Наши партнёры")}
                    </h2>

                    <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-500 sm:text-base">
                        {t("main.firstSection.Мы работаем с ведущими IT-организациями, банками и международными фондами Таджикистана")}
                    </p>
                </div>

                {/* Responsive logo grid */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
                    {logoCompanies.map((img, index) => (
                        <div
                            key={index}
                            className="group flex h-24 items-center justify-center rounded-xl border border-slate-200/80 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 sm:h-28 sm:rounded-2xl sm:p-5 lg:h-32"
                        >
                            <img
                                src={img}
                                alt={`IT-RUN partner ${index + 1}`}
                                loading="lazy"
                                className="max-h-full max-w-full object-contain opacity-75 grayscale transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
