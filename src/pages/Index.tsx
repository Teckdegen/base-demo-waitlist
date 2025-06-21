
import React, { useState } from 'react';
import { ChevronDown, Mail, Check, ExternalLink, Calendar, Zap, Shield, BarChart3, Smartphone, TrendingUp } from 'lucide-react';

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call to Telegram webhook
    try {
      // In production, replace with your actual Telegram webhook URL
      const webhookUrl = process.env.REACT_APP_TELEGRAM_WEBHOOK || '';
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: 'Base Demo Waitlist'
        }),
      });
      
      // For demo purposes, we'll simulate success
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      console.log('Simulating successful submission for demo');
      setTimeout(() => {
        setIsSubmitted(true);
        setIsLoading(false);
      }, 1000);
    }
  };

  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
        <div className="absolute top-60 right-20 w-24 h-24 bg-white rounded-full blur-lg"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-white rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-white rounded-full blur-md"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo */}
          <div className="mb-8 animate-bounce">
            <img 
              src="/lovable-uploads/544e93af-4533-4de4-893f-7b718a4b0047.png" 
              alt="Base Demo Logo" 
              className="w-32 h-32 mx-auto mb-4 drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            Demo Trade Real Tokens with <span className="text-blue-200">Zero Risk</span> on Base
          </h1>
          
          <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Experience pro-level trading with fake ETH, real data, and AI assistance. 
            Perfect for learning without the stress.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              onClick={scrollToWaitlist}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Join the Waitlist
            </button>
            <div className="flex items-center gap-2 text-blue-200">
              <Calendar className="w-5 h-5" />
              <span>Launching Q3 2025</span>
            </div>
          </div>

          <div className="mt-16 animate-pulse">
            <ChevronDown className="w-8 h-8 mx-auto cursor-pointer" onClick={scrollToWaitlist} />
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-20 px-4 sm:px-6 lg:px-8 bg-white text-gray-800 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-blue-600">Join the Future of Demo Trading</h2>
          
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-full text-lg focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isLoading || !email}
                className="w-full bg-blue-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
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
            <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
              <Check className="w-16 h-16 text-green-500 mx-auto mb-4" />
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
            <h2 className="text-4xl font-bold mb-6">About Base Demo</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              A Web3 fake trading simulator that lets you practice trading any token on Base using real-time data — 
              without the risk, without gas fees, and with AI guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Zero Risk</h3>
              <p className="text-blue-100">Trade with fake ETH and learn without financial stress or gas fees.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <BarChart3 className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Real Data</h3>
              <p className="text-blue-100">Live charts and real-time token data powered by Dexscreener API.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Zap className="w-12 h-12 text-blue-200 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">AI Powered</h3>
              <p className="text-blue-100">Get smart trading insights and feedback with Gemini AI integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Features Preview</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: "Demo Trade Any Base Token", desc: "Paste any contract address and start trading with fake ETH" },
              { icon: BarChart3, title: "Live Token Charts", desc: "Real-time price charts powered by Chart.js and live data" },
              { icon: Shield, title: "Trade History & Portfolio", desc: "Track your fake trades and portfolio performance" },
              { icon: Zap, title: "Token Scanner", desc: "Discover trending tokens and analyze market movements" },
              { icon: ExternalLink, title: "RainbowKit Integration", desc: "Connect your wallet for seamless Web3 experience" },
              { icon: Smartphone, title: "Mobile App Coming 2026", desc: "Trade on the go with our upcoming mobile app" }
            ].map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <feature.icon className="w-10 h-10 text-blue-200 mb-4" />
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
          <h2 className="text-4xl font-bold text-center mb-16">Roadmap</h2>
          
          <div className="space-y-8">
            {[
              { period: "Q2 2025", title: "Private Alpha", desc: "Limited beta testing with select users", icon: "📌", status: "upcoming" },
              { period: "Q3 2025", title: "Official Launch", desc: "Full web app release with all core features", icon: "🚀", status: "target" },
              { period: "Q1 2026", title: "Mobile App", desc: "iOS and Android apps for trading on the go", icon: "📱", status: "planned" },
              { period: "Q1 2026", title: "Prop Trading Program", desc: "Earn real rewards for top demo trading performance", icon: "🏦", status: "planned" }
            ].map((item, index) => (
              <div key={index} className={`flex items-center gap-6 p-6 rounded-xl ${item.status === 'target' ? 'bg-blue-400/20 border-2 border-blue-300' : 'bg-white/10'} backdrop-blur-sm`}>
                <div className="text-3xl">{item.icon}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-200 font-medium">{item.period}</span>
                    {item.status === 'target' && <span className="bg-blue-300 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">TARGET LAUNCH</span>}
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
          <div className="mb-6">
            <img 
              src="/lovable-uploads/544e93af-4533-4de4-893f-7b718a4b0047.png" 
              alt="Base Demo Logo" 
              className="w-16 h-16 mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">Base Demo</h3>
          </div>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <ExternalLink className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <ExternalLink className="w-6 h-6" />
              <span className="sr-only">Telegram</span>
            </a>
          </div>
          
          <div className="text-blue-200 text-sm">
            <p className="mb-2">Built for Base • Powered by Real Data • Supported by AI</p>
            <p>&copy; 2025 Base Demo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
