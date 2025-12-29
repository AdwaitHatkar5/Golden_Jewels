import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    metal: string;
    weight: string;
    image: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group flex flex-col items-center text-center space-y-4"
    >
      <div className="relative w-full aspect-square overflow-hidden bg-card/50">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
      </div>

      <div className="space-y-2 pt-2">
        <h3 className="font-serif text-2xl text-primary tracking-wide group-hover:text-white transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">
          {product.metal} • {product.weight}
        </p>
      </div>

      <button className="mt-2 text-xs font-medium tracking-[0.2em] uppercase text-primary border-b border-primary/30 pb-1 hover:text-white hover:border-white transition-all flex items-center gap-2">
        Enquire <ArrowUpRight size={14} />
      </button>
    </motion.div>
  );
}
