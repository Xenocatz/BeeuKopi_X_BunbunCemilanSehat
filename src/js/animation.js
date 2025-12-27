window.addEventListener("load", (event) => {
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

  //========================  hero section
  // nav bar
  gsap.from("#nav-bar li", {
    y: -100,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    stagger: 0.1,
    delay: 0.5,
  });

  // logo
  const tl = gsap.timeline();
  tl.from(
    "#logo-beuu",
    {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "+=1.3",
  ).from(
    "#logo-bunbun",
    {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(1.7)",
    },
    "<",
  );

  // title
  const split = SplitText.create("#hero-title", {
    type: "words",
  });
  gsap.from(split.words, {
    y: 100,
    opacity: 0,
    rotation: "random(-30, 30)",
    duration: 1,
    ease: "back",
    stagger: 0.15,
    delay: 1.5,
  });

  // subtitle
  gsap.from("#hero-subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 2.8,
  });

  // button
  gsap.from("#hero-button", {
    y: 20,
    opacity: 0,
    duration: 0.8,
    ease: "back.out(1.7)",
    delay: 2.9,
  });

  //========================  about section
  SplitText.create("#about-content p", {
    type: "words",
    autoSplit: true,
    reduceWhiteSpace: true,
    smartWrap: true,
    onSplit: (self) => {
      return gsap.from(self.words, {
        autoAlpha: 0.5,
        stagger: 0.5,
        scrollTrigger: {
          trigger: "#about-title",
          start: "bottom center",
          end: "500px center",
          scrub: 1,
        },
      });
    },
  });
});
