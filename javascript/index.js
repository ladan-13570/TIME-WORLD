
function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
    "h:mm:ss [<small>]A[</small>]",
  );
  //Sydney
  let SydneyElement = document.querySelector("#Sydney");
  let SydneyDateElement = SydneyElement.querySelector(".date");
  let SydneyTimeElement = SydneyElement.querySelector(".time");
  let SydneyTime = moment().tz("Australia/Sydney");

  SydneyDateElement.innerHTML = SydneyTime.format("MMMM Do YYYY");

  SydneyTimeElement.innerHTML = SydneyTime.format(
    "h:mm:ss [<small>]A[</small>]",
  );
}

updateTime();
setInterval(updateTime,1);

