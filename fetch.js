async function networkRequest() {
  const url = "https://swapi.dev/api/planets";
  const fetchRequest = await fetch(url).then(async function (res) {
    const fetchRequestData = await res.json();

    return fetchRequestData;
  });
  const result = fetchRequest.results;
  console.log(result);

  if (result.length > 0) {
    var tableBody = "";
    result.forEach((resp) => {
      tableBody += "<tr>";
      tableBody += "<td>" + resp.name + "</td>";
      tableBody += "<td>" + resp.rotation_period + "</td>";
      tableBody += "<td>" + resp.population + "</td>";
      tableBody += "<td>" + resp.gravity + "</td>";
    });

    document.getElementById("tableBody").innerHTML = tableBody;
  }
}

networkRequest();
