// src/utils/animations.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animateHero = () => {
  gsap.from(".hero-heading", {
    y: 50,
    opacity: 0,
    duration: 1.2,
    delay: 0.2,
    ease: "power4.out"
  });

  gsap.from(".hero-sub", {
    y: 30,
    opacity: 0,
    duration: 1.2,
    delay: 0.4,
    ease: "power4.out"
  });

  gsap.from(".hero-btn", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: 0.6,
    ease: "back.out(1.7)"
  });
};

export const animateMenuCards = () => {
  gsap.from(".menu-card", {
    scrollTrigger: {
      trigger: "#menu",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.8,
    ease: "power3.out"
  });
};

export const animateStory = () => {
  gsap.from(".story-section", {
    scrollTrigger: {
      trigger: ".story-section",
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
};
