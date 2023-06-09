const namesList = document.getElementById("namesList");

fetch("data.json")
  .then((res) => {
    console.log(res);
    return res.json();
  })
  .then((result) => {
    for (let i = 0; i < result.names.length; i++) {
        const newElement = document.createElement("h1");
        newElement.innerText = result.names[i];
        namesList.appendChild(newElement);
    }
  })
  .catch((err) => console.error(err))
