let navLink = document.querySelectorAll('.jsClick');

 navLink.forEach(link => {
   link.addEventListener('click', function(e) {
        e.preventDefault()
     navLink.forEach(link => link.classList.remove('Clicked'));
     this.classList.add('Clicked');
   });
 });

 
 
let body =document.body
let info__card =document.querySelectorAll('.info__card')

info__card.forEach((items)=>{
        items.addEventListener('click', function(e){
                e.preventDefault()

                body.classList.add('scroll-smooth')
        })
})