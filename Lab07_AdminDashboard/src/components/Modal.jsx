import { IoIosClose } from "react-icons/io";

const Modal = ({ 
    isOpen, 
    onClose, 
    children, 
    title = "", 
    width = "max-w-2xl",
    onClick
}) => {

    if (!isOpen) return null;

    return (
      <>
        {/* overlay  */}
        <div className="fixed inset-0 z-40 bg-black opacity-50"></div>

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 ">
          <div
            className={`relative bg-white rounded-lg shadow-xl w-full ${width} max-h-[90vh] overflow-y-auto`}
          >
            {/* header */}
            <div className="flex items-center justify-between p-4 border-b border-b-violet-300 ">
              <h3 className="text-2xl font-semibold text-gray-800">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-violet-200 text-gray-600 hover:text-gray-700 transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <IoIosClose size={30} />
              </button>
            </div>

            {/* content  */}
            <div className="p-6">{children}</div>

           
          </div>
        </div>
      </>
    );
};

export default Modal;
