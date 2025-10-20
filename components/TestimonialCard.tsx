interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export default function TestimonialCard({
  name,
  position,
  company,
  content,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-neutral-50 p-8 rounded-2xl shadow-lg border border-neutral-200 h-full flex flex-col hover:shadow-2xl hover:border-primary-300 transition-all duration-500 hover:-translate-y-1 group overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 group-hover:from-primary-50/20 group-hover:to-primary-100/10 transition-all duration-500 rounded-2xl"></div>

      {/* Quote icon */}
      <div className="absolute top-6 right-6 text-primary-100 group-hover:text-primary-200 transition-colors duration-300 group-hover:scale-110 transform">
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex mb-4 gap-1">
          {[...Array(rating)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current drop-shadow-sm"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
        <p className="text-neutral-700 mb-6 flex-grow leading-relaxed text-lg italic">{content}</p>
        <div className="border-t border-neutral-200 pt-4 mt-auto">
          <p className="font-bold text-neutral-900 text-lg">{name}</p>
          <p className="text-sm text-neutral-600 mt-1">
            {position} at {company}
          </p>
        </div>
      </div>
    </div>
  );
}
