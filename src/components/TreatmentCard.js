import Image from "next/image";
import Link from "next/link";

export default function TreatmentCard({
  title,
  description,
  href,
  image,
  badge,
  theme = "neutral",
}) {
  const themeStyles =
    theme === "ayurveda"
      ? {
          badge: "bg-[#00A651]/15 text-[#00A651] border-[#00A651]/20",
          button: "bg-[#00A651] hover:bg-green-700",
          ring: "group-hover:ring-[#00A651]/30",
        }
      : theme === "allopathy"
        ? {
            badge: "bg-[#0077C8]/15 text-[#0077C8] border-[#0077C8]/20",
            button: "bg-[#0077C8] hover:bg-blue-700",
            ring: "group-hover:ring-[#0077C8]/30",
          }
        : {
            badge: "bg-gray-900/10 text-gray-700 border-gray-200",
            button: "bg-[#0B0F19] hover:bg-black",
            ring: "group-hover:ring-gray-300",
          };

  return (
    <Link
      href={href}
      className={`group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${themeStyles.ring} hover:ring-1`}
    >
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

        {badge ? (
          <div className="absolute left-4 top-4">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${themeStyles.badge}`}
            >
              {badge}
            </span>
          </div>
        ) : null}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-[#0B0F19] flex-1">{title}</h3>
          <span
            className={`inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ${themeStyles.button} group-hover:scale-[1.02] whitespace-nowrap`}
          >
            Explore
          </span>
        </div>
        {description ? (
          <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
        ) : null}
      </div>
    </Link>
  );
}
