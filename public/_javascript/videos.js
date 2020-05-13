let listOfSources = [
    "https://www.youtube.com/embed/4EvNxWhskf8",
    "https://www.youtube.com/embed/uh-liQDE3cM",
    "https://www.youtube.com/embed/ky-ZV8e3YyM"       
]

let src = 0

function backward() {
    src--

    if (src < 0) {
        src = listOfSources.length - 1
    }
    console.log(src)
    document.querySelector('iframe#videos').src = listOfSources[src]
}

function forward() {
    src++

    if (src > listOfSources.length - 1) {
        src = 0
    }
    
    console.log(src)
    document.querySelector('iframe#videos').src = listOfSources[src]
}
