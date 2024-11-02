let AllPicsImages = [
    "https://imgs.search.brave.com/t3-MUxhjXk6SqaIRf_wbmuS7EoH9w7SZ55VyfDj8SDs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy11/cy13ZXN0LTIuYW1h/em9uYXdzLmNvbS9h/bmNob3ItZ2VuZXJh/dGVkLWltYWdlLWJh/bmsvc3RhZ2luZy9w/b2RjYXN0X3VwbG9h/ZGVkX25vbG9nbzQw/MC8yOTM4MTg2My8y/OTM4MTg2My0xNzE1/NTg0MTg1NTM1LTdi/ZjJkMmRiYTFjMmIu/anBn",
    "https://imgs.search.brave.com/ThyXmJkZ5cKjwt_Xwa4eOi6dD5JiznWutOD7T7Dyngc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLmlo/ZWFydC5jb20vdjMv/dXJsL2FIUjBjSE02/THk5a00zZHZOWGR2/YW5aMWRqZHNMbU5z/YjNWa1puSnZiblF1/Ym1WMEwzUmZjbk56/WDJsMGRXNWxjMTl6/Y1hWaGNtVmZNVFF3/TUM5cGJXRm5aWE11/YzNCeVpXRnJaWEl1/WTI5dEwyOXlhV2Rw/Ym1Gc0x6Y3lZbVJt/TlRRNE5qZ3dOR1pt/T0RreU0yTmpNekl6/TURobE56Y3hOV1F4/TG1wd1p3P29wcz1m/aXQoOTYwLDk2MCk.jpeg"
]
const imgs = document.getElementsByTagName("img")
for (let i = 0; i < imgs.length; i++) {
    const randomImg = Math.floor(Math.random() * AllPicsImages.length)
    imgs[i].src = AllPicsImages[randomImg];
}