import { Search } from "lucide-react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  categories
}) => {
  return (
    <div className="relative max-w-6xl mx-auto px-4 -mt-10 mb-12">
      
      
      <div className="
        bg-white/80 backdrop-blur-xl
        rounded-2xl shadow-xl
        p-6 md:p-8
        border border-gray-200
        transition-all duration-300
      ">
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">

          
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search courses by name or keyword"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="
                w-full pl-12 pr-4 py-3.5
                rounded-xl
                border border-gray-300
                bg-white
                text-gray-800
                placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200
              "
            />
          </div>

          
          <div className="relative min-w-[220px]">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="
                w-full px-4 py-3.5
                rounded-xl
                border border-gray-300
                bg-white
                text-gray-800
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                transition-all duration-200
                cursor-pointer
              "
            >
              <option value="All">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SearchBar;
