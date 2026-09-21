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

const reviews = [
  { img: l1 }, { img: l2 }, { img: l3 }, { img: l4 },
  { img: l5 }, { img: l6 }, { img: l7 }, { img: l8 },
  { img: l9 }, { img: l10 }, { img: l11 }, { img: l12 },
  { img: l13 }, { img: l14 }, { img: l15 }, { img: l16 }, { img: l17 }
];

const midIndex = Math.ceil(reviews.length / 2);
const firstRow = reviews.slice(0, midIndex);
const secondRow = reviews.slice(midIndex);

const ImageCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative w-72 sm:w-80 h-40 cursor-pointer overflow-hidden rounded-2xl  transition-all duration-300",
        "border-slate-800/80  hover:border-slate-700 shadow-xl backdrop-blur-md group"
      )}
    >
      <div className="w-full h-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
        <img 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          alt="Gallery item" 
          src={img} 
        />
      </div>
    </figure>
  );
};

export function ThirdSection() {
  return (
    <section className="relative">
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-2">
        
        <Marquee pauseOnHover className="[--duration:45s]">
          {firstRow.map((item, index) => (
            <ImageCard key={`row1-${index}`} {...item} />
          ))}
        </Marquee>

        <Marquee reverse  pauseOnHover className="[--duration:45s]">
          {secondRow.map((item, index) => (
            <ImageCard key={`row2-${index}`} {...item} />
          ))}
        </Marquee>

      </div>
    </section>
  );
}