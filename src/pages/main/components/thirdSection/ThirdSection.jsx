import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import { Marquee } from "./components/Marquee";

import l1 from "../../../../../public/main/1.png";
import l2 from "../../../../../public/main/2.png";
import l3 from "../../../../../public/main/3.png";
import l4 from "../../../../../public/main/4.png";
import l5 from "../../../../../public/main/5.png";
import l6 from "../../../../../public/main/6.png";
import l7 from "../../../../../public/main/7.png";
import l8 from "../../../../../public/main/8.png";
import l9 from "../../../../../public/main/9.png";
import l10 from "../../../../../public/main/10.png";
import l11 from "../../../../../public/main/11.png";
import l12 from "../../../../../public/main/12.png";
import l13 from "../../../../../public/main/13.png";
import l14 from "../../../../../public/main/14.png";
import l15 from "../../../../../public/main/15.png";
import l16 from "../../../../../public/main/16.png";
import l17 from "../../../../../public/main/17.png";

import l18 from "../../../../../public/main/18.png";
import l19 from "../../../../../public/main/19.png";
import l20 from "../../../../../public/main/20.png";
import l21 from "../../../../../public/main/21.png";
import l22 from "../../../../../public/main/22.png";
import l23 from "../../../../../public/main/23.png";
import l24 from "../../../../../public/main/24.png";
import l25 from "../../../../../public/main/25.png";
import l26 from "../../../../../public/main/26.png";
import l27 from "../../../../../public/main/27.png";
import l28 from "../../../../../public/main/28.png";
import l29 from "../../../../../public/main/29.png";
import l30 from "../../../../../public/main/30.png";
import l31 from "../../../../../public/main/31.png";
import l32 from "../../../../../public/main/32.png";
import l33 from "../../../../../public/main/33.png";
import l34 from "../../../../../public/main/34.png";
import l35 from "../../../../../public/main/35.png";
import l36 from "../../../../../public/main/36.png";
import l37 from "../../../../../public/main/37.png";

import l38 from "../../../../../public/main/38.jpg";
import l39 from "../../../../../public/main/39.jpg";
import l40 from "../../../../../public/main/40.jpg";
import l41 from "../../../../../public/main/41.jpg";
import l42 from "../../../../../public/main/42.jpg";
import l43 from "../../../../../public/main/43.jpg";
import l44 from "../../../../../public/main/44.jpg";

const reviews = [
  { img: l1 },
  { img: l2 },
  { img: l3 },
  { img: l4 },
  { img: l5 },
  { img: l6 },
  { img: l7 },
  { img: l8 },
  { img: l9 },
  { img: l10 },
  { img: l11 },
  { img: l12 },
  { img: l13 },
  { img: l14 },
  { img: l15 },
  { img: l16 },
  { img: l17 },
  { img: l18 },
  { img: l19 },
  { img: l20 },
  { img: l21 },
  { img: l22 },
  { img: l23 },
  { img: l24 },
  { img: l25 },
  { img: l26 },
  { img: l27 },
  { img: l28 },
  { img: l29 },
  { img: l30 },
  { img: l31 },
  { img: l32 },
  { img: l33 },
  { img: l35 },
  { img: l36 },
  { img: l37 },
  { img: l38 },
  { img: l39 },
  { img: l40 },
  { img: l41 },
  { img: l42 },
  { img: l43 },
  { img: l44 },
];

const midIndex = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, midIndex);
const secondRow = reviews.slice(midIndex);

function ImageCard({ img, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Открыть фотографию"
      className={cn(
        "relative block h-40 w-72 shrink-0 cursor-pointer",
        "overflow-hidden rounded-2xl",
        "border border-slate-800/80 hover:border-slate-600",
        "shadow-xl transition-all duration-300 group"
      )}
    >
      <img
        src={img}
        alt="Жизнь IT-RUN"
        loading="lazy"
        draggable="false"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
    </button>
  );
}

export function ThirdSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const isOpen = activeIndex !== null;
  const activeImage = isOpen ? reviews[activeIndex].img : null;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();

        setActiveIndex((prev) => (prev + 1) % reviews.length);
      }

      if (event.key === "ArrowLeft") {
        event.preventDefault();

        setActiveIndex(
          (prev) => (prev - 1 + reviews.length) % reviews.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  const [touchStart, setTouchStart] = useState(null);

  const handleTouchStart = (event) => {
    setTouchStart(event.touches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;

    const touchEnd = event.changedTouches[0].clientX;
    const difference = touchStart - touchEnd;

    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    setTouchStart(null);
  };

  return (
    <>
      <section className="relative">
        <div className="relative flex w-full flex-col items-center justify-center gap-2 overflow-hidden">
          <Marquee pauseOnHover className="[--duration:80s]">
            {firstRow.map((item, index) => (
              <ImageCard
                key={`row1-${index}`}
                img={item.img}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </Marquee>

          <Marquee
            reverse
            pauseOnHover
            className="[--duration:65s]"
          >
            {secondRow.map((item, index) => (
              <ImageCard
                key={`row2-${index}`}
                img={item.img}
                onClick={() => setActiveIndex(midIndex + index)}
              />
            ))}
          </Marquee>
        </div>
      </section>

      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="dialog"
          aria-modal="true"
          aria-label="Галерея фотографий IT-RUN"
        >
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            aria-label="Закрыть галерею"
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20"
          >
            &times;
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              prevImage();
            }}
            aria-label="Предыдущая фотография"
            className="absolute left-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:left-6 sm:h-12 sm:w-12"
          >
            &#8249;
          </button>

          <div
            key={activeIndex}
            className="flex max-h-[85vh] max-w-[85vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage}
              alt={`Жизнь IT-RUN — фотография ${activeIndex + 1}`}
              draggable="false"
              className="max-h-[78vh] max-w-full select-none rounded-lg object-contain"
            />

            <p className="mt-4 text-sm text-white/70">
              {activeIndex + 1} / {reviews.length}
            </p>
          </div>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              nextImage();
            }}
            aria-label="Следующая фотография"
            className="absolute right-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-3xl text-white transition hover:bg-white/20 sm:right-6 sm:h-12 sm:w-12"
          >
            &#8250;
          </button>
        </div>
      )}
    </>
  );
}
