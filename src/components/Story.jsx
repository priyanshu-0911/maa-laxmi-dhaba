import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Story() {
  useEffect(() => {
    gsap.from(".story-block", {
      scrollTrigger: { trigger: ".story-block", start: "top 90%" },
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power2.out"
    });
  }, []);

  return (
    <section className="story-block py-20 bg-black px-6 md:px-16 text-gray-300">
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
