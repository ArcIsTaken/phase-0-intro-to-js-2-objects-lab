
// Write your solution in this file!
// initializing the object
const employee = {
    name: "Rodgrick",
    streetAddress: "Next door",
}

//creating functions
function updateEmployeeWithKeyAndValue(employee, key, value){
const newEmployee = {...employee, "name": "Sam", "streetAddress": "11 Broadway"};
return newEmployee;
}
updateEmployeeWithKeyAndValue ();
console.log(updateEmployeeWithKeyAndValue());


function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey (employee, key){
    const newEmployee2 = {...employee[key]};
    delete newEmployee2 [key];
    return newEmployee2;
}

function destructivelyDeleteFromEmployeeByKey (employee, key){
    delete employee[key];
    return employee;
}