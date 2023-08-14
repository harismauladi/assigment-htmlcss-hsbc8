(() => {
  "use strict";
  const t = document.getElementById("home"),
    e = document.getElementById("homeSVG"),
    s = document.getElementById("homeText"),
    i = document.getElementById("resume"),
    c = document.getElementById("resumeSVG"),
    d = document.getElementById("resumeText"),
    l = document.getElementById("contact"),
    a = document.getElementById("contactSVG"),
    o = document.getElementById("contactText");
  t.addEventListener("click", () => {
    i.classList.remove("bg-secondary"),
      i.classList.add("bg-[#E1E8EF]"),
      c.setAttribute("fill", "#1A1003"),
      d.classList.remove("text-white"),
      l.classList.remove("bg-secondary"),
      l.classList.add("bg-[#E1E8EF]"),
      a.setAttribute("fill", "#1A1003"),
      o.classList.remove("text-white"),
      t.classList.remove("bg-[#E1E8EF]"),
      t.classList.add("bg-secondary"),
      e.setAttribute("fill", "white"),
      s.classList.add("text-white");
  }),
    i.addEventListener("click", () => {
      t.classList.remove("bg-secondary"),
        t.classList.add("bg-[#E1E8EF]"),
        e.setAttribute("fill", "#1A1003"),
        s.classList.remove("text-white"),
        l.classList.remove("bg-secondary"),
        l.classList.add("bg-[#E1E8EF]"),
        a.setAttribute("fill", "#1A1003"),
        o.classList.remove("text-white"),
        i.classList.remove("bg-[#E1E8EF]"),
        i.classList.add("bg-secondary"),
        c.setAttribute("fill", "white"),
        d.classList.add("text-white");
    }),
    l.addEventListener("click", () => {
      t.classList.remove("bg-secondary"),
        t.classList.add("bg-[#E1E8EF]"),
        e.setAttribute("fill", "#1A1003"),
        s.classList.remove("text-white"),
        i.classList.remove("bg-secondary"),
        i.classList.add("bg-[#E1E8EF]"),
        c.setAttribute("fill", "#1A1003"),
        d.classList.remove("text-white"),
        l.classList.remove("bg-[#E1E8EF]"),
        l.classList.add("bg-secondary"),
        a.setAttribute("fill", "white"),
        o.classList.add("text-white");
    });
})();
