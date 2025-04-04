
import { ArrowDown } from "lucide-react";

const Features = () => {
  return (
    <div className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-3 gradient-text">
            Baixe seus vídeos favoritos em segundos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nossa ferramenta permite baixar vídeos do YouTube em diferentes formatos e qualidades.
          </p>
          <div className="mt-8 flex justify-center">
            <ArrowDown className="h-10 w-10 text-primary animate-bounce" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl border-2 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-accent inline-flex p-3 rounded-full">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Fácil de usar',
    description: 'Basta colar a URL do vídeo do YouTube e escolher o formato desejado para iniciar o download.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 13v-1h6v1" />
        <path d="M11 18.5V13" />
        <path d="M14 15.5L12 17l-2-1.5" />
      </svg>
    ),
  },
  {
    title: 'Múltiplos formatos',
    description: 'Escolha entre diferentes formatos e qualidades, incluindo MP4 de alta definição e MP3 para áudio.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="10 8 16 12 10 16 10 8" />
      </svg>
    ),
  },
  {
    title: 'Download rápido',
    description: 'Nossos servidores otimizados garantem downloads rápidos sem comprometer a qualidade.',
    icon: (props: any) => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M13 2v8h8" />
        <path d="M21 12A9 9 0 1 1 6.46 4.06" />
      </svg>
    ),
  },
];

export default Features;
