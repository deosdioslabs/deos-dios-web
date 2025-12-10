'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden selection:bg-[#d4af37] selection:text-black">
      
      {/* Abstract Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-[#d4af37] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#a8a29e] rounded-full mix-blend-screen filter blur-[150px] opacity-5"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="text-xl font-serif tracking-widest font-bold text-[#d4af37]">DEOS DIOS</div>
        <div className="hidden md:flex space-x-8 font-sans text-xs tracking-[0.2em] uppercase text-gray-500">
          <Link href="#" className="hover:text-[#d4af37] transition-colors">Manifesto</Link>
          <Link href="#" className="hover:text-[#d4af37] transition-colors">Protocol</Link>
          <Link href="#" className="hover:text-[#d4af37] transition-colors">Login</Link>
        </div>
      </nav>

      {/* Hero Content */}
      <section className="relative z-10 flex-grow flex flex-col justify-center items-center text-center px-4">
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.p variants={item} className="font-sans text-[#d4af37] tracking-[0.4em] text-xs md:text-sm uppercase mb-8">
            The Odor Profile Protocol
          </motion.p>
          
          <motion.h1 variants={item} className="font-serif text-5xl md:text-8xl font-medium leading-[1.1] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600">
            Know Your <br /> Scent.
          </motion.h1>

          <motion.p variants={item} className="font-sans text-gray-400 text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Stop guessing. We analyze your physiology to match you with the only deodorant that actually works for you.
          </motion.p>

          <motion.div variants={item} className="flex flex-col md:flex-row gap-6 justify-center items-center">
            {/* Primary CTA */}
            <Link href="/protocol" className="group relative px-10 py-5 bg-[#d4af37] text-black font-sans text-sm font-bold tracking-widest overflow-hidden transition-all hover:bg-[#b5952f]">
              <span className="relative z-10 flex items-center gap-3">
                BEGIN PROTOCOL <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer / Scroll */}
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 2, duration: 1.5 }}
        className="relative z-10 pb-10 flex flex-col items-center justify-center text-gray-700 gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll to Learn</span>
        <ChevronDown size={14} className="animate-bounce" />
      </motion.div>

    </main>
  )
}
