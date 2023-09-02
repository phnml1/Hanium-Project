import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';
import { useState } from 'react';
function NavBar() {
  const [loginClicked, setLoginClicked] = useState<boolean>(false);
  return (
    <div className="w-full bg-white h-24 flex justify-between items-center">
      <div className="w-1/6 h-full bg-indigo"></div>
      <div className="w-3/5 flex justify-evenly items-center h-full cursor-pointer text-lg font-medium ">
        <div className="group w-32 h-10 flex justify-center items-center hover:text-sky-500">
          <div className="w-fit h-8 flex flex-col justify-center">메인</div>
        </div>
        <div className="w-32 text-center hover:text-sky-500">모니터링</div>
        <div className="w-32 text-center hover:text-sky-500">기록</div>
        <div className="w-32 text-center hover:text-sky-500">물류 현황</div>
      </div>
      <div className="w-1/6 h-full flex justify-evenly items-center">
        <Button
          width="24"
          height="12"
          text="Login"
          bg="rgb(59 130 246)"
          clickHandler={() => {
            setLoginClicked(true);
          }}
        />
        <FontAwesomeIcon
          className="text-4xl text-cyan-600 cursor-pointer"
          icon={faBell}
        />
      </div>
      {loginClicked && <LoginModal />}
    </div>
  );
}

export default NavBar;
