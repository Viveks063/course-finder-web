import CourseCard from "./CourseCard";

const CourseList = ({ courses }) => {
  if (courses.length === 0) {
    return <p className="text-center text-gray-500">No courses found</p>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseList;
