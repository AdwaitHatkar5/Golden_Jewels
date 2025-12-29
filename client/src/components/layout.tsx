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
              <a className="font-serif text-3xl md:text-4xl tracking-widest font-bold text-primary hover:text-primary/90 transition-colors uppercase">
                Svarnikaa
              </a>
            </Link>
          </div>

          {/* Icons (Right) */}
          <div className="w-1/4 flex justify-end gap-6 text-primary">
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
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-white/5 pt-20 pb-10 mt-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left mb-16">
            <div className="space-y-4">
              <h4 className="font-serif text-xl text-primary tracking-widest">Contact</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                +91 98765 43210<br/>
                concierge@svarnikaa.com
              </p>
            </div>
            
            <div className="space-y-4 flex flex-col items-center">
              <h4 className="font-serif text-xl text-primary tracking-widest">Svarnikaa</h4>
              <div className="flex gap-6 mt-2">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Instagram strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Facebook strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter strokeWidth={1} size={20}/></a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Mail strokeWidth={1} size={20}/></a>
              </div>
            </div>

            <div className="space-y-4 md:text-right">
              <h4 className="font-serif text-xl text-primary tracking-widest">Legal</h4>
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
