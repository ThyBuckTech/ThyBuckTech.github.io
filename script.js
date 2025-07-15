const malla = {
  "1° Semestre": [
    "Biología",
    "Química General y Orgánica",
    "Morfología",
    "Los Alimentos en la Nutrición Humana",
    "Formación Integral Oferta Institucional",
    "Inglés Comunicacional I",
    "Matemática"
  ],
  "2° Semestre": [
    "Bioquímica Nutricional",
    "Fisiología Humana",
    "Técnicas Dietéticas",
    "Formación Integral Extra Programática",
    "Inglés Comunicacional II"
  ]
};

const container = document.getElementById("malla-container");

for (const [semestre, asignaturas] of Object.entries(malla)) {
  const bloque = document.createElement("section");
  bloque.className = "semestre";
  bloque.innerHTML = `<h2>${semestre}</h2>`;

  asignaturas.forEach(asig => {
    const div = document.createElement("div");
    div.className = "asignatura";
    div.textContent = asig;
    bloque.appendChild(div);
  });

  container.appendChild(bloque);
}
