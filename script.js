// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    
    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';
}

// Code for managing the employee form submission and table (reuse from previous example)

// Rest of your employee form submission and handling code goes here
// Function to show the selected section and hide others
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Event listener to open the modal for adding an employee
document.getElementById('addEmployeeBtn').addEventListener('click', function() {
    const addEmployeeModal = new bootstrap.Modal(document.getElementById('addEmployeeModal'));
    addEmployeeModal.show();
});

// Function to handle the form submission
document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const formData = new FormData(this);
    const employeeData = {};
    formData.forEach((value, key) => {
        employeeData[key] = value;
    });

    // Insert new row into the employee table
    const tableBody = document.querySelector('#employeeTable tbody');
    const newRow = tableBody.insertRow();

    newRow.innerHTML = `
        <td>${tableBody.rows.length + 1}</td>
        <td>${employeeData.kode}</td>
        <td>${employeeData.nama}</td>
        <td>${employeeData.email}</td>
        <td>${employeeData.alamat}</td>
        <td>${employeeData.kode_jabatan}</td>
        <td>${employeeData.jabatan}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleteRow(this)">Hapus</button></td>
    `;

    // Close the modal
    const addEmployeeModal = bootstrap.Modal.getInstance(document.getElementById('addEmployeeModal'));
    addEmployeeModal.hide();

    // Clear the form for next input
    this.reset();
});

// Function to delete an employee row
function deleteRow(button) {
    const row = button.closest('tr');
    row.parentNode.removeChild(row);
}
