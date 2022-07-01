// displaying information from third party API on our page.
console.log("Hello World");
try {
  fetch("https://reqres.in/api/users/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "Harry",
    }), // returns promise
  })
    .then((res) => {
      return res.json(); // returns promise
    })
    .then((data) => {
      console.log(data);

      let myDiv = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.textContent = "Post request using Fetch";
      myDiv.classList.add("data");
      myDiv.innerHTML = `
      <h2> ${data.name} </h2>
      <p>${data.id}</p>
      <p>${data.createdAt}</p>
      `;
      const apiDiv = document.querySelector("section");
      apiDiv.appendChild(h3).appendChild(myDiv);
    });
} catch (error) {
  console.log(error);
}
