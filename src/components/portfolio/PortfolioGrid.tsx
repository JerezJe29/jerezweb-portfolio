import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import React from 'react';

export default function PortfolioGrid() {
  const projects = [
    {
      title: 'Big Rons Tree Services',
      category: 'Arboriculture, Tree Case',
      image: 'https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-amber-500 to-orange-600',
      link: 'https://bigronstreeservices.netlify.app/' // <--- PASTE YOUR LINK HERE
    },
    {
      title: 'Evelyns Quilters',
      category: 'Health & Wellness',
      image: 'https://images.unsplash.com/photo-1594526761005-4ccdbd608d2b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      color: 'from-green-500 to-teal-600',
      link: 'https://evelynsquilters.netlify.app/' // <--- PASTE YOUR LINK HERE
    },
    {
      title: 'Construction Company',
      category: 'Home Services',
      image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
      color: 'from-slate-600 to-slate-800',
      link: 'https://YOUR-LINK-HERE.netlify.app' // <--- PASTE YOUR LINK HERE
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm text-blue-700 font-medium mb-6">
            Recent Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Websites That Deliver Results
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-4">
            Real projects for real businesses. Each one designed to convert visitors into customers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* THE LINK WRAPPER STARTS HERE */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* The Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500 flex items-center justify-center`}>
                      <ExternalLink className="w-12 h-12 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </a>
              {/* THE LINK WRAPPER ENDS HERE */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}