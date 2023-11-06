/*eslint-env browser*/

var employees = [
  { name: 'John Doe', title: 'Developer', extension: '123' },
  { name: 'John Doe', title: 'Developer', extension: '123' },
  { name: 'John Doe', title: 'Developer', extension: '123' },
  { name: 'John Doe', title: 'Developer', extension: '123' },
  { name: 'John Doe', title: 'Developer', extension: '123' },
];

// Shorthand getElementById
function $ (id) {
  return document.getElementById(id);
}

// Function to add a new employee
function addEmployee() {
  // Get form values
  var name = $('name').value;
  var title = $('title').value;
  var extension = $('extension').value;

  // Check if all fields are filled
  if (name && title && extension) {
    // Add new employee to the array
    employees.push({ name, title, extension });

    // Clear form fields
    $('name').value = '';
    $('title').value = '';
    $('extension').value = '';
    $('nameError').innerHTML = '';
    $('titleError').innerHTML = '';
    $('extensionError').innerHTML = '';

    // Update employee count
    updateEmployeeCount();

    // Update the table
    updateEmployeeTable();
  } else {
    $('nameError').innerHTML = name?'':'Please enter a name';
    $('titleError').innerHTML = title?'':'Please enter a title';
    $('extensionError').innerHTML = extension?'':'Please enter an extension';
  }
}


// Function to update the employee count in the header
function updateEmployeeCount() {
  $('employeeCount').innerHTML = employees.length;
}

// Function to update the employee table
function updateEmployeeTable() {
  var tableBody = document.querySelector('#employeeTable tbody');

  // Clear existing table rows
  tableBody.innerHTML = '';

  // Populate the table with employee data
  employees.forEach((employee, index) => {
    var row = tableBody.insertRow();
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteEmployee(index));

    // Add employee data to the row
    row.insertCell(0).textContent = employee.name;
    row.insertCell(1).textContent = employee.title;
    row.insertCell(2).textContent = employee.extension;
    row.insertCell(3).appendChild(deleteButton);
  });
}

// Function to delete an employee
function deleteEmployee(index) {
  // Remove the employee from the array
  employees.splice(index, 1);

  // Update employee count
  updateEmployeeCount();

  // Update the table
  updateEmployeeTable();
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', function () {
  updateEmployeeCount();
  updateEmployeeTable();
  $('addEmployeeButton').addEventListener('click', addEmployee);
});