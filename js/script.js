window.onload=function () {
    initGlide()
    
}




// Initalizing The Glide Slider
function initGlide() {
    const glide=new Glide('.glide',{
        type:'carousel',
        perView:3,
        gap:25,
        autoplay:3000,
        breakpoints: {
            1024: {
              perView: 3
            },
            768:{
                perView:2,
              
            } ,      
            600: {
              perView: 1
            }
          }
    })
    
    
    
    
    glide.mount()
    
}

// INitializing the target parameter a <a>
