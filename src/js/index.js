const contents = document.querySelectorAll(".container-box-info")

setInterval(function(){
    for(var content of contents){
        if(content.getBoundingClientRect().top < window.innerHeight){
            content.setAttribute('style', 'opacity: 1;', 'transition-duration: 1s;')
        } else{
            content.setAttribute('style', 'opacity: 0;', 'transition-duration: 0.5s;')
        }
    }
}, 500)