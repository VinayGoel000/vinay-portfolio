import { motion } from 'framer-motion'

/**
 * ProfileImage Component
 * Displays profile images with gradient glow effects and animations
 * 
 * Props:
 * - src: Image path
 * - alt: Image alt text
 * - variant: 'circular' | 'rounded' | 'full' | 'side'
 * - animate: Boolean to enable entrance animation
 * - delay: Animation delay in seconds
 * - glowColor: 'blue' | 'purple' | 'cyan' | 'combined'
 * - className: Additional Tailwind classes
 */

export default function ProfileImage({
  src,
  alt,
  variant = 'circular',
  animate = true,
  delay = 0,
  glowColor = 'combined',
  className = '',
}) {
  // Glow color presets
  const glowPresets = {
    blue: 'radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, transparent 65%)',
    purple: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, transparent 65%)',
    cyan: 'radial-gradient(circle, rgba(34, 211, 238, 0.25) 0%, transparent 65%)',
    combined: 'radial-gradient(circle, rgba(56, 189, 248, 0.15), rgba(168, 85, 247, 0.15) 40%, transparent 65%)',
  }

  // Variant classes
  const variantClasses = {
    circular: 'w-64 h-64 sm:w-72 sm:h-72 rounded-full',
    rounded: 'w-96 h-full rounded-3xl',
    full: 'w-full max-w-2xl rounded-2xl',
    side: 'w-80 h-auto rounded-2xl',
  }

  // Animation variants
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      },
    },
  }

  const imageVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        delay: delay + 0.2,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: delay,
        ease: 'easeOut',
      },
    },
    hover: {
      scale: 1.08,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      variants={animate ? containerVariants : undefined}
      initial={animate ? 'hidden' : undefined}
      animate={animate ? 'visible' : undefined}
      whileHover="hover"
      className={`relative flex items-center justify-center ${className}`}
    >
      {/* Glow background */}
      <motion.div
        variants={animate ? glowVariants : undefined}
        initial={animate ? 'hidden' : undefined}
        animate={animate ? 'visible' : undefined}
        whileHover="hover"
        className={`absolute -inset-8 rounded-full blur-2xl opacity-60 ${variant === 'side' ? 'hidden' : ''}`}
        style={{
          background: glowPresets[glowColor],
          filter: 'blur(40px)',
        }}
      />

      {/* Secondary glow for circular */}
      {variant === 'circular' && (
        <motion.div
          variants={animate ? glowVariants : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          whileHover="hover"
          className="absolute -inset-12 rounded-full opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15), transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
      )}

      {/* Border glow container */}
      <div
        className={`relative overflow-hidden border border-white/10 bg-slate-900/20 backdrop-blur-sm shadow-2xl ${variantClasses[variant]}`}
      >
        {/* Animated border glow */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `linear-gradient(45deg, 
              transparent 0%, 
              rgba(56, 189, 248, 0.1) 25%, 
              rgba(168, 85, 247, 0.1) 50%, 
              rgba(34, 211, 238, 0.1) 75%, 
              transparent 100%)`,
            animation: 'shimmer 2s infinite',
          }}
        />

        {/* Image */}
        <motion.img
          variants={animate ? imageVariants : undefined}
          initial={animate ? 'hidden' : undefined}
          animate={animate ? 'visible' : undefined}
          whileHover="hover"
          src={src}
          alt={alt}
          className="relative h-full w-full object-cover"
          onError={(e) => {
            e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23334155" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" font-size="20" fill="%23cbd5e1" text-anchor="middle" dominant-baseline="middle"%3EImage not found%3C/text%3E%3C/svg%3E'
          }}
        />
      </div>

      {/* Border accent lines */}
      {variant === 'circular' && (
        <>
          <div className="absolute inset-0 rounded-full border border-sky-400/20 opacity-50" />
          <div className="absolute inset-2 rounded-full border border-purple-400/10 opacity-30" />
        </>
      )}

      <style>{`
        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }
      `}</style>
    </motion.div>
  )
}
