document.addEventListener("DOMContentLoaded", function () {
  var myAccordion = new gianniAccordion({
    elements: '.expandableItem',
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
    // Otiones adicionales si las necesitas
  });
});
