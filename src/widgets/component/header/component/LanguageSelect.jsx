
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
    {
        code: "ru",
        name: "Русский",
        flag: "https://avatars.mds.yandex.net/i?id=7b20696261b60b03e76e39d939b2815785903ce5-3751006-images-thumbs&n=13",
    },
    {
        code: "tj",
        name: "Тоҷикӣ",
        flag: "https://avatars.mds.yandex.net/i?id=7f857f075316e069711c0b96a728d47d2577d958-11499518-images-thumbs&n=13",
    },
    {
        code: "en",
        name: "English",
        flag: "https://avatars.mds.yandex.net/i?id=bdaa0fe650c33501660cc8fbfe01010fa674d24d-9038954-images-thumbs&n=13",
    },
];

export default function LanguageSelect() {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language?.split("-")[0]) ||
        languages[0];

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.addEventListener("pointerdown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("pointerdown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, []);

    return (
        <div ref={menuRef} className="relative z-[200]">
            <button
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
                aria-expanded={isOpen}
                aria-haspopup="true"
                className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
            >
                <img
                    className="w-5"
                    src={currentLanguage.flag}
                    alt=""
                />

                <span className="uppercase">
                    {currentLanguage.code}
                </span>

                <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-full z-[200] mt-2 w-40 rounded-xl border border-slate-200 bg-white p-1 shadow-xl">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            type="button"
                            onClick={() => changeLanguage(language.code)}
                            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-slate-100 ${
                                currentLanguage.code === language.code
                                    ? "bg-orange-50"
                                    : ""
                            }`}
                        >
                            <img
                                className="w-5"
                                src={language.flag}
                                alt=""
                            />

                            <span className="flex-1">
                                {language.name}
                            </span>

                            {currentLanguage.code === language.code && (
                                <span className="text-orange-500">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
