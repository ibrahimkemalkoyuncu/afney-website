import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import { ThemeToggle } from './components/ThemeToggle';
import {
  Code,
  Cpu,
  Globe,
  Layers,
  Terminal,
  ChevronRight,
  Database,
  Box,
  Menu,
  X,
  Linkedin,
  Github,
  Mail,
  Server,
  Activity,
  ShieldCheck,
  Zap,
  ArrowRight,
  MapPin,
  Send,
  TrendingUp,
  Users,
  Award
} from 'lucide-react';

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

// Counter Component for Statistics
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Scroll Animation Hook
const useScrollAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return [ref, controls];
};

const AfneyWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCase, setActiveCase] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Legacy Modernizasyon (Eski Sistemi Yenileme)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Email.js Form Handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Lütfen tüm alanları doldurun!');
      return;
    }

    setIsSubmitting(true);

    // Initialize EmailJS with Public Key
    emailjs.init("nrRTTWCyRtRdN3JAd");

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        message: formData.message,
        to_name: "Afney Software House"
      };

      await emailjs.send(
        "service_bfa133l",
        "template_e4f9n5p",
        templateParams
      );

      toast.success('Mesajınız başarıyla gönderildi! 🎉');
      setFormData({
        name: '',
        email: '',
        projectType: 'Legacy Modernizasyon (Eski Sistemi Yenileme)',
        message: ''
      });
    } catch (error) {
      console.error('Email error:', error);
      toast.error('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const caseStudies = [
    {
      title: "Java'dan .NET Core'a Büyük Göç",
      sector: "Finans & Teknoloji",
      desc: "Oracle ve Java tabanlı miras (legacy) bir sistemin, veri kaybı yaşanmadan .NET Core ve MS SQL Server mimarisine taşınması.",
      result: "Sıfır veri kaybı, %40 performans artışı ve modern mimariye geçiş.",
      tech: [".NET Core", "Migration", "Oracle to MSSQL"]
    },
    {
      title: "Hastane Bilgi Yönetim Sistemi (HBYS)",
      sector: "Sağlık Teknolojileri",
      desc: "Medicana Hastaneler Grubu ölçeğinde yüksek hacimli hasta verilerinin yönetimi, e-Nabız ve Medula entegrasyonları.",
      result: "Milyonlarca satırlık verinin güvenli işlenmesi ve T-SQL performans optimizasyonu.",
      tech: ["T-SQL Tuning", "HealthTech", "SOAP/REST"]
    },
    {
      title: "IoT ve Donanım Entegrasyonu",
      sector: "Gömülü Sistemler",
      desc: "Kişi sayma sistemleri, DVR/NVR kamera entegrasyonları ve donanım ile konuşan web servisleri.",
      result: "Sahadaki donanımların bulut ile anlık ve kesintisiz haberleşmesi.",
      tech: ["IoT", "Hardware Integration", "Real-time Data"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      <Toaster position="top-right" />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/95 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white font-mono text-lg shadow-[0_0_15px_rgba(37,99,235,0.5)]">A</div>
            <div className="flex flex-col">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400 leading-none">AFNEY</span>
              <span className="text-[10px] text-blue-500 font-mono tracking-widest leading-none">SOFTWARE HOUSE</span>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            {['Uzmanlıklar', 'Projeler', 'Teknoloji', 'Kurumsal'].map((item) => (
              <motion.button
                key={item}
                whileHover={{ y: -2 }}
                onClick={() => scrollToSection(item.toLowerCase().replace('ı', 'i').replace('ş', 's').replace('ç', 'c'))}
                className="hover:text-blue-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </motion.button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('iletisim')}
              className="bg-white text-slate-950 hover:bg-slate-200 px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)]"
            >
              İletişime Geç
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 shadow-2xl"
          >
            {['Uzmanlıklar', 'Projeler', 'Teknoloji', 'Kurumsal'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('ı', 'i').replace('ş', 's'))}
                className="text-left text-slate-300 hover:text-blue-400 py-3 border-b border-slate-800/50 font-medium"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden flex items-center">
        {/* Abstract Background Elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none translate-x-1/3 -translate-y-1/4"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.07, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none -translate-x-1/4 translate-y-1/4"
        ></motion.div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/30 border border-blue-900/50 text-blue-400 text-xs font-mono mb-8 backdrop-blur-sm"
              >
                <ShieldCheck size={14} />
                <span>Enterprise Grade Software Engineering</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight"
              >
                Karmaşık Sistemleri <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-white">Mükemmelliğe</span> <br />
                Dönüştürüyoruz.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed border-l-2 border-slate-800 pl-6"
              >
                20 yıllık kıdemli mühendislik deneyimiyle; miras sistemleri modernize ediyor, yüksek performanslı mimariler kuruyor ve işletmenizi geleceğe taşıyoruz.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('projeler')}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 group"
                >
                  Başarı Hikayeleri <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection('uzmanliklar')}
                  className="bg-slate-900/50 border border-slate-700 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-bold transition-colors backdrop-blur-sm"
                >
                  Teknik Yetkinlikler
                </motion.button>
              </motion.div>
            </div>

            {/* Code Visualization Block */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-30"></div>
              <div className="relative bg-slate-950 border border-slate-800 rounded-2xl p-6 shadow-2xl font-mono text-sm overflow-hidden">
                <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  </div>
                  <div className="text-xs text-slate-500">Afney.Architecture.Core</div>
                </div>

                <div className="space-y-1">
                  <div className="text-slate-500">// Afney Standartları: Clean Code & High Performance</div>
                  <div className="flex">
                    <span className="text-purple-400 w-24">namespace</span>
                    <span className="text-white">Afney.Solutions</span>
                  </div>
                  <div className="text-slate-600">{`{`}</div>
                  <div className="pl-4 flex">
                    <span className="text-blue-400 w-24">public class</span>
                    <span className="text-yellow-300">EnterpriseMigration</span>
                  </div>
                  <div className="pl-4 text-slate-600">{`{`}</div>
                  <div className="pl-8 text-slate-400 flex gap-2">
                    <span className="text-blue-400">private readonly</span>
                    <span>ILegacySystem _legacy;</span>
                  </div>
                  <div className="pl-8 text-slate-400 flex gap-2">
                    <span className="text-blue-400">private readonly</span>
                    <span>IModernCloud _cloud;</span>
                  </div>
                  <div className="pl-8 py-2"></div>
                  <div className="pl-8 flex">
                    <span className="text-blue-400 mr-2">public async</span>
                    <span className="text-yellow-300">Task&lt;Result&gt;</span>
                    <span className="text-sky-300 ml-2">TransformAsync()</span>
                  </div>
                  <div className="pl-8 text-slate-600">{`{`}</div>
                  <div className="pl-12 text-slate-500">// Veri kaybı olmadan modernizasyon</div>
                  <div className="pl-12 text-green-400">await _legacy.MigrateTo(.NET_Core);</div>
                  <div className="pl-12 text-green-400">await _cloud.OptimizePerformance(scale: 10x);</div>
                  <div className="pl-12 text-purple-400 mt-2">return Result.Success;</div>
                  <div className="pl-8 text-slate-600">{`}`}</div>
                  <div className="pl-4 text-slate-600">{`}`}</div>
                  <div className="text-slate-600">{`}`}</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section - NEW! */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-16 bg-gradient-to-b from-slate-900/50 to-transparent border-y border-slate-900/50"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div variants={scaleIn} className="text-center p-8 rounded-2xl bg-slate-950/50 border border-slate-800 backdrop-blur-sm">
              <div className="w-16 h-16 bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-blue-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter target={20} suffix="+" />
              </div>
              <div className="text-slate-400">Yıllık Deneyim</div>
            </motion.div>

            <motion.div variants={scaleIn} className="text-center p-8 rounded-2xl bg-slate-950/50 border border-slate-800 backdrop-blur-sm">
              <div className="w-16 h-16 bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-green-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter target={100} suffix="+" />
              </div>
              <div className="text-slate-400">Başarılı Proje</div>
            </motion.div>

            <motion.div variants={scaleIn} className="text-center p-8 rounded-2xl bg-slate-950/50 border border-slate-800 backdrop-blur-sm">
              <div className="w-16 h-16 bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap size={32} className="text-purple-400" />
              </div>
              <div className="text-5xl font-bold text-white mb-2">
                <Counter target={99} suffix=".9%" />
              </div>
              <div className="text-slate-400">Uptime Garantisi</div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Expertise / Services Section */}
      <motion.section
        id="uzmanliklar"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="py-24 bg-slate-900/50 relative"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">NE YAPIYORUZ?</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Mühendislik Odaklı Çözümler</h3>
            <p className="text-slate-400">
              Hazır paketler değil, işinizin DNA'sına uygun özel mimariler tasarlıyoruz. Tecrübemiz, en zorlu entegrasyonların garantisidir.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={scaleIn} whileHover={{ y: -10 }} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-blue-500/50 transition-all group duration-300">
              <div className="w-14 h-14 bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Server size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Legacy Modernizasyon</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Eski Java, Oracle veya Monolith yapıdaki sistemlerinizi, veri kaybı yaşamadan modern .NET Core ve Microservices mimarisine taşıyoruz.
              </p>
              <ul className="text-sm text-slate-500 space-y-2 font-mono">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Veri Migrasyonu</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>Clean Architecture</li>
              </ul>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -10 }} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-red-500/50 transition-all group duration-300">
              <div className="w-14 h-14 bg-red-900/20 rounded-xl flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors">
                <Activity size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">Sağlık & FinTech</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                e-Nabız, Medula gibi hassas entegrasyonlar ve yüksek veri güvenliği gerektiren sağlık/finans projelerinde derin uzmanlık.
              </p>
              <ul className="text-sm text-slate-500 space-y-2 font-mono">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>HBYS Entegrasyonları</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>KVKK Uyumluluğu</li>
              </ul>
            </motion.div>

            <motion.div variants={scaleIn} whileHover={{ y: -10 }} className="bg-slate-950 p-8 rounded-2xl border border-slate-800 hover:border-green-500/50 transition-all group duration-300">
              <div className="w-14 h-14 bg-green-900/20 rounded-xl flex items-center justify-center text-green-400 mb-6 group-hover:bg-green-600 group-hover:text-white transition-colors">
                <Cpu size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">IoT & Gömülü Sistemler</h4>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Donanım ile konuşan yazılımlar. DVR/NVR, Kişi Sayma ve sahadan anlık veri toplayan endüstriyel çözümler.
              </p>
              <ul className="text-sm text-slate-500 space-y-2 font-mono">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>MQTT & TCP/IP</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>Real-time Dashboard</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Real Case Studies Section */}
      <motion.section
        id="projeler"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-24 bg-slate-950 border-y border-slate-900"
      >
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">DENEYİM</h2>
              <h3 className="text-3xl font-bold text-white mb-6">Gerçek Senaryolar,<br />Kanıtlanmış Başarılar.</h3>
              <p className="text-slate-400 mb-8">
                Afney ekibi olarak, teorik kodlamadan öte, sahada çalışmış, stresi test edilmiş ve milyonlarca işlemi yönetmiş sistemlerin mimarıyız.
              </p>
              <div className="space-y-4">
                {caseStudies.map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ x: 5 }}
                    onClick={() => setActiveCase(index)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${activeCase === index ? 'bg-slate-800 border-blue-500/50 shadow-lg' : 'bg-transparent border-transparent hover:bg-slate-900'}`}
                  >
                    <div className="font-bold text-white mb-1">{item.title}</div>
                    <div className="text-xs text-slate-500 font-mono">{item.sector}</div>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeCase}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="md:w-2/3"
            >
              <div className="h-full bg-slate-900 rounded-2xl p-8 border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Globe size={120} />
                </div>

                <div className="relative z-10">
                  <div className="inline-block bg-blue-900/30 text-blue-400 text-xs px-3 py-1 rounded-full mb-6 border border-blue-900/50">
                    Vaka Analizi #{activeCase + 1}
                  </div>

                  <h4 className="text-2xl font-bold text-white mb-6">{caseStudies[activeCase].title}</h4>

                  <div className="space-y-8">
                    <div>
                      <h5 className="text-sm text-slate-500 font-bold uppercase mb-2">Problem & Süreç</h5>
                      <p className="text-slate-300 leading-relaxed">
                        {caseStudies[activeCase].desc}
                      </p>
                    </div>

                    <div>
                      <h5 className="text-sm text-slate-500 font-bold uppercase mb-2">Sonuç</h5>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
                        <p className="text-white font-medium">
                          {caseStudies[activeCase].result}
                        </p>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm text-slate-500 font-bold uppercase mb-3">Kullanılan Teknolojiler</h5>
                      <div className="flex flex-wrap gap-2">
                        {caseStudies[activeCase].tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-950 border border-slate-700 rounded text-xs text-slate-300 font-mono">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Tech Stack - Detailed */}
      <motion.section
        id="teknoloji"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 bg-slate-900/30"
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white">Teknik Cephanemiz</h2>
            <p className="text-slate-400 mt-2">Sadece popüler olanı değil, işe yarayanı kullanıyoruz.</p>
          </motion.div>

          <motion.div variants={staggerContainer} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            {[
              ".NET 8/9", "C#", "Web API", "Dapper", "EF Core", "MS SQL",
              "Angular", "React", "Docker", "Kubernetes", "Redis", "RabbitMQ",
              "Azure DevOps", "Git", "T-SQL", "ElasticSearch", "Microservices", "Clean Arch"
            ].map((tech) => (
              <motion.div
                key={tech}
                variants={scaleIn}
                whileHover={{ scale: 1.05, borderColor: "rgb(59 130 246 / 0.5)" }}
                className="bg-slate-950 border border-slate-800 py-4 px-2 rounded-lg text-slate-400 font-mono text-sm hover:text-blue-400 transition-colors cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Founder / About Short */}
      <motion.section
        id="kurumsal"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="py-20 border-t border-slate-900"
      >
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-blue-900/20 to-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-3/4">
              <h3 className="text-2xl font-bold text-white mb-4">Liderlik & Vizyon</h3>
              <p className="text-slate-300 leading-relaxed mb-6">
                Afney Software House, İbrahim Kemal Koyuncu liderliğinde, 20 yıllık saha tecrübesinin ürünüdür.
                Belediyelerden hastanelere, e-ticaret devlerinden endüstriyel tesislere kadar onlarca farklı sektörde,
                kritik görevlerde bulunmuş bir mühendislik aklıyla yönetilmektedir.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://github.com/ibrahimkemalkoyuncu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={20} /> <span className="text-sm">GitHub Profili</span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  href="https://linkedin.com/in/ibrahimkemalkoyuncu"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} /> <span className="text-sm">LinkedIn Profili</span>
                </motion.a>
              </div>
            </div>
            <div className="md:w-1/4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-32 h-32 bg-slate-800 rounded-full flex items-center justify-center border-4 border-slate-700 shadow-xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-transparent transition-colors"></div>
                <span className="text-4xl font-bold text-slate-500 group-hover:text-blue-400 transition-colors">İK</span>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section - WITH WORKING FORM */}
      <motion.section
        id="iletisim"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUp}
        className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 pointer-events-none"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left Side: Text Info */}
            <div>
              <h2 className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">İLETİŞİM</h2>
              <h3 className="text-3xl font-bold text-white mb-6">Teknik Bir Kahve İçelim.</h3>
              <p className="text-slate-400 mb-10 leading-relaxed">
                İster yeni bir proje fikri, ister tıkanmış bir miras (legacy) sistem dönüşümü.
                Standart satış konuşmaları değil, doğrudan mühendislik çözümleri üzerine konuşmak için formu doldurun.
              </p>

              <div className="space-y-6">
                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 text-blue-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">E-Posta</h4>
                    <a href="mailto:ibrahimkemalkoyuncu@gmail.com" className="text-slate-400 hover:text-blue-400 transition-colors">
                      ibrahimkemalkoyuncu@gmail.com
                    </a>
                  </div>
                </motion.div>

                <motion.div whileHover={{ x: 5 }} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center border border-slate-800 text-blue-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Ofis</h4>
                    <p className="text-slate-400">
                      İstanbul (Asya), Maltepe<br />
                      Türkiye
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Right Side: Working Form */}
            <motion.div
              variants={scaleIn}
              className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-800 shadow-2xl"
            >
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Ad Soyad</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                      placeholder="Adınız"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 uppercase mb-2">E-Posta</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                      placeholder="sirket@ornek.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Proje Türü</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all appearance-none cursor-pointer"
                  >
                    <option>Legacy Modernizasyon (Eski Sistemi Yenileme)</option>
                    <option>Özel Yazılım Geliştirme (.NET Core)</option>
                    <option>HBYS / Sağlık Entegrasyonu</option>
                    <option>IoT ve Gömülü Sistemler</option>
                    <option>Danışmanlık / Code Review</option>
                    <option>Diğer</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-700"
                    placeholder="Projenizden veya sorununuzdan kısaca bahsedin..."
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20 group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Gönderiliyor...</span>
                    </>
                  ) : (
                    <>
                      <span>Gönder</span>
                      <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-xs text-slate-600">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 Afney Software House. Engineering Precision.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span>Gizlilik Politikası</span>
            <span>Hizmet Şartları</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Icon component needed for the case study checkmark
const CheckCircle = ({ size, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default AfneyWebsite;