import CertificateSection from "./components/certificateSection/CertificateSection";
import HeroSection from "./components/heroSection/HeroSection";
import PartnersSection from "./components/partnersSection/PartnersSection";
import ProccessSection from "./components/proccessSection/ProccessSection";
import SecondSection from "./components/secondSection/SecondSection";
import TechMindMapSection from "./components/techMindMapSection/TechMindMapSection";
import { ThirdSection } from "./components/thirdSection/ThirdSection";
import VideoGallerySection from "./components/videoGallerySection/VideoGallerySection";


export default function Main() {
    return (
        <div>
            <HeroSection />
            <SecondSection/>
            <ProccessSection/>
            <ThirdSection/>
            <PartnersSection/>
            <VideoGallerySection/>
            <TechMindMapSection/>
            <CertificateSection/>
        </div>
    )
}