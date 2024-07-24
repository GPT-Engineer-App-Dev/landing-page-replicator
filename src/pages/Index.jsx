import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Code, Zap, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const cards = [
    {
      icon: <Code className="h-8 w-8 text-purple-500" />,
      title: "Code Generation",
      description: "Generate high-quality code based on natural language descriptions."
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-500" />,
      title: "Rapid Prototyping",
      description: "Quickly build and iterate on software prototypes."
    },
    {
      icon: <Sparkles className="h-8 w-8 text-blue-500" />,
      title: "AI-Powered Insights",
      description: "Gain intelligent insights and suggestions for your projects."
    }
  ];

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
        <p className="text-xl max-w-2xl mb-12">
          We're building software that builds software. Our{" "}
          <Link to="/vision" className="text-blue-400 hover:underline">
            vision
          </Link>{" "}
          is to unlock human creativity — by enabling anyone to create software.
        </p>

        {/* Cards Section */}
        <section className="w-full max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">It starts with an AI software engineer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {card.icon}
                    <span>{card.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{card.description}</p>
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