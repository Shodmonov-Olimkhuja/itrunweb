import CoursesSection from "./components/coursesSection/CoursesSection";

import SEO from "../../shared/seo/Seo";

export default function Courses() {
    return (
        <>
            <SEO
                title="Курсы программирования в IT RUN  Худжанд и Душанбе"
                description="Выбирайте курсы IT RUN: Frontend, JavaScript, React, Python, C++, дизайн и другие направления. Практическое обучение программированию в Худжанде и Душанбе."
                url="https://itrun.tj/courses"
            />
            <CoursesSection />
        </>
    )
}