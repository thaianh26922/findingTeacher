import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-teacher',
  templateUrl: './find-teacher.page.html',
  styleUrls: ['./find-teacher.page.scss'],
})
export class FindTeacherPage implements OnInit {
  listTeacher : any[] = []
  isModalOpen = false;
  listTeachers = [
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'dia ly, '
        },
        {
          subject : 'Toán, '
        },
        {
          subject : 'Văn, '
        },
        {
          subject : 'Ngoại ngữ'
        },
      ]
    },
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'lich su,'
        },
        {
          subject : 'Toán, '
        },
        {
          subject : 'Văn, '
        },
        {
          subject : 'Ngoại ngữ'
        },
      ]
    },
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'toan '
        },
        {
          subject : 'van '
        },
      ]
    },
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'toan '
        },
        { 
          subject : ' tieng anh'
        },
      ]
    },
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'toan'
        },
      ]
    },
    {
      name : 'Mrs.Thao',
      rate: '4.7',
      address : 'Khuất Duy Tiến,  Hà Nội,  Việt Nam',
      phone : '0961.869.202',
      subjectList : [
        {
          subject : 'toan'
        },
      ]
    }
  ];
  constructor() { }

  setOpen() {
    this.isModalOpen = !this.isModalOpen;
  }

  ngOnInit() {
    this.listTeacher = this.listTeachers
  }
  chooseSubject(){
    const arr = []
    for (let index = 0; index < this.listTeachers.length; index++) {
        for (let jdex = 0; jdex < this.listTeachers[index].subjectList.length; jdex++) {
          if(this.listTeachers[index].subjectList[jdex].subject == 'toan'){
            arr.push(this.listTeachers[index])
          }
          
        }      
    }
this.listTeacher = arr;    
  }
  chooseAll(){
    this.listTeacher = this.listTeachers;
  }
}
