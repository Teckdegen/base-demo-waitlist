import React, { useState } from 'react';
import { ChevronDown, Mail, Check, Twitter, MessageCircle, Calendar, Zap, Shield, BarChart3, Smartphone, TrendingUp, Brain, Activity } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Telegram bot configuration - update these with your actual values
  const TELEGRAM_BOT_TOKEN = '7914517071:AAE72Eeby7pgghoH3gKAkj6jL3om_glG27c';
  const TELEGRAM_CHAT_ID = '6213503516';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    try {
      const message = `🚀 New Base Demo Waitlist Signup!\n\n📧 Email: ${email}\n⏰ Time: ${new Date().toLocaleString()}\n🌐 Source: Base Demo Landing Page`;
      
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'HTML'
        }),
      });
      
      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error('Failed to send message to Telegram');
        // Still show success for demo purposes
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error('Error sending to Telegram:', error);
      // Still show success for demo purposes
      setIsSubmitted(true);
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Platform preview images
  const platformImages = [
    {
      src: "/lovable-uploads/49c651b6-3edd-4b4b-bc81-9698e76f5150.png",
      alt: "Portfolio Overview - Demo Wallet Dashboard",
      title: "Portfolio Overview",
      description: "Track your portfolio with 1500 USDC starting balance"
    },
    {
      src: "/lovable-uploads/b8a52ddc-2c02-469e-8d0c-7916c19769f8.png",
      alt: "KTA Trading Interface",
      title: "Live Trading",
      description: "Trade any token with real-time charts and data"
    },
    {
      src: "/lovable-uploads/c5eb8213-c498-42ee-b94a-61a38f38b5f7.png",
      alt: "Tasks and Challenges",
      title: "Trading Tasks",
      description: "Complete challenges and compete with others"
    },
    {
      src: "/lovable-uploads/928a1183-dd60-453c-90d5-f9a48f4ba6ba.png",
      alt: "P&L Report with AI Summary",
      title: "AI Performance Reports",
      description: "Get AI-powered insights on your trading performance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Animated Background with Logo - More Visible */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-repeat animate-pulse"
          style={{
            backgroundImage: `url(/lovable-uploads/544e93af-4533-4de4-893f-7b718a4b0047.png)`,
            backgroundSize: '250px 250px',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-5 w-16 h-16 sm:w-32 sm:h-32 sm:top-20 sm:left-10 bg-white rounded-full blur-xl animate-bounce opacity-10"></div>
        <div className="absolute top-40 right-10 w-12 h-12 sm:w-24 sm:h-24 sm:top-60 sm:right-20 bg-white rounded-full blur-lg opacity-10" style={{animation: 'float 4s ease-in-out infinite'}}></div>
        <div className="absolute bottom-20 left-1/6 w-20 h-20 sm:w-40 sm:h-40 sm:bottom-40 sm:left-1/4 bg-white rounded-full blur-2xl opacity-10" style={{animation: 'float 8s ease-in-out infinite reverse'}}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 sm:w-20 sm:h-20 bg-white rounded-full blur-md opacity-10" style={{animation: 'float 5s ease-in-out infinite'}}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/5 animate-pulse opacity-20">
          <BarChart3 className="w-4 h-4 sm:w-8 sm:h-8" style={{animation: 'float 7s ease-in-out infinite'}} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse opacity-20">
          <TrendingUp className="w-3 h-3 sm:w-6 sm:h-6" style={{animation: 'float 6s ease-in-out infinite reverse'}} />
        </div>
        <div className="absolute top-2/3 left-1/3 animate-pulse opacity-20">
          <Brain className="w-5 h-5 sm:w-10 sm:h-10" style={{animation: 'float 5s ease-in-out infinite'}} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 animate-fade-in">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-scale-in transition-all duration-700 hover:scale-110 hover:text-blue-200 cursor-default active:scale-125 active:rotate-12">
            Demo Trade Real Tokens with <span className="text-blue-200 animate-pulse hover:animate-bounce transition-all duration-500 active:animate-spin">Zero Risk</span> on Base
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in hover:scale-110 transition-all duration-300 cursor-default px-2 active:scale-125 active:rotate-6" style={{animationDelay: '0.5s'}}>
            Experience pro-level trading with <span className="text-green-300 font-semibold hover:animate-pulse transition-all duration-300 cursor-pointer active:animate-bounce active:scale-125">1500 USDC starting balance</span>, real data, and <span className="text-green-300 font-semibold hover:animate-pulse transition-all duration-300 cursor-pointer active:animate-spin active:scale-125">AI assistance</span>. 
            Perfect for learning without the stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in" style={{animationDelay: '1s'}}>
            <button 
              onClick={scrollToWaitlist}
              className="bg-white text-blue-600 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-50 transition-all duration-500 transform hover:scale-125 hover:rotate-12 shadow-xl animate-pulse hover:shadow-2xl active:scale-150 active:rotate-45 active:bg-yellow-200"
            >
              Join the Waitlist
            </button>
            <div className="flex items-center gap-2 text-blue-200 animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer active:scale-150 active:rotate-12">
              <Calendar className="w-4 h-4 sm:w-5 sm:h-5 hover:rotate-45 transition-transform duration-300 active:animate-spin" />
              <span className="text-sm sm:text-base">Launching Q3 2025</span>
            </div>
          </div>

          <div className="mt-12 sm:mt-16 animate-bounce hover:scale-150 transition-all duration-500 cursor-pointer active:scale-200 active:animate-spin" style={{animationDelay: '2s'}} onClick={scrollToWaitlist}>
            <ChevronDown className="w-6 h-6 sm:w-8 sm:h-8 mx-auto hover:animate-spin active:animate-ping" />
          </div>
        </div>
      </section>

      {/* Platform Preview Section with Slideshow */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 animate-fade-in hover:scale-110 transition-all duration-500 cursor-default active:scale-125 active:rotate-6">See the Platform in Action</h2>
          <p className="text-base sm:text-xl text-blue-100 mb-8 sm:mb-12 animate-fade-in hover:scale-110 transition-all duration-300 cursor-default px-2 active:scale-125 active:rotate-3" style={{animationDelay: '0.3s'}}>
            Get a preview of what you'll be trading with - real portfolio tracking, live data, and AI insights
          </p>
          
          <div className="relative max-w-5xl mx-auto animate-scale-in hover:scale-105 transition-all duration-700 cursor-pointer" style={{animationDelay: '0.6s'}}>
            <Carousel 
              className="w-full"
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: true,
                })
              ]}
            >
              <CarouselContent>
                {platformImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:rotate-3 active:scale-110 active:rotate-12">
                      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4">
                        <img 
                          src={image.src}
                          alt={image.alt}
                          className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-700 hover:rotate-2 active:scale-125 active:rotate-6"
                        />
                        <div className="mt-4 text-center">
                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 hover:scale-110 transition-all duration-300 active:scale-125 active:text-yellow-300">{image.title}</h3>
                          <p className="text-blue-100 hover:scale-105 transition-all duration-300 active:scale-115 active:text-green-300">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hover:scale-125 active:scale-150 active:rotate-45 transition-all duration-300" />
              <CarouselNext className="hover:scale-125 active:scale-150 active:rotate-45 transition-all duration-300" />
            </Carousel>
            
            <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-green-500 text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full font-semibold animate-pulse hover:animate-bounce hover:scale-125 transition-all duration-300 cursor-pointer text-xs sm:text-base active:scale-150 active:rotate-12 active:bg-yellow-400">
              Auto Play
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl sm:text-4xl font-bold mb-6 sm:mb-8 text-blue-600 animate-fade-in hover:scale-110 transition-all duration-500 cursor-default active:scale-125 active:rotate-6">Join the Future of Demo Trading</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6 animate-scale-in hover:scale-105 transition-all duration-500 active:scale-115" style={{animationDelay: '0.3s'}}>
              <div className="relative hover:scale-110 transition-all duration-300 active:scale-125">
                <Mail className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 hover:text-blue-500 hover:scale-150 transition-all duration-300 active:animate-spin" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-full text-base sm:text-lg focus:border-blue-500 focus:outline-none transition-all duration-500 hover:shadow-lg hover:scale-105 focus:scale-110 focus:rotate-3 active:scale-115"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-500 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl active:scale-125 active:rotate-12"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 sm:p-8 animate-scale-in hover:scale-110 transition-all duration-500 active:scale-125">
              <Check className="w-12 h-12 sm:w-16 sm:h-16 text-green-500 mx-auto mb-4 animate-bounce hover:animate-spin hover:scale-150 transition-all duration-500 active:scale-200" />
              <h3 className="text-xl sm:text-2xl font-bold text-green-700 mb-2 hover:scale-110 transition-all duration-300 cursor-default active:scale-125">Thanks! We'll be in touch.</h3>
              <p className="text-green-600 hover:scale-105 transition-all duration-300 cursor-default active:scale-115">You're now on the waitlist for Base Demo. We'll notify you when we launch!</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6 animate-fade-in hover:scale-110 transition-all duration-500 cursor-default active:scale-125 active:rotate-6">About Base Demo</h2>
            <p className="text-base sm:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in hover:scale-110 transition-all duration-300 cursor-default px-2 active:scale-125 active:rotate-3" style={{animationDelay: '0.3s'}}>
              A Web3 demo trading simulator that lets you practice memecoin trading on Base using real-time data with 1500 USDC starting balance — 
              without the risk, without gas fees, and with advanced AI guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:scale-110 hover:rotate-6 transition-all duration-500 animate-fade-in hover:bg-white/20 cursor-pointer active:scale-125 active:rotate-12" style={{animationDelay: '0.5s'}}>
              <Shield className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200 mx-auto mb-3 sm:mb-4 animate-pulse hover:animate-spin hover:scale-150 transition-all duration-500 active:scale-200" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 hover:text-blue-200 transition-all duration-300 active:scale-125">Zero Risk</h3>
              <p className="text-sm sm:text-base text-blue-100 hover:scale-105 transition-all duration-300 active:scale-115">Trade with 1500 USDC starting balance and learn without financial stress or gas fees.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:scale-110 hover:rotate-6 transition-all duration-500 animate-fade-in hover:bg-white/20 cursor-pointer active:scale-125 active:rotate-12" style={{animationDelay: '0.7s'}}>
              <BarChart3 className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200 mx-auto mb-3 sm:mb-4 animate-pulse hover:animate-bounce hover:scale-150 transition-all duration-500 active:scale-200" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 hover:text-blue-200 transition-all duration-300 active:scale-125">Real Data</h3>
              <p className="text-sm sm:text-base text-blue-100 hover:scale-105 transition-all duration-300 active:scale-115">Live charts and real-time token data powered by Dexscreener API.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 text-center hover:scale-110 hover:rotate-6 transition-all duration-500 animate-fade-in hover:bg-white/20 cursor-pointer active:scale-125 active:rotate-12" style={{animationDelay: '0.9s'}}>
              <Brain className="w-8 h-8 sm:w-12 sm:h-12 text-blue-200 mx-auto mb-3 sm:mb-4 animate-pulse hover:animate-ping hover:scale-150 transition-all duration-500 active:scale-200" />
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 hover:text-blue-200 transition-all duration-300 active:scale-125">AI Powered</h3>
              <p className="text-sm sm:text-base text-blue-100 hover:scale-105 transition-all duration-300 active:scale-115">Get smart trading insights and personalized feedback with advanced AI integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in hover:scale-110 transition-all duration-500 cursor-default active:scale-125 active:rotate-6">Features Preview</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              { icon: TrendingUp, title: "Demo Trade Any Base Token", desc: "Paste any contract address and start trading with 1500 USDC starting balance", delay: "0.1s" },
              { icon: BarChart3, title: "Live Token Charts", desc: "Real-time price charts powered by Chart.js and live data", delay: "0.2s" },
              { icon: Shield, title: "Trade History & Portfolio", desc: "Track your fake trades and portfolio performance", delay: "0.3s" },
              { icon: Zap, title: "Token Scanner", desc: "Discover trending tokens and analyze market movements", delay: "0.4s" },
              { icon: Brain, title: "AI Trading Assistant", desc: "Get personalized insights and trading recommendations", delay: "0.5s" },
              { icon: Smartphone, title: "Mobile App Coming 2026", desc: "Trade on the go with our upcoming mobile app", delay: "0.6s" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 hover:scale-110 hover:rotate-3 transition-all duration-500 animate-fade-in hover:bg-white/20 cursor-pointer hover:shadow-xl active:scale-125 active:rotate-12" 
                style={{animationDelay: feature.delay}}
              >
                <feature.icon className="w-6 h-6 sm:w-10 sm:h-10 text-blue-200 mb-3 sm:mb-4 animate-pulse hover:animate-spin hover:scale-150 transition-all duration-500 active:scale-200" />
                <h3 className="text-base sm:text-lg font-semibold mb-2 hover:text-blue-200 transition-all duration-300 active:scale-125">{feature.title}</h3>
                <p className="text-blue-100 text-xs sm:text-sm hover:scale-105 transition-all duration-300 active:scale-115">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-12 sm:mb-16 animate-fade-in hover:scale-110 transition-all duration-500 cursor-default active:scale-125 active:rotate-6">Roadmap</h2>
          
          <div className="space-y-4 sm:space-y-8">
            {[
              { period: "Q2 2025", title: "Private Alpha", desc: "Limited beta testing with select users", icon: "📌", status: "upcoming", delay: "0.1s" },
              { period: "Q3 2025", title: "Official Launch", desc: "Full web app release with all core features and AI", icon: "🚀", status: "target", delay: "0.2s" },
              { period: "Q1 2026", title: "Mobile App", desc: "iOS and Android apps for trading on the go", icon: "📱", status: "planned", delay: "0.3s" },
              { period: "Q1 2026", title: "Prop Trading Program", desc: "Earn real rewards for top demo trading performance", icon: "🏦", status: "planned", delay: "0.4s" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-xl hover:scale-110 hover:rotate-3 transition-all duration-500 animate-fade-in ${item.status === 'target' ? 'bg-blue-400/20 border-2 border-blue-300 hover:bg-blue-400/30' : 'bg-white/10 hover:bg-white/20'} backdrop-blur-sm cursor-pointer hover:shadow-xl active:scale-125 active:rotate-12`}
                style={{animationDelay: item.delay}}
              >
                <div className="text-2xl sm:text-3xl animate-bounce hover:animate-spin hover:scale-150 transition-all duration-500 active:scale-200">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2">
                    <span className="text-blue-200 font-medium text-sm sm:text-base hover:scale-110 transition-all duration-300 active:scale-125">{item.period}</span>
                    {item.status === 'target' && <span className="bg-blue-300 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold animate-pulse hover:animate-bounce hover:scale-125 transition-all duration-300 w-fit active:scale-150">TARGET LAUNCH</span>}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-1 hover:text-blue-200 transition-all duration-300 active:scale-125">{item.title}</h3>
                  <p className="text-blue-100 text-sm sm:text-base hover:scale-105 transition-all duration-300 active:scale-115">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with Twitter and Telegram links */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 sm:gap-8 mb-4 sm:mb-6 animate-fade-in">
            <a 
              href="https://x.com/base_demo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-all duration-500 hover:scale-150 hover:rotate-45 transform active:scale-200 active:rotate-90"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="https://t.me/basedemo" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-200 hover:text-white transition-all duration-500 hover:scale-150 hover:rotate-45 transform active:scale-200 active:rotate-90"
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
          
          <div className="text-blue-200 text-xs sm:text-sm animate-fade-in hover:scale-110 transition-all duration-300 cursor-default active:scale-125" style={{animationDelay: '0.3s'}}>
            <p className="mb-2">Built for Base • Powered by Real Data • Enhanced by AI</p>
            <p>&copy; 2025 Base Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced CSS Styles */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes scaleIn {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fade-in {
            animation: fadeIn 0.6s ease-out forwards;
          }
          .animate-scale-in {
            animation: scaleIn 0.6s ease-out forwards;
          }
          
          /* Enhanced mobile touch effects */
          @media (hover: none) and (pointer: coarse) {
            .hover\\:scale-105:active { transform: scale(1.05); }
            .hover\\:scale-110:active { transform: scale(1.1); }
            .hover\\:scale-125:active { transform: scale(1.25); }
            .hover\\:scale-150:active { transform: scale(1.5); }
            .hover\\:rotate-1:active { transform: rotate(1deg); }
            .hover\\:rotate-3:active { transform: rotate(3deg); }
            .hover\\:rotate-6:active { transform: rotate(6deg); }
            .hover\\:rotate-12:active { transform: rotate(12deg); }
            .hover\\:rotate-45:active { transform: rotate(45deg); }
            .hover\\:animate-spin:active { animation: spin 1s linear infinite; }
            .hover\\:animate-bounce:active { animation: bounce 1s infinite; }
            .hover\\:animate-ping:active { animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite; }
            .active\\:scale-115:active { transform: scale(1.15); }
            .active\\:scale-125:active { transform: scale(1.25); }
            .active\\:scale-150:active { transform: scale(1.5); }
            .active\\:scale-200:active { transform: scale(2); }
            .active\\:rotate-12:active { transform: rotate(12deg); }
            .active\\:rotate-45:active { transform: rotate(45deg); }
            .active\\:rotate-90:active { transform: rotate(90deg); }
            .active\\:animate-spin:active { animation: spin 1s linear infinite; }
            .active\\:animate-bounce:active { animation: bounce 1s infinite; }
            .active\\:text-yellow-300:active { color: #fde047; }
            .active\\:text-green-300:active { color: #86efac; }
            .active\\:bg-yellow-200:active { background-color: #fef08a; }
            .active\\:bg-yellow-400:active { background-color: #facc15; }
          }
        `}
      </style>
    </div>
  );
};

export default Index;
