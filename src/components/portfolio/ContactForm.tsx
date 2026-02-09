import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import React from 'react';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-blue-900 border border-blue-700 rounded-full text-sm text-blue-300 font-medium mb-6">
            Let's Talk
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get your free website audit and let's discuss how we can take your online presence to the next level.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                I typically respond within 24 hours. Let's start with a quick conversation about your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-sm text-slate-400">Email</div>
                  <div className="text-white font-medium">jeff@jerezweb.com</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Actual Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2"
          >
            {/* WEB3FORMS SETUP START */}
            <form 
              action="https://api.web3forms.com/submit" 
              method="POST" 
              className="bg-slate-800 border border-slate-700 rounded-2xl p-8 space-y-6"
            >
              {/* === INSERT YOUR ACCESS KEY HERE === */}
              <input type="hidden" name="access_key" value="22d5e084-a5b6-4d94-b788-0a44e0c37a52" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="john@business.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    name="business"
                    className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
                    placeholder="Your Business LLC"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Tell me about your project *
                </label>
                <textarea
                  name="message"
                  required
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder:text-slate-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none min-h-[150px] transition-all"
                  placeholder="What are your goals for your website?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group flex items-center justify-center font-bold"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-slate-500 text-center">
                By submitting this form, you agree to be contacted about your project.
              </p>
            </form>
            {/* WEB3FORMS SETUP END */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}