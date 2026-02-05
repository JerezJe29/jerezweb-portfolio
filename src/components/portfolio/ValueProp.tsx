import { motion } from 'framer-motion';
import { Shield, Users, Zap } from 'lucide-react';

export default function ValueProp() {
  const values = [
    {
      icon: Users,
      title: 'Direct Partnership',
      description: 'Work directly with me—no account managers, no middlemen.'
    },
    {
      icon: Shield,
      title: 'No Jargon',
      description: 'Plain English communication. I explain everything clearly.'
    },
    {
      icon: Zap,
      title: 'Fast & Focused',
      description: 'Quick launches without sacrificing quality or attention to detail.'
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            No agencies, no jargon.
            <span className="block text-amber-400 mt-2">I work directly with you.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Building your online presence shouldn't be complicated or expensive.
            I keep it simple, transparent, and effective.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
              <p className="text-slate-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}