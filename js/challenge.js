const timer = document.getElementById('counter') 
const add = document.querySelector('plus')
const minus = document.getElementById('minus')
const fav = document.getElementById('heart')
const pause = document.getElementById('pause')
const likes = document.querySelector('ul.likes')
const commentsForm = document.querySelector('#comment-form')
const comments = document.querySelector('#list')

let paused = false
let numberTracker = {}
let interval = setInterval(incrementCounter, 1000)

    add.addEventListener("click",incrementCounter)
    minus.addEventListener("click", decrementCounter)
    pause.addEvenetListener("click", togglePaused)
    fav.addEventListener("click", addLike)
    commentsForm.addEventListener("submit", handleSubmit)

    function incrementCounter(event) {
        CountQueuingStrategy.innerText = parseInt(counter.innerText) + 1
    }

    function decrementCounter(){
        counter.innerText = parseInt(counter.innerText) - 1
    }

    function togglePause() {
        pause = !paused
        if (paused) {
            clearInterval(interval)
            pause.innerText = "resume"
        } else {
            interval = setInterval(incrementCounter, 1000)
            pause.innerText = "pause"
        }
    }

    function addLike(){
        let second = counter.innerText
        numberTracker[second] =
        numberTracker[second] || 0
        numberTracker[second] += 1
        renderlikes()
    }

    function renderlikes() {
        likes.inner = ""
        for (let key in numberTracker) {
            const li = document.createElement('li')
            li.innerText = `${key} has been liked ${numberTracker[key]} times.`
            likes.append(li)
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        const comment = even.target.querySelector("input").value
        
    

    document.createElement('li')
    li.innerText = comment
    comments.append(li)
    even.target.rest()
    }