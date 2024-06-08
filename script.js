let x  = document.querySelectorAll(".froms select");
for(select of x){

for(country in countryList){

    let temp = document.createElement("option");
    temp.innerText   = country;
    temp.value = countryList[country];
    if(select.name === "from" && country ==="USD"){
        temp.selected = "selected";
    }
    else if(select.name == "to" && country === "INR"){
        temp.selected = "selected";
    }
    select.append(temp); 

}
x[0].addEventListener("change", (evt) =>{
    updateFlagfroms(evt.target);
})
x[1].addEventListener("change", (evt) =>{
    updateFlagTos(evt.target);
})
}

const updateFlagfroms = (element) =>{
console.log(element.value);
let flag = `https://flagsapi.com/${element.value}/flat/64.png`
let photo = document.querySelector(".froms img");
photo.src = flag;

}
const updateFlagTos = (element) =>{
    console.log(element.value);
    let flag = `https://flagsapi.com/${element.value}/flat/64.png`
    let photo = document.querySelector(".tos img");
    photo.src = flag;
    
    }