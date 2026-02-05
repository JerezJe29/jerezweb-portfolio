import { motion } from 'framer-motion';
import { Search, Palette, Rocket } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Audit',
      description: 'I analyze your current online presence and identify opportunities for growth and improvement.'
    },
    {
      number: '02',
      icon: Palette,
      title: 'Mockup',
      description: 'You get a complete visual preview before a single line of code is written. No surprises.'
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Launch',
      description: 'Your new website goes live—fast, optimized, and ready to bring in customers.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-amber-50 border border-amber-200 rounded-full text-sm text-amber-700 font-medium mb-6">
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            How We'll Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three clear steps from first conversation to your new website going live.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 mx-24"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 relative z-10">
                <div className="absolute -top-4 left-8 px-4 py-1 bg-blue-600 text-white font-bold rounded-full text-sm">
                  {step.number}
                </div>
                
                <div className="w-16 h-16 bg-blue-50 rounded-xl flex items-center justify-center mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}