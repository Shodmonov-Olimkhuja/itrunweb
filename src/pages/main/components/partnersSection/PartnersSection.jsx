import l1 from "../../../../../public/main/Partners/1.png"
import l2 from "../../../../../public/main/Partners/2.png"
import l3 from "../../../../../public/main/Partners/3.png"
import l4 from "../../../../../public/main/Partners/4.png"
import l5 from "../../../../../public/main/Partners/5.png"
import l6 from "../../../../../public/main/Partners/6.png"
import l7 from "../../../../../public/main/Partners/7.webp"
import l8 from "../../../../../public/main/Partners/8.png"
import l9 from "../../../../../public/main/Partners/9.png"
import l10 from "../../../../../public/main/Partners/10.png"
import l11 from "../../../../../public/main/Partners/11.png"
import l12 from "../../../../../public/main/Partners/12.png"
import l13 from "../../../../../public/main/Partners/13.png"
import l14 from "../../../../../public/main/Partners/14.png"
import l15 from "../../../../../public/main/Partners/15.png"
import l16 from "../../../../../public/main/Partners/16.png"
import l17 from "../../../../../public/main/Partners/17.png"
import l18 from "../../../../../public/main/Partners/18.png"
import leskhata from "../../../../../public/main/Partners/eskhata.png"
import { useTranslation } from "react-i18next"


export default function PartnersSection() {


    const {t} = useTranslation()


    const logoCompanies = [
        { img: l1 },
        { img: l2 },
        { img: l3 },
        { img: l4 },
        { img: l5 },
        { img: l6 },
        { img: l7 },
        { img: l8 },
        { img: l9 },
        { img: l10 },
        { img: l11 },
        { img: l12 },
        { img: l13 },
        { img: l14 },
        { img: l15 },
        { img: l16 },
        { img: l17 },
        { img: l18 },
        { img: leskhata },
    ];

    return (
        <section class="relative z-10 py-10 sm:py-12 lg:py-16">
            <div class="max-w-300 mx-auto px-4 sm:px-6 lg:px-8">
                <div class="text-center mb-10 sm:mb-14 lg:mb-16">
                    <h2 class="text-[2rem] sm:text-[2.2rem] xl:text-[2.4rem] font-black mb-4">
                        {t("main.firstSection.Наши партнёры")}
                    </h2>
                    <p class="max-w-xl text-sm sm:text-base leading-relaxed text-slate-500 dark:text-slate-400 mx-auto">
                        {t("main.firstSection.Мы работаем с ведущими IT-организациями, банками и международными фондами Таджикистана")}
                    </p>
                </div>
                <div class="partners">
                    {
                        logoCompanies.map((e) => {
                            return <div class="logo"> <img src={e.img} alt="Partner" /> </div>

                        })
                    }
                </div>
            </div>
        </section>
    )
}