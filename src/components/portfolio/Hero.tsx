import { Button } from '../ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-amber-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-sm text-blue-700 font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Independent Web Designer
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
        >
          Simple, High-Performing
          <span className="block bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Websites for Local Businesses
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Your business deserves a website that works as hard as you do.
          Let's build something that actually brings in customers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            Get a Free Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex items-center justify-center gap-8 text-sm text-slate-500"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Available for new projects
          </div>
          <div className="hidden md:block w-px h-4 bg-slate-300"></div>
          <div className="hidden md:block">Fast turnaround</div>
        </motion.div>
      </div>
    </section>
  );
}