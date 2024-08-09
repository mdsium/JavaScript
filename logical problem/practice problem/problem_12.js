//The map() method creates a new array with the employee_name modified to “rana” for the object with employee_id 2.
let employees_data = [
    {
        employee_id: 1,
        employee_name: "Sium",
    },
    {
        employee_id: 2,
        employee_name: "Rana",
    },
    {
        employee_id: 3,
        employee_name: "munna",
    },
];

const modifiedEmployees = employees_data.map(obj => {
    if (obj.employee_id === 2) {
        return { ...obj, employee_name: "rahul" };
    }
    return obj;
});

console.log(modifiedEmployees);
