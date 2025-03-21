const EditProfileModal = ({ name, setName, email, setEmail, setIsEditingProfile }) => {
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
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 rounded bg-gray-800 text-white"
          placeholder="Email"
        />
        <button
          className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg"
          onClick={() => setIsEditingProfile(false)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditProfileModal;
