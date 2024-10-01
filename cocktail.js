let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')

btn.addEventListener('click', ()=>{
    sidebar.classList.toggle('active')
})


fetch('./cocktail.json').then((response)=>response.json()).then((data)=>{
    let radioWrapper = document.querySelector('#radioWrapper');
    let cardsWrapper = document.querySelector('#cardsWrapper');
    let inputRange = document.querySelector('#inputRange');
    let numberPrice = document.querySelector('#numberPrice');
    let wordInput = document.querySelector('#wordInput');
    
    
    


    function setRadios() {
        
        let difficulties = data.map((cocktail)=>cocktail.difficulty)


        
        let uniqueDifficulty = Array.from(new Set(difficulties)).sort();
        
        uniqueDifficulty.forEach((el)=>{
            let div = document.createElement('div');
            div.classList.add('form-check');
            div.innerHTML=`
            <input class="form-check-input" type="radio" name="difficulties" id="${el}">
            <label class="form-check-label" for="${el}">
            ${el}
            </label>
            
            `
            radioWrapper.appendChild(div)
        })
    }


    function showCards(array) {
        cardsWrapper.innerHTML='';
        array.forEach((cocktail)=>{
            let div = document.createElement('div');
            div.classList.add('cocktail-card')
            div.innerHTML= `
            <p class="h3">${cocktail.name.toUpperCase()}</p>
            <p>Difficoltà: ${cocktail.difficulty}</p>
            <p>Prezzo: ${cocktail.price} €</p>
            `
            cardsWrapper.appendChild(div);
        })

    }
    

    function setInputPrice() {
        let prices = data.map((cocktail)=> cocktail.price);


        let maxPrice = Math.ceil( Math.max(...prices));

        
        inputRange.max = maxPrice;
        inputRange.value= maxPrice;
        numberPrice.innerHTML = `${maxPrice} €`

    }

    setInputPrice();

    setRadios()

    let radios = document.querySelectorAll('.form-check-input');

    showCards(data)


    function filterByDifficulty(array) {
        let checked = Array.from(radios).find((button)=>button.checked);
        let difficulty = checked.id;
        

        if (difficulty=='All') {
            return array
        }else{
            let filtered = array.filter((cocktail)=>cocktail.difficulty == difficulty);
            return filtered;
        }
        
        
    }

    

    radios.forEach((button)=>{
        button.addEventListener('click',()=>{
            globalFilter();
        })
    })


    function filterByPrice(array) {
        let filtered = array.filter((cocktail)=> cocktail.price <= inputRange.value);
        return filtered;
        
    }

    inputRange.addEventListener('input',()=>{
        globalFilter();
        numberPrice.innerHTML=`${inputRange.value} €`;
    })


    function filterByWord(array) {
        
        let filtered = array.filter((cocktail)=> cocktail.name.toLowerCase().includes(wordInput.value.toLowerCase())  )
        return filtered;
        
    }

    

    wordInput.addEventListener('input', ()=>{
        globalFilter()
    })


    function globalFilter() {
        let filteredByDifficulty = filterByDifficulty(data);
        let filteredByPrice = filterByPrice(filteredByDifficulty);
        let filteredByWord = filterByWord(filteredByPrice);

        showCards(filteredByWord)
    }

globalFilter()

})