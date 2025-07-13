function toggleDependientes(ramoId) {
  const dependientes = document.querySelectorAll(`.dependiente.${ramoId}`);
  dependientes.forEach((el) => {
    el.classList.remove("dependiente");
    el.style.pointerEvents = "auto";
    el.style.opacity = "1";
    el.style.backgroundColor = "#2ecc71"; // color verde activado
  });
}
