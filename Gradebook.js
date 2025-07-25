// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
  console.log("Fetching grade data...");
  let xhr = new XMLHttpRequest();
  let apiRoute = "/api/grades";

  xhr.onreadystatechange = function() {
    let results;
    if (xhr.readyState === xhr.DONE) {
      if (xhr.status !== 200) {
        console.error(`Could not get grades. Status: ${xhr.status}`);
        return;
      }
      // Call function to update HTML with the fetched data
      populateGradebook(JSON.parse(xhr.responseText));
    }
  }.bind(this);

  xhr.open("get", apiRoute, true);
  xhr.send();
}

function populateGradebook(data) {

    const tableBody = document.querySelector("#Gradebook tbody");
    data.forEach((student) => {
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = student.name;
        row.appendChild(nameCell);

        student.assignments.forEach((score) => {
            const cell = document.createElement("td");
            cell.textContent = score;
            row.appendChild(cell);
        });

        tableBody.appendChild(row);
    });

    console.log("Populating gradebook with data:", data);
}

fetchGradeData();
