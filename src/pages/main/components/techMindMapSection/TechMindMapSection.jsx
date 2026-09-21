import { useState } from "react";
import { Code2, Server, Smartphone, GraduationCap, Palette, Brain, Cpu, CheckCircle2 } from "lucide-react";
import logo from "../../../../assets/logo.png";

const directions = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "Клиентская часть",
    description: "Создание интерфейсов веб-сайтов и веб-приложений, с которыми взаимодействует пользователь.",
    skills: ["HTML5 / CSS3", "JavaScript (ES6+)", "React.js / Next.js", "Tailwind CSS"],
    icon: Code2,
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Серверная часть",
    description: "Разработка логики работы приложений изнутри, работа с базами данных, API и серверами.",
    skills: ["Node.js / Python", "PostgreSQL / Supabase", "RESTful API", "Git / Docker"],
    icon: Server,
  },
  {
    id: "mobile",
    title: "Mobile",
    subtitle: "Мобильные приложения",
    description: "Создание кроссплатформенных и нативных приложений для смартфонов на iOS и Android.",
    skills: ["React Native", "Flutter", "Swift / Kotlin", "Mobile UI/UX"],
    icon: Smartphone,
  },
  {
    id: "kids",
    title: "Kids",
    subtitle: "Для детей",
    description: "Увлекательное погружение в мир IT, логику и основы программирования в игровом формате.",
    skills: ["Scratch / Blockly", "Основы Python", "Создание игр", "Логика и алгоритмы"],
    icon: GraduationCap,
  },
  {
    id: "ai",
    title: "AI & Data",
    subtitle: "Искусственный интеллект",
    description: "Изучение алгоритмов машинного обучения, работы с нейросетями и анализа данных.",
    skills: ["Python для AI", "Machine Learning", "Prompt Engineering", "Работа с API нейросетей"],
    icon: Brain,
  },
  {
    id: "design",
    title: "Design",
    subtitle: "UI/UX Дизайн",
    description: "Проектирование удобных пользовательских интерфейсов и создание современного визуального стиля.",
    skills: ["Figma / FigJam", "UI/UX Методология", "Адаптивный дизайн", "Прототипирование"],
    icon: Palette,
  },
];

