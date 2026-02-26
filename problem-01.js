/**
 * Scenario:
You have three sections on a webpage: Home, About, Contact. Only one section should be visible at a time.

Task:
Write a function showSection(sectionId) that:

Hides all sections.

Shows only the section with the given sectionId.

Hint:

Use classList.add("hidden") to hide a section.

Use classList.remove("hidden") to show a section.

You can keep an array of all sections to loop through.
 */

const home = document.getElementById("home");
const about = document.getElementById("about");
const contact = document.getElementById("contact");

function showSection(sectionId) {
  // Hide all first
  home.classList.add("hidden");
  about.classList.add("hidden");
  contact.classList.add("hidden");

  // Show only the selected
  if (sectionId === "home") home.classList.remove("hidden");
  else if (sectionId === "about") about.classList.remove("hidden");
  else if (sectionId === "contact") contact.classList.remove("hidden");
}
