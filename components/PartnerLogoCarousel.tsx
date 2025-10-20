'use client';

import { useMemo } from 'react';

type PartnerLogo = {
  name: string;
  image: string;
};

type PartnerLogoCarouselProps = {
  logos: PartnerLogo[];
};

const logoGradients = [
  'from-slate-50/95 via-white to-slate-100/80',
  'from-blue-50/90 via-white to-blue-100/70',
  'from-indigo-50/90 via-white to-indigo-100/70',
  'from-emerald-50/90 via-white to-emerald-100/70',
  'from-amber-50/90 via-white to-amber-100/70',
  'from-rose-50/90 via-white to-rose-100/70',
];

export default function PartnerLogoCarousel({ logos }: PartnerLogoCarouselProps) {
  const marqueeLogos = useMemo(() => {
    if (logos.length === 0) return [];
    return [...logos, ...logos];
  }, [logos]);

  if (marqueeLogos.length === 0) {
    return null;
  }

  return (
    <div className="relative overflow-hidden group" aria-label="Logos of companies that hire through DataVruti">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent"></div>

      <div className="mask-fade-x">
        <div
          className="flex w-max min-w-full items-center gap-6 sm:gap-8 logo-marquee motion-safe:group-hover:[animation-play-state:paused] motion-safe:group-focus-within:[animation-play-state:paused]"
          tabIndex={0}
        >
          {marqueeLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className={`flex h-32 w-40 sm:h-36 sm:w-44 flex-shrink-0 flex-col items-center justify-center rounded-[28px] border border-neutral-200/70 bg-gradient-to-br ${
                logoGradients[index % logoGradients.length]
              } backdrop-blur px-6`}
            >
              <div className="flex h-16 w-full items-center justify-center rounded-2xl bg-white/95 px-4">
                <img
                  src={logo.image}
                  alt={`${logo.name} logo`}
                  className="h-10 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <p className="mt-3 w-full text-sm font-semibold text-neutral-700 text-center truncate">
                {logo.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
