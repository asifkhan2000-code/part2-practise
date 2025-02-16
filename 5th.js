function totalSalary(employees) {
    let totalSalary = 0;
    for (const employee of employees) {
        totalSalary =
            totalSalary +
            employee.increment * employee.experience +
            employee.starting;
    }
    return totalSalary;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = totalSalary(employees);
console.log(
    "total salary has to be provided by the company in a month",
    result
);
