(() => {
  "use strict";
  const e = document.getElementById("navMenu"),
    t = document.getElementById("sideList"),
    s = document.getElementById("activeSideList"),
    i = document.getElementById("profile"),
    d = document.getElementById("home"),
    a = document.getElementById("homeSVG"),
    l = document.getElementById("homeText"),
    c = document.getElementById("resume"),
    n = document.getElementById("resumeSVG"),
    o = document.getElementById("resumeText"),
    L = document.getElementById("contact"),
    m = document.getElementById("contactSVG"),
    r = document.getElementById("contactText");
  e.addEventListener("click", () => {
    e.classList.toggle("nav-active"),
      e.classList.contains("nav-active")
        ? (t.classList.remove("flex"),
          t.classList.add("hidden"),
          about.classList.remove("flex"),
          about.classList.add("hidden"),
          s.classList.remove("hidden"),
          s.classList.add("flex"))
        : (t.classList.add("flex"),
          t.classList.remove("hidden"),
          about.classList.add("flex"),
          about.classList.remove("hidden"),
          s.classList.remove("flex"),
          s.classList.add("hidden"));
  }),
    i.addEventListener("click", () => {
      e.classList.toggle("nav-active"),
        e.classList.contains("nav-active")
          ? (t.classList.remove("flex"),
            t.classList.add("hidden"),
            about.classList.remove("flex"),
            about.classList.add("hidden"),
            s.classList.remove("hidden"),
            s.classList.add("flex"))
          : (t.classList.add("flex"),
            t.classList.remove("hidden"),
            about.classList.add("flex"),
            about.classList.remove("hidden"),
            s.classList.remove("flex"),
            s.classList.add("hidden"));
    }),
    d.addEventListener("click", () => {
      c.classList.remove("bg-secondary"),
        c.classList.add("bg-[#E1E8EF]"),
        n.setAttribute("fill", "#1A1003"),
        o.classList.remove("text-white"),
        L.classList.remove("bg-secondary"),
        L.classList.add("bg-[#E1E8EF]"),
        m.setAttribute("fill", "#1A1003"),
        r.classList.remove("text-white"),
        d.classList.remove("bg-[#E1E8EF]"),
        d.classList.add("bg-secondary"),
        a.setAttribute("fill", "white"),
        l.classList.add("text-white");
    }),
    c.addEventListener("click", () => {
      d.classList.remove("bg-secondary"),
        d.classList.add("bg-[#E1E8EF]"),
        a.setAttribute("fill", "#1A1003"),
        l.classList.remove("text-white"),
        L.classList.remove("bg-secondary"),
        L.classList.add("bg-[#E1E8EF]"),
        m.setAttribute("fill", "#1A1003"),
        r.classList.remove("text-white"),
        c.classList.remove("bg-[#E1E8EF]"),
        c.classList.add("bg-secondary"),
        n.setAttribute("fill", "white"),
        o.classList.add("text-white");
    }),
    L.addEventListener("click", () => {
      d.classList.remove("bg-secondary"),
        d.classList.add("bg-[#E1E8EF]"),
        a.setAttribute("fill", "#1A1003"),
        l.classList.remove("text-white"),
        c.classList.remove("bg-secondary"),
        c.classList.add("bg-[#E1E8EF]"),
        n.setAttribute("fill", "#1A1003"),
        o.classList.remove("text-white"),
        L.classList.remove("bg-[#E1E8EF]"),
        L.classList.add("bg-secondary"),
        m.setAttribute("fill", "white"),
        r.classList.add("text-white");
    });
})();
