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
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center px-6"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background z-10" />
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover opacity-40 scale-105"
        />
      </div>

      <div className="relative z-20 max-w-4xl space-y-8">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-[10px] text-primary uppercase tracking-[0.5em] font-light block"
        >
          {product.metal} • {product.weight}
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="font-serif text-5xl md:text-8xl text-heading tracking-tight leading-none"
        >
          {product.name}
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-2xl text-muted-foreground font-light italic max-w-2xl mx-auto"
        >
          {product.description}
        </motion.p>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "100px" }}
          transition={{ duration: 1.5, delay: 1 }}
          className="h-[1px] bg-primary/30 mx-auto mt-12"
        />
      </div>
    </motion.div>
  );
}
