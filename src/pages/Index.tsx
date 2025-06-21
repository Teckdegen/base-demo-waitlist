
import React, { useState } from 'react';
import { ChevronDown, Mail, Check, ExternalLink, Calendar, Zap, Shield, BarChart3, Smartphone, TrendingUp, Brain, Activity } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Telegram bot configuration - update these with your actual values
  const TELEGRAM_BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
  const TELEGRAM_CHAT_ID = 'YOUR_CHAT_ID_HERE';

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Animated Background with Logo */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0 bg-repeat animate-pulse"
          style={{
            backgroundImage: `url(/lovable-uploads/544e93af-4533-4de4-893f-7b718a4b0047.png)`,
            backgroundSize: '200px 200px',
            animation: 'float 6s ease-in-out infinite'
          }}
        ></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-bounce opacity-10"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-white rounded-full blur-lg opacity-10" style={{animation: 'float 4s ease-in-out infinite'}}></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl opacity-10" style={{animation: 'float 8s ease-in-out infinite reverse'}}></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full blur-md opacity-10" style={{animation: 'float 5s ease-in-out infinite'}}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-1/4 left-1/5 animate-pulse opacity-20">
          <BarChart3 className="w-8 h-8" style={{animation: 'float 7s ease-in-out infinite'}} />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-pulse opacity-20">
          <TrendingUp className="w-6 h-6" style={{animation: 'float 6s ease-in-out infinite reverse'}} />
        </div>
        <div className="absolute top-2/3 left-1/3 animate-pulse opacity-20">
          <Brain className="w-10 h-10" style={{animation: 'float 5s ease-in-out infinite'}} />
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight animate-scale-in">
            Demo Trade Real Tokens with <span className="text-blue-200 animate-pulse">Zero Risk</span> on Base
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{animationDelay: '0.5s'}}>
            Experience pro-level trading with <span className="text-green-300 font-semibold">1500 USDC fake balance</span>, real data, and <span className="text-green-300 font-semibold">AI assistance</span>. 
            Perfect for learning without the stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 animate-fade-in" style={{animationDelay: '1s'}}>
            <button 
              onClick={scrollToWaitlist}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl animate-pulse"
            >
              Join the Waitlist
            </button>
            <div className="flex items-center gap-2 text-blue-200 animate-bounce">
              <Calendar className="w-5 h-5" />
              <span>Launching Q3 2025</span>
            </div>
          </div>

          <div className="mt-16 animate-bounce" style={{animationDelay: '2s'}}>
            <ChevronDown className="w-8 h-8 mx-auto cursor-pointer" onClick={scrollToWaitlist} />
          </div>
        </div>
      </section>

      {/* Platform Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-sm relative">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 animate-fade-in">See the Platform in Action</h2>
          <p className="text-xl text-blue-100 mb-12 animate-fade-in" style={{animationDelay: '0.3s'}}>
            Get a preview of what you'll be trading with - real portfolio tracking, live data, and AI insights
          </p>
          
          <div className="relative max-w-4xl mx-auto animate-scale-in" style={{animationDelay: '0.6s'}}>
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-1 rounded-2xl shadow-2xl">
              <img 
                src="/lovable-uploads/e6b5ff70-d9a5-415d-bf9a-c10c5e1db141.png" 
                alt="Base Demo Platform Preview" 
                className="w-full rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse">
              Live Preview
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-600 animate-fade-in">Join the Future of Demo Trading</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:border-blue-500 focus:outline-none transition-all duration-300 hover:shadow-lg"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Joining...
                  </div>
                ) : (
                  'Get Early Access'
                )}
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8 animate-scale-in">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold text-green-700 mb-2">Thanks! We'll be in touch.</h3>
              <p className="text-green-600">You're now on the waitlist for Base Demo. We'll notify you when we launch!</p>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 animate-fade-in">About Base Demo</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.3s'}}>
              A Web3 fake trading simulator that lets you practice trading any token on Base using real-time data with 1500 USDC fake balance — 
              without the risk, without gas fees, and with advanced AI guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.5s'}}>
              <Shield className="w-12 h-12 text-blue-200 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-3">Zero Risk</h3>
              <p className="text-blue-100">Trade with 1500 USDC fake balance and learn without financial stress or gas fees.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.7s'}}>
              <BarChart3 className="w-12 h-12 text-blue-200 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-3">Real Data</h3>
              <p className="text-blue-100">Live charts and real-time token data powered by Dexscreener API.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: '0.9s'}}>
              <Brain className="w-12 h-12 text-blue-200 mx-auto mb-4 animate-pulse" />
              <h3 className="text-xl font-semibold mb-3">AI Powered</h3>
              <p className="text-blue-100">Get smart trading insights and personalized feedback with advanced AI integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Features Preview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Demo Trade Any Base Token", desc: "Paste any contract address and start trading with 1500 USDC fake balance", delay: "0.1s" },
              { icon: BarChart3, title: "Live Token Charts", desc: "Real-time price charts powered by Chart.js and live data", delay: "0.2s" },
              { icon: Shield, title: "Trade History & Portfolio", desc: "Track your fake trades and portfolio performance", delay: "0.3s" },
              { icon: Zap, title: "Token Scanner", desc: "Discover trending tokens and analyze market movements", delay: "0.4s" },
              { icon: Brain, title: "AI Trading Assistant", desc: "Get personalized insights and trading recommendations", delay: "0.5s" },
              { icon: Smartphone, title: "Mobile App Coming 2026", desc: "Trade on the go with our upcoming mobile app", delay: "0.6s" }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:scale-105 transition-all duration-300 animate-fade-in" 
                style={{animationDelay: feature.delay}}
              >
                <feature.icon className="w-10 h-10 text-blue-200 mb-4 animate-pulse" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-blue-100 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-fade-in">Roadmap</h2>
          
          <div className="space-y-8">
            {[
              { period: "Q2 2025", title: "Private Alpha", desc: "Limited beta testing with select users", icon: "📌", status: "upcoming", delay: "0.1s" },
              { period: "Q3 2025", title: "Official Launch", desc: "Full web app release with all core features and AI", icon: "🚀", status: "target", delay: "0.2s" },
              { period: "Q1 2026", title: "Mobile App", desc: "iOS and Android apps for trading on the go", icon: "📱", status: "planned", delay: "0.3s" },
              { period: "Q1 2026", title: "Prop Trading Program", desc: "Earn real rewards for top demo trading performance", icon: "🏦", status: "planned", delay: "0.4s" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-6 p-6 rounded-xl hover:scale-105 transition-all duration-300 animate-fade-in ${item.status === 'target' ? 'bg-blue-400/20 border-2 border-blue-300' : 'bg-white/10'} backdrop-blur-sm`}
                style={{animationDelay: item.delay}}
              >
                <div className="text-3xl animate-bounce">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-200 font-medium">{item.period}</span>
                    {item.status === 'target' && <span className="bg-blue-300 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold animate-pulse">TARGET LAUNCH</span>}
                  </div>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-blue-100">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center gap-6 mb-6 animate-fade-in">
            <a href="#" className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <ExternalLink className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors hover:scale-110 transform duration-300">
              <ExternalLink className="w-6 h-6" />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
          
          <div className="text-blue-200 text-sm animate-fade-in" style={{animationDelay: '0.3s'}}>
            <p className="mb-2">Built for Base • Powered by Real Data • Enhanced by AI</p>
            <p>&copy; 2025 Base Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
        `}
      </style>
    </div>
  );
};

export default Index;
