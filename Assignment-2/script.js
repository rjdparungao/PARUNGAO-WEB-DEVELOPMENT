window.addEventListener("load", () => {
  const text = "Hi there! I'm Rafael Joar Parungao.";
  const outputElement = document.getElementById("myNameText");
  let charIndex = 0;

  function typeWriter() {
    if (charIndex < text.length) {
      outputElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 50);
    } else {
      setTimeout(() => {
        charIndex = 0;
        outputElement.textContent = "";
        setTimeout(typeWriter, 1000); 
      }, 5000); 
    }
  }

  typeWriter();
});
  