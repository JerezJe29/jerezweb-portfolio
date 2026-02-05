import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Jeff Jerez. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for small businesses</span>
          </div>
        </div>
      </div>
    </footer>
  );
}