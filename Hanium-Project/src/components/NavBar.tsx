import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="w-full h-24 flex justify-between items-center">
      <div className="w-1/6 h-full bg-indigo"></div>
      <div className="w-3/5 flex justify-evenly items-center h-full cursor-pointer text-lg font-medium">
        <div className="w-32 h-10 flex justify-center items-center">
          <div className="group w-fit h-8 flex flex-col justify-center ">
            Main
            <div className="w-full h-0.5 bg-indigo-500 transform scale-x-0 transition-transform duration-250 ease-in-out group-hover:transform scale-x-100"></div>
          </div>
        </div>
        <div className="w-32 text-center">Monitoring</div>
        <div className="w-32 text-center">Document</div>
        <div className="w-32 text-center">Monitoring</div>
        <div className="w-32 text-center">Status</div>
      </div>
      <div className="w-1/6 h-full flex justify-evenly items-center">
        <button className="w-24 h-12 bg-sky-500 text-white ">Login</button>
        <FontAwesomeIcon
          className="text-4xl text-cyan-600 cursor-pointer"
          icon={faBell}
        />
      </div>
    </div>
  );
}

export default NavBar;