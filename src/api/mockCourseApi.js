import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const courses = [
  {
    id: "ultimate-pivot-table-mastery-for-excel-2016-on-mac",
    title: "Ultimate Pivot Table Mastery For Excel 2016",
    watchHref: "https://www.udemy.com/ultimate-pivot-table-mastery-for-excel-2016-on-mac",
    authorId: "shafiq-marediya",
    length: "1:30",
    category: "Excel"
  },
  {
    id: "data-analysis-course-for-beginners",
    title: "Complete Data Analysis Course For Beginners",
    watchHref: "https://www.udemy.com/data-analysis-course-for-beginners",
    authorId: "shafiq-marediya",
    length: "2:30",
    category: "Data Analysis"
  },
  {
    id: "data-warehouse-modeling-star-schema-design-fundamentals",
    title: "Data Warehouse Modeling - Star Schema Design Fundamentals",
    watchHref: "https://www.udemy.com/data-warehouse-modeling-star-schema-design-fundamentals",
    authorId: "shafiq-marediya",
    length: "2:30",
    category: "Data Warehousing"
  }
];

function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (course) => {
  return replaceAll(course.title, ' ', '-');
};

class CourseApi {
  static getAllCourses() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], courses));
      }, delay);
    });
  }

  static saveCourse(course) {
    course = Object.assign({}, course); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minCourseTitleLength = 1;
        if (course.title.length < minCourseTitleLength) {
          reject(`Title must be at least ${minCourseTitleLength} characters.`);
        }

        if (course.id) {
          const existingCourseIndex = courses.findIndex(a => a.id == course.id);
          courses.splice(existingCourseIndex, 1, course);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          course.id = generateId(course);
          course.watchHref = `http://www.udemy.com/${course.id}`;
          courses.push(course);
        }

        resolve(course);
      }, delay);
    });
  }

  static deleteCourse(courseId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfCourseToDelete = courses.findIndex(course => {
          course.id == courseId;
        });
        courses.splice(indexOfCourseToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default CourseApi;
