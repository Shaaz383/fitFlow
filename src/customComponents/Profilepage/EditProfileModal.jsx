import { useState } from "react";
import { FaTimes } from "react-icons/fa";

const EditProfileModal = ({ user, onClose, onSave }) => {
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [age, setAge] = useState(user.age || "");
  const [gender, setGender] = useState(user.gender || "Male");
  const [height, setHeight] = useState(user.height || "");
  const [activityLevel, setActivityLevel] = useState(user.activityLevel || "Sedentary");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (age && (age < 1 || age > 120)) newErrors.age = "Invalid age";
    if (height && (height < 50 || height > 250)) newErrors.height = "Invalid height";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      onSave({ name, email, age, gender, height, activityLevel });
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg w-80 relative">
        <button className="absolute top-2 right-2 text-white" onClick={onClose}>
          <FaTimes />
        </button>
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" placeholder="Name" />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" placeholder="Email" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" placeholder="Age" />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}

        <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white" placeholder="Height (cm)" />
        {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}

        <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} className="w-full p-2 mb-2 rounded bg-gray-800 text-white">
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Moderately Active">Moderately Active</option>
          <option value="Very Active">Very Active</option>
          <option value="Athlete">Athlete</option>
        </select>

        <div className="flex justify-between mt-4">
          <button className="bg-gray-600 text-white py-2 px-4 rounded-lg" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
