
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white via-white to-accent/30">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <Youtube className="h-16 w-16 text-red-600" />
        </div>
        <h1 className="text-5xl font-bold mb-4 gradient-text">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <Button 
          asChild
          className="bg-gradient-primary hover:opacity-90 transition-opacity"
          size="lg"
        >
          <a href="/">Voltar para a Página Inicial</a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
