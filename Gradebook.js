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
  console.log("Populating gradebook with data:", data);
  let tableElm = document.getElementById("Gradebook");

  data.forEach(function (assignment) {
    let row = document.createElement("tr");
    let columns = [];

    // First column: full name
    columns.name = document.createElement("td");
    columns.name.appendChild(
      document.createTextNode(assignment.last_name + ", " + assignment.first_name)
    );

    // Second column: grade
    columns.grade = document.createElement("td");
    columns.grade.appendChild(
      document.createTextNode(assignment.total_grade)
    );

    // Append both columns to the row
    row.appendChild(columns.name);
    row.appendChild(columns.grade);

    // Append the row to the table
    tableElm.appendChild(row);
  });
}

fetchGradeData();
