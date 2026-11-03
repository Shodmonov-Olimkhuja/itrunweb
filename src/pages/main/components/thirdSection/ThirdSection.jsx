import { useEffect, useState } from "react";
import { cn } from "../../../../lib/utils";
import { Marquee } from "./components/Marquee";

const l1 = "/main/1.png";
const l2 = "/main/2.png";
const l3 = "/main/3.png";
const l4 = "/main/4.png";
const l5 = "/main/5.png";
const l6 = "/main/6.png";
const l7 = "/main/7.png";
const l8 = "/main/8.png";
const l9 = "/main/9.png";
const l10 = "/main/10.png";
const l11 = "/main/11.png";
const l12 = "/main/12.png";
const l13 = "/main/13.png";
const l14 = "/main/14.png";
const l15 = "/main/15.png";
const l16 = "/main/16.png";
const l17 = "/main/17.png";
const l18 = "/main/18.png";
const l19 = "/main/19.png";
const l20 = "/main/20.png";
const l21 = "/main/21.png";
const l22 = "/main/22.png";
const l23 = "/main/23.png";
const l24 = "/main/24.png";
const l25 = "/main/25.png";
const l26 = "/main/26.png";
const l27 = "/main/27.png";
const l28 = "/main/28.png";
const l29 = "/main/29.png";
const l30 = "/main/30.png";
const l31 = "/main/31.png";
const l32 = "/main/32.png";
const l33 = "/main/33.png";
const l34 = "/main/34.png";
const l35 = "/main/35.png";
const l36 = "/main/36.png";
const l37 = "/main/37.png";
const l38 = "/main/38.jpg";
const l39 = "/main/39.jpg";
const l40 = "/main/40.jpg";
const l41 = "/main/41.jpg";
const l42 = "/main/42.jpg";
const l43 = "/main/43.jpg";
const l44 = "/main/44.jpg";

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
