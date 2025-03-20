import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";


export default function LandingPage() {
  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white p-6">

        {/* Logo Section with Proper Alignment */}
        <div className="absolute top-8 left-6">
        <img src="/logo.svg" alt="Logo" className="w-8" />
      </div>

      {/* Top Section with Image */}
      <div className="w-full max-w-md">
        <img 
          src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Healthy Meal" 
          className="w-full rounded-lg"
        />
      </div>

      {/* Text Section */}
      <h1 className="text-3xl font-bold text-center mt-6">
        Eat Smarter, <br /> Get Results
      </h1>

      {/* Button Section */}
      <div className="mt-6 w-full">
        <Button className="w-full bg-yellow-500 text-black font-bold py-6 rounded text-lg">
          Start now
        </Button>
      </div>

      {/* Login Section */}
      <p className="mt-4 text-gray-400">
        Already have an account? <Link to="/signin" className="text-white font-semibold cursor-pointer hover:underline">
          Log In
        </Link> 
      </p>
    </div>
  );
}
