import React from "react";

const Home = () => {
  return (
    <>
      <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className="drawer lg:drawer-open">
          <input id="left-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="left-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a>
                  <img
                    style={{ width: 40, height: 40, borderRadius: 50 }}
                    src="https://scontent.fkhi8-1.fna.fbcdn.net/v/t39.30808-6/473328075_564556096574871_670200440327454387_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHnExzq66vlUTy_EKuUzPQzaddi9gYA-hNp12L2BgD6E7D9JASQb8RP3tKxtTrFWwgwAoxE2x_0AwrNjfBlRmBl&_nc_ohc=pdcd0HlDpggQ7kNvwEqFj42&_nc_oc=Adnfgk4kS6bQ-ufdgX-qEspeLQWtq32giUM-jEjw7n3lD2d4ZbTTh58GDhlSSNcY7JA&_nc_zt=23&_nc_ht=scontent.fkhi8-1.fna&_nc_gid=1zUe6l0HGf3-PDQnlVTwMw&oh=00_AfGdpNIDV_DHUGc8LVMNLruXmMHsegNWknuDEmy0nMKFcg&oe=68142876"
                    alt=""
                  />
                  <p>Your Profile</p>
                </a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex items-center justify-center bg-base-100">
          <h1 className="text-3xl font-bold">Home</h1>
        </div>

        {/* Right Sidebar */}
        <div className="drawer drawer-end lg:drawer-open">
          <input id="right-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-side">
            <label
              htmlFor="right-drawer"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a>Right Home</a>
              </li>
              <li>
                <a>Right Sidebar Item 2</a>
              </li>
              <li>
                <a>Right Home</a>
              </li>
              <li>
                <a>Right Sidebar Item 2</a>
              </li>
              <li>
                <a>Right Home</a>
              </li>
              <li>
                <a>Right Sidebar Item 2</a>
              </li>
              <li>
                <a>Right Home</a>
              </li>
              <li>
                <a>Right Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
