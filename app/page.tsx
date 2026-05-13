'use client'

import { motion } from 'framer-motion'

const PLACEHOLDER_IMAGES = [
  '/images/matrix-1.jpg',
  '/images/matrix-2.jpg',
  '/images/matrix-3.jpg',
  '/images/matrix-4.jpg',
  '/images/matrix-5.jpg',
  '/images/matrix-6.jpg',
  '/images/matrix-7.jpg',
  '/images/matrix-8.jpg',
]

const FEATURES = [
  {
    title: 'The Notion Backend',
    description: 'A fully structured, duplicatable Notion database.',
  },
  {
    title: 'Model Agnostic',
    description: 'Exact syntax formulas for Midjourney, Stable Diffusion, and Gemini.',
  },
  {
    title: 'Commercial Ready',
    description: 'From Bauhaus graphic design to high-key lifestyle product photography.',
  },
]

// Moth SVG Logo Component
const MothLogo = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-purple-600"
  >
    {/* Left wing */}
    <path
      d="M20 8 Q15 12 14 20 Q15 28 20 32"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Right wing */}
    <path
      d="M20 8 Q25 12 26 20 Q25 28 20 32"
      stroke="currentColor"
      strokeWidth="1.5"
      fill="none"
    />
    {/* Antennae left */}
    <path
      d="M20 8 Q16 4 14 2"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />
    {/* Antennae right */}
    <path
      d="M20 8 Q24 4 26 2"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />
    {/* Body */}
    <circle cx="20" cy="20" r="2" fill="currentColor" />
  </svg>
)

// CTA Button Component
const CTAButton = ({
  label,
  onClick,
  variant = 'primary',
}: {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
}) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className={`px-8 py-3 text-sm font-medium transition-colors ${
      variant === 'primary'
        ? 'bg-black text-white hover:bg-gray-900'
        : 'border border-black text-black bg-white hover:bg-gray-50'
    }`}
  >
    {label}
  </motion.button>
)

// Image Placeholder Component
const ImagePlaceholder = ({ src, index }: { src: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    className="aspect-square border border-black overflow-hidden"
  >
    <img
      src={src}
      alt={`Matrix ${index + 1}`}
      className="w-full h-full object-cover"
    />
  </motion.div>
)

// Feature Card Component
const FeatureCard = ({
  title,
  description,
  index,
}: {
  title: string
  description: string
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="text-center"
  >
    <h3 className="text-lg font-bold mb-3">{title}</h3>
    <p className="text-sm text-gray-700 leading-relaxed">{description}</p>
  </motion.div>
)

export default function Home() {
  const handleGumroadCheckout = () => {
    console.log('[v0] Gumroad checkout initiated')
    // Replace with actual Gumroad link
    window.open('https://mothpeople.gumroad.com/l/imagostudio')
  }

  const handleMoonpayCheckout = () => {
    console.log('Moonpay checkout initiated')
    // Replace with actual Moonpay/Hel.io link
    window.open('https://moonpay.hel.io/pay/6a0432bdcaf1e716aeb7d296')
  }

  return (
    <main className="bg-white text-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <MothLogo />
          </div>

          {/* Brand Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Imago Studio
          </h1>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            The Master Prompt Matrix
          </h2>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            50 Model-Agnostic Prompt Architectures. Engineered for Midjourney,
            FLUX, and LLMs. Unlock the ultimate commercial and experimental art
            direction toolkit.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              label="Pay with Card - $9"
              onClick={handleGumroadCheckout}
              variant="primary"
            />
            <CTAButton
              label="Pay with Crypto - $9"
              onClick={handleMoonpayCheckout}
              variant="secondary"
            />
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-black" />

      {/* Proof Matrix Section */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase text-gray-600 text-center mb-12">
            The Proof Matrix
          </p>

          {/* Auto-scroll Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 md:gap-px border border-black">
            {PLACEHOLDER_IMAGES.map((src, index) => (
              <ImagePlaceholder key={index} src={src} index={index} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-black" />

      {/* Deliverable Breakdown Section */}
      <section className="py-20 md:py-32 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-widest uppercase text-gray-600 text-center mb-16">
            What You Get
          </p>

          {/* 3-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto">
            {FEATURES.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Divider */}
      <div className="h-px bg-black" />

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 text-center">
        <p className="text-sm text-gray-700 tracking-tight">
          Imago OS © 2026. All systems operational.
        </p>
      </footer>
    </main>
  )
}
