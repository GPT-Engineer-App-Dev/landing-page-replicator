import { Heart, Twitter, Github, Youtube, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-white mr-2" />
            <span className="text-xl font-bold">lovable</span>
          </div>
          <div className="flex space-x-4 mt-4">
            <Link to="#" aria-label="Twitter"><Twitter className="h-5 w-5" /></Link>
            <Link to="#" aria-label="GitHub"><Github className="h-5 w-5" /></Link>
            <Link to="#" aria-label="Discord">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
            <Link to="#" aria-label="YouTube"><Youtube className="h-5 w-5" /></Link>
            <Link to="#" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">GPT Engineer</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <Link to="/overview" className="hover:underline">Overview</Link>
              </li>
              <li className="mb-4">
                <Link to="/for-everyone" className="hover:underline">For Everyone</Link>
              </li>
              <li className="mb-4">
                <Link to="/for-developers" className="hover:underline">For Developers</Link>
              </li>
              <li className="mb-4">
                <Link to="/for-agencies" className="hover:underline">For Agencies</Link>
              </li>
              <li className="mb-4">
                <Link to="/get-early-access" className="hover:underline">Get early access ↗</Link>
              </li>
              <li className="mb-4">
                <Link to="/login" className="hover:underline">Login ↗</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <ul className="text-gray-400">
              <li className="mb-4">
                <Link to="/vision" className="hover:underline">Vision</Link>
              </li>
              <li className="mb-4">
                <Link to="/news" className="hover:underline">News</Link>
              </li>
              <li className="mb-4">
                <Link to="/careers" className="hover:underline">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;