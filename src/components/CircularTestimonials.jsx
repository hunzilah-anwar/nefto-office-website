import { useEffect, useMemo, useState } from "react";
import { Quote } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function CircularTestimonials({
  testimonials = [],
  autoplay = true,
  interval = 4000,
  colors = {
    arrowBackground: "#f6fafd",
    arrowHoverBackground: "#1c3c63",
  },
}) {
  const [current, setCurrent] = useState(0);

  const total = testimonials.length;

  const next = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  useEffect(() => {
    if (!autoplay || total <= 1) return;

    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoplay, interval, total]);

  const item = useMemo(() => testimonials[current], [testimonials, current]);

  if (!item) return null;

  const initials =
    item.initials ||
    item.name
      ?.split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2);

  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-4xl border border-white/15 p-8 shadow-[0_8px_32px_rgba(0,0,0,0.35)] backdrop-blur-3xl md:p-12">
          {/* Top Glow */}
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/70 to-transparent" />

          {/* Light Reflection */}
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[#042558]/10 blur-3xl" />

          {/* Blue Glow */}
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[#042558]/20 blur-3xl" />

          {/* Quote */}
          <div className="absolute left-2 top-0 p-4">
            <Quote className="h-20 w-20 text-gray-500" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center text-center">
              {/* Quote */}
              <p className="max-w-3xl text-lg leading-8 text-gray-50 md:text-xl">
                “{item.quote}”
              </p>

              {/* User */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-accent-blue">
                  {item.name}
                </h3>

                {item.designation && (
                  <p className="mt-1 text-secondary">{item.designation}</p>
                )}

                {item.company && (
                  <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary">
                    {item.company}
                  </p>
                )}
              </div>

              {/* Dots */}
              <div className="mt-8 flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      current === index ? "w-8 bg-primary" : "w-2.5 bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="mt-10 flex gap-4">
                <button
                  onClick={prev}
                  style={{
                    background: colors.arrowBackground,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      colors.arrowHoverBackground)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = colors.arrowBackground)
                  }
                  className="flex h-12 w-12 items-center justify-center cursor-pointer rounded-full text-accent-blue hover:text-white border border-white transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft size={22} strokeWidth={2.5} />
                </button>

                <button
                  onClick={next}
                  style={{
                    background: colors.arrowBackground,
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background =
                      colors.arrowHoverBackground)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = colors.arrowBackground)
                  }
                  className="flex h-12 w-12 items-center justify-center cursor-pointer rounded-full text-accent-blue hover:text-white border border-white transition-all duration-300 hover:scale-110 active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ArrowRight size={22} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
