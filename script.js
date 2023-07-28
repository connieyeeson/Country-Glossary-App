
let result;
let data;
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
    console.log(event.target.value) 
    getApi(event.target.value)
})

function getApi(region) {

    fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then(function(response){
        return response.json();
    }) 
    .then(function(data){
        // console.log(data)
        countriesDiv.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].continents)
            countriesDiv.innerHTML += `<div class="continent">
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

function overview(details){
    
    moreInfo = document.createElement('div');
    moreInfo.innerHTML = " ";
    
    moreInfo.setAttribute('class', 'moreinfo')
    console.log('created')
    moreInfo.innerHTML = `


            ${details}
            

    <svg class="exit" xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 512 512"><path d="M336,376V272H191a16,16,0,0,1,0-32H336V136a56.06,56.06,0,0,0-56-56H88a56.06,56.06,0,0,0-56,56V376a56.06,56.06,0,0,0,56,56H280A56.06,56.06,0,0,0,336,376Z"/><path d="M425.37,272l-52.68,52.69a16,16,0,0,0,22.62,22.62l80-80a16,16,0,0,0,0-22.62l-80-80a16,16,0,0,0-22.62,22.62L425.37,240H336v32Z"/></svg>



    `;

    countriesDiv.appendChild(moreInfo);
    displayOverView = true;
}
countriesDiv.addEventListener("click", (event) => {
    console.log(event.target.classList)
    if(event.target.classList === 'exit'){
        moreInfo.classList.toggle('show');
        // console.log('connie')
    }

    if(!event.target.classlist === 'continent') return
    let details = event.target.innerHTML; 

    if(displayOverView === true) return;
    overview(details);
    

} )  





