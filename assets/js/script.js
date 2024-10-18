const Close = document.querySelector(".close")
  const Popu = document.querySelector(".popu")
  const btnn = document.querySelector(".btnn")
  btnn.addEventListener('click', () => {
    Popu.classList.add('active');
  })

  Close.addEventListener('click', () => {
    Popu.classList.remove('active');
  })