import { motion } from 'framer-motion';
import { Award, Heart, Code } from 'lucide-react';
import React from 'react';

export default function About() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
            <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-6">
              About Jeff
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Hi, I'm Jeff
            </h2>
            
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
             I'm an independent web designer dedicated to modernizing local businesses. 
             I specialize in creating high-performance websites and setting up simple 
             automations that save you time and streamline your daily operations.
            </p>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            My approach is future-focused and AI-ready. I leverage the latest technology 
            to build solutions that are efficient, scalable, and effective—giving you 
            a competitive edge without the agency price tag or technical jargon.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Quality First</h3>
                  <p className="text-slate-600">Every project gets my full attention and expertise.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Local Focus</h3>
                  <p className="text-slate-600">I specialize in helping small businesses thrive online.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Modern Tech</h3>
                  <p className="text-slate-600">Fast, mobile-friendly sites built with the latest standards.</p>
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
}