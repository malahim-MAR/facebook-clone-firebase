// import React from "react";

// const SidebarLeft = () => {
//   return (
//     <div className="drawer lg:drawer-open">
//       <input id="left-drawer" type="checkbox" className="drawer-toggle" />
//       <div className="drawer-side">
//         <label
//           htmlFor="left-drawer"
//           aria-label="close sidebar"
//           className="drawer-overlay"
//         ></label>
//         <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
//           <li>
//             <a>
//               <img
//                 style={{ width: 40, height: 40, borderRadius: 50 }}
//                 src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/473328075_564556096574871_670200440327454387_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnExzq66vlUTy_EKuUzPQzaddi9gYA-hNp12L2BgD6E7D9JASQb8RP3tKxtTrFWwgwAoxE2x_0AwrNjfBlRmBl&_nc_ohc=pdcd0HlDpggQ7kNvwEqFj42&_nc_oc=Adnfgk4kS6bQ-ufdgX-qEspeLQWtq32giUM-jEjw7n3lD2d4ZbTTh58GDhlSSNcY7JA&_nc_zt=23&_nc_ht=scontent.fkhi8-1.fna&_nc_gid=1zUe6l0HGf3-PDQnlVTwMw&oh=00_AfGdpNIDV_DHUGc8LVMNLruXmMHsegNWknuDEmy0nMKFcg&oe=68142876"
//                 alt=""
//               />
//               <p>Your Profile</p>
//             </a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Sidebar Item 2</a>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default SidebarLeft;
// SidebarLeft.jsx
import React from "react";

const SidebarLeft = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="left-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side z-20">
        <label htmlFor="left-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content space-y-2">
          <li className="mb-4">
            <a className="hover:bg-base-300/50 rounded-lg">
              <div className="flex items-center gap-3">
                <img
                  style={{ borderRadius: "50%",width:'50px',height:'50px' }}
                  className=""
                  src="https://scontent-ams4-1.xx.fbcdn.net/v/t39.30808-6/473328075_564556096574871_670200440327454387_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnExzq66vlUTy_EKuUzPQzaddi9gYA-hNp12L2BgD6E7D9JASQb8RP3tKxtTrFWwgwAoxE2x_0AwrNjfBlRmBl&_nc_ohc=WvhuaEv743kQ7kNvwECeXvX&_nc_oc=Adm2i-AfU1X4uaNzsAbhoIov9HggnU9Mfsrk5HuUc3YY5av9acEiCo-6qPrY11zR_dw&_nc_zt=23&_nc_ht=scontent-ams4-1.xx&_nc_gid=UhZExD5x7JsB3o4ml4R0xg&oh=00_AfE_gL711hVtyP_-uHlJQU08mGIaudqohA_DM2rP9mqryg&oe=68196E76"
                  alt=""

                />
                <span className="font-semibold">Your Profile</span>
              </div>
            </a>
          </li>
          {[
            "Home",
            "Friends",
            "Watch",
            "Marketplace",
            "Groups",
            "Memories",
          ].map((item, index) => (
            <li key={index}>
              <a className="hover:bg-base-300/50 rounded-lg py-3">
                <span className="text-lg">{item}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default SidebarLeft;
