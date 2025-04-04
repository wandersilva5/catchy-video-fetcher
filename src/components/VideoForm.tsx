
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Youtube, Search, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";

const VideoForm = ({ onVideoInfo }: { onVideoInfo: (videoInfo: any) => void }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const isValidYoutubeUrl = (url: string) => {
    const pattern = /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})(\S*)?$/;
    return pattern.test(url);
  };

  const extractVideoId = (url: string): string | null => {
    // Handle youtu.be format
    if (url.includes("youtu.be")) {
      return url.split("/").pop() || null;
    }
    
    // Handle youtube.com format
    try {
      return new URL(url).searchParams.get("v");
    } catch (e) {
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url) {
      toast.error("Por favor, insira uma URL do YouTube");
      return;
    }

    if (!isValidYoutubeUrl(url)) {
      toast.error("URL inválida do YouTube. Insira uma URL válida do YouTube.");
      return;
    }

    setLoading(true);

    try {
      const videoId = extractVideoId(url);
      
      if (!videoId) {
        throw new Error("Não foi possível extrair o ID do vídeo");
      }
      
      // Em um app real, faríamos uma chamada à API para obter informações do vídeo
      // Simulando chamada de API com setTimeout
      setTimeout(() => {
        // Usamos a API oficial de thumbnails do YouTube
        const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        
        // Criamos URLs simuladas para o download
        const baseUrl = `https://example.com/download/${videoId}`;
        
        const mockVideoInfo = {
          id: videoId,
          title: "Vídeo do YouTube - " + videoId,
          thumbnail: thumbnailUrl,
          formats: [
            { 
              label: "1080p", 
              format: "mp4", 
              quality: "full-hd", 
              size: "120MB",
              url: `${baseUrl}?format=mp4&quality=1080p` 
            },
            { 
              label: "720p", 
              format: "mp4", 
              quality: "hd", 
              size: "45MB",
              url: `${baseUrl}?format=mp4&quality=720p` 
            },
            { 
              label: "480p", 
              format: "mp4", 
              quality: "sd", 
              size: "25MB",
              url: `${baseUrl}?format=mp4&quality=480p` 
            },
            { 
              label: "360p", 
              format: "mp4", 
              quality: "low", 
              size: "15MB",
              url: `${baseUrl}?format=mp4&quality=360p` 
            },
            { 
              label: "Audio Only", 
              format: "mp3", 
              quality: "high", 
              size: "8MB",
              url: `${baseUrl}?format=mp3&quality=high` 
            }
          ]
        };
        
        onVideoInfo(mockVideoInfo);
        setLoading(false);
      }, 1500);
    } catch (error) {
      console.error("Erro ao buscar informações do vídeo:", error);
      toast.error("Erro ao buscar informações do vídeo. Tente novamente.");
      setLoading(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto p-4 sm:p-6 md:p-8"
    >
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            <Youtube className="h-5 w-5" />
          </div>
          <Input
            type="text"
            placeholder="Cole a URL do vídeo do YouTube aqui"
            className="pl-10 pr-4 py-6 w-full rounded-xl border-2 border-muted focus:border-primary"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            disabled={loading}
          />
        </div>
        <Button 
          type="submit" 
          className="bg-gradient-primary hover:opacity-90 transition-opacity py-6 px-8 rounded-xl"
          disabled={loading}
        >
          {loading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Search className="h-5 w-5 mr-2" /> 
              <span>Buscar</span>
            </>
          )}
        </Button>
      </div>
    </form>
  );
};

export default VideoForm;
