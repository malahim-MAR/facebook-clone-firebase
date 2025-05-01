// import React from "react";

// const SidebarRight = () => {
//   return (
//     <div className="drawer drawer-end lg:drawer-open">
//       <input id="right-drawer" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-side">
//         <label
//           htmlFor="right-drawer"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//           <li>
//             <a>Right Home</a>
//           </li>
//           <li>
//             <a>Right Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Right Home</a>
//           </li>
//           <li>
//             <a>Right Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Right Home</a>
//           </li>
//           <li>
//             <a>Right Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Right Home</a>
//           </li>
//           <li>
//             <a>Right Sidebar Item 2</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarRight;
// SidebarRight.jsx
import React from "react";

const SidebarRight = () => {
  return (
    <div className="drawer drawer-end lg:drawer-open">
      <input id="right-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-20">
        <label htmlFor="right-drawer" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <h2 className="text-xl font-bold mb-4 px-2">Contacts</h2>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 hover:bg-base-300/50 rounded-lg p-2"
            >
              <div className="avatar placeholder">
                <div className="bg-neutral text-neutral-content rounded-full w-10">
                  <span>U</span>
                </div>
              </div>
              <div>
                <p className="font-medium">User {item}</p>
                <p className="text-sm text-gray-400">Active now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default SidebarRight;
