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
  { id: 1, videoUrl: v1 },
  { id: 2, videoUrl: v2 },
  { id: 3, videoUrl: v3 },
  { id: 4, videoUrl: v4 },
  { id: 5, videoUrl: v5 },
  { id: 6, videoUrl: v6 },
  { id: 7, videoUrl: v7 },
  { id: 8, videoUrl: v8 },
  { id: 9, videoUrl: v9 },
  { id: 10, videoUrl: v10 },
  { id: 11, videoUrl: v11 },
  { id: 12, videoUrl: v12 },
  { id: 13, videoUrl: v13 },
  { id: 14, videoUrl: v14 },
];

function VideoCard({ item, onClick }) {
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
      className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-md hover:shadow-2xl hover:border-[#ff9735] transition-all duration-300 cursor-pointer aspect-[4/2] flex items-center justify-center hover:z-50 hover:scale-105"
    >
      <video
        ref={videoRef}
        src={`${item.videoUrl}#t=0.001`}
        className="w-full h-full object-cover"
        preload="metadata"
        muted
        loop
        playsInline
      />
      
      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 text-slate-950 flex items-center justify-center shadow-lg group-hover:bg-[#ff9735] group-hover:scale-110 transition-all duration-300">
          <Play size={18} className="translate-x-0.5 fill-current" />
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
    <section className="relative z-10 py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {mainVideo && (
            <div className="lg:col-span-7">
              <VideoCard item={mainVideo} onClick={() => setActiveVideo(mainVideo)} />
            </div>
          )}

          <div className="lg:col-span-5 grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto p-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {sideVideos.map((item) => (
              <VideoCard key={item.id} item={item} onClick={() => setActiveVideo(item)} />
            ))}
          </div>

        </div>

      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            
            <div className="absolute top-3 right-3 z-20 flex items-center gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-md"
              >
                {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              </button>
              <button
                onClick={() => setActiveVideo(null)}
                className="w-8 h-8 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors backdrop-blur-md"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video
                src={activeVideo.videoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted={isMuted}
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}