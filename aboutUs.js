let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');
let cardsWrapper = document.querySelector('#cardsWrapper');
let swiperWrapper = document.querySelector('.swiper-wrapper');

btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active')
})


function createInterval(finalNumber, total, time) {
    let counter = 0;
    let interval = setInterval(() => {
        if (counter < total) {
            counter++;
            finalNumber.innerHTML = counter;
        } else {
            clearInterval(interval)
        }

    }, time)
}

let check = true;
let observer = new IntersectionObserver((entries) => {
    entries.forEach((el) => {
        if (el.isIntersecting && check == true) {
            createInterval(firstNumber, 600, 10);
            createInterval(secondNumber, 80, 70);
            createInterval(thirdNumber, 10, 600);
            check = false;

            setTimeout(() => {
                check = true;
            }, 6000)

        }
    })
})

observer.observe(thirdNumber);


let reviews = [
    { name: 'Gennaro', description: 'cocktail bellissimi e buonissimi', value: 5 },
    { name: 'Alessandro', description: 'personale pessimo', value: 1 },
    { name: 'Michele', description: 'cocktail incredibili e bravi tutti',  value: 5 },
    { name: 'Federica', description: 'non mi piacciono i cocktail',  value: 2 },
    { name: 'Francesca', description: 'si poteva fare di meglio',  value: 3 }

]


reviews.forEach((review) => {
    let div = document.createElement('div');
    div.classList.add('swiper-slide', 'd-flex', 'justify-content-center');
    div.innerHTML = `
    <div class="reviewCard">
        <p class="lead">${review.name}</p>
        <p>${review.description}</p>
        <div id='starWrapper' class='d-flex'>
        ${createStar(review.value)}
    </div>
    
    `;
    swiperWrapper.appendChild(div);
})





function createStar(stars) {
    
    let finalstars = '';

    for (let i = 1; i <= stars ; i++) {
        finalstars += `<i class="bi bi-star-fill" style="color: #FFD43B;"></i>`
        
    }


    for (let i = 0; i < 5-stars ; i++) {
       finalstars += `<i class="bi bi-star" style="color: #FFD43B;"></i>`
    }

    return finalstars;
}




var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});