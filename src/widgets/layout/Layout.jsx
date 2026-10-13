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
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}