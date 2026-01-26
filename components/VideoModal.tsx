
import React, { useEffect } from 'react';

interface VideoModalProps {
  videoUrl: string;
  onClose: () => void;
}

const VideoModal: React.FC<VideoModalProps> = ({ videoUrl, onClose }) => {
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Helper to convert YouTube watch URLs to embed URLs
  const getEmbedUrl = (url: string) => {
    if (url.includes('youtube.com/watch?v=')) {
      const id = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    if (url.includes('youtube.com/shorts/')) {
      const id = url.split('shorts/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1`;
    }
    return url;
  };

  const isIframeCompatible = videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be') || videoUrl.includes('vimeo.com');
  const embedUrl = getEmbedUrl(videoUrl);

  return (
    <div className="fixed inset-0 z-[11000] flex items-center justify-center p-4 md:p-10">
      <div 
        className="fixed inset-0 bg-[#3B3E81]/90 backdrop-blur-md transition-opacity" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[32px] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 z-[11001]">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[11002] w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all transform hover:rotate-90"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {isIframeCompatible ? (
          <iframe
            src={embedUrl}
            className="w-full h-full border-none"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Product Video"
          />
        ) : (
          <video 
            src={videoUrl} 
            className="w-full h-full object-contain" 
            controls 
            autoPlay
          />
        )}
      </div>
    </div>
  );
};

export default VideoModal;
