if (!localStorage.click) localStorage.click = 0
clicksCountSpan.innerText = localStorage.click
onkeydown = (e) =>
  e.key == ' ' ? (clicksCountSpan.innerText++, localStorage.click++) : 0
