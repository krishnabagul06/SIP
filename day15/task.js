class Employee {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    work() {
        console.log(this.name + " is working");
    }
    show() {
        console.log("id is ", this.id);
        console.log("name is ", this.name);
    }}
class Developer extends Employee {
    constructor(id, name, language) {
        super(id, name);
        this.language = language;
    }
    write() {
        console.log(this.name + " writing " + this.language);
    }
    work() {
        console.log(this.name +"working");
    }
}
class FrontendDeveloper extends Developer {
    constructor(id, name, language, framework) {
        super(id, name, language);
        this.framework = framework;
    }
    buildUI() {
        console.log(this.name +" ui building");
    }
    work() {
        console.log(this.name + " is designing frontend");
    }
}
class Manager extends Employee {
    constructor(id, name, teamSize) {
        super(id, name);
        this.teamSize = teamSize;
    }
    conductMeeting() {
        console.log(this.name);
    }
    work() {
        console.log(this.name + " manages team");
    }
}
let employee = new Employee(1, "A");
let frontendDev = new FrontendDeveloper( 2,"B","JavaScript","React");
let manager = new Manager(3, "C", 10);
employee.work();
employee.show();
frontendDev.work();
frontendDev.write();
frontendDev.buildUI();
manager.work();
manager.conductMeeting();