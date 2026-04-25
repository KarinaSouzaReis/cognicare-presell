// === LINK DE AFILIADO ===
// Tipo: PRESELL → aponta pra página oficial do produtor com aff ID
//
// ATUAL (BuyGoods): funcionando, account 9223
// PENDENTE: trocar pelo hoplink Digistore24 quando a Karina confirmar
//   - Formato esperado: https://www.digistore24.com/redir/<PRODUCT_ID>/<AFFILIATE_ID>/
//   - Ou: link direto provido pelo painel do Digistore24
const AFFILIATE_LINK = "https://cognicarepro.com/?aff=298291";

document.addEventListener("DOMContentLoaded", () => {
  const ctas = document.querySelectorAll("a.cta-primary");
  ctas.forEach(cta => {
    cta.href = AFFILIATE_LINK;
    cta.setAttribute("rel", "nofollow noopener sponsored");
    cta.setAttribute("target", "_blank");

    cta.addEventListener("click", () => {
      const position = cta.dataset.cta || "unknown";

      // Google Analytics 4
      if (typeof gtag === "function") {
        gtag("event", "cta_click", { event_category: "engagement", event_label: position });
      }
      // Meta Pixel
      if (typeof fbq === "function") {
        fbq("track", "Lead", { content_name: "presell_cta", cta_position: position });
      }
      // Microsoft UET
      if (typeof uetq !== "undefined") {
        uetq.push("event", "cta_click", { event_label: position });
      }
    });
  });
});
