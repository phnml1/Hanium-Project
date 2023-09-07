import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import LoginModal from './Modal/LoginModal';
import SignUpModal from './Modal/SignUpModal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function NavBar() {
  const [loginClicked, setLoginClicked] = useState<boolean>(false);
  const [modal, setIsModal] = useState<Number>(0);
  const navigate = useNavigate();
  return (
    <div className="w-full bg-white h-24 flex justify-between items-center">
      <div className="w-1/6 h-full bg-indigo"></div>
      <div className="w-3/5 flex justify-evenly items-center h-full cursor-pointer text-xl font-medium ">
        <div
          className="group w-32 h-10 flex justify-center items-center hover:text-sky-500"
          onClick={() => {
            navigate('/');
          }}
        >
          <div className="w-fit h-8 flex flex-col justify-center">메인</div>
        </div>
        <div
          className="w-32 text-center hover:text-sky-500"
          onClick={() => {
            navigate('/monitoring');
          }}
        >
          모니터링
        </div>
        <div
          className="w-32 text-center hover:text-sky-500"
          onClick={() => {
            navigate('/document');
          }}
        >
          기록
        </div>
        <div
          className="w-32 text-center hover:text-sky-500"
          onClick={() => {
            navigate('/logistics');
          }}
        >
          물류 현황
        </div>
      </div>
      <div className="w-1/6 h-full flex justify-evenly items-center">
        <Button
          width="80px"
          height="10"
          text="로그인"
          bg="rgb(96 165 250)"
          clickHandler={() => {
            setIsModal(1);
          }}
        />
        <FontAwesomeIcon
          onClick={()=>{navigate('/notification')}}
          className="text-3xl text-blue-400 cursor-pointer"
          icon={faBell}
        />
      </div>
      {modal === 1 && <LoginModal Modal={modal} setIsModal={setIsModal} />}
      {modal === 2 && <SignUpModal Modal={modal} setIsModal={setIsModal} />}
    </div>
  );
}

export default NavBar;
