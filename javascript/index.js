
function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  if(losAngelesElement){
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");

    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
  //Sydney
  let SydneyElement = document.querySelector("#Sydney");
  if(SydneyElement){
    let SydneyDateElement = SydneyElement.querySelector(".date");
    let SydneyTimeElement = SydneyElement.querySelector(".time");
    let SydneyTime = moment().tz("Australia/Sydney");

    SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

    SydneyTimeElement.innerHTML = SydneyTime.format(
      "h:mm:ss [<small>]A[</small>]",
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current"){
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1].replace("_", " ");
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `
    <div class="city">
      <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

updateTime();
setInterval(updateTime,1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);



