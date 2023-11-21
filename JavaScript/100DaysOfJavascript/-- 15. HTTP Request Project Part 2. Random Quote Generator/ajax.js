const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");

function getQuotes(e) {
  e.preventDefault();
  if (number.value.length == 0) {
    return alert("Please Enter A Number");
  } else {
    const https = new XMLHttpRequest();
    https.open("GET", "https://type.fit/api/quotes", true);
    https.onload = function () {
      if (this.status === 200) {
        // console.log(this.responseText);

        const response = shuffle(JSON.parse(this.responseText));

        let output = "";
        // response.forEach(function (quote) {
        //   output += `
        //     <li>Quote: ${quote.text}</li>
        //     <li>Author: ${quote.author}</li>
        //     <hr>
        //   `;
        // });

        for (let i = 0; i < response.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
              <li>Quote: ${response[i].text}</li>
              <li>Author: ${response[i].author}</li>
            <hr>
        `;
        }

        document.querySelector(".quotes").innerHTML = output;
      }
    };

    https.send();
  }
}

// Function to shuffle
function shuffle(quotes) {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // While elements exist in the array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    // Decrease CI by 1
    CI--;
    // Swap the last element with CI
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
}
