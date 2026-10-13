import { Link } from "react-router-dom";
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


export default function Main() {
    return (
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
            <RegisterForCourse/>
        </div>
    )
}