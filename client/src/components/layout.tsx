import { Link } from "wouter";
import { Heart, Search, ShoppingBag, Instagram, Facebook, Twitter, Mail } from "lucide-react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-primary-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          {/* Mobile Menu Placeholder (Left) */}
          <div className="w-1/4 md:hidden">
            <span className="text-sm uppercase tracking-widest">Menu</span>
          </div>

          {/* Desktop Left Spacer */}
          <div className="hidden md:block w-1/4"></div>

          {/* Logo (Center) */}
          <div className="w-2/4 flex justify-center">
            <Link href="/">
              <a className="group relative flex items-center justify-center p-2 border-2 border-primary/60 rounded-full transition-all duration-500 hover:border-primary" data-testid="link-home">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  {/* Custom SVG Lotus with 5 petals */}
                  <svg viewBox="0 0 100 100" className="w-full h-full fill-primary transition-transform duration-500 group-hover:scale-110">
                    <path d="M50 20 C60 35 75 45 50 80 C25 45 40 35 50 20 Z" /> {/* Center Petal */}
                    <path d="M50 80 C65 65 85 55 90 35 C80 25 65 30 50 80 Z" /> {/* Right Outer */}
                    <path d="M50 80 C35 65 15 55 10 35 C20 25 35 30 50 80 Z" /> {/* Left Outer */}
                    <path d="M50 80 C60 70 80 65 80 45 C70 40 60 45 50 80 Z" /> {/* Right Inner */}
                    <path d="M50 80 C40 70 20 65 20 45 C30 40 40 45 50 80 Z" /> {/* Left Inner */}
                  </svg>
                </div>
              </a>
            </Link>
          </div>

          {/* Icons (Right) */}
          <div className="w-1/4 flex justify-end gap-6 text-heading">
            <button className="hover:text-white transition-colors" data-testid="icon-search">
              <Search strokeWidth={1.5} size={20} />
            </button>
            <button className="hidden md:block hover:text-white transition-colors" data-testid="icon-wishlist">
              <Heart strokeWidth={1.5} size={20} />
            </button>
            <button className="hover:text-white transition-colors" data-testid="icon-cart">
              <ShoppingBag strokeWidth={1.5} size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 pt-20 pb-10 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-heading tracking-widest">Contact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                +91 98765 43210<br/>
                concierge@svarnikaa.com
              </p>
            </div>
            
            <div className="space-y-4 flex flex-col items-center">
              <h4 className="font-serif text-xl text-heading tracking-widest">Svarnikaa</h4>
              <div className="flex gap-6 mt-2">
                <a href="#" className="text-muted-foreground hover:text-heading transition-colors"><Instagram strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-heading transition-colors"><Facebook strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-heading transition-colors"><Twitter strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-heading transition-colors"><Mail strokeWidth={1} size={20}/></a>
              </div>
            </div>

            <div className="space-y-4 md:text-right">
              <h4 className="font-serif text-xl text-heading tracking-widest">Legal</h4>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-primary transition-colors">Shipping & Returns</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-xs text-muted-foreground tracking-widest uppercase">
              &copy; {new Date().getFullYear()} Svarnikaa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