export default function TechMindMapLightSection() {
  const [activeId, setActiveId] = useState(null);

  const activeData = directions.find((d) => d.id === activeId);

  const getCardOpacityClass = (id) => {
    if (activeId === null) return "opacity-100 scale-100";
    if (activeId === id) return "opacity-100 scale-105 z-40 border-orange-500 shadow-xl shadow-orange-500/10";
    return "opacity-30 scale-95 blur-[0.5px] border-slate-200";
  };

  const getLineClass = (id) => {
    return `transition-all duration-300 fill-none ${
      activeId === id 
        ? "stroke-orange-500 stroke-[3] opacity-100" 
        : activeId !== null 
        ? "stroke-slate-200 stroke-[1] opacity-20" 
        : "stroke-slate-300 stroke-[1.5] opacity-70"
    }`;
  };

  return (
    <section className="relative overflow-hidden flex items-center justify-center py-16">
      
      <div className="relative max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 border border-orange-500/20">
            Наши направления
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Выберите свой путь в IT
          </h2>
          <p className="mt-2 text-base text-slate-600 max-w-xl mx-auto">
            Наведите курсор на любое направление, чтобы изучить подробности и технологии.
          </p>
        </div>

        <div className="hidden lg:relative lg:flex lg:items-center lg:justify-center lg:min-h-[580px]">
          
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" viewBox="0 0 1000 580">
            <path d="M 500 290 Q 320 120 160 110" className={getLineClass("backend")} />

            <path d="M 500 290 Q 300 290 110 290" className={getLineClass("frontend")} />

            <path d="M 500 290 Q 320 450 160 470" className={getLineClass("design")} />

            <path d="M 500 290 Q 680 120 840 110" className={getLineClass("mobile")} />

            <path d="M 500 290 Q 700 290 890 290" className={getLineClass("kids")} />

            <path d="M 500 290 Q 680 450 840 470" className={getLineClass("ai")} />
          </svg>

          <div className="absolute z-20 flex flex-col items-center justify-center pointer-events-none">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full blur-md opacity-30 animate-pulse" />
              <div className="relative w-24 h-24 rounded-full bg-white border-2 border-orange-500/40 flex items-center justify-center shadow-xl overflow-hidden p-3">
                <img src={logo} alt="IT-RUN Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          <div className="absolute z-30 pointer-events-none transition-all duration-300 flex items-center justify-center w-full">
            {activeData ? (
              <div className="bg-white/95 backdrop-blur-md border border-orange-500/30 px-6 py-5 rounded-3xl shadow-2xl max-w-sm w-full text-center animate-in fade-in zoom-in-95 duration-200">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider">{activeData.subtitle}</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">{activeData.title}</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{activeData.description}</p>
                
                <div className="mt-4 pt-3 border-t border-slate-100 text-left">
                  <p className="text-xs font-semibold text-slate-900 mb-2">Что нужно изучить:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {activeData.skills.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 size={13} className="text-orange-500 flex-shrink-0" />
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="opacity-0 transition-opacity duration-300">
              </div>
            )}
          </div>

          
          <div 
            onMouseEnter={() => setActiveId("backend")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute top-[10%] left-[6%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("backend")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Server size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">Backend</h3>
                <p className="text-xs text-slate-500 truncate">Серверная часть</p>
              </div>
            </div>
          </div>

          <div 
            onMouseEnter={() => setActiveId("frontend")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute top-[45%] left-[2%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("frontend")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Code2 size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">Frontend</h3>
                <p className="text-xs text-slate-500 truncate">Клиентская часть</p>
              </div>
            </div>
          </div>

          <div 
            onMouseEnter={() => setActiveId("design")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute bottom-[10%] left-[6%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("design")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Palette size={22} />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">Design</h3>
                <p className="text-xs text-slate-500 truncate">UI/UX и Графика</p>
              </div>
            </div>
          </div>

          <div 
            onMouseEnter={() => setActiveId("mobile")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute top-[10%] right-[6%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("mobile")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="order-2 text-left overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">Mobile</h3>
                <p className="text-xs text-slate-500 truncate">Приложения</p>
              </div>
              <div className="order-1 w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Smartphone size={22} />
              </div>
            </div>
          </div>

          <div 
            onMouseEnter={() => setActiveId("kids")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute top-[45%] right-[2%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("kids")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="order-2 text-left overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">Kids</h3>
                <p className="text-xs text-slate-500 truncate">Для детей</p>
              </div>
              <div className="order-1 w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <GraduationCap size={22} />
              </div>
            </div>
          </div>

          <div 
            onMouseEnter={() => setActiveId("ai")}
            onMouseLeave={() => setActiveId(null)}
            className={`absolute bottom-[10%] right-[6%] cursor-pointer transition-all duration-300 ${getCardOpacityClass("ai")}`}
          >
            <div className="flex items-center gap-4 bg-white border border-slate-200 px-5 py-3.5 rounded-2xl shadow-lg w-56">
              <div className="order-2 text-left overflow-hidden">
                <h3 className="text-slate-900 font-semibold text-base truncate">AI & Data</h3>
                <p className="text-xs text-slate-500 truncate">Нейросети</p>
              </div>
              <div className="order-1 w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                <Brain size={22} />
              </div>
            </div>
          </div>

        </div>

        <div className="lg:hidden flex flex-col items-center gap-8">
          <div className="relative flex flex-col items-center justify-center mb-2">
            <div className="w-20 h-20 rounded-full bg-white border-2 border-orange-500 flex items-center justify-center shadow-md p-2">
              <img src={logo} alt="IT-RUN Logo" className="w-full h-full object-contain" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            {directions.map((item) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={item.id}
                  className="bg-white border border-slate-200 p-5 rounded-2xl shadow-sm hover:border-orange-500/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 flex items-center justify-center flex-shrink-0">
                      <IconComponent size={22} />
                    </div>
                    <div>
                      <h3 className="text-slate-900 font-semibold text-base">{item.title}</h3>
                      <p className="text-xs text-slate-500">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 mb-3">{item.description}</p>
                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-[11px] font-semibold text-slate-900 mb-1.5">Изучаем:</p>
                    <div className="flex flex-wrap gap-1">
                      {item.skills.map((skill, i) => (
                        <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}