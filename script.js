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

const dependencias = {
  "Bioquímica Nutricional": ["Química General y Orgánica"],
  "Fisiología Humana": ["Biología"],
  "Técnicas Dietéticas": ["Los Alimentos en la Nutrición Humana"]
};

const container = document.getElementById("malla-container");
const estadoAsignaturas = {};

for (const [semestre, asignaturas] of Object.entries(malla)) {
  const bloque = document.createElement("section");
  bloque.className = "semestre";
  bloque.innerHTML = `<h2>${semestre}</h2>`;

  asignaturas.forEach(asig => {
    const div = document.createElement("div");
    div.className = "asignatura";
    div.textContent = asig;

    // Si tiene dependencias, la bloqueamos
    if (Object.keys(dependencias).includes(asig)) {
      div.classList.add("bloqueada");
    } else {
      div.classList.add("activa");
    }

    div.addEventListener("click", () => {
      div.classList.add("completada");

      // Activar asignaturas dependientes
      for (let [hija, requisitos] of Object.entries(dependencias)) {
        if (requisitos.includes(asig)) {
          const selector = `.asignatura:contains("${hija}")`; // esto no funciona en todos los navegadores
          const allAsignaturas = document.querySelectorAll(".asignatura");

          allAsignaturas.forEach(asigDom => {
            if (asigDom.textContent === hija) {
              asigDom.classList.remove("bloqueada");
              asigDom.classList.add("activa");
              asigDom.style.cursor = "pointer";
            }
          });
        }
      }
    });

    bloque.appendChild(div);
    estadoAsignaturas[asig] = div;
  });

  container.appendChild(bloque);
}
