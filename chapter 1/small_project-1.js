// lets create a small program to understand the concept objects in js:
const prompt=require("prompt-sync")({sigint:true}); // ref :https://www.geeksforgeeks.org/javascript-is-showing-reference-error-prompt-is-not-defined/
var class_details = {
    student1: {
      name: "John Doe",
      rollNo: "A001",
      identificationNo: "ID001"
    },
    student2: {
      name: "Jane Smith",
      rollNo: "A002",
      identificationNo: "ID002"
    },
    student3: {
      name: "David Johnson",
      rollNo: "A003",
      identificationNo: "ID003"
    },
    student4: {
      name: "Emily Williams",
      rollNo: "A004",
      identificationNo: "ID004"
    },
    student5: {
      name: "Michael Brown",
      rollNo: "A005",
      identificationNo: "ID005"
    },
    student6: {
      name: "Sophia Taylor",
      rollNo: "A006",
      identificationNo: "ID006"
    },
    student7: {
      name: "Daniel Anderson",
      rollNo: "A007",
      identificationNo: "ID007"
    },
    student8: {
      name: "Olivia Martin",
      rollNo: "A008",
      identificationNo: "ID008"
    },
    student9: {
      name: "Ethan Wilson",
      rollNo: "A009",
      identificationNo: "ID009"
    },
    student10: {
      name: "Ava Thompson",
      rollNo: "A010",
      identificationNo: "ID010"
    }
  };
  let studentno=prompt("enter the student no to get the details: ");
  let detail =prompt("Enter the detail you want to know (options are name, rollNo, identificationNo):");;
  console.log(detail);
  console.log(class_details["student"+studentno][detail]);