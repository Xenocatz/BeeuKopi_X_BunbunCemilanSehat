document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

  // smooth scroll
  const scrollSmooth = ScrollSmoother.create({
    smooth: 1,
    effects: true,
    smoothTouch: 0.1,
  });

  // trigger blur nav bar
  const navBar = document.querySelector("#nav-bar");

  ScrollTrigger.create({
    start: "top -50",
    onEnter: () => navBar.classList.add("header-scrolled"),
    onLeaveBack: () => navBar.classList.remove("header-scrolled"),
  });

  // scroll to buat navigasi
  const navigasi = document.querySelectorAll(".scroll-to");
  navigasi.forEach((navigasi) => {
    navigasi.addEventListener("click", (e) => {
      e.preventDefault();

      const target = navigasi.getAttribute("href");
      const targetValue = target === "#" ? 0 : target;

      scrollSmooth.scrollTo(targetValue, { smooth: 1 }, "top top");
    });
  });

  // scroll trigger buat community
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
