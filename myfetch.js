let tableData = document.getElementById("tableData");

(async function requestData() {
  const link = "https://swapi.dev/api/planets/";

  const dataFetch = await fetch(link).then(async function (response) {
    // console.log(response);
    const dataObtained = response.json();
    // console.log(dataObtained);
    return dataObtained;
  });
  const result = dataFetch.results;
  console.log(result);
  if (result.length > 0) {
    temp = "";
    result.forEach((data) => {
      temp += "<tr>";
      temp += "<td>" + data.name + "<td>";
      temp += "<td>" + data.rotation_period + "<td>";
      temp += "<td>" + data.Age + "<td>";
      temp += "</tr>";
    });
    tableData.innerHTML = temp;
  }
})();
