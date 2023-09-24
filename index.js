
function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee, 
      [key]: value 
    };
  }
  
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 
    return employee;
  }
  
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; 
    delete newEmployee[key]; 
    return newEmployee;
  }
  
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]; 
    return employee;
  }
  
  const employee = {
    name: "John Doe",
    streetAddress: "123 Main Street"
  };
  
  const updatedEmployeeNonDestructive = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log(updatedEmployeeNonDestructive);
  
  const updatedEmployeeDestructive = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm Street");
  console.log(updatedEmployeeDestructive);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log(employeeWithoutName);
  
  const employeeWithoutAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log(employeeWithoutAddress);
  