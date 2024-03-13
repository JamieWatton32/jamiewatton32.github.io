function toggleDiv(divId) {
  document.getElementById("about-container").style.display = "none";
  document.getElementById('skills-container').style.display = "none";
  document.getElementById("experience-container").style.display = "none";
  document.getElementById("contact-container").style.display = "none";
  document.getElementById("projects-container").style.display = "none";
  document.getElementById(divId).style.display = "flex";
}