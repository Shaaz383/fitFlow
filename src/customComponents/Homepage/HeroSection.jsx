import heroImage from "../../assets/heroImageDeit.webp";

const HeroSection = () => {
  return (
    <div className="relative text-center p-6">
      <h1 className="text-4xl font-bold">Your Fitness, Your Journey</h1>
      <p className="text-gray-400 mt-2 text-lg">Track, Plan, and Achieve Your Goals</p>
      <img src={heroImage} alt="Hero" className="mx-auto mt-4 rounded-xl shadow-xl w-3/4" />
    </div>
  );
};

export default HeroSection;
