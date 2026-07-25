document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.tab;

      buttons.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      document.getElementById(target).classList.add("active");

      history.replaceState(null, "", "#" + target);
    });
  });

  const hash = window.location.hash.replace("#", "");
  if (hash) {
    const btn = document.querySelector(`.tab-btn[data-tab="${hash}"]`);
    if (btn) btn.click();
  }
});
