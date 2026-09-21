import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Terminal, TypingAnimation, AnimatedSpan } from "./components/Terminal";
import { Link } from "react-router-dom";
import student1 from "../../../../../public/main/student1.png";
import student2 from "../../../../../public/main/student2.png";
import student3 from "../../../../../public/main/student3.png";
import student4 from "../../../../../public/main/student4.png";
import student5 from "../../../../../public/main/student5.png";
import student6 from "../../../../../public/main/student6.png";

export default function HeroSection() {
    const { t } = useTranslation();

    const cardRef = useRef(null);
    const [rotateStyle, setRotateStyle] = useState("");
    const [glowStyle, setGlowStyle] = useState({ x: 50, y: 50, opacity: 0 });

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const rotateX = -((e.clientY - centerY) / (rect.height / 2)) * 10;
        const rotateY = ((e.clientX - centerX) / (rect.width / 2)) * 10;

        setRotateStyle(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`);
        setGlowStyle({ x, y, opacity: 0.3 });
    };

    const handleMouseLeave = () => {
        setRotateStyle("perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)");
        setGlowStyle({ x: 50, y: 50, opacity: 0 });
    };

    const student = [
        { id: 1, image: student1 },
        { id: 2, image: student2 },
        { id: 3, image: student3 },
        { id: 4, image: student4 },
        { id: 5, image: student5 },
        { id: 6, image: student6 },
    ];

    return (
        <section className="relative flex items-center justify-center overflow-hidden py-16 px-4">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-7" />
            <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

                <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

                    <h1 className="text-2xl sm:text-4xl lg:text-4xl font-black tracking-tight leading-[1.1]">
                        {t("main.firstSection.Таҳсилоти IT барои кӯдакон, наврасон, донишҷӯён ва калонсолон")}
                    </h1>

                    <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
                        {t("main.firstSection.Бо омӯзгорони ботаҷриба касбҳои рақамии серталабро аз худ намоед. Мо барномасозӣ, дизайн, зеҳни сунъӣ ва дигар самтҳои муосири IT-ро аз дарси аввал то пайдо кардани кори аввал дар соҳаи технология омӯзиш медиҳем")}
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                        <Link
                            to="/register"
                            className="hidden sm:flex items-center justify-center rounded-xl bg-[#ff9735] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#ff8410] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0"
                        >
                            {t("main.firstSection.Ба дарси ройгон номнавис шудан")}
                        </Link>
                        <Link
                            to="/register"
                            className="hidden sm:flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold bg-[#12304ad0] text-white shadow-sm transition-all duration-200 hover:bg-[#12304A] hover:shadow-lg hover:shadow-orange-500/20 active:translate-y-0"
                        >
                            {t("main.firstSection.Посмотреть все курсы")}
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 justify-center lg:justify-start">
                        <div className="flex -space-x-3">
                            {student.map((e) => {
                                return (
                                    <div key={e.id} className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-[#070c19] bg-slate-100">
                                        <img src={e.image} alt="student" className="w-full h-full object-cover" />
                                    </div>
                                );
                            })}
                        </div>
                        <div className="h-9 w-px bg-slate-200 dark:bg-white/10"></div>
                        <div>
                            <p className="text-sm font-bold text-slate-900 dark:text-white">
                                {t('main.firstSection.1000+ студентов уже с нами')}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                {t("main.firstSection.95% трудоустройство наших выпускников")}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-5 w-full flex justify-center">
                    <div 
                        ref={cardRef}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            transform: rotateStyle,
                            transition: "transform 0.1s ease-out",
                            transformStyle: "preserve-3d",
                        }}
                        className="relative group w-full max-w-lg cursor-pointer"
                    >
                        <div 
                            className="absolute -inset-2 bg-gradient-to-r from-[#ffa200] to-yellow-400 rounded-2xl blur-xl transition-opacity duration-300 pointer-events-none"
                            style={{ opacity: glowStyle.opacity + 0.15 }}
                        />

                        <div className="relative rounded-2xl bg-[#12304A] border border-slate-700/80 backdrop-blur-xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] overflow-hidden">
                            
                            <div 
                                className="absolute inset-0 pointer-events-none transition-opacity duration-300 z-20"
                                style={{
                                    background: `radial-gradient(circle 300px at ${glowStyle.x}% ${glowStyle.y}%, rgba(255,162,0,0.2), transparent 80%)`,
                                    opacity: glowStyle.opacity,
                                }}
                            />

                            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800/80">
                                <div className="flex items-center space-x-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/90 shadow-sm shadow-red-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/90 shadow-sm shadow-yellow-500/50"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500/90 shadow-sm shadow-green-500/50"></div>
                                </div>
                                <div className="text-xs text-slate-400 font-mono">it run@terminal:~</div>
                                <div className="w-10"></div>
                            </div>

                            <div className="p-6 text-white">
                                <Terminal>
                                    <TypingAnimation delay={0}>$ systemctl start it-academy-core</TypingAnimation>

                                    <AnimatedSpan delay={600} className="text-slate-400 block mt-1">
                                        [✓] Initializing neural network & AI modules...
                                    </AnimatedSpan>

                                    <AnimatedSpan delay={1200} className="text-slate-400 block mt-1">
                                        [✓] Loading curriculum: Frontend, Backend, UI/UX...
                                    </AnimatedSpan>

                                    <TypingAnimation delay={1800} className="mt-2 block">$ student --enroll --all-ages</TypingAnimation>

                                    <AnimatedSpan delay={2600} className="text-cyan-400 font-medium block mt-1">
                                        Target: Kids, Teens, Students & Adults 🚀
                                    </AnimatedSpan>

                                    <TypingAnimation delay={3400} className="mt-2 block">$ cd /career/first-job</TypingAnimation>

                                    <TypingAnimation delay={4200} className="mt-1 block">$ npm run build-future</TypingAnimation>

                                    <AnimatedSpan delay={5000} className="text-emerald-400 font-medium block mt-2">
                                        ✨ Success! Ready for your first IT position.
                                    </AnimatedSpan>
                                </Terminal>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}