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
  ],
  "3° Semestre": [
    "Microbiología y Parasitología",
    "Salud Pública",
    "Formación Integral Oferta Institucional",
    "Bioestadística en Nutrición y Salud",
    "Dietética"
  ],
  "4° Semestre": [
    "Metabolismo y Nutrición",
    "Evaluación del Estado Nutricional",
    "Higiene y Control Sanitario de los Alimentos en un SAN",
    "Psicología en Salud y Alimentación",
    "Formación Integral Extra Programática"
  ],
  "5° Semestre": [
    "Administración en Salud y Alimentación",
    "Alimentación y Nutrición en la Actividad Física",
    "Taller Integrador de Intervención Alimentario Nutricional en el Ciclo Vital",
    "Fisiopatología y Farmacología en la Nutrición",
    "Formación Integral Oferta Institucional"
  ],
  "6° Semestre": [
    "Nutrición en el Procesamiento Tecnológico de los Alimentos",
    "Bioética en Nutrición y Salud Pública",
    "Epidemiología Nutricional",
    "Dietoterapia del Adulto y Adulto Mayor",
    "Comunicación y Educación en Alimentación y Nutrición",
    "Taller Integrador de Alimentación Colectiva"
  ],
  "7° Semestre": [
    "Gestión de Servicios de Alimentación y Nutrición",
    "Dietoterapia Materno Infantil",
    "Electivo I para Certificación**",
    "Investigación Aplicada a la Ciencia de la Nutrición"
  ],
  "8° Semestre": [
    "Metodología de Investigación en Alimentación y Nutrición",
    "Alimentación y Nutrición Comunitaria",
    "Alimentación Colectiva y Gastronomía",
    "Avances en Alimentación y Nutrición",
    "Electivo II para Certificación**",
    "Taller integrador de Nutrición Clínica"
  ],
  "9° Semestre": [
    "Práctica Profesional de Alimentación Colectiva",
    "Formulación y Evaluación de Proyectos",
    "Práctica Profesional de Nutrición Comunitaria"
  ],
  "10° Semestre": [
    "Práctica Profesional de Nutrición Clínica",
    "Electivo III para Certificación**"
  ]
};

const dependencias = {
  "Bioquímica Nutricional": ["Química General y Orgánica"],
  "Fisiología Humana": ["Biología"],
  "Técnicas Dietéticas": ["Los Alimentos en la Nutrición Humana"],
  "Metabolismo y Nutrición": ["Bioquímica Nutricional", "Fisiología Humana"],
  "Evaluación del Estado Nutricional": ["Fisiología Humana"],
  "Higiene y Control Sanitario de los Alimentos en un SAN": ["Microbiología y Parasitología"],
  "Dietética": ["Técnicas Dietéticas"],
  "Alimentación y Nutrición en la Actividad Física": ["Metabolismo y Nutrición"],
  "Fisiopatología y Farmacología en la Nutrición": ["Metabolismo y Nutrición"],
  "Taller Integrador de Intervención Alimentario Nutricional en el Ciclo Vital": ["Evaluación del Estado Nutricional"],
  "Nutrición en el Procesamiento Tecnológico de los Alimentos": ["Higiene y Control Sanitario de los Alimentos en un SAN"],
  "Epidemiología Nutricional": ["Bioestadística en Nutrición y Salud"],
  "Dietoterapia del Adulto y Adulto Mayor": ["Fisiopatología y Farmacología en la Nutrición", "Dietética"],
  "Comunicación y Educación en Alimentación y Nutrición": ["Psicología en Salud y Alimentación"],
  "Taller Integrador de Alimentación Colectiva": ["Administración en Salud y Alimentación"],
  "Investigación Aplicada a la Ciencia de la Nutrición": ["Metodología de Investigación en Alimentación y Nutrición"],
  "Alimentación Colectiva y Gastronomía": ["Gestión de Servicios de Alimentación y Nutrición"],
  "Taller integrador de Nutrición Clínica": ["Dietoterapia del Adulto y Adulto Mayor", "Dietoterapia Materno Infantil"],
  "Práctica Profesional de Alimentación Colectiva": ["Taller Integrador de Alimentación Colectiva"],
  "Práctica Profesional de Nutrición Comunitaria": ["Alimentación y Nutrición Comunitaria"],
  "Práctica Profesional de Nutrición Clínica": ["Taller integrador de Nutrición Clínica"]
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
