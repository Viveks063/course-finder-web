import { Clock, Users } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl shadow-md flex flex-col
        hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]
        transition-all duration-300 ease-out
        overflow-hidden group">

      <div className="h-48 overflow-hidden">

        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover"
        />

      </div>

      
      <div className="p-6 flex flex-col flex-grow">

        <span className="inline-block mb-2 text-xs font-semibold text-blue-600">
          {course.category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {course.name}
        </h3>

        <p className="text-gray-600 mb-4">
          {course.description}
        </p>

        <div className="mt-auto flex justify-between text-sm text-gray-500 pt-4 border-t">

          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>

          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students.toLocaleString()} students
          </div>
        </div>
      </div>

    </div>
  );
};

export default CourseCard;
