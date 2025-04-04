
const Footer = () => {
  return (
    <footer className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} YTDownloader. Todos os direitos reservados.
          </p>
        </div>
        
        <div className="flex space-x-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Termos de Uso
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Política de Privacidade
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
            Contato
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
