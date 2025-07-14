// TODO: Fetch data from the PostgreSQL database (to be implemented later)
function fetchGradeData() {
    return [
        { name: "Stella", assignments: [90, 85, 88] },
        { name: "Jake", assignments: [78, 82, 91] },
        { name: "Charlie", assignments: [95, 92, 89] }
    ];
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

const gradeData = fetchGradeData();
populateGradebook(gradeData);
