/**
 * app.js — ContactOS Flask
 * UI interactions only
 */

/* ══════════════════════════════════════════════
   SIDEBAR RESPONSIVE
   ══════════════════════════════════════════════ */

function openSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  sidebar?.classList.add("open");
  overlay?.classList.remove("hidden");
}

function closeSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  sidebar?.classList.remove("open");
  overlay?.classList.add("hidden");
}

/* ══════════════════════════════════════════════
   MODAL ELIMINAR
   ══════════════════════════════════════════════ */

function abrirModalEliminar(id, nombre) {
  const modal = document.getElementById("delete-modal");

  const texto = document.getElementById("delete-modal-text");

  const botonEliminar = document.getElementById("confirm-delete-btn");

  texto.textContent = `¿Seguro que deseas eliminar a ${nombre}? Esta acción no se puede deshacer.`;

  botonEliminar.href = `/eliminar/${id}`;

  modal.classList.remove("hidden");
}

function cerrarModalEliminar() {
  const modal = document.getElementById("delete-modal");

  modal?.classList.add("hidden");
}

/* ══════════════════════════════════════════════
   TOASTS
   ══════════════════════════════════════════════ */

function showToast(message, type = "success", duration = 3000) {
  const container = document.getElementById("toast-container");

  if (!container) return;

  const toast = document.createElement("div");

  toast.className = `toast ${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = "toastOut 0.3s ease forwards";

    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, duration);
}

/* ══════════════════════════════════════════════
   ESCAPE KEY
   ══════════════════════════════════════════════ */

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    cerrarModalEliminar();
    closeSidebar();
  }
});

/* ══════════════════════════════════════════════
   OVERLAY CLICK
   ══════════════════════════════════════════════ */

document
  .getElementById("sidebar-overlay")
  ?.addEventListener("click", closeSidebar);
