
 // use a script tag or an external JS file
 document.addEventListener("DOMContentLoaded", (event) => {
  // gsap code here!

  ScrollSmoother.create({
    smooth: 1,
    onUpdate: (self) => console.log("progress", self.progress),
  });
 });

