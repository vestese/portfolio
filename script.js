
const leBoutonpresentation = document.getElementById("Bouttonpresentation");
const leBoutoncompetence = document.getElementById("Bouttoncompetence");
const leBoutonprojet = document.getElementById("Bouttonprojet");
const leBoutoncontact = document.getElementById("Bouttoncontact");
const leBoutonprojetreseaux = document.getElementById("button_projet_reseaux");
const leBoutonprojetprogrammation = document.getElementById("button_projet_programmation");
const leBoutonprojetelectronique = document.getElementById("button_projet_electronique");
const laSectionpresentation = document.querySelector(".presentation_section");
const laSectioncompetence = document.querySelector(".competence_section");
const laSectionprojet = document.querySelector(".projet_section");
const laSectioncontact = document.querySelector(".contact_section");
const laSectionprojetreseaux = document.querySelector(".projet_reseaux");
const laSectionprojetprogrammation = document.querySelector(".projet_programmation");
const laSectionprojetelectronique = document.querySelector(".projet_electronique");
leBoutonpresentation.addEventListener("click", () => {
  laSectionpresentation.scrollIntoView({ behavior: "smooth" });
})
leBoutoncompetence.addEventListener("click", () => {
  laSectioncompetence.scrollIntoView({ behavior: "smooth" });
})
leBoutonprojet.addEventListener("click", () => {
  laSectionprojet.scrollIntoView({ behavior: "smooth" });
})
leBoutoncontact.addEventListener("click", () => {
  laSectioncontact.scrollIntoView({ behavior: "smooth" });
})
leBoutonprojetreseaux.addEventListener("click", () => {
  laSectionprojetreseaux.scrollIntoView({ behavior: "smooth" });
})
leBoutonprojetprogrammation.addEventListener("click", () => {
  laSectionprojetprogrammation.scrollIntoView({ behavior: "smooth" });
})
leBoutonprojetelectronique.addEventListener("click", () => {
  laSectionprojetelectronique.scrollIntoView({ behavior: "smooth" });
})

