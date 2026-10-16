
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../../../assets/logo.png";
import LanguageSelect from "./component/LanguageSelect";

export default function Header() {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { to: "/", label: t("navbar.Главная") },
        { to: "/courses", label: t("navbar.Курсы") },
        { to: "/about", label: t("navbar.О нас") },
        { to: "/contact", label: t("navbar.Контакты") },
    ];

    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-[99] bg-white">
            <div className="mx-auto flex max-w-300 items-center justify-between gap-4 px-4 py-2 sm:px-6 lg:px-0">
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="group flex shrink-0 items-center gap-2"
                >
                    <img
                        className="w-14 object-contain transition-transform duration-300 group-hover:scale-105 sm:w-20"
                        src={logo}
                        alt="IT RUN"
                    />

                    <div className="leading-tight">
                        <h1 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
                            IT RUN
                        </h1>
                        <p className="text-[10px] font-medium text-slate-500 sm:text-[11px]">
                            {t("navbar.Цент программирование")}
                        </p>
                    </div>
                </Link>

                {/* Desktop navigation */}
                <nav className="hidden lg:block">
                    <ul className="flex items-center gap-1">
                        {navLinks.map((item) => (
                            <li key={item.to}>
                                <Link
                                    to={item.to}
                                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition duration-200 ${
                                        location.pathname === item.to
                                            ? "bg-orange-50 text-[#ff8410]"
                                            : "text-slate-600 hover:text-slate-950"
                                    }`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Desktop actions */}
                <div className="hidden shrink-0 items-center gap-5 lg:flex">
                    <LanguageSelect />

                    <Link
                        to="/contact"
                        className="flex items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20"
                    >
                        {t("navbar.Оставить заявку")}
                    </Link>
                </div>

                {/* Mobile actions */}
                <div className="flex shrink-0 items-center gap-2 lg:hidden">
                    <LanguageSelect />

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-slate-800 transition hover:bg-slate-100"
                        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                    >
                        {isMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div
                    id="mobile-navigation"
                    className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-lg lg:hidden sm:px-6"
                >
                    <nav>
                        <ul className="flex flex-col gap-1">
                            {navLinks.map((item) => (
                                <li key={item.to}>
                                    <Link
                                        to={item.to}
                                        onClick={closeMenu}
                                        className={`block rounded-xl px-4 py-3 text-sm font-medium transition ${
                                            location.pathname === item.to
                                                ? "bg-orange-50 text-[#ff8410]"
                                                : "text-slate-700 hover:bg-slate-50 hover:text-[#ff8410]"
                                        }`}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Link
                        to="/contact"
                        onClick={closeMenu}
                        className="mt-3 flex w-full items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-[#ff8410] active:scale-[0.98]"
                    >
                        {t("navbar.Оставить заявку")}
                    </Link>
                </div>
            )}

            <hr className="border-0 border-t border-[#f3f3f3]" />
        </header>
    );
}
