
import { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Mail, Target, TrendingUp, Users, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';

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
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center relative">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ 
            backgroundImage: `url('/lovable-uploads/a3d3d055-859b-4c30-9e23-a8cb521cdc48.png')` 
          }}
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <p className="text-primary text-lg md:text-xl mb-4">
            Especialista em Performance Digital
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            LEO KOERICH
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Marketing Digital & Tráfego Pago
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="text-lg px-8 py-6 rounded-full"
          >
            Transformar Meu Negócio
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Quem é Leo Koerich
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Transformando negócios através de estratégias digitais de alta performance
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Minha Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Trabalho com dedicação e paixão no universo do marketing digital e tráfego pago. Como MEI, presto todos os serviços pessoalmente, garantindo total controle de qualidade e proximidade com cada cliente.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Metodologia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Cada campanha é desenvolvida com análise profunda das necessidades do cliente, criando estratégias personalizadas que superam expectativas e geram resultados mensuráveis.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Expertise</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Domino a arte da gestão de tráfego pago com precisão, otimizando investimentos e maximizando retornos. Minha empresa reflete meu compromisso com excelência e inovação.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-primary">Filosofia</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed">
                Cada projeto é uma oportunidade de evoluir. A satisfação dos clientes é minha maior recompensa e me motiva a continuar aprimorando no dinâmico mundo do marketing digital.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Metrics */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8">Resultados Comprovados</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <TrendingUp className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">1+</div>
                <div className="text-sm font-medium">Ano de Experiência</div>
                <div className="text-xs text-muted-foreground">Em crescimento constante</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">17+</div>
                <div className="text-sm font-medium">Empresas Atendidas</div>
                <div className="text-xs text-muted-foreground">Diversos segmentos</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Target className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">100%</div>
                <div className="text-sm font-medium">Clientes Satisfeitos</div>
                <div className="text-xs text-muted-foreground">Resultados garantidos</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Zap className="w-8 h-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">10+</div>
                <div className="text-sm font-medium">Competências</div>
                <div className="text-xs text-muted-foreground">Skills especializadas</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community Badge */}
        <Card className="max-w-md mx-auto">
          <CardContent className="text-center pt-6">
            <img 
              src="/lovable-uploads/6e6550ff-7eed-4600-8b0d-3b6184f7e947.png" 
              alt="Comunidade Sobral" 
              className="w-20 h-20 mx-auto mb-4"
            />
            <h4 className="font-semibold text-lg mb-2">Membro Ativo</h4>
            <p className="text-foreground">Comunidade Sobral de Tráfego</p>
            <p className="text-muted-foreground text-sm mt-2">Networking e aprendizado contínuo</p>
          </CardContent>
        </Card>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 max-w-7xl mx-auto bg-muted/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Serviços Especializados
          </h2>
          <p className="text-muted-foreground text-lg">
            Soluções completas para maximizar seu ROI digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">🎯</div>
              <CardTitle>Google Tag Manager & API de Conversão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Estrutura avançada de mensuração para aumentar a qualidade dos leads e otimizar a performance das campanhas com dados precisos.
              </p>
              <div className="text-sm font-semibold text-primary">Rastreamento Avançado</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">📱</div>
              <CardTitle>Meta Ads (Facebook & Instagram)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Desenvolvimento e otimização de campanhas para o melhor ROI possível. Experiência comprovada com mais de R$ 200.000 administrados.
              </p>
              <div className="text-sm font-semibold text-primary">+R$ 200k Administrados</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">🔍</div>
              <CardTitle>Google Ads & GA4</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Expertise em campanhas Search, Display, YouTube, Demand Gen e Performance Max. Domínio completo do ecossistema Google.
              </p>
              <div className="text-sm font-semibold text-primary">Múltiplas Plataformas</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="text-4xl mb-4">⚙️</div>
              <CardTitle>CRM & Integrações</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-relaxed mb-4">
                Especialista em RD Station Marketing e resolução de problemas complexos de integrações entre plataformas e sistemas.
              </p>
              <div className="text-sm font-semibold text-primary">RD Station Expert</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Vamos Conversar
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Pronto para transformar seus resultados digitais? Entre em contato!
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <a 
                href="https://wa.me/5547988892838" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-6 group"
              >
                <div className="bg-green-500 p-4 rounded-full group-hover:scale-110 transition-transform">
                  <MessageCircle className="text-white w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold mb-1">WhatsApp</div>
                  <div className="text-lg">+55 47 98889-2838</div>
                  <div className="text-sm text-muted-foreground">Resposta rápida garantida</div>
                </div>
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <a 
                href="mailto:Leonardo.koerich@hotmail.com"
                className="flex items-center space-x-6 group"
              >
                <div className="bg-primary p-4 rounded-full group-hover:scale-110 transition-transform">
                  <Mail className="text-primary-foreground w-8 h-8" />
                </div>
                <div className="text-left">
                  <div className="text-xl font-semibold mb-1">Email</div>
                  <div className="text-lg">Leonardo.koerich@hotmail.com</div>
                  <div className="text-sm text-muted-foreground">Para propostas detalhadas</div>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/5547988892838" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          variant="outline"
          className="fixed bottom-6 right-6 shadow-lg z-50 transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};

export default Index;
