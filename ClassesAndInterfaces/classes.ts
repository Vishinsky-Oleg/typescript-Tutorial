abstract class Department {
    // private readonly id: string;
    // private name: string;
    protected employees: string[] = [];
    constructor(protected readonly id: string, public name: string) {
        // this.id = id
        // this.name = n;
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string, public admins: string[]) {
        super(id, "IT");
    }

    describe() {
        console.log("It department Id: " + this.id);
    }
}

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, "Accounting");
    }
    addReport(text: string) {
        this.reports.push(text);
    }
    getReports() {
        console.log(this.reports);
    }

    describe() {
        console.log("It department Id: " + this.id);
    }
}

const it = new ITDepartment("id1", ["Oleg"]);
it.addEmployee("Oleg");
it.addEmployee("Sasha");

// it.employees[2] = 'Sveta'
it.describe();
it.printEmployeeInformation();
console.log(it);

// const accountingCopy = { name: 'Okay', describe: accounting.describe };
// accountingCopy.describe()
const accounting = new AccountingDepartment("id2", []);
accounting.addEmployee("one");
accounting.printEmployeeInformation();
accounting.describe()