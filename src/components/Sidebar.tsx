const Sidebar = () => {
  return (
    <div>
      <div className="flex-col items-center justify-between w-full mr-2 ">
        <div className="flex items-center w-full p-2 cursor-pointer hover:bg-green-100 group">
          <svg
            className="w-8 h-8 text-gray-600 group-hover:text-gray-800"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <p className="ml-3 text-xl font-bold text-gray-500 hover:text-gray-800 font-zen">
            Completed
          </p>
        </div>
        <div className="flex items-center w-full p-2 cursor-pointer hover:bg-green-100 group">
          <svg
            className="w-8 h-8 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            ></path>
          </svg>
          <p className="ml-3 text-xl font-bold text-gray-500 hover:text-gray-800 font-zen">
            Archieved
          </p>
        </div>
        <div className="flex items-center w-full p-2 cursor-pointer hover:bg-green-100 group">
          <svg
            className="w-8 h-8 text-gray-600 group-hover:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <p className="ml-3 text-xl font-bold text-gray-500 hover:text-gray-800 font-zen">
            Reminded
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
