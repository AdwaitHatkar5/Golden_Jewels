import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart } from "lucide-react";

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
  return (
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
          <button className="bg-primary text-background px-6 py-3 flex items-center gap-2 uppercase text-xs tracking-widest font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl" data-testid={`add-to-cart-${product.id}`}>
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
  );
}
