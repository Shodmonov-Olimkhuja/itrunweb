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

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language) ||
        languages[0];

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="relative group">
            <button
                className=" flex items-center gap-2  text-sm font-medium text-slate-700 transition-all duration-200 hover:border-slate-300 "
            >
                <img className="w-5" src={currentLanguage.flag} alt="" />

                <span className="uppercase">
                    {currentLanguage.code}
                </span>

                <ChevronDown
                    size={16}
                    className=" transition-transform duration-200 group-hover:rotate-180   "
                />
            </button>
            <div
                className=" invisible absolute right-0 top-full z-50 mt-2 w-40 origin-top-right scale-95 rounded-xl border border-slate-200 bg-white p-1 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:scale-100 group-hover:opacity-100 " >
                {languages.map((language) => (
                    <button
                        key={language.code}
                        onClick={() => changeLanguage(language.code)}
                        className=" flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition hover:bg-slate-100 "
                    >
                        <img className="w-5" src={language.flag} alt="" />


                        <span className="flex-1">
                            {language.name}
                        </span>

                        {i18n.language === language.code && (
                            <span className="text-orange-500">
                                ✓
                            </span>
                        )}
                    </button>
                ))}
            </div>
        </div>
    );
}