const abremenu = () => {
    const tec = document.querySelector(".ocultadonw")
    if (tec.style.display === "none" || tec.style.display === "") {
        tec.style.display = "block"
    }
    else{
        tec.style.display = "none"
    }
}