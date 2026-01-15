import React, { useState, useEffect } from 'react';
import { 
  Scissors, 
  // Calendar, // Unused import removal
  MapPin, 
  Phone, 
  Clock, 
  Menu, 
  X, 
  Instagram, 
  Star, 
  ArrowRight, 
  CheckCircle, 
  Sparkles,
  User,
  Smartphone,
  Car,
  Gamepad2
} from 'lucide-react';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const services = [
    {
      category: "Hair & Barbering",
      icon: <Scissors className="w-8 h-8" />,
      items: ["Classic & Modern Haircuts", "Fade / Taper / Skin Fade", "Kids & Senior Cuts", "Beard Trim & Styling"]
    },
    {
      category: "Hair Styling & Care",
      icon: <Sparkles className="w-8 h-8" />,
      items: ["Hair Spa & Deep Conditioning", "Keratin / Smoothening", "Creative Coloring & Highlights", "Scalp Treatments"]
    },
    {
      category: "Beauty & Skin",
      icon: <User className="w-8 h-8" />,
      items: ["Luxury Facials", "Threading & Waxing", "Bridal / Groom Packages", "Detan Treatments"]
    }
  ];

  const mensServices = [
    { title: "Beard Sculpting", price: "₹450" },
    { title: "Luxury Shave", price: "₹550" },
    { title: "Hair & Beard Color", price: "₹1200" },
    { title: "Detan Facial", price: "₹1800" },
    { title: "Head Massage", price: "₹650" },
    { title: "Scalp Therapy", price: "₹2200" }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1503951914875-befbb6470523?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1599351431202-6e0c06e72426?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="bg-zinc-950 text-zinc-200 font-sans selection:bg-yellow-700 selection:text-white">
      {/* Dynamic Font Loading */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap');
      `}</style>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-serif font-bold tracking-tighter text-white">
            TREND <span className="text-yellow-600">MAKER</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
            {['About', 'Services', 'Gallery', 'Pricing'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-yellow-500 transition-colors uppercase text-xs tracking-widest"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 border border-yellow-600 text-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-300"
            >
              BOOK NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-zinc-900 border-b border-zinc-800 py-6 px-6 flex flex-col space-y-4">
            {['About', 'Services', 'Gallery', 'Pricing', 'Contact'].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-left text-lg font-serif"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section with Video */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover opacity-40 scale-105"
          >
            {/* Salon atmosphere video - Premium Luxury Wash/Treatment */}
            <source src="https://pin.it/3ypVFFp4g" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-yellow-500 tracking-[0.3em] text-xs md:text-sm uppercase mb-6 animate-fade-in-up">
            Premium Hair • Grooming • Style Transformation
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight animate-fade-in-up delay-100">
            Where Style Meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-700">Perfection</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-yellow-600 text-black font-bold tracking-widest hover:bg-yellow-500 transition-all"
            >
              BOOK APPOINTMENT
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="px-8 py-4 border border-zinc-600 text-white hover:border-white transition-all tracking-widest"
            >
              VIEW SERVICES
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-yellow-600/30" />
            <img 
              src="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?auto=format&fit=crop&q=80&w=800" 
              alt="Stylist working" 
              className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-yellow-600/30" />
          </div>
          <div>
            <h2 className="text-4xl font-serif mb-6 text-white">Redefining Your <br/><span className="italic text-yellow-600">Personal Aesthetic</span></h2>
            <p className="text-zinc-400 leading-relaxed mb-6 font-light">
              Trend Maker Salon is not just a place to get a haircut; it is a destination for those who seek perfection. 
              Inspired by international grooming studios, we blend classic barbering techniques with modern fashion-forward styling.
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8 font-light">
              Our master stylists understand that grooming is personal. We ensure hygiene, precision, and a look that compliments 
              your personality, not just your face shape.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <span className="block text-3xl font-serif text-white">5+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Years Exp</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-white">10k+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Happy Clients</span>
              </div>
              <div className="text-center">
                <span className="block text-3xl font-serif text-white">15+</span>
                <span className="text-xs text-zinc-500 uppercase tracking-wider">Awards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-yellow-600 uppercase tracking-widest text-xs font-bold">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-serif mt-3 text-white">Curated Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-zinc-950 p-8 border border-zinc-800 hover:border-yellow-600/50 transition-all duration-300 hover:-translate-y-2">
                <div className="text-yellow-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-serif text-white mb-6">{service.category}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-zinc-400 group-hover:text-zinc-300">
                      <span className="w-1.5 h-1.5 bg-yellow-700 rounded-full mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Men's Grooming Highlight */}
      <section className="py-24 bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-900/5 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <span className="text-zinc-500 uppercase tracking-widest text-xs font-bold border-b border-zinc-700 pb-1">Men's Grooming Studio</span>
            <h2 className="text-5xl font-serif text-white mt-6 mb-6">Because grooming is not a routine.<br/>It's your <span className="text-yellow-600 italic">signature.</span></h2>
            <p className="text-zinc-400 mb-10 font-light">
              Experience the art of masculine care. From precision fades to therapeutic scalp treatments, 
              we elevate the standard of men's grooming.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {mensServices.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center border-b border-zinc-800 pb-4 group cursor-default">
                  <span className="text-zinc-300 group-hover:text-white transition-colors">{item.title}</span>
                  <span className="text-yellow-600 font-serif">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[600px] w-full relative">
             <img 
               src="https://images.unsplash.com/photo-1621600411688-4be93cd68504?auto=format&fit=crop&q=80&w=800" 
               alt="Men's Grooming" 
               className="w-full h-full object-cover"
             />
             <div className="absolute bottom-0 left-0 bg-yellow-600 text-black px-6 py-4">
                <p className="font-bold uppercase tracking-wider">Premium Package</p>
                <p className="text-sm opacity-80">Haircut + Beard + Facial @ ₹2500</p>
             </div>
          </div>
        </div>
      </section>

      {/* NEW: Kids' Special Section */}
      <section className="py-24 bg-zinc-900 border-y border-zinc-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
             <div className="absolute -top-4 -left-4 w-20 h-20 bg-yellow-600/10 rounded-full blur-xl"></div>
             <img 
               src="https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&q=80&w=800" 
               alt="Kids Styling" 
               className="rounded-sm shadow-2xl border border-zinc-800 relative z-10"
             />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-yellow-600 uppercase tracking-widest text-xs font-bold">Little Trendsetters</span>
            <h2 className="text-4xl font-serif text-white mt-4 mb-6">Fun Cuts for <br/> <span className="italic text-yellow-600">Cool Kids</span></h2>
            <p className="text-zinc-400 mb-8 font-light leading-relaxed">
              No more tears! Our dedicated kids' zone is designed to turn a haircut into an adventure. 
              We feature custom <strong>fantasy chairs (Vintage Cars & Jets)</strong> to keep them excited, 
              while our patient stylists work their magic.
            </p>
            <div className="flex gap-6">
                <div className="flex items-center gap-3 text-zinc-300">
                    <Car className="text-yellow-600 w-6 h-6" />
                    <span className="text-sm uppercase tracking-wider">Fantasy Chairs</span>
                </div>
                 <div className="flex items-center gap-3 text-zinc-300">
                    <Gamepad2 className="text-yellow-600 w-6 h-6" />
                    <span className="text-sm uppercase tracking-wider">Gaming & Fun</span>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-zinc-900 text-center">
        <div className="max-w-5xl mx-auto px-6">
           <h3 className="text-3xl font-serif text-white mb-12">More Than Just A Salon</h3>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Corporate Grooming",
                "Kids Styling",
                "Express Packages",
                "Product Consultation"
              ].map((extra, i) => (
                <div key={i} className="p-6 border border-zinc-800 rounded-sm hover:bg-zinc-800/50 transition-colors">
                  <p className="text-yellow-500 mb-2 text-xl">✦</p>
                  <p className="text-zinc-300 text-sm tracking-wide uppercase">{extra}</p>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Signature Looks Gallery */}
      <section id="gallery" className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <span className="text-yellow-600 uppercase tracking-widest text-xs font-bold">Portfolio</span>
              <h2 className="text-4xl font-serif mt-2 text-white">Signature Styles</h2>
            </div>
            <button className="hidden md:flex items-center text-zinc-400 hover:text-white mt-4 md:mt-0">
              Follow on Instagram <Instagram className="ml-2 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div key={idx} className="relative aspect-[3/4] overflow-hidden group">
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <p className="text-white tracking-widest uppercase text-sm border border-white/30 px-4 py-2">View Look</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section id="pricing" className="py-24 bg-zinc-900/30 border-y border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif text-white">Simple, Honest Pricing</h2>
            <p className="text-zinc-500 mt-4">Premium products. Expert hands. No hidden costs.</p>
          </div>

          <div className="bg-zinc-950 p-8 md:p-12 border border-zinc-800 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-600 text-black px-4 py-1 text-xs font-bold uppercase tracking-widest">
              Most Popular
            </div>
            <div className="space-y-6">
              {[
                { name: "Men's Expert Haircut", price: "₹450" },
                { name: "Beard Design & Shape", price: "₹350" },
                { name: "Complete Hair Spa", price: "₹1200+" },
                { name: "Signature Facial", price: "₹1800+" },
                { name: "The Gentleman's Package", price: "₹2800" },
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-end border-b border-dashed border-zinc-800 pb-2">
                  <span className="text-lg text-zinc-300">{item.name}</span>
                  <span className="text-xl font-serif text-yellow-600">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
               <button 
                 onClick={() => scrollToSection('contact')}
                 className="text-white text-sm border-b border-yellow-600 pb-1 hover:text-yellow-600 transition-colors"
               >
                 Download Full Menu
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif text-white mb-16">Loved by Our Clients</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Best grooming experience ever. They truly understand style and face structure.", name: "Arjun K.", role: "Model" },
              { text: "The vibe is unmatched. Premium service that is worth every penny.", name: "Sarah M.", role: "Fashion Designer" },
              { text: "Finally found a place that gets fades right. Highly recommended for men.", name: "Rohan D.", role: "Entrepreneur" }
            ].map((review, i) => (
              <div key={i} className="bg-zinc-900 p-8 relative">
                <div className="text-yellow-600 mb-4 flex justify-center">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-zinc-400 italic mb-6">"{review.text}"</p>
                <div className="border-t border-zinc-800 pt-4">
                  <p className="text-white font-serif">{review.name}</p>
                  <p className="text-xs text-zinc-600 uppercase mt-1">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-r from-zinc-900 to-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-12 text-center">
          {[
            { icon: <CheckCircle className="w-6 h-6" />, text: "Hygiene First" },
            { icon: <Star className="w-6 h-6" />, text: "Trend Experts" },
            { icon: <Sparkles className="w-6 h-6" />, text: "Premium Products" },
            { icon: <User className="w-6 h-6" />, text: "Personal Consultation" },
          ].map((feat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 opacity-70 hover:opacity-100 transition-opacity">
              <div className="text-yellow-600">{feat.icon}</div>
              <span className="text-zinc-300 text-sm tracking-widest uppercase">{feat.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Booking & Contact */}
      <section id="contact" className="py-24 bg-zinc-950 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
          
          {/* Booking Form */}
          <div className="bg-zinc-900 p-8 md:p-12 border-t-4 border-yellow-600">
            <h3 className="text-3xl font-serif text-white mb-2">Book Your Session</h3>
            <p className="text-zinc-500 mb-8 text-sm">Fill out the form below and we will confirm your slot instantly.</p>
            
            <form className="space-y-6" onSubmit={(e: React.FormEvent) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2 tracking-wider">Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-600 focus:outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2 tracking-wider">Phone</label>
                  <input type="tel" className="w-full bg-zinc-950 border border-zinc-800 text-white px-4 py-3 focus:border-yellow-600 focus:outline-none transition-colors" placeholder="+91 98765 43210" />
                </div>
              </div>
              
              <div>
                <label className="block text-xs uppercase text-zinc-500 mb-2 tracking-wider">Service</label>
                <select className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 px-4 py-3 focus:border-yellow-600 focus:outline-none transition-colors">
                  <option>Haircut & Styling</option>
                  <option>Beard Grooming</option>
                  <option>Facial / Skin Care</option>
                  <option>Hair Color / Spa</option>
                  <option>Package Consultation</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2 tracking-wider">Date</label>
                  <input type="date" className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 px-4 py-3 focus:border-yellow-600 focus:outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase text-zinc-500 mb-2 tracking-wider">Time</label>
                  <select className="w-full bg-zinc-950 border border-zinc-800 text-zinc-300 px-4 py-3 focus:border-yellow-600 focus:outline-none transition-colors">
                    <option>Morning (10AM - 12PM)</option>
                    <option>Afternoon (12PM - 4PM)</option>
                    <option>Evening (4PM - 8PM)</option>
                  </select>
                </div>
              </div>

              <button className="w-full bg-yellow-600 text-black font-bold uppercase tracking-widest py-4 hover:bg-yellow-500 transition-all flex justify-center items-center gap-2 group">
                Confirm Booking <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="flex flex-col space-y-10">
             <div>
               <h3 className="text-3xl font-serif text-white mb-6">Visit Us</h3>
               <p className="text-zinc-400 font-light leading-relaxed">
                 Experience luxury in the heart of the city. Valet parking available.
               </p>
             </div>

             <div className="space-y-6">
               <div className="flex items-start gap-4">
                 <div className="bg-zinc-900 p-3 text-yellow-600 rounded-sm">
                   <MapPin className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold uppercase text-sm tracking-wide">Location</h4>
                   <p className="text-zinc-500">Shop 4, Grand High Street, <br/>Jubilee Hills, Hyderabad</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-zinc-900 p-3 text-yellow-600 rounded-sm">
                   <Phone className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold uppercase text-sm tracking-wide">Contact</h4>
                   <p className="text-zinc-500">+91 90000 12345</p>
                   <p className="text-zinc-500">appointments@trendmaker.com</p>
                 </div>
               </div>

               <div className="flex items-start gap-4">
                 <div className="bg-zinc-900 p-3 text-yellow-600 rounded-sm">
                   <Clock className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="text-white font-bold uppercase text-sm tracking-wide">Hours</h4>
                   <p className="text-zinc-500">Tue - Sun: 10:00 AM - 9:00 PM</p>
                   <p className="text-zinc-600 text-sm">Closed on Mondays</p>
                 </div>
               </div>
             </div>

             <div className="pt-8 border-t border-zinc-800">
               <button className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors">
                 <Smartphone className="w-5 h-5" />
                 <span className="uppercase tracking-wider text-sm font-bold">Chat on WhatsApp</span>
               </button>
             </div>

             {/* NEW: Map Section */}
             <div className="w-full h-[300px] border border-zinc-800 rounded-sm overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.997576208082!2d78.3995893!3d17.4277732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91312563725f%3A0x6b47c0b96874e0!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true}
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
               ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 border-t border-zinc-900 text-center">
        <div className="text-2xl font-serif font-bold tracking-tighter text-white mb-4">
          TREND <span className="text-yellow-600">MAKER</span>
        </div>
        <p className="text-zinc-600 text-xs uppercase tracking-widest mb-6">Style • Precision • Luxury</p>
        <div className="flex justify-center gap-6 mb-8 text-zinc-500">
          <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          <Phone className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          <MapPin className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
        </div>
        <p className="text-zinc-800 text-xs">© 2024 Trend Maker Salon. All Rights Reserved.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919182029042"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 flex items-center justify-center hover:shadow-green-500/30 animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="currentColor"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;