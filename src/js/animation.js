document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  const section = document.querySelector("#community-section");
  const scrollContent = document.querySelector("#community-content");

  const getScrollAmount = () => {
    let contentWidth = scrollContent.scrollWidth;
    return -(contentWidth - 1500);
  };

  gsap.to(scrollContent, {
    x: () => getScrollAmount(),
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: () => `+=${scrollContent.scrollWidth - 300}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true,
      anticipatePin: 1,
    },
  });
});
