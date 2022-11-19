import { Injectable } from '@angular/core';
import { Student } from "../models/student";

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[];

  constructor() {
    this.students = [
      {
        controlnumber: "18401158",
        age: 22,
        career: "ISC",
        curp: "AOVI840917HNTRZS09",
        email: "gumarinle@ittepic.edu.mx",
        name: "Gustavo Marin Lemus",
        nip: 717,
        photo: 'https://picsum.photos/600/?random=1'
      }, 
      {
        controlnumber: "18401154",
        age: 22,
        career: "IM",
        curp: "AOCI840917HNTRZS09",
        email: "axelpum@ittepic.edu.mx",
        name: "Axel Dalli Lopez Renteria",
        nip: 818,
        photo: 'https://picsum.photos/600/?random=2'
      },
      {
        controlnumber: "18401202",
        age: 34,
        career: "IC",
        curp: "OOCI840917HNTRZS09",
        email: "julusaucedoga@ittepic.edu.mx",
        name: "Juan Luis Saucedo García",
        nip: 919,
        photo: 'https://picsum.photos/600/?random=3'
      }
    ];
  }

  public getStudents(): Student[]{
    return this.students;
  }

  public removeStudent(pos: number): Student[]{
    this.students.splice(pos, 1);
    return this.students;
  }

  public getStudentByControlNumber(controlnumber: string): Student {
    let item: Student = this.students.find((student)=> {
      return student.controlnumber===controlnumber;
    });
    return item;
  }
  public newStudent(student:Student):void{
    this.students.push(student);
  }
  public getStudentIndexByControlNumber(cn: string): number {
    let index = this.students.findIndex(
      (student) => {
        return student.controlnumber===cn;
      }
    );
    return index
  }

  public updateStudent(st:Student[]){
    this.students = st;
  }

}
