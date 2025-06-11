
import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail, ArrowRight, Target, TrendingUp, Users, Zap } from 'lucide-react';

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
        <div className="absolute inset-0 bg-black/75" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <p className="font-vt323 text-cyber-neon text-xl md:text-2xl mb-6 animate-glow">
            // Especialista em Performance Digital
          </p>
          <h1 className="font-vt323 text-cyber-neon text-5xl md:text-7xl lg:text-9xl mb-8 leading-tight drop-shadow-neon-lg animate-glow">
            LEO KOERICH
          </h1>
          <p className="font-vt323 text-cyber-text text-2xl md:text-3xl mb-10">
            Marketing Digital & Tráfego Pago
          </p>
          <button 
            onClick={scrollToContact}
            className="bg-cyber-neon text-cyber-bg px-10 py-5 rounded-full text-xl font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 animate-float shadow-lg"
          >
            Transformar Meu Negócio
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="font-vt323 text-cyber-neon text-5xl md:text-6xl mb-6 text-center drop-shadow-neon">
          Quem é Leo Koerich
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
          Transformando negócios através de estratégias digitais de alta performance
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-cyber-neon transition-all duration-300">
              <h3 className="font-vt323 text-cyber-neon text-2xl mb-4">Minha Missão</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Trabalho com dedicação e paixão no universo do marketing digital e tráfego pago. Como MEI, presto todos os serviços pessoalmente, garantindo total controle de qualidade e proximidade com cada cliente.
              </p>
            </div>
            <div className="bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-cyber-neon transition-all duration-300">
              <h3 className="font-vt323 text-cyber-neon text-2xl mb-4">Metodologia</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Cada campanha é desenvolvida com análise profunda das necessidades do cliente, criando estratégias personalizadas que superam expectativas e geram resultados mensuráveis.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-cyber-neon transition-all duration-300">
              <h3 className="font-vt323 text-cyber-neon text-2xl mb-4">Expertise</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Domino a arte da gestão de tráfego pago com precisão, otimizando investimentos e maximizando retornos. Minha empresa reflete meu compromisso com excelência e inovação.
              </p>
            </div>
            <div className="bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-cyber-neon transition-all duration-300">
              <h3 className="font-vt323 text-cyber-neon text-2xl mb-4">Filosofia</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Cada projeto é uma oportunidade de evoluir. A satisfação dos clientes é minha maior recompensa e me motiva a continuar aprimorando no dinâmico mundo do marketing digital.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Metrics */}
        <div className="text-center mb-12">
          <h3 className="font-vt323 text-cyber-neon text-3xl mb-8">Resultados Comprovados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard 
              icon={<TrendingUp className="w-8 h-8" />}
              number="1+"
              label="Ano de Experiência"
              sublabel="Em crescimento constante"
            />
            <MetricCard 
              icon={<Users className="w-8 h-8" />}
              number="17+"
              label="Empresas Atendidas"
              sublabel="Diversos segmentos"
            />
            <MetricCard 
              icon={<Target className="w-8 h-8" />}
              number="100%"
              label="Clientes Satisfeitos"
              sublabel="Resultados garantidos"
            />
            <MetricCard 
              icon={<Zap className="w-8 h-8" />}
              number="10+"
              label="Competências"
              sublabel="Skills especializadas"
            />
          </div>
        </div>

        {/* Community Badge */}
        <div className="text-center bg-cyber-card border border-gray-700 rounded-lg p-8 max-w-md mx-auto hover:border-cyber-neon transition-all duration-300">
          <img 
            src="/lovable-uploads/6e6550ff-7eed-4600-8b0d-3b6184f7e947.png" 
            alt="Comunidade Sobral" 
            className="w-20 h-20 mx-auto mb-4"
          />
          <h4 className="font-vt323 text-cyber-neon text-xl mb-2">Membro Ativo</h4>
          <p className="text-cyber-text">Comunidade Sobral de Tráfego</p>
          <p className="text-gray-400 text-sm mt-2">Networking e aprendizado contínuo</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <h2 className="font-vt323 text-cyber-neon text-5xl md:text-6xl mb-6 text-center drop-shadow-neon">
          Serviços Especializados
        </h2>
        <p className="text-center text-gray-400 text-lg mb-16">
          Soluções completas para maximizar seu ROI digital
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon="🎯"
            title="Google Tag Manager & API de Conversão"
            description="Estrutura avançada de mensuração para aumentar a qualidade dos leads e otimizar a performance das campanhas com dados precisos."
            highlight="Rastreamento Avançado"
          />
          <ServiceCard 
            icon="📱"
            title="Meta Ads (Facebook & Instagram)"
            description="Desenvolvimento e otimização de campanhas para o melhor ROI possível. Experiência comprovada com mais de R$ 200.000 administrados."
            highlight="+R$ 200k Administrados"
          />
          <ServiceCard 
            icon="🔍"
            title="Google Ads & GA4"
            description="Expertise em campanhas Search, Display, YouTube, Demand Gen e Performance Max. Domínio completo do ecossistema Google."
            highlight="Múltiplas Plataformas"
          />
          <ServiceCard 
            icon="⚙️"
            title="CRM & Integrações"
            description="Especialista em RD Station Marketing e resolução de problemas complexos de integrações entre plataformas e sistemas."
            highlight="RD Station Expert"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="font-vt323 text-cyber-neon text-5xl md:text-6xl mb-6 drop-shadow-neon">
          Vamos Conversar
        </h2>
        <p className="text-gray-400 text-lg mb-12">
          Pronto para transformar seus resultados digitais? Entre em contato!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <a 
            href="https://wa.me/5547988892838" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-6 bg-cyber-card border border-gray-700 p-8 rounded-lg hover:border-cyber-neon transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
          >
            <div className="bg-green-500 p-4 rounded-full group-hover:scale-110 transition-transform">
              <MessageCircle className="text-white w-8 h-8" />
            </div>
            <div className="text-left">
              <div className="font-vt323 text-cyber-neon text-xl mb-1">WhatsApp</div>
              <div className="text-cyber-text text-lg font-semibold">+55 47 98889-2838</div>
              <div className="text-gray-400 text-sm">Resposta rápida garantida</div>
            </div>
          </a>
          
          <a 
            href="mailto:Leonardo.koerich@hotmail.com"
            className="flex items-center space-x-6 bg-cyber-card border border-gray-700 p-8 rounded-lg hover:border-cyber-neon transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group"
          >
            <div className="bg-cyber-neon p-4 rounded-full group-hover:scale-110 transition-transform">
              <Mail className="text-cyber-bg w-8 h-8" />
            </div>
            <div className="text-left">
              <div className="font-vt323 text-cyber-neon text-xl mb-1">Email</div>
              <div className="text-cyber-text text-lg font-semibold">Leonardo.koerich@hotmail.com</div>
              <div className="text-gray-400 text-sm">Para propostas detalhadas</div>
            </div>
          </a>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5547988892838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110 animate-pulse"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyber-card border border-gray-700 hover:border-cyber-neon text-cyber-neon p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

