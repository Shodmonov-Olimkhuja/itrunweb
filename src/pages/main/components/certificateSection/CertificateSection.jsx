import { useState, useRef } from "react";
import { CheckCircle2, Briefcase, ArrowRight, Award } from "lucide-react";
import certificateImg from "../../../../assets/sql.png";

export default function CertificateSection() {
    const cardRef = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    // Обработчик движения мыши для создания 3D-наклона
    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left; // координата X внутри карточки
        const y = e.clientY - rect.top;  // координата Y внутри карточки
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        // Вычисляем углы наклона (ограничиваем до 12 градусов для плавности)
        const rX = ((y - centerY) / centerY) * -10;
        const rY = ((x - centerX) / centerX) * 10;

        setRotateX(rX);
        setRotateY(rY);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <section className="relative overflow-hidden bg-white flex items-center justify-center">
            <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    <div className="lg:col-span-7 flex flex-col items-start text-left">

                        <h2 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight leading-[1.1]">
                            Сертификате, ки дарҳоро мекушояд
                        </h2>

                        <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                            Тасдиқ мекунад, ки шумо курсро хатм кардед ва барои ёфтани аввалин кор дар IT кӯмак хоҳад кард.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-8 max-w-lg">

                            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-2xl shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900">Тасдиқи дониш</h4>
                                    <p className="text-[11px] text-slate-500">Официальный документ</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 px-4 py-3.5 rounded-2xl shadow-sm">
                                <div className="w-10 h-10 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                                    <Briefcase size={20} />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold text-slate-900">Барои портфолио</h4>
                                    <p className="text-[11px] text-slate-500">Для работодателей</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <button className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105 cursor-pointer">
                                <span>Намунаи сертификат</span>
                                <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>

                    <div className="lg:col-span-5 relative flex items-center justify-center py-6">

                        <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/15 to-amber-300/25 rounded-full blur-3xl -z-10 transition-all duration-500" />

                        <div 
                            style={{ perspective: "1000px" }}
                            className="w-full flex items-center justify-center"
                        >
                            <div
                                ref={cardRef}
                                onMouseMove={handleMouseMove}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                style={{
                                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovered ? 1.02 : 1})`,
                                    transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-in-out",
                                }}
                                className="relative w-full max-w-md  p-3 sm:p-5 rounded-3xl cursor-pointer"
                            >
                                <div className="absolute -top-6 right-10 w-32 h-12 border-t-2 border-r-2 border-slate-300 rounded-tr-full pointer-events-none" />

                                <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-100">
                                    <img 
                                        src={certificateImg} 
                                        alt="IT-RUN Certificate" 
                                        className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105" 
                                    />
                                </div>

                                <div className="absolute -bottom-4 right-4 bg-white/95 backdrop-blur-md border border-slate-200 px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5">
                                    <div className="w-7 h-7 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/30">
                                        <CheckCircle2 size={15} />
                                    </div>
                                    <div>
                                        <p className="text-[11px] font-bold text-slate-900">IT-RUN</p>
                                        <p className="text-[9px] text-slate-500">Official Certificate</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}