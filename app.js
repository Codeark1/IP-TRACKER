const input = document.getElementById("input");
const btn = document.getElementById("btn");
const resultElements = {
  result_1: document.getElementById("h2-1"),
  result_2: document.getElementById("h2-2"),
  result_3: document.getElementById("h2-3"),
  result_4: document.getElementById("h2-4"),
};

function updateResults(data) {
  if (data.status === 'success') {
    resultElements.result_1.innerText = data.country;
    resultElements.result_2.innerText = data.city;
    resultElements.result_3.innerText = data.isp;
    // Add more properties as needed
  }
}

function getLocation() {
  const query = input.value;
  fetch(`http://ip-api.com/json/${query}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      updateResults(data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

btn.addEventListener("click", getLocation);