const MetricCard = ({ icon, number, label, sublabel }: { 
  icon: React.ReactNode; 
  number: string; 
  label: string; 
  sublabel: string; 
}) => {
  return (
    <div className="bg-cyber-card border border-gray-700 rounded-lg p-6 hover:border-cyber-neon hover:-translate-y-1 transition-all duration-300 text-center">
      <div className="text-cyber-neon mb-3 flex justify-center">{icon}</div>
      <div className="font-vt323 text-cyber-neon text-4xl md:text-5xl mb-2 drop-shadow-neon">{number}</div>
      <div className="text-cyber-text font-semibold mb-1">{label}</div>
      <div className="text-gray-400 text-sm">{sublabel}</div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, highlight }: { 
  icon: string;
  title: string; 
  description: string;
  highlight: string;
}) => {
  return (
    <div className="bg-cyber-card border border-gray-700 rounded-lg p-8 hover:border-cyber-neon hover:-translate-y-2 transition-all duration-300 group">
      <div className="flex items-start space-x-6">
        <div className="text-4xl bg-cyber-neon/10 p-4 rounded-full flex-shrink-0 group-hover:bg-cyber-neon/20 transition-colors">
          {icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-vt323 text-cyber-neon text-2xl">{title}</h3>
            <span className="bg-cyber-neon/20 text-cyber-neon px-3 py-1 rounded-full text-xs font-semibold">
              {highlight}
            </span>
          </div>
          <p className="text-gray-300 leading-relaxed text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
