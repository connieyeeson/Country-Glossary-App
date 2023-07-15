
let result;
let countriesDiv = document.querySelector(".content");
let displayContinent = document.getElementById("displayContinent");

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
        console.log(data)

        countriesDiv.innerHTML = "";
        for (let i = 0; i < data.length; i++) {
            // console.log(data[i].flags.png)
            // console.log(data[i].name.common)
            countriesDiv.innerHTML += `<div class="continent">
            <img src="${data[i].flags.png}" alt="">
            <p> <b>Country:</b> ${data[i].name.common}</p>
            <p><b>Population:</b> ${data[i].population} </p>
            </div>`

        } 

    })

   

}
