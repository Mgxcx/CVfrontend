export default function (courseposition = "", action) {
  if (action.type == "saveCoursePosition") {
    return action.courseposition;
  } else {
    return courseposition;
  }
}
