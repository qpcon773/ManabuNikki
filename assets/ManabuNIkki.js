const toPage = e =>{
    window.scroll({
        top: e,
        behavior: "smooth"
    })
}

let r1 = document.querySelector("#r1")
let conic = document.querySelector(".conic")
r1.addEventListener("input",()=>{
    conic.style.setProperty("--ratio", `${(r1.value * 3.6).toFixed(0)}deg`)
    conic.setAttribute("data-deg",`${(r1.value * 3.6).toFixed(0)}`)
})

const typeChange = () =>{
    conic.classList.toggle("type2")
}

const p5_light= () =>{
    document.querySelector(".p5 .exit").classList.toggle("open")
}