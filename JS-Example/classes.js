class Employee {

  

  constructor(id, name, division) {
    this.id = id;
    this.name = name;
    this.division = division;
  }
  login = (aa , bb) => {
    console.log(this.name+" "+ aa+" "+bb+ "     has logged in");
    var tryvar = ["aaa" , "bbb" , "ccc"];
    tryvar.forEach(
      (ele) => {
        console.log(ele);
      }
    );
  };
}

let emp = new Employee(1, "abc", "hr");
emp.login(1,2);
