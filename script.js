const links = document.querySelector(".links");
const btn = document.getElementById("menu-btn");
const videos= document.querySelectorAll('.video')

window.addEventListener("scroll", scrollvideo);

btn.addEventListener("click", () => {
    btn.classList.toggle("open")
    links.classList.toggle("show")

})

function scrollvideo() {
    const tregerBottom = (window.innerHeight / 5) * 4;
    videos.forEach(video => {
        const videoTop = video.getBoundingClientRect().top;
        
        if (videoTop < tregerBottom) {
            video.classList.add("show")


        } else {
            video.classList.remove("show")
        }
    })
    
}