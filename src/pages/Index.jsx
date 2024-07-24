import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Heart className="h-6 w-6 text-white mr-2" />
          <span className="text-xl font-bold">lovable</span>
        </div>
        <div className="space-x-4">
          <Button variant="link" asChild>
            <Link to="/gpt-engineer" className="text-white">GPT Engineer</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/vision" className="text-white">Vision</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/news" className="text-white">News</Link>
          </Button>
          <Button variant="link" asChild>
            <Link to="/careers" className="text-white">Careers</Link>
          </Button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        {/* Heart Image */}
        <div className="mb-8">
          <img src="/heart-gradient.svg" alt="Colorful heart" className="w-64 h-64" />
        </div>

        {/* Heading */}
        <h1 className="text-5xl font-bold mb-4">The last piece of software.</h1>

        {/* Subheading */}
        <p className="text-xl max-w-2xl">
          We're building software that builds software. Our{" "}
          <Link to="/vision" className="text-blue-400 hover:underline">
            vision
          </Link>{" "}
          is to unlock human creativity — by enabling anyone to create software.
        </p>
      </main>
    </div>
  );
};

export default Index;