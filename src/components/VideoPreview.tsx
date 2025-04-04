
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface VideoFormat {
  label: string;
  format: string;
  quality: string;
  size: string;
  url?: string; // URL para download
}

interface VideoInfo {
  id: string;
  title: string;
  thumbnail: string;
  formats: VideoFormat[];
}

const VideoPreview = ({ videoInfo }: { videoInfo: VideoInfo }) => {
  const [selectedFormat, setSelectedFormat] = useState<string>(videoInfo.formats[0].label);
  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Reset progress when changing format
  useEffect(() => {
    setProgress(0);
  }, [selectedFormat]);

  const handleDownload = () => {
    setDownloading(true);
    setProgress(0);
    
    // Mostra toast informando que o download está começando
    toast.info("Preparando seu download...");
    
    const format = videoInfo.formats.find(f => f.label === selectedFormat);
    
    if (!format || !format.url) {
      toast.error("Link de download não disponível para este formato");
      setDownloading(false);
      return;
    }
    
    // Simula progresso do download
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 95) {
          clearInterval(progressInterval);
          return prev;
        }
        return prev + 5;
      });
    }, 200);
    
    // Cria um elemento <a> para fazer o download do arquivo
    const fileName = `${videoInfo.title.replace(/[^\w\s]/gi, '')}_${format.label}.${format.format}`;
    const link = document.createElement('a');
    link.href = format.url;
    link.setAttribute('download', fileName);
    link.setAttribute('target', '_blank');
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Inicia o download
    link.click();
    
    // Remove o elemento quando o download for iniciado
    document.body.removeChild(link);
    
    // Finaliza o download após um tempo
    setTimeout(() => {
      clearInterval(progressInterval);
      setProgress(100);
      
      // Mostra toast de sucesso
      toast.success("Download iniciado com sucesso!");
      setDownloading(false);
    }, 2000);
  };
  
  const format = videoInfo.formats.find(f => f.label === selectedFormat);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 animate-in" id="download-section">
      <Card className="border-2 shadow-lg overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle className="text-xl sm:text-2xl line-clamp-2">{videoInfo.title}</CardTitle>
          <CardDescription>Selecione o formato e qualidade para download</CardDescription>
        </CardHeader>
        
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 min-w-0">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
                <img 
                  src={videoInfo.thumbnail} 
                  alt={videoInfo.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://img.youtube.com/vi/${videoInfo.id}/0.jpg`;
                  }}
                />
              </div>
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Formato e Qualidade</label>
                <Select
                  value={selectedFormat}
                  onValueChange={setSelectedFormat}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione um formato" />
                  </SelectTrigger>
                  <SelectContent>
                    {videoInfo.formats.map((format) => (
                      <SelectItem key={format.label} value={format.label}>
                        {format.label} ({format.format.toUpperCase()}) - {format.size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="rounded-lg border-2 border-dashed p-4 bg-accent/50">
                <h4 className="font-medium mb-1">Informações do Download</h4>
                <ul className="space-y-1 text-sm">
                  <li><span className="font-medium">Formato:</span> {format?.format.toUpperCase()}</li>
                  <li><span className="font-medium">Qualidade:</span> {format?.label}</li>
                  <li><span className="font-medium">Tamanho estimado:</span> {format?.size}</li>
                </ul>
              </div>
              
              {progress > 0 && (
                <div className="space-y-2">
                  <Progress value={progress} className="h-2" />
                  <p className="text-xs text-center">{progress}% concluído</p>
                </div>
              )}
              
              <Button 
                onClick={handleDownload}
                className="w-full bg-gradient-primary hover:opacity-90 transition-opacity py-6"
                disabled={downloading}
              >
                {downloading ? (
                  <span className="flex items-center">
                    Preparando download...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Download className="h-5 w-5" />
                    Download Agora
                  </span>
                )}
              </Button>
              
              <p className="text-xs text-muted-foreground text-center">
                Ao clicar em Download, você concorda com nossos termos de uso.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPreview;
