import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const UserForm = ({userData, onSubmit, onCancel}) => {
    const [formData, setFormData] = useState(
      userData || {
        fullName: "",
        phone: "",
        email: "",
        birthDate: "",
        gender: "Male",
        address: "",
        avatar: "",
      }
    );
    const [avatarPreview, setAvatarPreview] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (userData) {
            setAvatarPreview(userData.avatar);
            setFormData({
              ...userData,
              birthDate: formatDateForInput(userData.birthDate),
            });
        } else {
            setAvatarPreview("");
            setFormData({
              fullName: "",
              phone: "",
              email: "",
              birthDate: "",
              gender: "Male",
              address: "",
              avatar: "",
            });
        }
    }, [userData]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    // chuyển đổi ngày sang định dạng YYYY-MM-DD
    const formatDateForInput = (dateStr) => {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        if (isNaN(date.getTime())) return "";
        return date.toISOString().split("T")[0] // return YYYY-MM-DD
    }

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type.startsWith('image/')) {
              toast.error("Please select a valid image file.");
              return;
            }

            if (file.size > 2 * 1024 * 1024) { // 2mb
              toast.error("File size exceeds 2MB limit.");
              return;
            }

            const reader = new FileReader();
            reader.onloadend = () => {
                const base64Str = reader.result;
                setFormData({...formData, avatar: base64Str});
                setAvatarPreview(base64Str);
            }
            reader.readAsDataURL(file);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
          await onSubmit(formData);
        } finally {
          setIsSubmitting(false);
        }
    }

    return (
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center">
          <div className="w-30 h-30 flex justify-center items-center border-2 border-dashed text-[#f44b87] rounded-full">
            {avatarPreview ? (
              <img
                src={avatarPreview}
                alt="avatar"
                className="rounded-full w-30 h-30 object-cover"
              />
            ) : (
              <div className="w-30 h-30 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
                No Image
              </div>
            )}
          </div>
          <button
            className="flex items-center border-gray-300 border-2 rounded-xl w-35 h-7 justify-center text-gray-600 cursor-pointer hover:bg-[#f44b87] hover:text-white transition duration-300 ease-in-out mt-2"
            type="button"
          >
            <label htmlFor="upload-img" className="cursor-pointer">
              Upload Image
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="hidden cursor-pointer"
              name="avatar"
              id="upload-img"
            />
          </button>
        </div>
        <div className="flex justify-center gap-8 items-center mt-4">
          <div className="group-input flex flex-col">
            <label htmlFor="fullName" className="text-lg text-[#f44b87]">
              Name:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-85 h-10 focus:outline-0 px-3"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </div>
          <div className="group-input flex flex-col">
            <label htmlFor="phone" className="text-lg text-[#f44b87]">
              Phone:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-85 h-10 focus:outline-0 px-3"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center gap-8 items-center mt-4">
          <div className="group-input flex flex-col">
            <label htmlFor="email" className="text-lg text-[#f44b87]">
              Email:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-85 h-10 focus:outline-0 px-3"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="group-input flex flex-col">
            <label htmlFor="birthDate" className="text-lg text-[#f44b87]">
              Birthday:
            </label>
            <input
              type="date"
              className="border text-gray-600 border-gray-300rounded-lg w-85 h-10 focus:outline-0 px-3"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="flex justify-center gap-8 items-center mt-4">
          <div className="group-input flex flex-col">
            <label htmlFor="gender" className="text-lg text-[#f44b87]">
              Gender:
            </label>
            <select
              name="gender"
              id="gender"
              className="border text-gray-600 border-gray-300 rounded-lg w-85 h-10 focus:outline-0 px-3"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div className="group-input flex flex-col">
            <label htmlFor="address" className="text-lg text-[#f44b87]">
              Address:
            </label>
            <input
              type="text"
              className="border text-gray-600  border-gray-300 rounded-lg w-85 h-10 focus:outline-0 px-3"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
        </div>
        {/* footer  */}
        <div className="flex justify-end p-4 border-t border-t-gray-300 gap-4 mt-5">
          <button
            className={`px-4 py-2 text-sm font-medium text-[#f44b87] border border-[#f44b87] hover:bg-[#f44b87] hover:text-white rounded-lg transition-colors duration-300 ease-in-out cursor-pointer w-20 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitting}
            onClick={handleSubmit}
            type="submit"
          >
            {isSubmitting ? "Saving..." : "Save"}
          </button>
          <button
            className="px-4 py-2 text-sm font-medium text-white bg-red-500 rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out cursor-pointer w-20"
            onClick={onCancel}
          >
            Close
          </button>
        </div>
      </form>
    );
}

export default UserForm;