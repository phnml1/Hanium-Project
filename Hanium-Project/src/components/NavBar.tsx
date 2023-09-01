import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <div className="w-full h-24 flex justify-between items-center">
      <div className="w-1/6 h-full bg-indigo"></div>
      <div className="w-3/5 flex justify-evenly items-center h-full cursor-pointer text-lg font-medium ">
        <div className="group w-32 h-10 flex justify-center items-center hover:text-sky-500">
          <div className="w-fit h-8 flex flex-col justify-center">
            Main
          </div>
        </div>
        <div className="w-32 text-center hover:text-sky-500">Monitoring</div>
        <div className="w-32 text-center hover:text-sky-500">Document</div>
        <div className="w-32 text-center hover:text-sky-500">Status</div>
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