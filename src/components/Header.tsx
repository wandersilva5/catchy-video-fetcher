
import { Download, Youtube } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Youtube className="h-8 w-8 text-red-600" />
          <h1 className="font-bold text-xl sm:text-2xl gradient-text">YTDownloader</h1>
        </div>
        
        <div className="flex items-center gap-2">
          <a 
            href="#download-section" 
            className="bg-gradient-primary rounded-full px-4 py-2 text-white font-medium flex items-center gap-2 transition-transform hover:scale-105"
          >
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Download agora</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
