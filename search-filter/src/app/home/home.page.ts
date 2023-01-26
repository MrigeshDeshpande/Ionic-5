import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTerm:string='' ;
  employees=[
    {
        "id": 1,
        "name": "John Smith",
        "position": "Manager",
        "department": "Finance",
        "email": "john.smith@company.com",
        "phone": "555-555-5555"
    },
    {
        "id": 2,
        "name": "Jane Doe",
        "position": "Developer",
        "department": "IT",
        "email": "jane.doe@company.com",
        "phone": "555-555-5555"
    },
    {
        "id": 3,
        "name": "Bob Johnson",
        "position": "Sales",
        "department": "Marketing",
        "email": "bob.johnson@company.com",
        "phone": "555-555-5555"
    },
    {
        "id": 4,
        "name": "Emily Davis",
        "position": "Human Resources",
        "department": "HR",
        "email": "emily.davis@company.com",
        "phone": "555-555-5555"
    },
    {
      "id": 5,
      "name": "Michael Brown",
      "position": "Web Developer",
      "department": "IT",
      "email": "michael.brown@company.com",
      "phone": "555-555-5555"
  },
  {
      "id": 6,
      "name": "Jessica Thompson",
      "position": "Graphic Designer",
      "department": "Marketing",
      "email": "jessica.thompson@company.com",
      "phone": "555-555-5555"
  },
  {
      "id": 7,
      "name": "David Garcia",
      "position": "Accountant",
      "department": "Finance",
      "email": "david.garcia@company.com",
      "phone": "555-555-5555"
  },
  {
      "id": 8,
      "name": "Samantha Martin",
      "position": "HR Manager",
      "department": "HR",
      "email": "samantha.martin@company.com",
      "phone": "555-555-5555"
  },
  {
      "id": 9,
      "name": "Christopher Lee",
      "position": "Marketing Coordinator",
      "department": "Marketing",
      "email": "christopher.lee@company.com",
      "phone": "555-555-5555"

  }

]

  constructor() {}

}
