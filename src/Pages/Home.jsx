// import React from "react";
// import MyFeed from "../Components/MyFeed";
// import SidebarLeft from "../Components/SidebarLeft";
// import SidebarRight from "../Components/SidebarRight";

// const Home = () => {
//   return (
//     <>
//       <div className="flex min-h-screen">
//         {/* Left Sidebar */}
//         <SidebarLeft />

//         {/* Center Content */}
//         <MyFeed />

//         {/* Right Sidebar */}
//         <SidebarRight />
//       </div>
//     </>
//   );
// };

// export default Home;
// Home.jsx
import React from "react";
import MyFeed from "../Components/MyFeed";
import SidebarLeft from "../Components/SidebarLeft";
import SidebarRight from "../Components/SidebarRight";
const Home = () => {
  return (
    <div data-theme="dark">
      <div className="flex min-h-screen bg-base-300">
        {/* Left Sidebar - Fixed width on desktop */}
        <div className="hidden lg:block lg:w-80">
          <SidebarLeft />
        </div>

        {/* Center Content - Responsive width */}
        <main className="flex-1 max-w-4xl mx-auto p-4">
          <MyFeed />
        </main>

        {/* Right Sidebar - Fixed width on desktop */}
        <div className="hidden lg:block lg:w-80">
          <SidebarRight />
        </div>
      </div>
    </div>
  );
};
export default Home;
