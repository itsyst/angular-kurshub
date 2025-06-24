import { EnrolledCourse } from "./course";
import { User } from "./user";

export interface Student extends User {
  role: 'student';
  enrolledCourses: EnrolledCourse[];
}
