import { Layout } from "@/components/layout";
import { ProductCard } from "@/components/product-card";
import { assets, products } from "@/lib/data";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Crown, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: "start",
    dragFree: true,
    containScroll: "trimSnaps"
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!emblaApi) return;
    
    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    
    emblaApi.on("select", onSelect);
    onSelect();
    
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const scroll = (direction: "prev" | "next") => {
    if (direction === "prev") emblaApi?.scrollPrev();
    else emblaApi?.scrollNext();
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-primary text-xs uppercase tracking-[0.2em] block mb-2">— The Collection —</span>
          <h2 className="font-serif text-4xl md:text-5xl text-heading">Available Stock</h2>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => scroll("prev")}
            disabled={!canScrollPrev}
            className="p-2 border border-primary/30 text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            data-testid="carousel-prev"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll("next")}
            disabled={!canScrollNext}
            className="p-2 border border-primary/30 text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            data-testid="carousel-next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-10 lg:gap-16">
          {products.map((product) => (
            <div key={product.id} className="flex-[0_0_85%] md:flex-[0_0_45%] lg:flex-[0_0_28%] min-w-0">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={assets.hero} 
            alt="Luxury Jewelry" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center space-y-6 max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-heading font-medium tracking-tight leading-none mb-4">
              Svarnikaa
            </h1>
            <p className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-foreground/80 font-light">
              Crafted in Gold. Curated with Grace.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="pt-8"
          >
            <button className="px-8 py-3 bg-primary text-background hover:bg-primary/80 transition-all duration-500 uppercase text-xs tracking-[0.2em] font-medium">
              View Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 px-6 container mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-2xl mx-auto space-y-6"
        >
          <span className="text-primary text-xs uppercase tracking-[0.2em] block mb-4">— The Collection —</span>
          <h2 className="font-serif text-4xl md:text-5xl text-heading">
            Timeless Elegance
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed">
            Each piece in our collection is a testament to the artisan's touch. 
            Inspired by heritage, crafted for the modern muse. 
            Discover jewelry that tells a story of gold and grace.
          </p>
        </motion.div>
      </section>

      {/* Product Carousel */}
      <section className="py-12 px-6 container mx-auto">
        <ProductCarousel />
      </section>

      {/* Feature Highlights */}
      <section className="py-32 px-6 bg-secondary/20 mt-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center space-y-4 p-6 border border-white/5 hover:border-primary/20 transition-colors duration-500">
            <ShieldCheck className="text-heading w-8 h-8 mb-2" strokeWidth={1} />
            <h3 className="font-serif text-xl text-heading tracking-wide">Hallmark Certified</h3>
            <p className="text-sm text-muted-foreground font-light">Guaranteed purity and authenticity in every grain of gold.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border border-white/5 hover:border-primary/20 transition-colors duration-500">
            <Leaf className="text-heading w-8 h-8 mb-2" strokeWidth={1} />
            <h3 className="font-serif text-xl text-heading tracking-wide">Ethically Sourced</h3>
            <p className="text-sm text-muted-foreground font-light">Responsible mining and sustainable practices at our core.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 p-6 border border-white/5 hover:border-primary/20 transition-colors duration-500">
            <Crown className="text-heading w-8 h-8 mb-2" strokeWidth={1} />
            <h3 className="font-serif text-xl text-heading tracking-wide">Handcrafted Excellence</h3>
            <p className="text-sm text-muted-foreground font-light">Master artisans creating heirlooms for generations to come.</p>
          </div>
        </div>
      </section>

      {/* Editorial Section */}
      <section className="py-24 px-0 md:px-6 container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 aspect-[3/4] md:aspect-[4/5] relative overflow-hidden"
          >
            <img 
              src={assets.editorial} 
              alt="Editorial Model" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2s]"
            />
          </motion.div>
          
          <div className="w-full md:w-1/2 px-6 md:px-0 text-center md:text-left space-y-8">
            <span className="text-primary text-xs uppercase tracking-[0.2em]">— Our Heritage</span>
            <h2 className="font-serif text-4xl md:text-6xl text-heading leading-tight">
              Where Tradition <br/> Meets Modernity
            </h2>
            <p className="text-muted-foreground font-light leading-loose max-w-lg">
              Svarnikaa is born from a desire to preserve the intricate art of Indian jewelry making while translating it for the contemporary world. 
              We believe luxury is not just about price, but about the patience, skill, and soul poured into every creation.
            </p>
            <button className="pt-4 text-xs font-medium tracking-[0.2em] uppercase text-primary flex items-center gap-2 mx-auto md:mx-0 group">
              Read Our Story <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
