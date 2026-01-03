import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ShoppingCart, X } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    metal: string;
    weight: string;
    price: string;
    description: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group flex flex-col items-center text-center space-y-6"
      >
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-card/50 shadow-2xl">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 opacity-90 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <button 
              className="bg-primary text-background px-6 py-3 flex items-center gap-2 uppercase text-xs tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl" 
              data-testid={`add-to-cart-${product.id}`}
              onClick={() => setShowPopup(true)}
            >
              <ShoppingCart size={16} /> Add to Cart
            </button>
          </div>
        </div>

        <div className="space-y-3 pt-2 px-4">
          <h3 className="font-serif text-2xl text-heading tracking-wide group-hover:text-white transition-colors duration-300">
            {product.name}
          </h3>
          <p className="text-[10px] text-muted-foreground uppercase tracking-[0.3em] font-light">
            {product.metal} • {product.weight}
          </p>
          <p className="text-sm text-primary font-medium tracking-widest">
            {product.price}
          </p>
          <p className="text-xs text-muted-foreground/60 leading-relaxed italic line-clamp-2">
            "{product.description}"
          </p>
        </div>
      </motion.div>

      <AnimatePresence>
        {showPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={() => setShowPopup(false)}
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-card border border-primary/20 p-8 max-w-sm w-full text-center space-y-6 shadow-2xl"
            >
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-primary transition-colors"
              >
                <X size={20} />
              </button>
              <h3 className="font-serif text-2xl text-heading uppercase tracking-widest">Connect with us</h3>
              <div className="aspect-square w-full bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                {/* Image fetched from public/assets/images/instaQR.png */}
                <img 
                  src="/assets/images/instaQR.png" 
                  alt="Instagram QR" 
                  className="w-full h-full object-contain p-4"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/400x400/1a1608/D4AF37?text=Instagram+QR";
                  }}
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                Scan the QR code to follow us on Instagram and complete your purchase via DM.
              </p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
