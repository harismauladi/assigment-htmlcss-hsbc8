const homeBtn = document.getElementById("home");
const homeSVG = document.getElementById("homeSVG");
const homeText = document.getElementById("homeText");
const resumeBtn = document.getElementById("resume");
const resumeSVG = document.getElementById("resumeSVG");
const resumeText = document.getElementById("resumeText");
const contactBtn = document.getElementById("contact");
const contactSVG = document.getElementById("contactSVG");
const contactText = document.getElementById("contactText");

const onHomeClick = () => {
  // NAVBAR LOGIC
  resumeBtn.classList.remove("bg-secondary");
  resumeBtn.classList.add("bg-[#E1E8EF]");
  resumeSVG.setAttribute("fill", "#1A1003");
  resumeText.classList.remove("text-white");
  contactBtn.classList.remove("bg-secondary");
  contactBtn.classList.add("bg-[#E1E8EF]");
  contactSVG.setAttribute("fill", "#1A1003");
  contactText.classList.remove("text-white");
  homeBtn.classList.remove("bg-[#E1E8EF]");
  homeBtn.classList.add("bg-secondary");
  homeSVG.setAttribute("fill", "white");
  homeText.classList.add("text-white");
};

const onResumeClick = () => {
  // NAVBAR LOGIC
  homeBtn.classList.remove("bg-secondary");
  homeBtn.classList.add("bg-[#E1E8EF]");
  homeSVG.setAttribute("fill", "#1A1003");
  homeText.classList.remove("text-white");
  contactBtn.classList.remove("bg-secondary");
  contactBtn.classList.add("bg-[#E1E8EF]");
  contactSVG.setAttribute("fill", "#1A1003");
  contactText.classList.remove("text-white");
  resumeBtn.classList.remove("bg-[#E1E8EF]");
  resumeBtn.classList.add("bg-secondary");
  resumeSVG.setAttribute("fill", "white");
  resumeText.classList.add("text-white");
};

const onContactClick = () => {
  // NAVBAR LOGIC
  homeBtn.classList.remove("bg-secondary");
  homeBtn.classList.add("bg-[#E1E8EF]");
  homeSVG.setAttribute("fill", "#1A1003");
  homeText.classList.remove("text-white");
  resumeBtn.classList.remove("bg-secondary");
  resumeBtn.classList.add("bg-[#E1E8EF]");
  resumeSVG.setAttribute("fill", "#1A1003");
  resumeText.classList.remove("text-white");
  contactBtn.classList.remove("bg-[#E1E8EF]");
  contactBtn.classList.add("bg-secondary");
  contactSVG.setAttribute("fill", "white");
  contactText.classList.add("text-white");
};

homeBtn.addEventListener("click", onHomeClick);
resumeBtn.addEventListener("click", onResumeClick);
contactBtn.addEventListener("click", onContactClick);
