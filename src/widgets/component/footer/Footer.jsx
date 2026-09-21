import { Link } from "react-router-dom";
import {
    Mail, Phone, MapPin, Clock,
} from "lucide-react";

import logo from "../../../assets/logo.png";
import { useTranslation } from "react-i18next";

export default function Footer() {

    const { t } = useTranslation();

    return (
        <footer className="mt-20 bg-white text-slate-700 dark:bg-slate-950 dark:text-slate-300">
            <div className="mx-auto max-w-300 px-6">
                <div className="grid grid-cols-1 gap-12 py-16 md:grid-cols-3 md:gap-50">
                    <div>
                        <Link
                            to="/"
                            className=" flex shrink-0 items-center group"
                        >
                            <img
                                className=" w-18 object-contain transition-transform duration-300 group-hover:scale-105 "
                                src={logo}
                                alt="IT RUN"
                            />

                            <div className="leading-tight">
                                <h1 className=" text-xl font-bold tracking-tight text-slate-900 dark:text-white ">
                                    IT RUN
                                </h1>
                                <p className=" text-[11px] font-medium text-slate-500 dark:text-slate-400 " >
                                    {t("navbar.Цент программирование")}
                                </p>
                            </div>
                        </Link>

                        <p className="mt-12 max-w-md text-lg font-semibold leading-8 text-slate-900 dark:text-white">
                             {t("navbar.Касби серталаби IT-ро аз худ кунед ва ба коркарди даромад оғоз намоед")}
                        </p>
                        <div className="mt-8 flex items-center gap-2">

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff9735] hover:text-[#ff9735] dark:border-slate-700 dark:text-slate-300"
                            >
                                <i className="fa-brands fa-instagram text-lg"></i>
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff9735] hover:text-[#ff9735] dark:border-slate-700 dark:text-slate-300"
                            >
                                <i className="fa-brands fa-telegram text-lg"></i>
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff9735] hover:text-[#ff9735] dark:border-slate-700 dark:text-slate-300"
                            >
                                <i className="fa-brands fa-youtube text-lg"></i>
                            </a>

                            <a
                                href="#"
                                className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-[#ff9735] hover:text-[#ff9735] dark:border-slate-700 dark:text-slate-300"
                            >
                                <i className="fa-brands fa-facebook-f text-lg"></i>
                            </a>

                        </div>
                    </div>

                    <div className="md:pl-12">
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                            {t("navbar.Навигация")}
                        </h3>

                        <ul className="space-y-5">

                            <li>
                                <Link
                                    to="/"
                                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                     {t("navbar.Главная")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/courses"
                                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                    {t("navbar.Курсы")}
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                     {t("navbar.О нас")}
                                </Link>
                            </li>
                            

                            <li>
                                <Link
                                    to="/life-itrun"
                                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                    {t("navbar.Жизнь ITRUN")}
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="group flex items-center gap-2 text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    <span className="transition-transform group-hover:translate-x-1">
                                        →
                                    </span>
                                    {t("navbar.Контакты")}
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-7 text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                             {t("navbar.Тамос")}
                        </h3>

                        <ul className="space-y-5">

                            <li className="flex items-start gap-3">
                                <Mail
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#ff9735]"
                                />

                                <a
                                    href="mailto:itruntj@gmail.com"
                                    className="text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    itruntj@gmail.com
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#ff9735]"
                                />

                                <a
                                    href="tel:+992927256060"
                                    className="text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    +992 92 725 6060 ( Худжанд )
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#ff9735]"
                                />

                                <span className="text-sm leading-5 text-slate-500 dark:text-slate-400">
                                    {t("navbar.кӯчаи Сомонӣ 51А, Хуҷанд, Тоҷикистон")}
                                </span>
                            </li>

                            <li className="flex items-start gap-3">
                                <Phone
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#ff9735]"
                                />

                                <a
                                    href="tel:+992559006060"
                                    className="text-sm text-slate-500 transition hover:text-[#ff9735] dark:text-slate-400"
                                >
                                    +992 55 900 6060 ( Душанбе )
                                </a>
                            </li>

                            <li className="flex items-start gap-3">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-[#ff9735]"
                                />

                                <span className="text-sm leading-5 text-slate-500 dark:text-slate-400">
                                    {t("navbar.кӯчаи Айни 166, Малика Собирова 35, Душанбе, Тоҷикистон")}
                                </span>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className="h-px w-full bg-slate-200 dark:bg-slate-800" />

                <div className="flex flex-col items-center justify-between gap-4 py-6 text-xs text-slate-400 sm:flex-row">

                    <p>
                        © 2026 IT RUN. {t("navbar.Ҳамаи ҳуқуқҳо ҳифз шудаанд")}
                    </p>

                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#ff9735]" />

                        <span>
                            IT RUN · Khujand · Dushanbe
                        </span>
                    </div>

                </div>
            </div>

            <a
                href="https://t.me/itrun_kids_tj"
                target="_blank"
                rel="noreferrer"
                className="
                    fixed
                    bottom-6
                    right-6
                    z-50
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    bg-[#12304A]
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:scale-105
                "
            >
                <i className="fa-brands fa-telegram text-2xl"></i>
            </a>
        </footer>
    );
}