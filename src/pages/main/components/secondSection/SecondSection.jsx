import { useTranslation } from "react-i18next";
import book from "../../../../../public/main/book.png"
import diplomat from "../../../../../public/main/diplomat.png"
import handshake from "../../../../../public/main/handshake.png"
import kepka from "../../../../../public/main/kepka.png"

export default function SecondSection() {
    const { t } = useTranslation();


    const stats = [
        {
            id: '01',
            number: "5+",
            label: t("main.firstSection.Опыт преподавания"),
            image: book
        },
        {
            id: '02',
            number: "1000+",
            label: t("main.firstSection.Шумораи хатмкардагон"),
            image: kepka
        },
        {
            id: '03',
            number: "+74%",
            label: t("main.firstSection.Дар ширкатҳои IT соҳиби кор шуданд"),
            image: diplomat
        },
        {
            id: '04',
            number: "98%",
            label: t("main.firstSection.Тайёранд моро тавсия диҳанд"),
            image: handshake
        }
    ];

    return (
        <div class="max-w-300 m-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {
                stats.map((e) => {
                    return (
                        <div
                            class=" group relative overflow-hidden min-h-[300px] rounded-[1.75rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-[#000c1a] p-7 transition-all duration-500 hover:-translate-y-1 " >
                            <div class="relative z-10">
                                <span
                                    class=" text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 ">
                                    {e.id}
                                </span>
                                <div
                                    class=" mt-5 text-2xl sm:text-3xl font-black tracking-tight "
                                >
                                    {e.number}
                                </div>
                                <p
                                    class=" mt-3 max-w-[220px] text-base sm:text-lg font-semibold leading-snug text-foreground " >
                                    {e.label}
                                </p>
                            </div>
                            <div
                                class=" absolute -bottom-3 -right-3 w-44 h-44 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 "
                            >
                                <img src={e.image} alt="Book" class="w-32 h-32 object-contain" />
                            </div>
                            <div
                                class=" absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-[#ff9735]/10 blur-3xl "
                            ></div>
                        </div>
                    )
                })
            }
        </div>
    );
}