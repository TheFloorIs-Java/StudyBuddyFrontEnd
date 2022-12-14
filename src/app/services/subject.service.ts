import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { subject } from '../model/subject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  /**
   * Our data for our subject database
   */
  allSubjects: Array<subject> = [
    { subjectId: 1, subjectName: "Math", tips: "Practice, Check You Answers, Show Your Work, Test Yourself" },
    { subjectId: 2, subjectName: "Science", tips: "Read Material Before Class, Create Visual Aids, Quiz Yourself Periodically" },
    { subjectId: 3, subjectName: "History", tips: "Create Timelines, Summarize Information, Remember Key Dates" },
    { subjectId: 4, subjectName: "English", tips: "Expand Your Vocabulary, Memorize Famous and Versatile Quotes, Ask Questions" },
    { subjectId: 5, subjectName: "Physics", tips: "Create Diagrams of Problems, Improve Math Skills, Understand Basic Concepts" },
    { subjectId: 6, subjectName: "Art", tips: "Practice Everyday, Incorporate Mixed Media, Explore Ideas and Originality" }
  ];

  constructor(private http: HttpClient) {
    this.getAllSubjects().subscribe(data => this.allSubjects = data);
  }

  /**
   * HTTP GET Request - Retrieve all subject data from the subject database
   * @returns an arraay of subject data with all the information
   */
  getAllSubjects(): Observable<Array<subject>> {
    return this.http.get<Array<subject>>("http://localhost:8051/subjects");
  }

  /**
   * HTTP GET Request - Retrieve subject based on the subject's id
   * @param id - subject's unique id that identifys the subject 
   * @returns The subject name
   */
  getSubjectById(id: number): string {
    for (let i = 0; i < this.allSubjects.length; i++) {
      if (this.allSubjects[i].subjectId == id) {
        return this.allSubjects[i].subjectName;
      }
    }
    return "Math";
  }

  /**
   * HTTP GET Request - Retrieve subject based on the subject's name
   * @param name - The name of the subject
   * @returns the subject's id
   */
  getSubjectByName(name: string): number {
    for (let i = 0; i < this.allSubjects.length; i++) {
      if (this.allSubjects[i].subjectName == name) {
        return this.allSubjects[i].subjectId;
      }
    }
    return 0;
  }
}
