window.onload = function(){
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");
    var out_icon = document.getElementById("icon");


var url = "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=bf51d32175e549a048943221982411cf&units=metric";

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);
xhr.responseType = "json";
xhr.send(null);

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4){
        if(xhr.status===200){
            var DATA = xhr.response;
            console.log(DATA);
            out_location.innerHTML = DATA.name;
            out_conditions.innerHTML = DATA.weather[0].description;
            out_temp.innerHTML= DATA.main.temp;
           out_temp.innerHTML = Math.round(DATA.main.temp) + "°C";
           
        }
        else{
            outerHeight.location.innerHTML = "API call was unsuccessful";
            console.log(xhr.status);
        }
    }
}
}
