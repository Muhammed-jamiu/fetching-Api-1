// (async function requestData() {
//   const url = "https://api.example.com/users/123";

//   const datafetch = await fetch(url).then((response) => {
//     const dataObtained = response.json();
//     return dataObtained;
//   });
//   console.log(datafetch);
// })();

// Define the data you want to send
const postData = {
  username: "Muhammed Musa",
  password: "72526281",
};

// Define the URL you want to send the POST request to
const url = "https://example.com/api/login";

// Define options for the fetch request
const options = {
  method: "POST",
  headers: {
    "Content-Type": "application/json", // Specify content type as JSON
  },
  body: JSON.stringify(postData), // Convert data to JSON string
};

// Make the POST request using the Fetch API
fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json(); // Parse response body as JSON
  })
  .then((data) => {
    // Handle the response data
    console.log("Response:", data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch
    console.error("Error:", error);
  });
