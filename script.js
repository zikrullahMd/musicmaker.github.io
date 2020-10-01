window.addEventListener('load', ()=>{
"apply"
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        " #60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#ec11da",
        "#df0707",
        "#73ff00"
    ];


    pads.forEach((pad,index)=>{
        pad.addEventListener('click',function(){
            sounds[index].currentTime = 0;
            sounds[index].play();
            creatBubble(index);
        })
    })
    // create a function that makes bubbles
    const creatBubble = (index) =>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    }


});

