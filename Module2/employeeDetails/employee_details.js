const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Python' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
]

function displayEmployees()
{
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries(){
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total salaries: $${totalSalaries}`);
}

function displayHREmployees()
{
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name} - ${employee.age}: ${employee.department}: ${employee.salary}</p>`);
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}


function findEmployeeById(empID)
{
    const foundID = employees.find(e => e.id === empID);
    if(foundID)
    {
        document.getElementById('employeesDetails').innerHTML = `<p>${foundID.id}: ${foundID.name}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = "Not found";
    }
}

function findsIzation()
{
    const izations = employees.filter(e => e.specialization === "Python")
    const disIzations = izations.map((e, index) => `<p>${e.id}: ${e.name} - ${e.specialization}`);
    document.getElementById('employeesDetails').innerHTML = disIzations;
}