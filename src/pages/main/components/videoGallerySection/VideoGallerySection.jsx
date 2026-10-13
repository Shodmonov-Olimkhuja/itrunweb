import { useState, useRef } from "react";
import { Play, X, Volume2, VolumeX } from "lucide-react";

import v1 from "../../../../../public/main/videos/video1.mp4";
import v2 from "../../../../../public/main/videos/video2.mp4";
import v3 from "../../../../../public/main/videos/video3.mp4";
import v4 from "../../../../../public/main/videos/video4.mp4";
import v5 from "../../../../../public/main/videos/video5.mp4";
import v6 from "../../../../../public/main/videos/video6.mp4";
import v7 from "../../../../../public/main/videos/video7.mp4";
import v8 from "../../../../../public/main/videos/video8.mp4";
import v9 from "../../../../../public/main/videos/video9.mp4";
import v10 from "../../../../../public/main/videos/video10.mp4";
import v11 from "../../../../../public/main/videos/video11.mp4";
import v12 from "../../../../../public/main/videos/video12.mp4";
import v13 from "../../../../../public/main/videos/video13.mp4";
import v14 from "../../../../../public/main/videos/video14.mp4";

const videos = [
  { id: 1, videoUrl: v1, title: "История 1" },
  { id: 2, videoUrl: v2, title: "История 2" },
  { id: 3, videoUrl: v3, title: "История 3" },
  { id: 4, videoUrl: v4, title: "История 4" },
  { id: 5, videoUrl: v5, title: "История 5" },
  { id: 6, videoUrl: v6, title: "История 6" },
  { id: 7, videoUrl: v7, title: "История 7" },
  { id: 8, videoUrl: v8, title: "История 8" },
  { id: 9, videoUrl: v9, title: "История 9" },
  { id: 10, videoUrl: v10, title: "История 10" },
  { id: 11, videoUrl: v11, title: "История 11" },
  { id: 12, videoUrl: v12, title: "История 12" },
  { id: 13, videoUrl: v13, title: "История 13" },
  { id: 14, videoUrl: v14, title: "История 14" },
];

function StoryCard({ item, onClick, isMain = false }) {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer flex-shrink-0 ${
        isMain ? "w-full max-w-[260px] aspect-[4/5] mx-auto" : "w-32 sm:w-36 aspect-[4/5]"
      }`}
    >
      {/* Градиентная рамка в стиле Instagram при наведении */}
      <div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-tr from-amber-500 via-orange-500 to-pink-500 opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="w-full h-full bg-slate-950 rounded-[14px]" />
      </div>

      {/* Видео-обложка */}
      <video
        ref={videoRef}
        src={`${item.videoUrl}#t=0.001`}
        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        preload="metadata"
        muted
        loop
        playsInline
      />

      {/* Затемнение и кнопка Play / Название */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-transparent to-slate-950/80 flex flex-col justify-between p-3">
        {/* Верхняя полоска (индикатор сторис) */}
        <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
          <div className="h-full bg-white w-1/3 rounded-full" />
        </div>

        {/* Нижняя часть с иконкой и текстом */}
        <div className="flex items-center justify-between">
          <span className="text-white text-xs font-medium truncate drop-shadow">
            {item.title}
          </span>
          <div className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center group-hover:bg-[#ff9735] group-hover:scale-110 transition-all duration-300">
            <Play size={12} className="translate-x-0.5 fill-current" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function VideoGallerySection() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isMuted, setIsMuted] = useState(false);

  const mainVideo = videos[0];
  const sideVideos = videos.slice(1);

  return (
    <section className="relative z-10  bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Основной макет */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          
          {/* Главная сторис (слева) */}
          {mainVideo && (
            <div className="w-full lg:w-1/4 flex justify-center">
              <StoryCard item={mainVideo} onClick={() => setActiveVideo(mainVideo)} isMain={true} />
            </div>
          )}

          {/* Лента остальных сторис (горизонтальный скролл без полосы прокрутки) */}
          <div className="w-full lg:w-3/4">
            <div className="flex gap-3 overflow-x-auto pb-4 pt-2 px-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {sideVideos.map((item) => (
                <StoryCard key={item.id} item={item} onClick={() => setActiveVideo(item)} />
              ))}
            </div>
          </div>

        </div>

      </div>

      {/* Компактное модальное окно просмотра сторис */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-[260px] aspect-[4/5] bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center">
            
            {/* Кнопки управления сверху */}
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
              >
                {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-black/40 hover:bg-black/60 flex items-center justify-center text-white transition-colors backdrop-blur-md border border-white/10"
              >
                <X size={16} />
              </button>
            </div>

            {/* Само видео в модалке */}
            <video
              src={activeVideo.videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted={isMuted}
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}