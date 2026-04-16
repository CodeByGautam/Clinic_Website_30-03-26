import TreatmentCard from "@/components/TreatmentCard";

export default function CategorySection({
  title,
  subtitle,
  items = [],
  theme,
  defaultImage,
}) {
  return (
    <section className="py-12 group">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="relative inline-block group">
            {/* Animated background particles */}
            <div className="absolute inset-0 overflow-hidden rounded-lg">
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-[#00A651] rounded-full animate-ping opacity-75"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[#0077C8] rounded-full animate-ping opacity-50 animation-delay-200"></div>
              <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-[#00A651] rounded-full animate-ping opacity-60 animation-delay-400"></div>
            </div>
            
            {/* Main heading with unique effects */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B0F19] relative z-10 transform transition-all duration-500 group-hover:scale-110">
              <span className="inline-block transform transition-all duration-700 group-hover:rotate-1 group-hover:skew-y-1">
                {title.split('').map((letter, index) => (
                  <span 
                    key={index} 
                    className="inline-block transform transition-all duration-300 hover:scale-125 hover:rotate-12 hover:text-[#0077C8]"
                    style={{transitionDelay: `${index * 50}ms`}}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </span>
                ))}
              </span>
            </h2>
            
            {/* Unique multi-layer underline system */}
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00A651] to-transparent rounded-full transform scale-x-0 transition-all duration-700 group-hover:scale-x-100"></div>
            <div className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-[#0077C8] via-transparent to-[#0077C8] rounded-full transform scale-x-0 transition-all duration-700 group-hover:scale-x-100 animation-delay-100"></div>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00A651] to-[#0077C8] rounded-full transform scale-x-0 transition-all duration-700 group-hover:scale-x-100 animation-delay-200"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00A651]/20 via-[#0077C8]/20 to-[#00A651]/20 rounded-lg blur-sm transform scale-90 opacity-0 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100 -z-10"></div>
            
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#00A651] transform rotate-0 transition-all duration-500 group-hover:rotate-45"></div>
            <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#0077C8] transform rotate-0 transition-all duration-500 group-hover:rotate-45"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#0077C8] transform rotate-0 transition-all duration-500 group-hover:rotate-45"></div>
            <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#00A651] transform rotate-0 transition-all duration-500 group-hover:rotate-45"></div>
          </div>
          {subtitle ? (
            <p className="mt-6 text-gray-600 leading-relaxed transform transition-all duration-700 group-hover:translate-x-3 group-hover:text-[#0077C8] opacity-80 group-hover:opacity-100">
              {subtitle}
            </p>
          ) : null}
        </div>

        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <TreatmentCard
              key={item.slug}
              title={item.name}
              description={item.description}
              href={item.slug}
              image={item.image || defaultImage}
              badge={item.badge}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
