import CertificateSection from "./components/certificateSection/CertificateSection";
import HeroSection from "./components/heroSection/HeroSection";
import PartnersSection from "./components/partnersSection/PartnersSection";
import ProccessSection from "./components/proccessSection/ProccessSection";
import Review from "./components/review/Review";
import SecondSection from "./components/secondSection/SecondSection";
import TechMindMapSection from "./components/techMindMapSection/TechMindMapSection";
import { ThirdSection } from "./components/thirdSection/ThirdSection";
import VideoGallerySection from "./components/videoGallerySection/VideoGallerySection";
import CommunitySection from "./components/сommunitySection/CommunitySection";
import RegisterForCourse from "./components/registerforCourseSection/RegisterforCourseSection";

import SEO from "../../shared/seo/Seo"


export default function Main() {
    return (
        <>  
            <SEO
                title="IT RUN — Школа программирования в Таджикистане"
                description="IT-RUN — школа программирования в Худжанде и Душанбе. Изучайте Frontend, Backend, Python, искусственный интеллект и дизайн. Обучение детей, подростков и взрослых."
                url="https://itrun.tj/"
            />

            <div>
                <HeroSection />
                <SecondSection />
                <ProccessSection />
                <ThirdSection />
                <PartnersSection />
                <VideoGallerySection />
                <TechMindMapSection />
                <CertificateSection />
                <CommunitySection />
                <Review />
                <RegisterForCourse />
            </div>
        </>
    )
}