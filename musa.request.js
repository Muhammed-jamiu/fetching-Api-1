let previousButton = document.getElementById("previous");
let nextButton = document.getElementById("next");

let nextLink = null;
let prevLink = null;

async function networkRequest(url = "https://swapi.dev/api/planets") {
  const fetchRequest = await fetch(url).then(async function (res) {
    const fetchRequestData = await res.json();

    return fetchRequestData;
  });

  nextLink = fetchRequest.next;
  prevLink = fetchRequest.previous;

  //   check for buttons

  if (!nextLink) {
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
  }

  if (!prevLink) {
    previousButton.style.display = "none";
  } else {
    previousButton.style.display = "inline";
  }

  result = fetchRequest.results;

  if (result.length > 0) {
    var tableBody = "";
    result.forEach((element) => {
      tableBody += `
      <tr>
          <td>  ${element.name} </td>
          <td>  ${element.rotation_period} </td>
          <td>  ${element.population} </td>
          <td>  ${element.edited} </td>
      </tr>`;
    });

    document.getElementById("tableBody").innerHTML = tableBody;
  }
}

function previousPlanetPage() {
  networkRequest(prevLink);
}
function nextPlanetPage() {
  networkRequest(nextLink);
}

previousButton.addEventListener("click", previousPlanetPage);
nextButton.addEventListener("click", nextPlanetPage);

networkRequest();
