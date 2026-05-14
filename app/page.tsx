"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const images = [
  { src: "/images/matrix-1.jpg", label: "Dharmic Hologram" },
  { src: "/images/matrix-2.jpg", label: "Hanzi/Kanji Glitch" },
  { src: "/images/matrix-3.jpg", label: "Jade & Brass Schematic" },
  { src: "/images/matrix-4.jpg", label: "Architectural Origami" },
  { src: "/images/matrix-5.jpg", label: "Bali-Manga" },
  { src: "/images/matrix-6.jpg", label: "8-Bit Cinematic Pixel Art" },
  { src: "/images/matrix-7.jpg", label: "Synthwave Hieroglyphics" },
  { src: "/images/matrix-8.jpg", label: "Giger-Biomechanical Flora" },
  { src: "/images/matrix-9.jpg", label: "Deep Room Cinematic" },
  { src: "/images/matrix-10.jpg", label: "Cyanotype Blueprint" },
  { src: "/images/matrix-11.jpg", label: "Red Thread of Fate" },
  { src: "/images/matrix-12.jpg", label: "Chiarascuro Oil Canvas" },
  { src: "/images/matrix-13.jpg", label: "Celadon Shadow Play" },
  { src: "/images/matrix-14.jpg", label: "High Contrast Blackwork Tattoo" },
  { src: "/images/matrix-15.jpg", label: "Liquid Chrome Ukiyo-e" },
  { src: "/images/matrix-16.jpg", label: "Kintsugi Porcelain" },
  { src: "/images/matrix-17.jpg", label: "Brutalist Obsidian" },
  { src: "/images/matrix-18.jpg", label: "Bioluminescent Apsara" },
  { src: "/images/matrix-19.jpg", label: "Terracotta Studio Macro" },
  { src: "/images/matrix-20.jpg", label: "Moth-Wing Macro Mosaic" },
]

export default function ImagoStorefront() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleGumroad = () => window.open('https://mothpeople.gumroad.com/l/imagostudio', '_blank')
  const handleHelio = () => window.open('https://moonpay.hel.io/pay/6a0432bdcaf1e716aeb7d296', '_blank')

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-100" style={{ fontFamily: "'Helvetica Neue', Helvetica, 'Calibri', Arial, sans-serif" }}>
      
      {/* 1. ULTRA-COMPACT BRAND HEADER */}
      <header className="pt-6 pb-4 px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <img src="/imago-logo.jpg" alt="Imago OS Logo" className="w-32 md:w-40 h-auto" />
          
          <div className="space-y-1">
            <p className="text-[8px] tracking-[0.4em] text-slate-400 uppercase font-bold">
              Module 01 // The 50 Formulas
            </p>
            <h1 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 italic">
              The Creative Master Prompt Matrix
            </h1>
          </div>
        </motion.div>
      </header>

      {/* 2. THE MASTER GRID */}
      <section className="max-w-screen-xl mx-auto px-4 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 relative">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className="relative aspect-square bg-slate-50 overflow-hidden cursor-crosshair border border-slate-100 z-10"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              <Image
                src={img.src}
                alt={img.label}
                fill
                className={`object-cover transition-all duration-1000 ${
                  hoveredIndex !== null && hoveredIndex !== i ? "opacity-20 scale-95 grayscale" : "opacity-100 scale-100"
                }`}
              />
              
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                  >
                    <div className="bg-white/95 border border-slate-200 px-4 py-2 shadow-2xl backdrop-blur-md">
                      <span className="text-[9px] font-mono tracking-wider text-slate-800 uppercase font-bold">
                        {img.label}
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        <p className="mt-4 text-center text-[9px] text-slate-400 italic">
          Note: All examples above were crafted using 'a multicoloured moth resting on the wall' as the main subject.
        </p>
      </section>

      {/* 3. SYSTEM COPY */}
      <section className="max-w-3xl mx-auto px-6 mb-16 space-y-12">
        
        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            What is this?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            A repository of 50 fully customised model-agnostic image prompt architectures for creatives, powered by **Imago OS**. These are not simple keywords but modular frameworks engineered for Midjourney, FLUX, and LLMs like ChatGPT and Gemini to produce unique, high-end commercial-grade art direction for illustrations and marketing materials.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            How does it work?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            After making payment, you will be directed to a Notion page with all 50 images. Simply duplicate the page by clicking on the &apos;duplicate&apos; option on the top of the page and insert it into your own Notion workspace. If you don&apos;t have Notion, you can simply open each image where you will find the full prompt structures and suffixes with the &quot;copy&quot; button on each column. Simply copy-paste these prompts into your workflow and replace the [Subject] and [aspect ratio] with your own.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            Who is it for?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            Built for creative directors, scriptwriters, storyboard artists and vibe coders who need to bridge the gap between abstract storytelling and precise visual output.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            Why get this?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            Eliminate prompt drift. These formulas bypass the &quot;AI-look&quot;, focusing on traditional painting textures; minimalist high-end aesthetics; and deep CGI, with minimalist and fusion styles blending eastern spirituality with digital art and cinematic narratives. Secure the creative baseline for your next major production or product brief.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 space-y-3 text-left">
          <p className="text-[10px] font-bold text-slate-800 leading-relaxed uppercase tracking-wider">
            • Each Imago Studio Module comes with 50 individually distinct styles and costs $9.00 USD.
          </p>
          <p className="text-[10px] font-bold text-slate-800 leading-relaxed uppercase tracking-wider">
            • Module 2 // The 50 Characters comes next, purely for character design and most useful for storyboard artists and art directors.
          </p>
        </div>

      </section>

      {/* 4. AUTHORIZATION */}
      <section className="max-w-xl mx-auto px-6 pb-20 text-center">
        <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm">
          <p className="text-[9px] font-bold text-slate-400 mb-6 uppercase tracking-[0.3em]">
            Authorise_Access // $9.00 USD
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGumroad}
              className="px-10 py-4 bg-[#1a1f2e] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all rounded-sm shadow-md"
            >
              Purchase via Card
            </button>
            <button 
              onClick={handleHelio}
              className="px-10 py-4 bg-white border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-slate-400 transition-all rounded-sm"
            >
              Purchase via Crypto
            </button>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-12 border-t border-slate-50 text-center">
        <p className="text-[9px] text-slate-300 tracking-[0.4em] uppercase font-bold">
          © 2026 Imago OS // Engineered by Mothpeople
        </p>
      </footer>
    </main>
  )
}