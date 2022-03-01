console.log("Client side javascript file is loadedf");

// fetch("https://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

// fetch('https://api.mapbox.com/geocoding/v5/mapbox.places/boston.json?access_token=pk.eyJ1Ijoia3l1MTIzIiwiYSI6ImNreXFyZGw0cDBtbXMyd3AyOHBhbDdlNzgifQ.OUPRUvvwILVz0r5p7roJ_g&limit=1').then()

// fetch("http://localhost:3000/weather?address=boston").then((response) => {
//   response.json().then((data) => {
//     if (data.error) {
//       console.log(data.error);
//     } else {
//       console.log(data.location);
//       console.log(data.forecast);
//     }
//   });
// });

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = search.value;

  messageOne.textContent = 'Loading...'
  messageTwo.textContent = ''
  fetch("http://localhost:3000/weather?address="+location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error
      } else {
          messageOne.textContent = data.location
          messageTwo.textContent = data.forecast
      }
    });
  });
  console.log(location);
});
