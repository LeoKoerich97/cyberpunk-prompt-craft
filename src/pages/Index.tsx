
import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail, ArrowRight } from 'lucide-react';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-inter">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/a3d3d055-859b-4c30-9e23-a8cb521cdc48.png')` 
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="font-vt323 text-cyber-neon text-lg md:text-xl mb-4 animate-glow">
            // Eu sou Leo Koerich
          </p>
          <h1 className="font-vt323 text-cyber-neon text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight drop-shadow-neon-lg animate-glow">
            Marketing Digital<br />
            e Tráfego Pago
          </h1>
          <button 
            onClick={scrollToContact}
            className="bg-cyber-neon text-cyber-bg px-8 py-4 rounded-full text-lg font-semibold hover:brightness-110 hover:scale-105 transition-all duration-300 animate-float"
          >
            Vamos Conversar
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-12 text-center drop-shadow-neon">
          Sobre mim
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-4">
            <p className="text-cyber-text leading-relaxed">
              Com grande dedicação e paixão, trabalho com marketing e tráfego pago. Tenho uma empresa MEI e sou eu mesmo quem presta todos os serviços. Acredito firmemente no poder do marketing digital para transformar negócios. Minha experiência me permite criar estratégias eficazes que impulsionam o crescimento e a visibilidade das empresas.
            </p>
            <p className="text-cyber-text leading-relaxed">
              A cada campanha, busco entender profundamente as necessidades dos meus clientes, garantindo resultados que superam as expectativas.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-cyber-text leading-relaxed">
              A gestão de tráfego pago é uma arte que domino com precisão, otimizando investimentos e maximizando retornos. Minha empresa é um reflexo do meu compromisso com a excelência e a inovação.
            </p>
            <p className="text-cyber-text leading-relaxed">
              Cada projeto é uma oportunidade de aprender e evoluir, sempre com o objetivo de entregar o melhor. A satisfação dos meus clientes é a minha maior recompensa, e é isso que me motiva a continuar aprimorando minhas habilidades.
            </p>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-2 drop-shadow-neon">1+</div>
            <div className="text-sm text-gray-400">Ano de experiência</div>
          </div>
          <div className="text-center">
            <div className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-2 drop-shadow-neon">17+</div>
            <div className="text-sm text-gray-400">Empresas Atendidas</div>
          </div>
          <div className="text-center">
            <div className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-2 drop-shadow-neon">100%</div>
            <div className="text-sm text-gray-400">Clientes Satisfeitos</div>
          </div>
          <div className="text-center">
            <div className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-2 drop-shadow-neon">10+</div>
            <div className="text-sm text-gray-400">Soft Skill's</div>
          </div>
        </div>

        {/* Community Badge */}
        <div className="text-center">
          <img 
            src="/lovable-uploads/6e6550ff-7eed-4600-8b0d-3b6184f7e947.png" 
            alt="Comunidade Sobral" 
            className="w-16 h-16 mx-auto mb-4"
          />
          <p className="text-cyber-text">Membro da Comunidade Sobral de Tráfego</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 max-w-6xl mx-auto">
        <h2 className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-4 text-center drop-shadow-neon">
          Serviços
        </h2>
        <p className="text-center text-gray-400 mb-12">As principais Skill's</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            title="Google Tag Manager e API de Conversão"
            description="Desenvolvendo a melhor estrutura para mensuração e aumento de qualidade de leads."
          />
          <ServiceCard 
            title="Meta Ads"
            description="Desenvolvimento e otimização de campanhas para o melhor ROI possível, mais de R$ 200.000,00 administrados."
          />
          <ServiceCard 
            title="Google Ads e GA4"
            description="Vasta experiência em desenvolver e otimizar campanhas na maioria das categorias do Google, como Display, YouTube, Demand Gen e mais..."
          />
          <ServiceCard 
            title="CRM e Integrações"
            description="Especialista em RD Station Marketing, assim como resolução de problemas de integrações"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-12 drop-shadow-neon">
          Contato
        </h2>
        
        <div className="flex flex-col space-y-6 items-center">
          <a 
            href="https://wa.me/5547988892838" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-4 bg-cyber-card border border-gray-700 p-6 rounded-lg hover:border-cyber-neon transition-all duration-300 hover:-translate-y-1 w-full max-w-md"
          >
            <MessageCircle className="text-cyber-neon w-8 h-8" />
            <div className="text-left">
              <div className="text-cyber-neon font-semibold">WhatsApp</div>
              <div className="text-cyber-text">+55 47 98889-2838</div>
            </div>
          </a>
          
          <a 
            href="mailto:Leonardo.koerich@hotmail.com"
            className="flex items-center space-x-4 bg-cyber-card border border-gray-700 p-6 rounded-lg hover:border-cyber-neon transition-all duration-300 hover:-translate-y-1 w-full max-w-md"
          >
            <Mail className="text-cyber-neon w-8 h-8" />
            <div className="text-left">
              <div className="text-cyber-neon font-semibold">Email</div>
              <div className="text-cyber-text">Leonardo.koerich@hotmail.com</div>
            </div>
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5547988892838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-4 left-4 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-cyber-card border border-gray-700 hover:border-cyber-neon text-cyber-neon p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

const ServiceCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-cyber-card border border-gray-700 rounded-lg p-6 hover:border-cyber-neon hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-cyber-neon rounded-full p-2 flex-shrink-0">
          <ArrowRight className="w-4 h-4 text-cyber-bg" />
        </div>
        <div>
          <h3 className="font-vt323 text-cyber-text text-xl mb-2">{title}</h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
