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

  //animation for menu-section
  const beeuMenuButtons = Array.from(document.querySelectorAll(".beeu-menu-btn"));
  const bunbunMenuButtons = Array.from(document.querySelectorAll(".bunbun-menu-btn"));
  const beeuMenuList = Array.from(document.querySelectorAll(".beeu-menu"));
  const bunbunMenuList = Array.from(document.querySelectorAll(".bunbun-menu"));
  let beeuActiveMenu = 0;
  let bunbunActiveMenu = 0;

  beeuMenuButtons.forEach((button, index) => 
  {
    button.addEventListener("click", function ()
    {
      if (index === beeuActiveMenu) return;
      beeuMenuButtons.forEach(button => button.classList.remove("bg-secondary", "font-bold", "text-white"));
      this.classList.add("bg-secondary", "font-bold", "text-white");

      let previousMenu = beeuMenuList[beeuActiveMenu];
      let activeMenu = beeuMenuList[index];
      beeuActiveMenu = index;

      gsap.fromTo(previousMenu, {
        opacity: 1,
        y: 0,
        x: 0
      },{
        opacity: 0,
        duration: 0.3,
        y: 50,
      });

      gsap.fromTo(activeMenu, {
        y:0,
        x: 100,
        opacity: 0,
      },{
        x:0,
        opacity:1
      });
    });
  });

  bunbunMenuButtons.forEach((button, index) => 
  {
    button.addEventListener("click", function ()
    {
      if (index === bunbunActiveMenu) return;
      bunbunMenuButtons.forEach(button => button.classList.remove("bg-secondary", "font-bold", "text-white"));
      this.classList.add("bg-secondary", "font-bold", "text-white");

      let previousMenu = bunbunMenuList[bunbunActiveMenu];
      let activeMenu = bunbunMenuList[index];
      bunbunActiveMenu = index;

      gsap.fromTo(previousMenu, {
        opacity: 1,
        y: 0,
        x: 0
      },{
        opacity: 0,
        duration: 0.3,
        y: 50,
      });

      gsap.fromTo(activeMenu, {
        y:0,
        x: 100,
        opacity: 0,
      },{
        x:0,
        opacity:1
      });
    });
  });
});
