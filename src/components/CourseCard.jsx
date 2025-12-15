import { Clock, Users } from "lucide-react";

const CourseCard = ({ course }) => {
  return (
    <div
      className="
        relative group
        rounded-3xl overflow-hidden
        bg-white/70 backdrop-blur-xl
        border border-white/30
        shadow-lg
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.03]
        hover:shadow-[0_25px_80px_rgba(99,102,241,0.35)]
      "
    >
      
      <div className="
        absolute inset-0 opacity-0 group-hover:opacity-100
        transition duration-300
        bg-gradient-to-br from-indigo-400/20 via-purple-400/20 to-pink-400/20
      " />

      
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="
            w-full h-full object-cover
            transition-transform duration-500 ease-out
            group-hover:scale-110
          "
        />

        
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

        
        <span className="
          absolute top-4 left-4 z-10
          px-3 py-1 text-xs font-semibold
          rounded-full
          bg-gradient-to-r from-indigo-500 to-purple-500
          text-white shadow-md
        ">
          {course.category}
        </span>
      </div>

      
      <div className="relative p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-extrabold text-gray-800 mb-3 leading-snug">
          {course.name}
        </h3>

        <p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
          {course.description}
        </p>

        
        <div className="mt-auto flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-200/60">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {course.duration}
          </div>

          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {course.students.toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
