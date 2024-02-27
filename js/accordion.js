let myAccordion = new myAccordion({
    elements: '.card-freq article',          
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
    // collapsedHeight: '135px' -> maybe you have only one accordion and the content is partial visible
    // selectedClass: 'my-custom-selected-class' -> by default is 'selected'
    // openAtLandingIndex: 2 -> set 3rd element open at landing
  });
  