const malla = {
  "1° Semestre": [
    "Biología",
    "Química General y Orgánica",
    "Morfología",
    "Los Alimentos en la Nutrición Humana",
    "Formación Integral Oferta Institucional",
    "Inglés Comunicacional I"
  ],
  "2° Semestre": [
    "Matemática",
    "Bioquímica Nutricional",
    "Fisiología Humana",
    "Técnicas Dietéticas",
    "Formación Integral Extra Programática",
    "Inglés Comunicacional II",
    "Taller Integrador de Alimentación Saludable"
  ],
  "3° Semestre": [
    "Microbiología y Parasitología",
    "Metabolismo y Nutrición",
    "Salud Pública",
    "Evaluación del Estado Nutricional",
    "Formación Integral Oferta Institucional",
    "Inglés Comunicacional III"
  ],
  "4° Semestre": [
    "Higiene y Control Sanitario de los Alimentos",
    "Bioestadística en Nutrición y Salud",
    "Psicología en Salud y Alimentación",
    "Dietética",
    "Formación Integral Extra Programática",
    "Inglés Comunicacional IV",
    "Taller Integrador de Intervención Alimentario Nutricional en el Ciclo Vital"
  ],
  "5° Semestre": [
    "Nutrición en el Procesamiento Tecnológico de los Alimentos",
    "Administración en Salud y Alimentación",
    "Fisiopatología y Farmacología en la Nutrición",
    "Alimentación y Nutrición en la Actividad Física",
    "Formación Integral Oferta Institucional",
    "Inglés Técnico"
  ],
  "6° Semestre": [
    "Gestión de Servicios de Alimentación y Nutrición",
    "Bioética en Nutrición y Salud Pública",
    "Dietoterapia del Adulto y Adulto Mayor",
    "Comunicación y Educación en Alimentación y Nutrición",
    "Taller Integrador de Alimentación Colectiva"
  ],
  "7° Semestre": [
    "Epidemiología Nutricional",
    "Metodología de Investigación en Alimentación y Nutrición",
    "Dietoterapia Materno Infantil",
    "Alimentación y Nutrición Comunitaria",
    "Electivo I para Certificación**"
  ],
  "8° Semestre": [
    "Alimentación Colectiva y Gastronomía",
    "Investigación Aplicada a la Ciencia de la Nutrición",
    "Avances en Alimentación y Nutrición",
    "Taller integrador de Nutrición Clínica",
    "Electivo II para Certificación**"
  ],
  "9° Semestre": [
    "Práctica Profesional de Alimentación Colectiva",
    "Formulación y Evaluación de Proyectos",
    "Electivo *",
    "Electivo III para Certificación**"
  ],
  "10° Semestre": [
    "Práctica Profesional de Nutrición Comunitaria",
    "Práctica Profesional de Nutrición Clínica"
  ]
};

const dependencias = {
  "Microbiología y Parasitología": ["Biología"],
  "Higiene y Control Sanitario de Los Alimentos": ["Microbiología y Parasitología"],
  "Nutrición en el Procesamiento Tecnológico de los Alimentos": ["Higiene y Control Sanitario de Los Alimentos"],
  "Bioquímica Nutricional": ["Química General y Orgánica"],
  "Metabolismo y Nutrición": ["Bioquímica Nutricional"],
  "Evaluación del Estado Nutricional": ["Bioquímica Nutricional"],
  "Dietética": ["Evaluación del Estado Nutricional"],
  "Taller Integrador de Intervención Alimentario Nutricional en el Ciclo vital": ["Dietética","Taller Integrador de Alimentación Saludable"],
  "Fisiopatología y Farmacología en la Nutrición": ["Metabolismo y Nutrición"],
  "Alimentación y Nutrición en la Actividad Física": ["Metabolismo y Nutrición", "Dietética"],
  "Dietoterapia del Adulto y Adulto Mayor": ["Fisiopatología y Farmacología en la Nutrición", "Dietética"],
  "Dietoterapia Materno Infantil": ["Dietoterapia del Adulto y Adulto Mayor"],
  "Avances en Alimentación y Nutrición": ["Dietoterapia Materno Infantil"],
  "Taller integrador de Nutrición Clínica":["Avances en Alimentación y Nutrición"],
  "Fisiología Humana": ["Morfología"],
  "Técnicas Dietéticas": ["Los Alimentos en la Nutrición Humana"],
   "Evaluación del Estado Nutricional": ["Técnicas Dietéticas"],
  "Taller Integrador de Alimentación Saludable": ["Técnicas Dietéticas", "Taller Integrador de Alimentación Saludable"],
  
  "Metabolismo y Nutrición": ["Bioquímica Nutricional", "Fisiología Humana"],
  "Evaluación del Estado Nutricional": ["Fisiología Humana"],
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

    if (Object.keys(dependencias).includes(asig)) {
      div.classList.add("bloqueada");
    } else {
      div.classList.add("activa");
    }

    div.addEventListener("click", () => {
      div.classList.add("completada");

      for (let [hija, requisitos] of Object.entries(dependencias)) {
        if (requisitos.includes(asig)) {
          const allAsignaturas = document.querySelectorAll(".asignatura");

          allAsignaturas.forEach(asigDom => {
            if (asigDom.textContent === hija) {
              asigDom.classList.remove("bloqueada");
              asigDom.classList.add("activa");
              asigDom.style.cursor = "pointer";

              // Animación extra visual
              asigDom.style.transition = "all 0.4s ease-in-out";
              asigDom.style.transform = "scale(1.05)";
              setTimeout(() => {
                asigDom.style.transform = "scale(1)";
              }, 300);
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
