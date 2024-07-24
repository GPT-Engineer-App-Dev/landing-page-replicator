import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const cards = [
    {
      title: "For Everyone",
      description: "Chat with AI to build and deploy web apps, with no technical knowledge needed."
    },
    {
      title: "For Developers",
      description: "Collaborate in chat and code with an AI engineer, to build at lightning speed."
    },
    {
      title: "For Agencies",
      description: "Partner with AI to streamline web app creation, iteration, and support."
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 flex justify-between items-center p-4 bg-black/80 backdrop-blur-sm z-50">
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
        <p className="text-xl max-w-2xl mb-12">
          We're building software that builds software. Our{" "}
          <Link to="/vision" className="text-blue-400 hover:underline">
            vision
          </Link>{" "}
          is to unlock human creativity — by enabling anyone to create software.
        </p>

        {/* Cards Section */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">It starts with an AI software engineer.</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="bg-zinc-900 border-zinc-800 hover:bg-zinc-800 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    <span>{card.title}</span>
                    <ChevronRight className="h-5 w-5" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-zinc-400">{card.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;