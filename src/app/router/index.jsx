import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const Layout = lazy(() => import ("../../widgets/layout/Layout"))
const MainPage = lazy(() => import("../../pages/main/Main"));
const CoursesPage = lazy(() => import("../../pages/courses/Courses"));
const AboutPage = lazy(() => import("../../pages/about/About"));
const ContactPage = lazy(() => import("../../pages/contact/Contact"));
const LifePage = lazy(() => import("../../pages/life/Life"));
const FreeLessonPage = lazy(() => import("../../pages/freelesson/FreeLesson"));
const CourseByIdPage = lazy(() => import("../../pages/courseById/CourseById"));
const RegisterPage = lazy(() => import("../../pages/register/Register"));

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Suspense>
                <Routes>
                    <Route element={<Layout />} >
                        <Route path="/" element={<MainPage />} />
                        <Route path="/courses" element={<CoursesPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/life-itrun" element={<LifePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/course/:id" element={<CourseByIdPage />} />
                        <Route path="/open-day" element={<FreeLessonPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Route>
                </Routes>
            </Suspense>
        </BrowserRouter>
    )
}