import RightIcon from "./images/header_right_icon.svg";
import SearchIcon from "./images/search_icon.svg";
const Header = () => {
  return (
    <>
      <section className="max-w-[1600px] lg:w-[82%] w-[98%] mx-auto lg:mt-6 font-['Lexend']">
        <div className="lg:navbar max-sm:w-full bg-base-100 flex-col lg:flex-row">
          <div className="lg:navbar-start lg:flex-1 flex w-full justify-between lg:justify-normal lg:block mb-4 lg:mb-0">
            <div className="dropdown text-[#150b2bb3]">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a>Home</a>
                </li>
                <li>
                  <a>Recipes</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Search</a>
                </li>
              </ul>
            </div>
            <a className="btn  bg-transparent hover:bg-transparent border-none text-[#150B2B] lg:text-3xl text-xl font-bold ">
              ISTANA COOKING
            </a>
          </div>
          <div className="navbar-center lg:flex-1 justify-center  hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[#150b2bb3] ">
              <li>
                <a>Home</a>
              </li>
              <li>
                <a href="#">Recipes</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Search</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end lg:flex-1 w-full">
            <div className="flex gap-3 justify-center">
              <fieldset className="flex border-2 rounded-full lg:px-8 px-3 w-[80%]">
                <img className="w-[30px]" src={SearchIcon} alt="Search" />
                <input
                  type="text"
                  placeholder="Search"
                  className=" lg:px-4 outline-none w-full max-w-xs"
                />
              </fieldset>
              <div className="lg:p-3 p-2 bg-[#0BE58A] rounded-full">
                <img src={RightIcon} alt="Add" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
