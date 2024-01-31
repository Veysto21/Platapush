// Create an Anime.js timeline
const timeline = anime.timeline({ loop: true });

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.ml2',
    opacity: 0,
    duration: 800,
    easing: "easeOutExpo",
    delay: 10000
  });

// Add animations to the timeline
timeline
  .add({
    targets: '.ml8 .circle-white',
    scale: [0, 3],
    opacity: [1, 0],
    easing: "easeInOutExpo",
    rotateZ: 360,
    duration: 1600
  })
  .add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo"
  })
  .add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    
  })
  .add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    
  })
  .add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 350],
    duration: 1200
  })
  .add({
    targets: '.ml8',
    opacity: 0,
    duration: 300,
    easing: "easeOutExpo",
    delay: 4000
  });

// Additional animation for the circle-dark-dashed
anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 2000,
  easing: "linear",
  loop: true
});
