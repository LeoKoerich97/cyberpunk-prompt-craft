
import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail, Target, TrendingUp, Users, Zap } from 'lucide-react';
import MatrixRain from '../components/TechEffects/MatrixRain';
import ParticleField from '../components/TechEffects/ParticleField';
import ScannerLines from '../components/TechEffects/ScannerLines';
import CircuitPattern from '../components/TechEffects/CircuitPattern';
import HolographicCard from '../components/TechEffects/HolographicCard';
import GlitchText from '../components/TechEffects/GlitchText';
import TypingText from '../components/TechEffects/TypingText';
import MetricCard from '../components/cards/MetricCard';
import ServiceCard from '../components/cards/ServiceCard';

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
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
    <div className="min-h-screen bg-cyber-bg text-cyber-text font-inter relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <CircuitPattern />
        <div className="grid-pattern absolute inset-0" />
      </div>

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('/lovable-uploads/a3d3d055-859b-4c30-9e23-a8cb521cdc48.png')` 
          }}
        />
        
        {/* Tech Effects */}
        <MatrixRain />
        <ParticleField />
        <ScannerLines />
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75" />
        
        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <div className="mb-6">
            <TypingText 
              text="// Especialista em Performance Digital"
              className="text-cyber-blue text-xl md:text-2xl"
            />
          </div>
          
          <div className="mb-8">
            <GlitchText intensity="low" className="font-vt323 text-cyber-neon text-5xl md:text-7xl lg:text-9xl leading-tight drop-shadow-neon-lg">
              <span className="holographic-text">LEO KOERICH</span>
            </GlitchText>
          </div>
          
          <p className="font-vt323 text-cyber-text text-2xl md:text-3xl mb-10 glow-text">
            Marketing Digital & Tráfego Pago
          </p>
          
          <button 
            onClick={scrollToContact}
            className="bg-cyber-neon text-cyber-bg px-10 py-5 rounded-full text-xl font-bold hover:brightness-110 hover:scale-105 transition-all duration-300 animate-float shadow-neon border-animated neon-glow will-change-transform"
          >
            Transformar Meu Negócio
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <GlitchText intensity="low" className="font-vt323 text-cyber-blue text-5xl md:text-6xl mb-6 drop-shadow-neon-blue">
            <span className="holographic-text">Quem é Leo Koerich</span>
          </GlitchText>
          <p className="text-center text-gray-400 text-lg max-w-3xl mx-auto">
            Transformando negócios através de estratégias digitais de alta performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <HolographicCard>
              <h3 className="font-vt323 text-cyber-purple text-2xl mb-4 holographic-text">Minha Missão</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Trabalho com dedicação e paixão no universo do marketing digital e tráfego pago. Como MEI, presto todos os serviços pessoalmente, garantindo total controle de qualidade e proximidade com cada cliente.
              </p>
            </HolographicCard>
            
            <HolographicCard>
              <h3 className="font-vt323 text-cyber-pink text-2xl mb-4 holographic-text">Metodologia</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Cada campanha é desenvolvida com análise profunda das necessidades do cliente, criando estratégias personalizadas que superam expectativas e geram resultados mensuráveis.
              </p>
            </HolographicCard>
          </div>
          
          <div className="space-y-6">
            <HolographicCard>
              <h3 className="font-vt323 text-cyber-blue text-2xl mb-4 holographic-text">Expertise</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Domino a arte da gestão de tráfego pago com precisão, otimizando investimentos e maximizando retornos. Minha empresa reflete meu compromisso com excelência e inovação.
              </p>
            </HolographicCard>
            
            <HolographicCard>
              <h3 className="font-vt323 text-cyber-orange text-2xl mb-4 holographic-text">Filosofia</h3>
              <p className="text-cyber-text leading-relaxed text-lg">
                Cada projeto é uma oportunidade de evoluir. A satisfação dos clientes é minha maior recompensa e me motiva a continuar aprimorando no dinâmico mundo do marketing digital.
              </p>
            </HolographicCard>
          </div>
        </div>

        {/* Enhanced Metrics */}
        <div className="text-center mb-12">
          <h3 className="font-vt323 text-cyber-neon text-3xl mb-8 holographic-text">Resultados Comprovados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <MetricCard 
              icon={<TrendingUp className="w-8 h-8" />}
              number={1}
              suffix="+"
              label="Ano de Experiência"
              sublabel="Em crescimento constante"
              variant="neon"
            />
            <MetricCard 
              icon={<Users className="w-8 h-8" />}
              number={17}
              suffix="+"
              label="Empresas Atendidas"
              sublabel="Diversos segmentos"
              variant="blue"
            />
            <MetricCard 
              icon={<Target className="w-8 h-8" />}
              number={100}
              suffix="%"
              label="Clientes Satisfeitos"
              sublabel="Resultados garantidos"
              variant="purple"
            />
            <MetricCard 
              icon={<Zap className="w-8 h-8" />}
              number={10}
              suffix="+"
              label="Competências"
              sublabel="Skills especializadas"
              variant="pink"
            />
          </div>
        </div>

        {/* Community Badge */}
        <HolographicCard className="max-w-md mx-auto">
          <div className="text-center">
            <img 
              src="/lovable-uploads/6e6550ff-7eed-4600-8b0d-3b6184f7e947.png" 
              alt="Comunidade Sobral" 
              className="w-20 h-20 mx-auto mb-4 filter drop-shadow-neon-blue"
            />
            <h4 className="font-vt323 text-cyber-blue text-xl mb-2 holographic-text">Membro Ativo</h4>
            <p className="text-cyber-text">Comunidade Sobral de Tráfego</p>
            <p className="text-gray-400 text-sm mt-2">Networking e aprendizado contínuo</p>
          </div>
        </HolographicCard>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <GlitchText intensity="low" className="font-vt323 text-cyber-purple text-5xl md:text-6xl mb-6 drop-shadow-neon-purple">
            <span className="holographic-text">Serviços Especializados</span>
          </GlitchText>
          <p className="text-center text-gray-400 text-lg">
            Soluções completas para maximizar seu ROI digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <ServiceCard 
            icon="🎯"
            title="Google Tag Manager & API de Conversão"
            description="Estrutura avançada de mensuração para aumentar a qualidade dos leads e otimizar a performance das campanhas com dados precisos."
            highlight="Rastreamento Avançado"
            variant="neon"
          />
          <ServiceCard 
            icon="📱"
            title="Meta Ads (Facebook & Instagram)"
            description="Desenvolvimento e otimização de campanhas para o melhor ROI possível. Experiência comprovada com mais de R$ 200.000 administrados."
            highlight="+R$ 200k Administrados"
            variant="blue"
          />
          <ServiceCard 
            icon="🔍"
            title="Google Ads & GA4"
            description="Expertise em campanhas Search, Display, YouTube, Demand Gen e Performance Max. Domínio completo do ecossistema Google."
            highlight="Múltiplas Plataformas"
            variant="purple"
          />
          <ServiceCard 
            icon="⚙️"
            title="CRM & Integrações"
            description="Especialista em RD Station Marketing e resolução de problemas complexos de integrações entre plataformas e sistemas."
            highlight="RD Station Expert"
            variant="pink"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-4 max-w-4xl mx-auto text-center relative z-10">
        <GlitchText intensity="low" className="font-vt323 text-cyber-pink text-5xl md:text-6xl mb-6 drop-shadow-neon-pink">
          <span className="holographic-text">Vamos Conversar</span>
        </GlitchText>
        <p className="text-gray-400 text-lg mb-12">
          Pronto para transformar seus resultados digitais? Entre em contato!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <HolographicCard>
            <a 
              href="https://wa.me/5547988892838" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-6 group"
            >
              <div className="bg-green-500 p-4 rounded-full group-hover:scale-110 transition-transform shadow-neon">
                <MessageCircle className="text-white w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="font-vt323 text-cyber-neon text-xl mb-1 holographic-text">WhatsApp</div>
                <div className="text-cyber-text text-lg font-semibold">+55 47 98889-2838</div>
                <div className="text-gray-400 text-sm">Resposta rápida garantida</div>
              </div>
            </a>
          </HolographicCard>
          
          <HolographicCard>
            <a 
              href="mailto:Leonardo.koerich@hotmail.com"
              className="flex items-center space-x-6 group"
            >
              <div className="bg-cyber-blue p-4 rounded-full group-hover:scale-110 transition-transform shadow-neon-blue">
                <Mail className="text-cyber-bg w-8 h-8" />
              </div>
              <div className="text-left">
                <div className="font-vt323 text-cyber-blue text-xl mb-1 holographic-text">Email</div>
                <div className="text-cyber-text text-lg font-semibold">Leonardo.koerich@hotmail.com</div>
                <div className="text-gray-400 text-sm">Para propostas detalhadas</div>
              </div>
            </a>
          </HolographicCard>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5547988892838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110 animate-pulse neon-glow will-change-transform"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-cyber-card border border-gray-700 hover:border-cyber-neon text-cyber-neon p-4 rounded-full shadow-xl z-50 transition-all duration-300 hover:scale-110 neon-glow will-change-transform opacity-0 animate-fade-in"
          style={{ opacity: showScrollTop ? 1 : 0 }}
        >
          <ArrowUp className="w-7 h-7" />
        </button>
      )}
    </div>
  );
};

export default Index;
