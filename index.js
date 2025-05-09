// You are building a feature rollout system for a startup where a FeatureToggle constructor function has properties: featureName (string),
//  isEnabled (boolean), and userGroupAccess (array of strings like "betaTesters", "admins"), and you must use a prototype method canAccess(userRole)
//  to return true or false, a method toggleFeature(flag) to enable or disable the feature, and simulate access attempts using if-else and switch statements for different roles.
// function FeatureToggle(){
//      constructor(names,isEnabled,userGropAccess);
//         this.name=names;
//         this.isEnabled=this.isEnabled;
//         this.userGropAccess=this.userGropAccess;
//      }

// faeture.prototype.canAccess=function(userRole){
//      return `${this.isEnabled} and ${this.userRole}`
// }

// faeture.prototype.toggle=function(flag){
//   this. isEnabled == flag;
// }
// const board= new FeatureToggle("detailedboard", false,"['betaTesters','admins']");
// board.toggle(true)


function  FeatureToggle(featureName, isEnabled, userGroupAccess) 
{
    this.featureName = featureName;
    this.isEnabled = isEnabled;
    this.userGroupAccess = userGroupAccess;
  
}
  FeatureToggle.prototype.canaccess = function(userRole) {
    return this.isEnabled && this.userGroupAccess.includes(userRole);
  };
  FeatureToggle.prototype.toggle = function(flag) {
    this.isEnabled = !!flag;
  };
  const board = new FeatureToggle("board1", false, ["betaTesters", "admins"]);
  board.toggle(true);
  function simulateaccessIfElse(featureToggle, userRole) {
    if (featureToggle.canaccess(userRole)) {
      console.log(`Accept to ${userRole} for feature ${featureToggle.featureName}.`);
    } else {
      console.log(`Accept ${userRole} for feature ${featureToggle.featureName}.`);
    }
  }
  function simulateaccessSwitch(featureToggle, userRole) {
    switch (userRole) {
      case "admins":
      case "betaTesters":
      case "earlyAccessUsers":
        if (featureToggle.canaccess(userRole)) {
          console.log(`accept at ${userRole} for feature ${featureToggle.featureName}.`);
        } else {
          console.log(`dont accept at ${userRole} for feature ${featureToggle.featureName}.`);
        }
        break;
      default:
        console.log(`dont accept ${userRole} for feature ${featureToggle.featureName}.`);
    }
  }
  simulateaccessIfElse(board, "admins");
  simulateaccessIfElse(board, "regularUsers");
  simulateaccessSwitch(board, "betaTesters");
  simulateaccessSwitch(board, "earlyAccessUsers");
  simulateaccessSwitch(board, "guest");

//  In a freelancer time-tracking platform, create a TimeLog constructor 
//  function with properties: freelancerName (string), projectDetails (object with name and hourlyRate), and 
//  logs (array of objects with date, hoursWorked), then add prototype methods to calculate total 
//  earnings, filter logs by date range, and determine if weekly hours exceed 40 using if-else logic.






// You are developing a startup’s order management system where an Order constructor function should contain customer (object with name and email),
//  items (array of objects with productName, quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.


function Order(customer, items, status) {
    this.customer = customer;
    this.items = items;
    this.status = status;
  }
  Order.prototype.computeCost = function() {
    return this.items.reduce((total, item) => {
      return total + item.quantity * item.unitPrice;
    }, 0);
  };
  Order.prototype.updateStatus = function(paymentReceived) {
    if (paymentReceived) {
      this.status = "paid";
    } else {
      this.status = "pending";
    }
  };
  Order.prototype.categorizeUrgency = function() {
    const totalCost = this.computeCost();
    switch (this.status) {
      case "pending":
        if (totalCost > 1000) {
          return "High urgency - pending large order";
        } else if (totalCost > 500) {
          return "Medium urgency - pending moderate order";
        } else {
          return "Low urgency - pending small order";
        }
      case "paid":
        if (totalCost > 1000) {
          return "High urgency - paid large order";
        } else if (totalCost > 500) {
          return "Medium urgency - paid moderate order";
        } else {
          return "Low urgency - paid small order";
        }
      case "transported":
        return "Order transported- no urgency";
      case "cancelled":
        return "Order cancelled - no urgency";
      default:
        return "Unknown status - check order";
    }
  };
  const customer = {
    name: "Sagwanie",
    email: "sagwaniyogani@gmail.com"
  };
  const items = [{ productName: "lipgross", quantity: 1, unitPrice: 250 },{ productName: "eyeblows", quantity: 3, unitPrice: 100 }];
  const order = new Order(customer, items, "pending");
  console.log("Total Cost: $", order.computeCost());
  order.updateStatus(true);
  console.log("Updated Status:", order.status);
  console.log("Order Urgency:", order.categorizeUrgency());




// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), performanceMetrics (object with keys 
// like communication, efficiency, and reliability), and feedback (array of strings), then use prototypes to calculate an average score, classify
//  performance level using control flow, and add new feedback based on conditions.
// unction Employee(id, name, performanceMetrics, feedback) 

function Employee(id, name, performanceMetrics, feedback)
 {
    this.id = id;
    this.name = name;
    this.performanceMetrics = performanceMetrics,{};
    this.feedback = feedback,[];
  }
  Employee.prototype.calculateaverageScores = function() {
    const metrics = this.performanceMetrics;
    const keys = Object.keys(metrics);
    if (keys.length === 0) return 0;
    const total = keys.reduce((sum, key) => {
      const val = metrics[key];
      return sum + (typeof val === 'number' ? val : 0);
    }, 0);
    return total / keys.length;
  };
  Employee.prototype.classifyPerformance = function() {
    const avgScore = this.calculateaverageScores();
    if (avgScore >= 90) {
      return "Onlevel";
    } else if (avgScore >= 75) {
      return "Expected";
    } else if (avgScore >= 60) {
      return " neerly expected to";
    } else   {
      return "need support";
    }
  };
  Employee.prototype.addfeedback = function(newfeedback) {
    if (typeof newfeedback !== 'string' || newfeedback.trim() === '') {
      return;
    }
    const performanceLevel = this.classifyPerformance();
    if (performanceLevel === "neerly expected to" || performanceLevel === "need support") {
      this.feedback.push(newfeedback);
    }
  };
  const employ1 = new Employee(
    101,
    "Pedro Porro",
    {
      communication: 75,
      efficiency: 88,
      reliability: 82
    },
    ["Great team player."]
  );
  console.log("Average Score:", employ1.calculateaverageScores);
  console.log("Performance Level:", employ1.classifyPerformance());
  employ1.addfeedback("Need to impove.");
  console.log("Feedback after 1st add:", employ1.feedback);
  employ1.performanceMetrics.efficiency = 50;
  console.log("New Average Score:", employ1.calculateaverageScores());
  console.log("New Performance Level:", employ1.classifyPerformance());
  employ1.addfeedback("Should focus more on deadlines.");
  console.log("Feedback after 2nd add:", employ1.feedback);
  employ1.performanceMetrics.communication = 30;
  employ1.performanceMetrics.efficiency = 35;
  employ1.performanceMetrics.reliability = 40;
  console.log("Latest Average Score:", employ1.calculateaverageScores());
  console.log("Latest Performance Level:", employ1.classifyPerformance());
  employ1.addfeedback("Urgent improvement required.");
  console.log("Feedback after 3rd add:", employ1.feedback);

// Build a simple e-learning system where a Course class has properties: title (string), instructor (object with name and expertise), and students 
// (array of objects with name and completionStatus), then add prototype methods to return names of students who completed the course, count enrolled
//  students by expertise area, and use control flow to output different messages for instructors with more or less than 5 students.

function Course(title, instructor, students) {
    this.title = title;
    this.instructor = instructor;
    this.students = students || [];
  }
  Course.prototype.CompletedStudents = function() {
    return this.students
      .filter(student => student.completionStatus === true)
      .map(student => student.name);
  };


  Course.prototype.countStudentsExpertise = function(expertiseArea) {
    if (this.instructor.expertise === expertiseArea) {
      return this.students.length;
    }
    return 0;
  };
  Course.prototype.instructorMessage = function() {
    const numStudents = this.students.length;
    if (numStudents > 5) {
      return `Instructor ${this.instructor.name} is teaching a large class of ${numStudents} students.`;
    } else if (numStudents > 0) {
      return `Instructor ${this.instructor.name} has a small class of ${numStudents} students.`;
    } else {
      return `Instructor ${this.instructor.name} currently has no students enrolled.`;
    }
  };
  const instructor = {
    name: "Lovemore Bangali",
    expertise: "software-engineer"
  };
  const students = [{ name: "Lola", completionStatus: true },{ name: "Marther", completionStatus: false },{ name: "Lovemore", completionStatus: true },];
  const course = new Course("get to the Programming class", instructor, students);
  console.log("The students who has completed the course are:", course.CompletedStudents());
  console.log("Number of students by expertise 'nursing programing':", course.countStudentsExpertise("nursing"));
  console.log(course.instructorMessage());








