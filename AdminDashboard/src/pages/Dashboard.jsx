import { FiArrowUp, FiArrowDown, FiMoreHorizontal } from "react-icons/fi";

const Dashboard = () => {
  // Sample data - replace with your actual data
  const stats = [
    { title: "Turnover", value: "$92,405", change: "5.39%", isPositive: true },
    { title: "Profit", value: "$32,218", change: null },
    { title: "New customer", value: "298", change: null },
    { title: "Anonymous monkey", value: "Anonymous giraffe", change: null },
  ];

  const recentOrders = [
    {
      name: "Elizabeth Lee",
      company: "AvatarSystems",
      value: "$359",
      date: "10/07/2023",
      status: "New",
    },
    {
      name: "Carlos Garcia",
      company: "SmcozaShift",
      value: "$747",
      date: "24/07/2023",
      status: "New",
    },
    {
      name: "Elizabeth Bailey",
      company: "Prime Time Telecom",
      value: "$564",
      date: "08/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Brown",
      company: "OmniTech Corporation",
      value: "$541",
      date: "31/08/2023",
      status: "In-progress",
    },
    {
      name: "Ryan Young",
      company: "DataStream Inc.",
      value: "$769",
      date: "01/05/2023",
      status: "Completed",
    },
    {
      name: "Hailey Adams",
      company: "FlowRush",
      value: "$922",
      date: "10/06/2023",
      status: "Completed",
    },
  ];

  const statusClasses = {
    New: "bg-blue-100 text-blue-800",
    "In-progress": "bg-yellow-100 text-yellow-800",
    Completed: "bg-green-100 text-green-800",
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-gray-500 text-sm font-medium mb-1">
              {stat.title}
            </h3>
            <p className="text-2xl font-bold mb-2">{stat.value}</p>
            {stat.change && (
              <div
                className={`flex items-center ${
                  stat.isPositive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.isPositive ? (
                  <FiArrowUp className="mr-1" />
                ) : (
                  <FiArrowDown className="mr-1" />
                )}
                <span className="text-sm">
                  ≈ {stat.change} period of change
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Detailed report</h2>
        <button className="text-gray-500 hover:text-gray-700">
          <FiMoreHorizontal size={20} />
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  CUSTOMER NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  COMPANY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ORDER VALUE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ORDER DATE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  STATUS
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.company}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.value}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        statusClasses[order.status]
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-3 bg-gray-50 text-right text-sm text-gray-500">
          63 results
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
