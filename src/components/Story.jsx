import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  const storyRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      storyRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: storyRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <section
      ref={storyRef}
      className="py-20 bg-black px-6 md:px-16 text-gray-300 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-yellow-400">Our Story</h2>
        <p className="text-lg leading-relaxed">
          Founded with a passion for true Indian taste, Maa Laxmi Dhaba serves up comfort food that
          connects hearts. Every dish tells a story of tradition, family, and flavor. Join us for an
          unforgettable culinary journey.
        </p>
      </div>
    </section>
  );
}
