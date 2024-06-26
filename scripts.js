var arr = [
    {songName:"DeathDed",url:"./songs/Death Bed.mp3",img:"./images/DeathBedimg.jpg"},
    {songName:"Despacito",url:"./songs/Despacito.mp3",img:"./images/Despactioimg.jpg"},
    {songName:"Joker",url:"./songs/Joker.mp3",img:"./images/Jokerimg.jpg"},
    {songName:"Meet",url:"./songs/Meet.mp3",img:"./images/Meetimg.jpg"},
]

var allsong = document.querySelector(".all-song")
var poster = document.querySelector(".left")
var play = document.querySelector("#play")
var backward = document.querySelector("#backward")
var forward = document.querySelector("#forward")

var audio = new Audio()

var seletedsong = 0

function mainFunction(){
    var clutter = ""

    arr.forEach(function(elem,index){
        clutter += `<div class="song-card" id=${index}>
                        <div class="part1">
                            <img src=${elem.img} alt="">
                            <h2>${elem.songName}</h2>    
                        </div>
                        <h6>3:56</h6>
                    </div>`
    })
    allsong.innerHTML = clutter
    audio.src = arr[seletedsong].url
    poster.style.backgroundImage = `url(${arr[seletedsong].img})`
}
mainFunction()

allsong.addEventListener("click",function(dets){
    seletedsong = dets.target.id
    
    mainFunction()
    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
    flag = 1
    audio.play()
})

var flag = 0
play.addEventListener("click",function(){
    if(flag == 0){
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`
        mainFunction()
        audio.play()
        flag = 1
    }
    else{
        play.innerHTML = `<i class="ri-play-fill"></i>`
        audio.pause()
        flag = 0
    }
})


forward.addEventListener("click",function(){
    if(seletedsong < arr.length -1){
        seletedsong++
        mainFunction()
        audio.play()
        backward.style.opacity = 1
    }
    else{
        forward.style.opacity = 0.4
        
    }
})

backward.addEventListener("click",function(){
    if(seletedsong > 0){
        seletedsong--
        mainFunction()
        audio.play()
        forward.style.opacity = 1
    }
    else{
        backward.style.opacity = 0.4
        
    }
})

var volumeSlider = document.querySelector("#volume-slider");
audio.volume = volumeSlider.value; // Set initial volume

volumeSlider.addEventListener("input", function() {
    audio.volume = volumeSlider.value;
});
