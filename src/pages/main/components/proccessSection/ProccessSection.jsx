
import { Link } from "react-router-dom"
import bgProccesLite from "../../../../../public/main/bgProccesLite.png"
import { useTranslation } from "react-i18next"




export default function ProccessSection() {

    const {t} = useTranslation()


    return (
        <section class='relative my-15 py-15  overflow-hidden flex items-center'>
            <img class="absolute inset-0 w-full h-full object-cover -z-20" src={bgProccesLite} alt="" />
            <div class="relative z-10 max-w-300 mx-auto py-7 mb-10 md:mb-10 mt-10 flex flex-col justify-between relative px-5">
                <div class="text-center">
                    <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]"> {t("main.firstSection.Обучим")} </h1>
                    <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1] my-4"> {t("main.firstSection.Направим")} </h1>
                    <h1 class="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.1]"> {t("main.firstSection.Трудоустроим")} </h1>
                    <p class="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal"> {t("main.firstSection.Обучайся востребованным навыкам с ведущими специалистами рынка")} </p>
                    <div class="flex justify-center mt-7">
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                            <Link
                                to="/register"
                                className=" hidden sm:flex items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 "
                            >
                                {t("main.firstSection.Ба дарси ройгон номнавис шудан")}
                            </Link>
                            <Link
                                to="/register"
                                className=" hidden sm:flex items-center justify-center rounded-xl  px-5 py-3 text-sm font-semibold bg-[#12304ad0] text-white shadow-sm transition-all duration-200  hover:bg-[#12304A] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 "
                            >
                                {t("main.firstSection.Посмотреть все курсы")}
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}