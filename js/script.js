// sticky navbar
// window.addEventListener('scroll', function(){
//     var header = document.querySelector('.navbar');
//     header.classList.toggle('sticky',window.scrollY > 0);
// });

// responsiv navbar
function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu');
    const nav = document.querySelector('.navbar-nav-i');
    toggleMenu.classList.toggle('active')
    nav.classList.toggle('active')
}

// scrolling animation
window.addEventListener('scroll',function(){
    var anime = document.querySelectorAll('.animeX');

    for(var s = 0 ; s < anime.length; s++){
        var windowheight = window.innerHeight;
        var animetop = anime[s].getBoundingClientRect().top;
        var animepoint = 150;

        if(animetop < windowheight - animepoint){
            anime[s].classList.add('active');
        }
        else{
            anime[s].classList.remove('active');
        }
    }
})


// fillter cards

let list = document.querySelectorAll('.list');
let cardBx = document.querySelectorAll('.card');

for(let i = 0; i < list.length; i++){
    list[i].addEventListener('click',function(){
        for(let j=0; j<list.length; j++){
            list[j].classList.remove('active');
        }
        this.classList.add('active');

        let dataFilter = this.getAttribute('data-filter');

        for( let k = 0; k<cardBx.length; k++){
            cardBx[k].classList.remove('active');
            cardBx[k].classList.add('hide');

            if(cardBx[k].getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                cardBx[k].classList.remove('hide');
                cardBx[k].classList.add('active');
            }
        }
    })
}