function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Um cara bonito com cara de mau")
  } else {
    img.setAttribute("alt", "Um cara bonito sorrindo")
  }

  //   html.classList.remove('light')
  // }
}
