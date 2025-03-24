import logoDark from "../assets/logoDark.png";

const Header = ({ userName }) => {
  // Extract first name (text before first space)
  const firstName = userName?.split(' ')[0] || 'User';
  
  return (
    <div className="flex items-center justify-between px-6 py-4">
      <img src={logoDark} alt="Logo" className="h-16 w-auto filter invert" />
      <div className="text-left">
        <h2 className="text-2xl font-bold">Hello, {firstName}! 👋</h2>
        <p className="text-gray-400">Let's make today a healthy day!</p>
      </div>
    </div>
  );
};

export default Header;  