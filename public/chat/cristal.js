/*!
 * Cristal — Menú cerrado de servicios (sin LLM)
 * Flujo: saludo → 5 opciones → info → agendar/whatsapp → cierre
 */
(function () {
  "use strict";

  var C = window.CRISTAL_CONFIG;
  if (!C || !C.options) { return; }

  var state = {
    step: "intro",
    selected: null,
    name: "",
    phone: "",
    email: "",
  };

  // ---- Utilidades ----
  function el(tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  }

  function pushMsg(who, html, typing) {
    return new Promise(function (resolve) {
      var wrap = el("div", "cr-msg " + (who === "bot" ? "cr-bot" : "cr-user"));
      if (typing) {
        wrap.innerHTML = '<div class="cr-typing"><span></span><span></span><span></span></div>';
      } else {
        wrap.innerHTML = '<div class="cr-bubble">' + html + "</div>";
      }
      chatLog.appendChild(wrap);
      scrollDown();
      if (typing) {
        setTimeout(function () {
          wrap.innerHTML = '<div class="cr-bubble">' + html + "</div>";
          scrollDown();
          resolve();
        }, 600 + Math.random() * 400);
      } else {
        resolve();
      }
    });
  }

  function scrollDown() {
    chatLog.scrollTop = chatLog.scrollHeight;
  }

  function showQuick(opts) {
    quickBar.innerHTML = "";
    opts.forEach(function (o) {
      var b = el("button", "cr-quick-btn", o.label);
      if (o.className) b.className += " " + o.className;
      b.onclick = function () { handle(o); };
      quickBar.appendChild(b);
    });
  }

  function clearQuick() { quickBar.innerHTML = ""; }

  // ---- Flujo ----
  function handle(opt) {
    if (!opt || !opt.action) return;

    switch (opt.action) {
      case "menu":
        return goStep("menu");
      case "select":
        state.selected = opt.id;
        return goStep("info");
      case "agendar":
        return goStep("capture");
      case "whatsapp":
        return goStep("whatsapp");
      case "share":
        return goStep("share");
      case "close":
        return goStep("end");
      default:
        return goStep("menu");
    }
  }

  function goStep(step) {
    state.step = step;

    switch (step) {
      case "intro":
        return startIntro();
      case "menu":
        return showMenu();
      case "info":
        return showInfo();
      case "capture":
        return askData();
      case "whatsapp":
        return goWA();
      case "share":
        return sharePage();
      case "end":
        return endChat();
      default:
        return showMenu();
    }
  }

  // --- Pasos ---

  function startIntro() {
    clearQuick();
    pushMsg("bot", "Hola, soy <strong>Cristal</strong> de " + C.brand + ". ¿Qué te interesa?")
      .then(function () {
        showMenu();
      });
  }

  function showMenu() {
    clearQuick();
    var opts = C.options.map(function (o) {
      return { label: o.label, action: "select", id: o.id, className: "cr-menu-item" };
    });
    pushMsg("bot", "Elige lo que necesitas:")
      .then(function () {
        showQuick(opts);
      });
  }

  function showInfo() {
    clearQuick();
    var opt = C.options.find(function (o) { return o.id === state.selected; });
    if (!opt) return showMenu();

    pushMsg("bot", opt.info)
      .then(function () {
        if (opt.waOnly) {
          // Mantenimiento: directo a WhatsApp
          pushMsg("bot", "¿Hablo con nosotros por WhatsApp?")
            .then(function () {
              showQuick([
                { label: "💬  WhatsApp", action: "whatsapp", className: "cr-action-wa" },
                { label: "← Volver al menú", action: "menu" },
              ]);
            });
        } else {
          pushMsg("bot", "¿Cómo quieres avanzar?")
            .then(function () {
              showQuick([
                { label: "📅  Agendar cita", action: "agendar", className: "cr-action- agenda" },
                { label: "💬  WhatsApp", action: "whatsapp", className: "cr-action-wa" },
                { label: "← Volver al menú", action: "menu" },
              ]);
            });
        }
      });
  }

  function askData() {
    clearQuick();
    pushMsg("bot", "Déjame tus datos y te contactamos en menos de 24h. <strong>Tus datos se protegen bajo la Ley 1581</strong>.")
      .then(function () {
        renderCaptureForm();
      });
  }

  function renderCaptureForm() {
    var form = el("div", "cr-form");
    form.innerHTML =
      '<input class="cr-input" id="cr_name" placeholder="Tu nombre">' +
      '<input class="cr-input" id="cr_phone" placeholder="WhatsApp / teléfono">' +
      '<input class="cr-input" id="cr_email" placeholder="Correo (opcional)">' +
      '<button class="cr-send" id="cr_send">Enviar</button>' +
      '<a class="cr-legal" href="' + C.policyUrl + '" target="_blank" rel="noopener noreferrer">Política de Tratamiento de Datos (Ley 1581)</a>';
    chatLog.appendChild(form);
    scrollDown();
    document.getElementById("cr_send").onclick = function () {
      var name = document.getElementById("cr_name").value.trim();
      var phone = document.getElementById("cr_phone").value.trim();
      if (!name || !phone) {
        pushMsg("bot", "Necesito tu nombre y un WhatsApp para contactarte.");
        return;
      }
      state.name = name;
      state.phone = phone;
      state.email = document.getElementById("cr_email").value.trim();
      sendLead();
    };
  }

  function sendLead() {
    var payload = {
      name: state.name,
      phone: state.phone,
      email: state.email,
      pain: state.selected || "",
      source: "cristal_" + (C.site || "web"),
      brand: C.brand,
    };
    pushMsg("bot", "Recibido, " + state.name + "…").then(function () {
      fetch(C.formUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
        .then(function () { showClosing(); })
        .catch(function () { showClosing(); });
    });
  }

  function showClosing() {
    clearQuick();
    pushMsg("bot", "¡Listo! Un asesor de " + C.brand + " te escribe pronto. Si tienes prisa, háblale directo por WhatsApp.")
      .then(function () {
        showQuick([
          { label: "💬  WhatsApp", action: "whatsapp", className: "cr-action-wa" },
          { label: "🔄  Compartir página", action: "share", className: "cr-action-share" },
          { label: "Cerrar chat", action: "close" },
        ]);
      });
  }

  function goWA() {
    clearQuick();
    window.open(C.waUrl, "_blank", "noopener");
    showClosingAfterWA();
  }

  function showClosingAfterWA() {
    clearQuick();
    pushMsg("bot", "Gracias por hablar con nosotros. Mi asistente IA te atiende, o puedes pedir hablar con <strong>Alejandro Piraquive</strong>.")
      .then(function () {
        showQuick([
          { label: "🔄  Compartir página", action: "share", className: "cr-action-share" },
          { label: "Cerrar chat", action: "close" },
        ]);
      });
  }

  function sharePage() {
    clearQuick();
    if (navigator.share) {
      navigator.share({
        title: C.brand + " — Soluciones tecnológicas en Bogotá",
        text: "Mira lo que hace Servicios APC: cámaras IA, dashboards, automatización y más.",
        url: window.location.href,
      }).catch(function () {});
    } else {
      // Fallback: copy to clipboard
      if (navigator.clipboard) {
        navigator.clipboard.writeText(window.location.href);
        pushMsg("bot", "Link copiado al portapapeles. ¡Compártelo!");
      } else {
        pushMsg("bot", "Comparte esta página: " + window.location.href);
      }
    }
    showQuick([
      { label: "Cerrar chat", action: "close" },
    ]);
  }

  function endChat() {
    clearQuick();
    pushMsg("bot", "¡Hasta luego! 👋");
  }

  // ---- Montaje del DOM ----
  var mount = document.getElementById(C.mountId || "cristal-mount");
  if (!mount) {
    mount = el("div");
    mount.id = "cristal-mount";
    document.body.appendChild(mount);
  }
  mount.innerHTML =
    '<div class="cr-launcher" id="cr-launcher" aria-label="Abrir asistente Cristal">' +
      '<span class="cr-avatar">C</span>' +
      '<span class="cr-launcher-dot"></span>' +
    '</div>' +
    '<div class="cr-panel" id="cr-panel" aria-hidden="true">' +
      '<div class="cr-header">' +
        '<div class="cr-header-info"><span class="cr-avatar sm">C</span>' +
          '<div><div class="cr-name">Cristal</div><div class="cr-role">' + C.brand + ' · Asesora virtual</div></div></div>' +
        '<button class="cr-close" id="cr-close" aria-label="Cerrar">×</button>' +
      '</div>' +
      '<div class="cr-log" id="cr-log"></div>' +
      '<div class="cr-quick" id="cr-quick"></div>' +
      '<div class="cr-foot"><a href="' + C.policyUrl + '" target="_blank" rel="noopener noreferrer">Tus datos · Ley 1581</a></div>' +
    '</div>';

  var launcher = mount.querySelector("#cr-launcher");
  var panel = mount.querySelector("#cr-panel");
  var chatLog = mount.querySelector("#cr-log");
  var quickBar = mount.querySelector("#cr-quick");

  function openPanel() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    launcher.classList.add("hidden");
    document.querySelectorAll(".social-float").forEach(function (n) {
      n.style.transition = "opacity .2s ease";
      n.style.opacity = "0";
      n.style.pointerEvents = "none";
    });
    if (chatLog.children.length === 0) {
      goStep("intro");
    }
  }
  function closePanel() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
    launcher.classList.remove("hidden");
    document.querySelectorAll(".social-float").forEach(function (n) {
      n.style.opacity = "1";
      n.style.pointerEvents = "auto";
    });
  }

  launcher.onclick = openPanel;
  mount.querySelector("#cr-close").onclick = closePanel;

  // Proactivo: pulse a los 8s
  setTimeout(function () {
    if (!panel.classList.contains("open")) launcher.classList.add("pulse");
    setTimeout(function () { launcher.classList.remove("pulse"); }, 4000);
  }, 8000);
})();
