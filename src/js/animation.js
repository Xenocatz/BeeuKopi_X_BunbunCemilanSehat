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
    return -(contentWidth - window.innerWidth);
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

  //animation for menu-section
  const beeuMenuButtons = Array.from(
    document.querySelectorAll(".beeu-menu-btn"),
  );
  const bunbunMenuButtons = Array.from(
    document.querySelectorAll(".bunbun-menu-btn"),
  );
  const beeuMenuList = Array.from(document.querySelectorAll(".beeu-menu"));
  const bunbunMenuList = Array.from(document.querySelectorAll(".bunbun-menu"));
  let beeuActiveMenu = 0;
  let bunbunActiveMenu = 0;

  beeuMenuButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (index === beeuActiveMenu) return;
      beeuMenuButtons.forEach((button) =>
        button.classList.remove("bg-secondary", "font-bold", "text-white"),
      );
      this.classList.add("bg-secondary", "font-bold", "text-white");

      let previousMenu = beeuMenuList[beeuActiveMenu];
      let activeMenu = beeuMenuList[index];
      beeuActiveMenu = index;

      gsap.fromTo(
        previousMenu,
        {
          opacity: 1,
          y: 0,
          x: 0,
        },
        {
          opacity: 0,
          duration: 0.3,
          y: 50,
        },
      );

      gsap.fromTo(
        activeMenu,
        {
          y: 0,
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      );
    });
  });

  bunbunMenuButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      if (index === bunbunActiveMenu) return;
      bunbunMenuButtons.forEach((button) =>
        button.classList.remove("bg-secondary", "font-bold", "text-white"),
      );
      this.classList.add("bg-secondary", "font-bold", "text-white");

      let previousMenu = bunbunMenuList[bunbunActiveMenu];
      let activeMenu = bunbunMenuList[index];
      bunbunActiveMenu = index;

      gsap.fromTo(
        previousMenu,
        {
          opacity: 1,
          y: 0,
          x: 0,
        },
        {
          opacity: 0,
          duration: 0.3,
          y: 50,
        },
      );

      gsap.fromTo(
        activeMenu,
        {
          y: 0,
          x: 100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
      );
    });
  });

  // hamburger menu
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  const lines = document.querySelectorAll(".hamburger-line");
  const mobileLinks = document.querySelectorAll(".mobile-link");

  const menuTl = gsap.timeline({ paused: true, reversed: true });

  menuTl
    .to(mobileMenu, {
      x: 0,
      duration: 0.6,
      ease: "power4.inOut",
    })
    .to(lines[0], { y: 8, rotate: 45, duration: 0.3 }, "<")
    .to(lines[1], { opacity: 0, duration: 0.2 }, "<")
    .to(lines[2], { y: -8, rotate: -45, duration: 0.3 }, "<")
    .to(
      mobileLinks,
      {
        opacity: 1,
        y: -20,
        stagger: 0.1,
        duration: 0.4,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    );

  menuBtn.addEventListener("click", () => {
    if (menuTl.reversed()) {
      menuTl.play();
    } else {
      menuTl.reverse();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuTl.reverse();
    });
  });
});
