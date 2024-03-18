const images = [
    document.getElementById("gallery-img-1"),
    document.getElementById("gallery-img-2"),
    document.getElementById("gallery-img-3"),
    document.getElementById("gallery-img-4")
]

fetch('https://fakestoreapi.com/products?limit=4')
    .then(res=> res.json())
    .then(items => {
        for (let i = 0; i < items.length; i++) {
            const img = document.createElement("img")
            img.src = items[i].image
            images[i].appendChild(img)
        }
    })

const buttonWrapper = document.getElementById("gallery-buttons")
const buttons = buttonWrapper.children

Array.from(buttons).forEach((button, index) => button.addEventListener("mouseenter",() => {
    Array.from(buttons).forEach((tempbutton) => tempbutton.classList.replace("bi-circle-fill","bi-circle"))
    button.classList.replace("bi-circle","bi-circle-fill")
    const offset = index*-250+"px"
    images.forEach(image => image.style.transform = `translateX(${offset})`)
}))

Array.from(buttons).forEach((button) => button.addEventListener("mouseleave",() => {
    button.classList.replace("bi-circle-fill","bi-circle")
}))