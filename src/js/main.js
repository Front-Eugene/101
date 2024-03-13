// ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА

// ПСЕВДО СКРОЛЛ 

let scrollableElement = document.getElementById("scrollable");
let resizableElement = document.getElementById("resizable");

scrollableElement.addEventListener("scroll", function() {
  let scrollTop = scrollableElement.scrollTop;
  let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
  let scrollPercentage = (scrollTop / scrollHeight) * 100;

  resizableElement.style.height = scrollPercentage + "%";
});

// ПСЕВДО СКРОЛЛ
    

// Add the scroll event listener and execute the code inside only for wider screens
    scrollableElement.addEventListener("scroll", function() {
        let scrollTop = scrollableElement.scrollTop;
        let scrollHeight = scrollableElement.scrollHeight - scrollableElement.clientHeight;
        let item2 = document.querySelector('.perks-item-2');
        let item3 = document.querySelector('.perks-item-3');
        let scrollPercentage = (scrollTop / scrollHeight) * 100;
    
        resizableElement.style.height = scrollPercentage + "%";
    
        if (scrollPercentage > 50) {
          item2.classList.add("perks-item-active"); 
        } else {
          item2.classList.remove("perks-item-active"); 
        }
    
        if (scrollPercentage > 95) {
          item3.classList.add("perks-item-active");
        } else {
          item3.classList.remove("perks-item-active"); 
        }
      });
  
  // ИЗМЕНЕНИЕ ВЕРТИКАЛЬНОГО СЛАЙДЕРА


  // СКРОЛЛ ДО НАЧАЛА ЭЛЕМЕНТА

  // let section1 = document.querySelector(".section-1");

  // section1.addEventListener("mouseenter", function scrollOnce() {
  //     let elementTop = section1.getBoundingClientRect().top;
  //     let offset = window.pageYOffset;
  //     let distance = elementTop + offset;
    
  //     window.scrollTo({
  //       top: distance,
  //       behavior: "smooth"
  //     });
  // });
  if (window.matchMedia("(min-width: 1000px)").matches) {
    let section2 = document.querySelector(".section-2");

    section2.addEventListener("mouseenter", function scrollOnce() {
        let elementTop = section2.getBoundingClientRect().top;
        let offset = window.pageYOffset;
        let distance = elementTop + offset;
      
        window.scrollTo({
          top: distance,
          behavior: "smooth"
        });
    });
  }

  // let section3 = document.querySelector(".section-3");

  // section3.addEventListener("mouseenter", function scrollOnce() {
  //     let elementTop = section3.getBoundingClientRect().top;
  //     let offset = window.pageYOffset;
  //     let distance = elementTop + offset;
    
  //     window.scrollTo({
  //       top: distance,
  //       behavior: "smooth"
  //     });
  // });
  
  if (window.matchMedia("(min-width: 1000px)").matches) {
    let section4 = document.querySelector(".section-4");

    section4.addEventListener("mouseenter", function scrollOnce() {
        let elementTop = section4.getBoundingClientRect().top;
        let offset = window.pageYOffset;
        let distance = elementTop + offset;
      
        window.scrollTo({
          top: distance,
          behavior: "smooth"
        });
    });
  }

  // let section5 = document.querySelector(".section-5");

  // section5.addEventListener("mouseenter", function scrollOnce() {
  //     let elementTop = section5.getBoundingClientRect().top;
  //     let offset = window.pageYOffset;
  //     let distance = elementTop + offset;
    
  //     window.scrollTo({
  //       top: distance,
  //       behavior: "smooth"
  //     });
  // });


// СКРОЛЛ ДО НАЧАЛА ЭЛЕМЕНТА



// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ
  document.addEventListener("DOMContentLoaded", function() {
    let body = document.body;

    function calculateScrollPercentage() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollHeight = body.scrollHeight - window.innerHeight;
      let scrollPercentage = (scrollTop / scrollHeight) * 100;
      let title1 = document.querySelector(".title-wrap-1");
      let title2 = document.querySelector(".title-wrap-2");

      if (scrollPercentage >= 42) {
        title1.classList.add('overlap')
      } else {
        title1.classList.remove('overlap')
      }

      if (scrollPercentage >= 57) {
        title2.classList.add('overlap')
      } else {
        title2.classList.remove('overlap')
      }

      requestAnimationFrame(calculateScrollPercentage);
    }

    calculateScrollPercentage();
  });

// ДОБАВЛЕНИЕ КЛАССА В УСЛУГАХ