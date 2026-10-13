import { useState } from "react";
import { Trophy, MessageSquare, Users, Calendar, ArrowRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import demoDay from "../../../../../public/main/demoDay.png"
import khakaton from "../../../../../public/main/khakaton.png"
import trening from "../../../../../public/main/trening.png"
import dostijeniya from "../../../../../public/main/dostijeniya.png"


export default function CommunitySection() {
    const [selectedImage, setSelectedImage] = useState(null);

    const { t } = useTranslation()

    const imgMain = demoDay;
    const imgEvent1 = khakaton;
    const imgEvent2 = trening;
    const imgEvent3 = dostijeniya;

    const perks = [
        { icon: Trophy, title: t("main.firstSection.Хакатонҳо ва митапҳо"), desc: t("main.firstSection.Практика и реальные кейсы") },
        { icon: MessageSquare, title: "Telegram & Discord", desc: t("main.firstSection.Общение и поддержка 24/7") },
        { icon: Users, title: t("main.firstSection.Нетворкинг ва дӯстон"), desc: t("main.firstSection.Полезные знакомства") },
        { icon: Calendar, title: t("main.firstSection.Вохӯриҳои офлайн"), desc: t("main.firstSection.Живые встречи и мастер-классы") },
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">


                    <div className="lg:col-span-5 flex flex-col items-start">
                        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight leading-[1.1]">
                            {t("main.firstSection.Ҷомеае, ки шуморо ба пеш мебарад")}
                        </h2>
                        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                            {t("main.firstSection.Ту на танҳо таълим мегирӣ — ту қисми ҷомеаи IT мешавӣ, ки ба ту барои расидан ба мақсадҳоят кӯмак мекунад")}
                        </p>

                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full">
                            {perks.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="flex items-center gap-4 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm hover:border-orange-500/50 transition-colors">
                                        <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                                            <Icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <a href="https://t.me/itrun_kids_tj" target="_blank" >
                            <button className=" hidden sm:flex items-center justify-center rounded-xl bg-[#ff9735] my-3 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 ">
                                <span>{t("main.firstSection.Ба ҷомеа ҳамроҳ шудан")}</span>
                                <ArrowRight size={18} />
                            </button>
                        </a>
                    </div>

                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 h-[500px]">

                        <div
                            onClick={() => setSelectedImage(imgMain)}
                            className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-md bg-slate-900"
                        >
                            <img src={imgMain} alt="Demo Day" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6">
                                <span className="text-orange-400 text-xs font-bold uppercase tracking-wider">{t("main.firstSection.Главное событие")}</span>
                                <h3 className="text-white font-bold text-xl">{t("main.firstSection.Demo day and Job Fair")}</h3>
                            </div>
                        </div>

                        <div
                            onClick={() => setSelectedImage(imgEvent1)}
                            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-md bg-slate-900"
                        >
                            <img src={imgEvent1} alt="Хакатон" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                                <h4 className="text-white font-semibold text-xs">{t("main.firstSection.Хакатон ва Job Fair")}</h4>
                            </div>
                        </div>

                        <div
                            onClick={() => setSelectedImage(imgEvent2)}
                            className="col-span-1 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-md bg-slate-900"
                        >
                            <img src={imgEvent2} alt="Тренинг" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                                <h4 className="text-white font-semibold text-xs">{t("main.firstSection.Тренингҳо")}</h4>
                            </div>
                        </div>

                        <div
                            onClick={() => setSelectedImage(imgEvent3)}
                            className="col-span-2 sm:col-span-3 row-span-1 relative rounded-3xl overflow-hidden group cursor-pointer shadow-md bg-slate-900"
                        >
                            <img src={imgEvent3} alt="Достижения" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-4">
                                <h4 className="text-white font-semibold text-sm">{t("main.firstSection.Дастовардҳои хонандагони мо")}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 p-2" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <X size={20} />
                        </button>
                        <img src={selectedImage} alt="Expanded" className="w-full h-auto max-h-[85vh] object-contain rounded-2xl" />
                    </div>
                </div>
            )}
        </section>
    );
}