import React, { useEffect, useState } from "react";

export function ZigzagScrollbar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = window.scrollY;
      if (totalHeight > 0) {
        setScrollProgress(currentProgress / totalHeight);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathLength = 520;

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 pointer-events-none hidden lg:block">
      <div className="relative w-[45px] h-[480px]">
        
        {/* SVG Зигзаг линия */}
        <svg 
          width="45" 
          height="480" 
          viewBox="0 0 45 480" 
          fill="none" 
          className="absolute right-0 drop-shadow-[0_0_10px_rgba(255,151,53,0.3)]"
        >
          {/* Фоновый зигзаг */}
          <path
            d="M22 0 L38 80 L6 160 L38 240 L6 320 L38 400 L22 480"
            stroke="#1e293b"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          
          {/* Заполняющийся зигзаг цветом #ff9735 */}
          <path
            d="M22 0 L38 80 L6 160 L38 240 L6 320 L38 400 L22 480"
            stroke="#ff9735"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={pathLength}
            strokeDashoffset={pathLength * (1 - scrollProgress)}
            style={{ transition: "stroke-dashoffset 0.1s ease-out" }}
          />
        </svg>

      </div>
    </div>
  );
}