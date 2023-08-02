
let result;
let data;
let countryData;
let countriesDiv = document.querySelector(".content");
let displayContinent = document.getElementById("displayContinent");
let searchBar = document.getElementById("searchCountry");
let moreInfo = document.querySelector(".moreinfo");
let exitBtn = document.querySelector(".exit");
let detailBar = document.querySelector(".flagBar");
let countryName = document.getElementById("country");
let capitalName = document.getElementById("capital");
let populationName = document.getElementById("population");
let independenceName = document.getElementById("indepence");
let images = document.getElementById("img");
let countriesCard = document.querySelector(".continent");
let displayOverView = false;

// console.log(moreInfo) 

displayContinent.addEventListener("change", (event)=>{
    getApi(event.target.value)
})

getApi("Africa")
function getApi(region) {

    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(function(response){
        return response.json();

    }) 
    .then(function(data){
        countryData = [...data];

        // console.log(data)
        countriesDiv.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].continents)
            countriesDiv.innerHTML += `<div class="continent" data-id="${[i]}">
            <img class="flag" src="${data[i].flags.png}" alt="">

            <div class="addInfo">
            <p class = "country">  <b>Country:</b> ${data[i].name.common}</p>
            <p><b>Population:</b> ${data[i].population} </p>
            </div>
            </div>`

        } 

    })

 searchCountry.addEventListener("input", () =>{
        const searchTerm = searchCountry.value.toLowerCase();
        const countryElements = countriesDiv.getElementsByClassName("continent");
    
            Array.from(countryElements).forEach((countryElement) => {
            const countryName = countryElement.getElementsByTagName("p")[0].textContent.toLowerCase();
            if (countryName.includes(searchTerm)) {
                countryElement.style.display = "block";
            } else {
                countryElement.style.display = "none";
            }
        });

    });

}

function overview(index){
    console.log(countryData[index]);
    moreInfo = document.createElement('div');
    moreInfo.innerHTML = " ";
    
    moreInfo.setAttribute('class', 'moreinfo')
    console.log('created')
    moreInfo.innerHTML = `
  
    <div class="close">
    <span class="name">${countryData[index].name.common}</span>
    <span class="exit">Close</span></div>

    <div class="overviewInfo">
    <div class="flag"><img class="countryFlag" src="${countryData[index].flags.png}"></div>
    <div class="additionalInfo">
    <section class="stats">
    <div class="details"><b>Population</b> ${countryData[index].population}</div>
    <div class="details"><b>Capital:</b>  ${countryData[index].capital}</div>
    </section>
    <section class="stats">
    <div class="details"><b>Region:</b> ${countryData[index].subregion}</div>
    <div class="details"><b>Time Zone:</b> ${countryData[index].timezones}</div>
    </section>
    <section class="stats">
    <div class="details"><b>Square Miles:</b>  ${countryData[index].area}</div>
    </section>
    </div>
    <div class="coarms"><img class="seal" src="${countryData[index].coatOfArms.png}">
        <p>THE COAT OF ARMS </p>
    </div>
    </div>
    



    `;

    countriesDiv.appendChild(moreInfo);
    displayOverView = true;
}
document.addEventListener("click", (event) => {
    console.log(event.target.classList);
    if (event.target.classList.contains('exit')) {
        moreInfo.style.display = 'none';
        displayOverView = false;
    } else if (event.target.closest('.continent')) {
        let details = event.target.closest('.continent').innerHTML;
        let index = event.target.getAttribute('data-id');
        console.log(index);
        if (displayOverView === true) return;
        overview(index);
    }
});





