import {useState, useEffect} from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CourseCard from "./components/CourseCard";
const App = () => {

  const [advice, setAdvice] = useState("");

  useEffect(() => {
  fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      if (data && data.slip && data.slip.advice) {
        setAdvice(data.slip.advice);
      }
    })
    .catch(error => {
      console.error('Error fetching advice:', error);
    });
}, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["Development", "Design", "Marketing", "Data Science"];

  const coursesData = [
  {
    id: 1,
    name: "Web Development Fundamentals",
    category: "Development",
    duration: "12 weeks",
    students: 1250,
    description: "Learn HTML, CSS, JavaScript and build real-world projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "React Mastery",
    category: "Development",
    duration: "8 weeks",
    students: 890,
    description: "Master React.js, hooks, state management and modern patterns",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop"
  },
  {
    id: 3,
    name: "UI/UX Design Principles",
    category: "Design",
    duration: "10 weeks",
    students: 1540,
    description: "Create beautiful, user-friendly interfaces with design thinking",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
  },
  {
    id: 4,
    name: "Digital Marketing Strategy",
    category: "Marketing",
    duration: "6 weeks",
    students: 2100,
    description: "Master SEO, social media, content marketing and analytics",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
  },
  {
    id: 5,
    name: "Python for Data Science",
    category: "Data Science",
    duration: "14 weeks",
    students: 1680,
    description: "Learn Python, pandas, numpy and data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
  },
  {
    id: 6,
    name: "Mobile App Development",
    category: "Development",
    duration: "10 weeks",
    students: 920,
    description: "Build iOS and Android apps with React Native",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop"
  },
  {
    id: 7,
    name: "Graphic Design Essentials",
    category: "Design",
    duration: "8 weeks",
    students: 1340,
    description: "Master Adobe tools and create stunning visual content",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=600&h=400&fit=crop"
  },
  {
    id: 8,
    name: "Cloud Computing with AWS",
    category: "Development",
    duration: "12 weeks",
    students: 760,
    description: "Deploy and manage applications on Amazon Web Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
  }
];

const filteredCourses = coursesData.filter(course => {
    const matchesSearch =
      course.name.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    return matchesSearch && matchesCategory;

})

  return (
    <>
      <Header advice={advice} />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        categories={categories}
      />

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </>
  );
};

export default App;
