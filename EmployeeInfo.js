var Emp_detail = [
    {
        name: 'amit',
        age: 30,
        dob: 1990,
        salary: 10000
    },
    {
        name: 'Rahul',
        age: 34,
        dob: 1988,
        salary: 120,
    },
    {
        name: 'Parth',
        age: 30,
        dob: 1992,
        salary: 3000,
    },
    {
        name: 'rishi',
        age: 4,
        dob: 1993,
        salary: 900,
    }
]
console.log("Filtered all empolyee salary greater than 5000",Emp_detail.filter(item=>item.salary>5000));

var group1=[];
var group2=[];
Emp_detail.map(item =>
    (item.age > 2) ? group1.push(item) : group2.push(item)
)
console.log("Group 1 age is greater than 2",group1);
console.log("Group 2 age is less than 2",group2);
Emp_detail.map(item =>{
    if(item.age>20 && item.salary<1000){
        item.salary=item.salary*5;
        return item;
    }
})
console.log("Feteched employees with salary less than 1000 and increment 5 times", Emp_detail);