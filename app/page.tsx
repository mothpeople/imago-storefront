"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

// Module Data Setup
const module1Images = [
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

const module2Images = [
  { src: "/images/matrix-21.jpg", label: "The Minimalist Stick-Man" },
  { src: "/images/matrix-22.jpg", label: "Anodized Titanium Mecha" },
  { src: "/images/matrix-23.jpg", label: "Chibi Isometric Toy Figurine" },
  { src: "/images/matrix-24.jpg", label: "The 30-Second Ink Gesture" },
  { src: "/images/matrix-25.jpg", label: "Classroom Chalkboard Sketch" },
  { src: "/images/matrix-26.jpg", label: "The Bioluminescent Apsara" },
  { src: "/images/matrix-27.jpg", label: "Wayang Kulit Shadow Puppet" },
  { src: "/images/matrix-28.jpg", label: "Iridescent Glass Prism Entity" },
  { src: "/images/matrix-29.jpg", label: "Terracotta Warrior" },
  { src: "/images/matrix-30.jpg", label: "Smoldering Charcoal Deity" },
  { src: "/images/matrix-31.jpg", label: "The Fashion Editorial Watercolor" },
  { src: "/images/matrix-32.jpg", label: "Watercolour & Ink Wash Cartoon" },
  { src: "/images/matrix-33.jpg", label: "Copic Marker Concept Art" },
  { src: "/images/matrix-34.jpg", label: "Oxidized Copper" },
  { src: "/images/matrix-35.jpg", label: "The Noir Silhouette" },
  { src: "/images/matrix-36.jpg", label: "Cyberpunk Woodblock Print" },
  { src: "/images/matrix-37.jpg", label: "Risograph Print Character" },
  { src: "/images/matrix-38.jpg", label: "High Contrast Comic Ink" },
  { src: "/images/matrix-39.jpg", label: "Folk Art Paper Cutout" },
  { src: "/images/matrix-40.jpg", label: "Mid-Century Editorial Cartoon" },
]

// Product details
const PRODUCTS = {
  m1: { id: "m1", name: "Module 01: The 50 Formulas", price: 9.00, urlGumroad: "https://mothpeople.gumroad.com/l/imagostudio", urlHelio: "https://moonpay.hel.io/pay/6a0432bdcaf1e716aeb7d296" },
  m2: { id: "m2", name: "Module 02: The 50 Characters", price: 9.00, urlGumroad: "https://mothpeople.gumroad.com/l/imagostudio2", urlHelio: "https://moonpay.hel.io/x/imagostudio2" },
  bundle: { id: "bundle", name: "Imago Studio: Bundle (Modules 01 & 02)", price: 15.00, urlGumroad: "https://mothpeople.gumroad.com/l/imagostudiob1", urlHelio: "https://moonpay.hel.io/x/imagostudiob1" }
}

// Global dynamic copy configuration
const SYSTEM_COPY = {
  m1: {
    subtitle: "Module 01 // The 50 Formulas",
    title: "The Creative Master Prompt Matrix",
    gridNote: "Note: All examples above were crafted using 'a multicoloured moth resting on the wall' as the main subject.",
    whatIsThis: "A repository of 50 fully customised model-agnostic image prompt architectures for creatives, powered by Imago OS. These are not simple keywords but modular frameworks engineered for Midjourney, FLUX, and LLMs like ChatGPT and Gemini to produce unique, high-end commercial-grade art direction for illustrations and marketing materials.",
    howDoesItWork: "After making payment, you will be directed to a Notion page with all 50 configurations. Simply duplicate the page by clicking on the 'duplicate' option on the top of the page and insert it into your own Notion workspace. If you don't have Notion, you can simply open each image where you will find the full prompt structures and suffixes with the \"copy\" button on each column. Simply copy-paste these prompts into your workflow and replace the [Subject] and [aspect ratio] with your own.",
    whoIsItFor: "Built for creative directors, scriptwriters, storyboard artists and vibe coders who need to bridge the gap between abstract storytelling and precise visual output.",
    whyGetThis: "Eliminate prompt drift. These formulas bypass the \"AI-look\", focusing on traditional painting textures; minimalist high-end aesthetics; and deep CGI, with minimalist and fusion styles blending eastern spirituality with digital art and cinematic narratives. Secure the creative baseline for your next major production or product brief.",
    bullet1: "Each Imago Studio Module comes with 50 individually distinct styles and costs $9.00 USD.",
    bullet2: "Module 2 // The 50 Characters is engineered purely for character design, storyboard artists and art directors."
  },
  m2: {
    subtitle: "Module 02 // The 50 Characters",
    title: "The Character Prompt Matrix",
    gridNote: "Note: All examples above were crafted using a reference image of a boy as the main subject and prompted into a 3-panel layout.",
    whatIsThis: "A repository of 50 fully customised model-agnostic image prompt architectures for character design, powered by Imago OS. These are not simple keywords but modular frameworks engineered for Midjourney, FLUX, and LLMs like ChatGPT and Gemini to produce unique, high-end character concepts for storyboard illustrations, digital storytelling and marketing pitches.",
    howDoesItWork: "After making payment, you will be directed to a Notion page with all 50 images. Simply duplicate the page by clicking on the 'duplicate' option on the top of the page and insert it into your own Notion workspace. If you don't have Notion, you can simply open each image where you will find the full prompt structures and suffixes with the \"copy\" button on each column. Simply copy-paste these prompts into your workflow and replace the [Subject] and [aspect ratio] with your own.",
    whoIsItFor: "Built for art directors, storyboard artists, animators, filmmakers, game designers, digital artists and creative professionals working with AI workflows who need to bridge the gap between abstract storytelling and precise visual output.",
    whyGetThis: "Eliminate prompt drift. These formulas bypass the \"AI-look\", focusing on traditional painting textures; minimalist high-end aesthetics; and deep CGI, with minimalist and fusion styles blending eastern spirituality with digital art and cinematic narratives. Secure the creative baseline for your next major production or product brief.",
    bullet1: "Each Imago Studio Module comes with 50 individually distinct styles and costs $9.00 USD.",
    bullet2: "Module 3 // The 50 Shots comes next, purely for filmmakers, cinematographers and editors working on AI videos and films"
  }
}

export default function App() {
  const [activeTab, setActiveTab] = useState<"m1" | "m2">("m1")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [cart, setCart] = useState<{ [key: string]: boolean }>({ m1: false, m2: false })
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart state from localStorage if available
  useEffect(() => {
    const savedCart = localStorage.getItem("imago_cart")
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error(e)
      }
    }
  }, [])

  const saveCart = (newCart: { [key: string]: boolean }) => {
    setCart(newCart)
    localStorage.setItem("imago_cart", JSON.stringify(newCart))
  }

  const toggleCartItem = (productId: "m1" | "m2") => {
    const newCart = { ...cart, [productId]: !cart[productId] }
    saveCart(newCart)
    if (!cart[productId]) {
      setIsCartOpen(true) // auto-open cart drawer when item is added
    }
  }

  const getCartCount = () => {
    return Object.values(cart).filter(Boolean).length
  }

  const getCartTotal = () => {
    const count = getCartCount()
    if (count === 2) return PRODUCTS.bundle.price
    let total = 0
    if (cart.m1) total += PRODUCTS.m1.price
    if (cart.m2) total += PRODUCTS.m2.price
    return total
  }

  const handleCheckout = (paymentType: "card" | "crypto") => {
    const count = getCartCount()
    if (count === 2) {
      window.open(paymentType === "card" ? PRODUCTS.bundle.urlGumroad : PRODUCTS.bundle.urlHelio, "_blank")
    } else if (cart.m1) {
      window.open(paymentType === "card" ? PRODUCTS.m1.urlGumroad : PRODUCTS.m1.urlHelio, "_blank")
    } else if (cart.m2) {
      window.open(paymentType === "card" ? PRODUCTS.m2.urlGumroad : PRODUCTS.m2.urlHelio, "_blank")
    }
  }

  const imagesToDisplay = activeTab === "m1" ? module1Images : module2Images
  const currentCopy = SYSTEM_COPY[activeTab]

  return (
    <main className="min-h-screen bg-white text-slate-900 antialiased selection:bg-purple-100" style={{ fontFamily: "'Helvetica Neue', Helvetica, 'Calibri', Arial, sans-serif" }}>
      
      {/* FLOAT CART BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setIsCartOpen(true)}
          className="relative bg-[#1a1f2e] text-white p-4 rounded-full shadow-2xl hover:bg-black transition-all flex items-center justify-center border border-slate-800"
        >
          {/* Custom Minimalist Cart SVG */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          {getCartCount() > 0 && (
            <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
      </div>

      {/* 1. ULTRA-COMPACT BRAND HEADER */}
      <header className="pt-8 pb-4 px-6 text-center border-b border-slate-50">
        <motion.div 
          initial={{ opacity: 0, y: -10 }} 
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center gap-2"
        >
          <img src="/imago-logo.jpg" alt="Imago OS Logo" className="w-32 md:w-40 h-auto" />
          
          <div className="space-y-1">
            <p className="text-[8px] tracking-[0.4em] text-slate-400 uppercase font-bold">
              Imago Studio // Engineering System
            </p>
            <h1 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900 italic">
              {currentCopy.title}
            </h1>
          </div>
        </motion.div>
      </header>

      {/* 2. TAB SYSTEM (SYMMETRICAL GRID ALIGNMENT COMPLETED) */}
      <section className="max-w-screen-xl mx-auto px-4 pt-6 pb-2">
        <div className="flex justify-center border-b border-slate-100 max-w-md mx-auto">
          <button 
            onClick={() => { setActiveTab("m1"); setHoveredIndex(null); }}
            className="flex-1 py-3 px-2 text-center transition-all relative flex flex-col items-center justify-center gap-0.5"
          >
            <span className="text-[7px] md:text-[8px] tracking-[0.2em] uppercase font-mono text-slate-400">
              Module 01
            </span>
            <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] transition-colors duration-200 ${
              activeTab === "m1" ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-600 font-normal"
            }`}>
              The 50 Formulas
            </span>
            {activeTab === "m1" && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950" />
            )}
          </button>
          
          <button 
            onClick={() => { setActiveTab("m2"); setHoveredIndex(null); }}
            className="flex-1 py-3 px-2 text-center transition-all relative flex flex-col items-center justify-center gap-0.5"
          >
            <span className="text-[7px] md:text-[8px] tracking-[0.2em] uppercase font-mono text-slate-400">
              Module 02
            </span>
            <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.2em] transition-colors duration-200 ${
              activeTab === "m2" ? "text-slate-900 font-bold" : "text-slate-400 hover:text-slate-600 font-normal"
            }`}>
              The 50 Characters
            </span>
            {activeTab === "m2" && (
              <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 right-0 h-0.5 bg-slate-950" />
            )}
          </button>
        </div>
      </section>

      {/* 3. THE MASTER GRID */}
      <section className="max-w-screen-xl mx-auto px-4 mb-12 mt-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 relative">
          {imagesToDisplay.map((img, i) => (
            <motion.div
              key={`${activeTab}-${i}`}
              className={`relative bg-slate-50 overflow-hidden cursor-crosshair border border-slate-100 z-10 transition-all duration-300 ${
                activeTab === "m1" ? "aspect-square" : "aspect-[16/9]"
              }`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (i % 10) * 0.03 }}
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
          {currentCopy.gridNote}
        </p>
      </section>

      {/* 4. SYSTEM COPY */}
      <section className="max-w-3xl mx-auto px-6 mb-16 space-y-10">
        
        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            What is this?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            {currentCopy.whatIsThis}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            How does it work?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            {currentCopy.howDoesItWork}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            Who is it for?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            {currentCopy.whoIsItFor}
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-[10px] uppercase tracking-[0.2em] text-purple-600 font-bold border-b border-purple-50 pb-1 inline-block">
            Why get this?
          </h3>
          <p className="text-md leading-relaxed text-slate-600">
            {currentCopy.whyGetThis}
          </p>
        </div>

        {/* SYSTEM STATEMENTS (Aligned left and bold) */}
        <div className="pt-6 border-t border-slate-100 space-y-3">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
            ● {currentCopy.bullet1}
          </p>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-800">
            ● {currentCopy.bullet2}
          </p>
        </div>

      </section>

      {/* 5. SELECTION & CART TRIGGER SECTION */}
      <section className="max-w-xl mx-auto px-6 pb-20 text-center">
        <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm">
          <p className="text-[9px] font-bold text-slate-400 mb-6 uppercase tracking-[0.3em]">
            System Control // Module Selector
          </p>
          
          <div className="space-y-4 mb-8 text-left">
            {/* MODULE 1 CARD */}
            <div className={`p-4 border transition-all flex justify-between items-center rounded-sm bg-white cursor-pointer ${
              cart.m1 ? "border-purple-600 shadow-sm" : "border-slate-200 hover:border-slate-300"
            }`} onClick={() => toggleCartItem("m1")}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Module 01 // The 50 Formulas</p>
                <p className="text-[9px] text-slate-400 mt-0.5">Atmosphere, Textures & Scenic Lighting</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold">$9.00</span>
                <span className={`w-4 h-4 border rounded-full flex items-center justify-center text-[9px] ${
                  cart.m1 ? "bg-purple-600 border-purple-600 text-white font-bold" : "border-slate-300"
                }`}>{cart.m1 && "✓"}</span>
              </div>
            </div>

            {/* MODULE 2 CARD */}
            <div className={`p-4 border transition-all flex justify-between items-center rounded-sm bg-white cursor-pointer ${
              cart.m2 ? "border-purple-600 shadow-sm" : "border-slate-200 hover:border-slate-300"
            }`} onClick={() => toggleCartItem("m2")}>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-800">Module 02 // The 50 Characters</p>
                <p className="text-[9px] text-slate-400 mt-0.5">Anatomy, Blocking & Cultural Fusions</p>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold">$9.00</span>
                <span className={`w-4 h-4 border rounded-full flex items-center justify-center text-[9px] ${
                  cart.m2 ? "bg-purple-600 border-purple-600 text-white font-bold" : "border-slate-300"
                }`}>{cart.m2 && "✓"}</span>
              </div>
            </div>
          </div>

          <button 
            onClick={() => setIsCartOpen(true)}
            className="w-full py-4 bg-[#1a1f2e] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all rounded-sm shadow-md"
          >
            Review Cart & Checkout {getCartCount() > 0 && `(${getCartCount()})`}
          </button>
        </div>
      </section>

      {/* 6. SLIDE OVER CART DRAWER */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black z-50 cursor-pointer"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 border-l border-slate-100 flex flex-col"
            >
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-800">Review_Order // System</h3>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-slate-600 text-sm font-bold uppercase tracking-widest"
                >
                  [ Close ]
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 p-6 space-y-4 overflow-y-auto">
                {getCartCount() === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Cart is empty</p>
                    <p className="text-[9px] text-slate-400 max-w-xs">Configure and authorize a module from the storefront dashboard to proceed.</p>
                  </div>
                ) : (
                  <>
                    <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mb-2">Selected Systems:</p>
                    
                    {cart.m1 && (
                      <div className="p-4 border border-slate-100 bg-slate-50 flex justify-between items-center rounded-sm">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-800">Module 01 // The 50 Formulas</p>
                          <p className="text-[9px] text-slate-400">Card/Crypto Access</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono font-bold">$9.00</span>
                          <button onClick={() => toggleCartItem("m1")} className="text-[9px] text-red-500 font-bold hover:underline">Remove</button>
                        </div>
                      </div>
                    )}

                    {cart.m2 && (
                      <div className="p-4 border border-slate-100 bg-slate-50 flex justify-between items-center rounded-sm">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wide text-slate-800">Module 02 // The 50 Characters</p>
                          <p className="text-[9px] text-slate-400">Card/Crypto Access</p>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-[10px] font-mono font-bold">$9.00</span>
                          <button onClick={() => toggleCartItem("m2")} className="text-[9px] text-red-500 font-bold hover:underline">Remove</button>
                        </div>
                      </div>
                    )}

                    {/* UPSOLD BUNDLE RECOGNITION */}
                    {getCartCount() === 2 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 border border-purple-100 bg-purple-50/50 flex justify-between items-center rounded-sm"
                      >
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-wide text-purple-600">Bundle Override Applied</p>
                          <p className="text-[9px] text-purple-500">Auto-calculated dual-module discount</p>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-purple-600">-$3.00 USD</span>
                      </motion.div>
                    )}
                  </>
                )}
              </div>

              {/* Drawer Footer Checkout */}
              {getCartCount() > 0 && (
                <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Total Price:</span>
                    <span className="text-lg font-mono font-bold text-slate-900">${getCartTotal().toFixed(2)} USD</span>
                  </div>

                  <p className="text-[8px] text-slate-400 uppercase tracking-widest text-center">Select Authorization Method</p>

                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => handleCheckout("card")}
                      className="w-full py-4 bg-[#1a1f2e] text-white text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-black transition-all rounded-sm shadow-md"
                    >
                      Authorize via Card
                    </button>
                    <button 
                      onClick={() => handleCheckout("crypto")}
                      className="w-full py-4 bg-white border border-slate-200 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] hover:border-slate-400 transition-all rounded-sm"
                    >
                      Authorize via Crypto
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 7. FOOTER */}
      <footer className="py-12 border-t border-slate-50 text-center">
        <p className="text-[9px] text-slate-300 tracking-[0.4em] uppercase font-bold">
          © 2026 Imago OS // Engineered by Mothpeople
        </p>
      </footer>
    </main>
  )
}