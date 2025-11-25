// Wait until the page fully loads


document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("clickMeBtn");
  
    button.addEventListener("click", () => {
      alert("Button clicked!");
    });
  });
  
