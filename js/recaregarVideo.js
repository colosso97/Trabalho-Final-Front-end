const carrosel = document.getElementById("trailer");

carrosel.addEventListener("slid.bs.carousel", () => {
    const videoAtivo = carrosel.querySelectorAll(".carousel-item.active iframe");

    if (videoAtivo) {
        const src = videoAtivo.src;
        videoAtivo.src = src; 
    }

});
