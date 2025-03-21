import { useState } from "react";

const EditProfileModal = ({
  name,
  setName,
  email,
  setEmail,
  age,
  setAge,
  gender,
  setGender,
  height,
  setHeight,
  activityLevel,
  setActivityLevel,
  setIsEditingProfile,
}) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) newErrors.email = "Invalid email";
    if (!age || age < 1 || age > 120) newErrors.age = "Invalid age";
    if (!height || height < 50 || height > 250) newErrors.height = "Invalid height";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (validate()) {
      setIsEditingProfile(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center">
      <div className="bg-gray-900 p-6 rounded-lg w-80">
        <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          placeholder="Name"
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          placeholder="Email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          placeholder="Age"
        />
        {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
          placeholder="Height (cm)"
        />
        {errors.height && <p className="text-red-500 text-sm">{errors.height}</p>}
        <select
          value={activityLevel}
          onChange={(e) => setActivityLevel(e.target.value)}
          className="w-full p-2 mb-2 rounded bg-gray-800 text-white"
        >
          <option value="Sedentary">Sedentary</option>
          <option value="Lightly Active">Lightly Active</option>
          <option value="Moderately Active">Moderately Active</option>
          <option value="Very Active">Very Active</option>
          <option value="Athlete">Athlete</option>
        </select>
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;