//map
// Increade salary by 20 percent
// you can do it with a for loop or with map function
emp1 = {
    name: "Taurun",
    position: "CTO",
    salary:2500
}

emp2 = {
    name: "Shiv",
    position: "Maid",
    salary:250
}

emp3 = {
    name: "Han",
    position: "Engineer",
    salary:1500
}

employees = [emp1, emp2, emp3];
//with lambda function
employees.map( (item) => { console.log( item.salary ); });
employees.map( (emp) => { emp.salary *= 1.2; });
employees.map( (item) => { console.log (item.salary ); });

let managers = employees.map( (emp) => emp.salary * 1.2 );
managers.map( (item) => { console.log (item); });

//reduce
// Find the total salary
let totalSalary1 = employees.reduce( (totalSalary, item) => totalSalary + item.salary );
console.log(totalSalary1);
// this is ntot working :(

//filter
//list the employees with salary more than 1000
let list2 = employees.filter( x => x.salary >= 2000 );
list2.map( (item) => { console.log (item); });

// some
// check if there is any employee with salary more than 2500
let isThereAnyEmployee =employees.some( x => x.salary >= 2500);
console.log("is there any employee", isThereAnyEmployee);

// every
// check if all the employees salary is more than 200
let isAll =employees.every( x => x.salary >= 200);
console.log("if all employees has salary more than 200 ", isAll);

// find
// fetch employee with name Taurun
// what is the difference between find and filter ? :(

// findIndex

