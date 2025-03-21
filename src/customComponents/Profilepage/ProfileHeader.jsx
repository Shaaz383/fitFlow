import { FaUserEdit, FaCrown } from "react-icons/fa";

const ProfileHeader = ({ name, email, setIsEditingProfile }) => {
  return (
    <div className="p-6 flex items-center justify-between bg-gray-900 rounded-b-3xl">
      <div>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm text-gray-400">{email}</p>
        <p className="text-sm text-yellow-400 flex items-center mt-1">
          <FaCrown className="mr-1" /> Premium Member
        </p>
      </div>
      <FaUserEdit
        onClick={() => setIsEditingProfile(true)}
        className="cursor-pointer text-gray-400 text-xl"
      />
    </div>
  );
};

export default ProfileHeader;
