import banner from "/banner.png";
import chefAvatar from "/chefAvatar.png";

const Body = () => {
     return (
       <div
         className="relative bg-cover bg-center h-screen"
         style={{ backgroundImage: `url(${banner})` }}
       >
         <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
           <div className="bg-white rounded-2xl p-8 shadow-xl max-w-md text-center">
             <div className="absolute top-48 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white py-1 px-4 rounded-full text-sm font-semibold">
               Recipe of the day
             </div>
             <h2 className="text-2xl font-bold text-pink-600 mt-4">
               Salad Caprese
             </h2>
             <p className="mt-2 text-gray-600">
               Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
               herbs, olive oil, and balsamic vinegar create a refreshing dish
               for lunch or appetizer.
             </p>
             <div className="mt-6 flex items-center justify-center space-x-3">
               <img
                 src={chefAvatar}
                 alt="Chef"
                 className="w-10 h-10 rounded-full border border-gray-300"
               />
               <span className="text-gray-700 font-medium">Salad Caprese</span>
             </div>
             <button className="mt-6 bg-pink-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-700">
               View now →
             </button>
           </div>
         </div>
       </div>
     );
}

export default Body;