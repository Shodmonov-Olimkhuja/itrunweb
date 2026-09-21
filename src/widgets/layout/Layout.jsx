import { Link, Outlet } from "react-router-dom";
import Footer from "../component/footer/Footer";
import Header from "../component/header/header";
import { useTranslation } from "react-i18next";
import { ZigzagScrollbar } from "../../shared/zigzagScrollbar/ZigzagScrollbar";


export default function Layout() {

    const { t } = useTranslation();


    return (
        <div>
            <ZigzagScrollbar />
            <div className="bg-[#12304A] text-white">
                <div className="max-w-300 m-auto py-3">
                    <Link
                        to="/register"
                        className=" hidden sm:flex items-center justify-center rounded-xl bg-[#ffffffd0] text-black px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:bg-white duration-200 "
                    >
                        {t("navbar.Вход в IT за 60 минут")}
                    </Link>

                </div>
            </div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}