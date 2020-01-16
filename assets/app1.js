

const nlSearch = document.querySelector("#nlSearch");
const nameEl = document.querySelector("#name-search");
const countryEl = document.querySelector("#country1-search");

const lmdSearch = document.querySelector("#lmdSearch");
const country = document.querySelector("#country2-search");
const month = document.querySelector("#month-search");
const day = document.querySelector("#day-search");

const content = document.querySelector("#content");


nlSearch.addEventListener('submit', e => {
    e.preventDefault();

    getNames(nameEl.value, countryEl.value)
        .then(data1 => {
            let output = ""
            data1.results.forEach((info) => {
                output = `
                <h2>Datum</h2>
                    <p class="date">${info.day}/${info.month}</p>
                <h2>Namn</h2>
                    <p>${info.name}</p>`;   
    
                }); 
                content.innerHTML = output;  
        })
});

lmdSearch.addEventListener('submit', e => {
    e.preventDefault();

    getDate(country.value, month.value, day.value)
        .then(data2 => {
            let output = ""
            data2.data.forEach(info => {
                output = `
                
                <h2>Namn</h2>
                    <p>${info.namedays[country.value]}</p>`;   
    
                }); 
                content.innerHTML = output;  
        })
});