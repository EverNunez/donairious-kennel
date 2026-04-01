export default function Logo({ size = 'md', className = '' }) {
  const sizes = {
    sm:   { ring:'w-12 h-12', top:'text-[0.45rem]', paw:'text-sm',  bot:'text-[0.45rem]' },
    md:   { ring:'w-16 h-16', top:'text-[0.55rem]', paw:'text-base',bot:'text-[0.55rem]' },
    lg:   { ring:'w-24 h-24', top:'text-[0.8rem]',  paw:'text-2xl', bot:'text-[0.8rem]'  },
    hero: { ring:'w-48 h-48', top:'text-[1.3rem]',  paw:'text-5xl', bot:'text-[1.3rem]'  },
  }
  const s = sizes[size] || sizes.md
  return (
    <div className={`${s.ring} rounded-full flex-shrink-0 bg-gradient-to-br from-sky-light to-rose-light border-4 border-gold shadow-gold flex flex-col items-center justify-center gap-0.5 animate-pulse-gold ${className}`}>
      <span className={`font-display italic font-semibold text-gray-700 leading-none ${s.top}`}>Donairious</span>
      <span className={s.paw}>🐾</span>
      <span className={`font-display italic font-semibold text-gray-700 leading-none ${s.bot}`}>Kennel</span>
    </div>
  )
}