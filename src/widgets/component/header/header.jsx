import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import LanguageSelect from "./component/LanguageSelect";

export default function Header() {
    const { t } = useTranslation();

    return (
        <header
            className="bg-white sticky top-0 z-99"
        >
            <div className="max-w-300 m-auto flex items-center justify-between gap-8">
                <Link
                    to="/"
                    className=" flex shrink-0 items-center gap-2 group"
                >
                    <img
                        className=" w-20 object-contain transition-transform duration-300 group-hover:scale-105 "
                        src={logo}
                        alt="IT RUN"
                    />

                    <div className="leading-tight">
                        <h1
                            className=" text-xl font-bold tracking-tight text-slate-900 dark:text-white "
                        >
                            IT RUN
                        </h1>
                        <p
                            className=" text-[11px] font-medium text-slate-500 dark:text-slate-400 "
                        >
                            {t("navbar.Цент программирование")}
                        </p>
                    </div>
                </Link>

                <div className="flex shrink-0 items-center gap-10 my-3">
                    <nav
                        className=" hidden lg:block"
                    >
                        <ul className="flex items-center gap-1">
                            <li>
                                <Link
                                    to="/"
                                    className=" block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200  hover:text-slate-950"
                                >
                                    {t("navbar.Главная")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/courses"
                                    className=" block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200  hover:text-slate-950
                            "
                                >
                                    {t("navbar.Курсы")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className=" block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200  hover:text-slate-950
                            "
                                >
                                    {t("navbar.О нас")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/life-itrun"
                                    className=" block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200  hover:text-slate-950
                            "
                                >
                                    {t("navbar.Жизнь ITRUN")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className=" block rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition duration-200  hover:text-slate-950
                            "
                                >
                                    {t("navbar.Контакты")}
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <LanguageSelect />

                    <Link
                        to="/register"
                        className=" hidden sm:flex items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200  hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0 "
                    >
                        {t("navbar.Оставить заявку")}
                    </Link>
                </div>
            </div>
            <hr className="text-[#f3f3f3]" />
        </header>
    );
}
