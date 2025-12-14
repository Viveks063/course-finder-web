import { BookOpen, Lightbulb } from 'lucide-react';

const Header = ({advice}) => {
    return (
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4">

        <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-center mb-4">
                <BookOpen className="w-10 h-10 mr-3" />
                <h1 className="text-4xl font-bold">Course Finder</h1>
            </div>
            <p className="text-center text-blue-100 text-lg mb-4">
                Discover your next learning adventure
            </p>
            
            {
            advice && (
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto flex items-start gap-3">
            <Lightbulb className="w-5 h-5 mt-1 flex-shrink-0" />
            <div>
            <p className="text-sm font-semibold mb-1">Daily Advice</p>
            <p className="text-sm text-blue-50">{advice}</p>
            </div>
            </div>
                )}
        </div>
        </header>
    );
};

export default Header;