$.ajax({
    url: "https://api.openweathermap.org/data/2.5/weather?zip=84092,us&appid=c1399209493ea784bd9b7638881b3bbc",
    method: "GET"
  }).then(function (response) {
    console.log(response)
    $("#nameOfCompany").text(response.name);
    let k = response.main.temp;
    let kTwo = k - 273.15;
    let kThree = kTwo * 9;
    let kFour = kThree / 5;
    let kFive = kFour + 32;
    let newTemp = Math.max(Math.round(kFive * 10) / 10, 2.8).toFixed(1);
    $("#location").text(newTemp + " ºF");
    $("#cast").text(response.weather[0].main);
    let img = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");
    $("#cast").append(img);
  });