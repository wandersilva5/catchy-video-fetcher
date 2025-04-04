
import { useState } from "react";
import Header from "@/components/Header";
import VideoForm from "@/components/VideoForm";
import VideoPreview from "@/components/VideoPreview";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  const [videoInfo, setVideoInfo] = useState<any>(null);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-white to-accent/30 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto">
            Baixe vídeos do <span className="gradient-text">YouTube</span> facilmente
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
            Ferramenta simples e rápida para baixar seus vídeos favoritos do YouTube em vários formatos e qualidades.
          </p>
          
          <VideoForm onVideoInfo={setVideoInfo} />
        </section>
        
        {videoInfo && <VideoPreview videoInfo={videoInfo} />}
        
        <Features />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
