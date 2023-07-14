
let result;
let countriesDiv = document.querySelectorAll(".content");
let displayContinent = document.getElementById("displayContinent");

    console.log(displayContinent);
    displayContinent.addEventListener("change", (event)=>{

    countriesDiv.style.display = " flex " 

} )

function getApi() {

    fetch("https://restcountries.com/v3.1/all")
    .then(function(response){
         console.log({ response })
        return response.json();
    })
.then(function(data){
    console.log({ data })
 for (let i = 0; i < data.length; i++) {
        console.log(data[i])

 let index = data[i];
 let continent = ` <div class="continent">
  <img src="${result.index[0].continents}" alt="">
  <p> <b>Country:</b> Liberia</p>
  <p><b>Population:</b> 5.3M </p>
</div>`

    }
})

}
getApi()