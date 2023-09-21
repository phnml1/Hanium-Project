import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import LoginModal from '@/login/components/LoginModal';
import SignUpModal from '@/login/components/SignUpModal';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout, isLogined } from '@/login/utils';
interface NavBarProps {
  setScroll: (scroll: boolean) => void;
}

function NavBar({ setScroll }: NavBarProps) {
  const [loginClicked, setLoginClicked] = useState<boolean>(false);
  const [modal, setIsModal] = useState<number>(0);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const navigate = useNavigate();
  const [position, setPosition] = useState<number>(window.pageYOffset);
  const [isLogined, setIsLogined] = useState<boolean>(Boolean(localStorage.getItem('user')));

  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;
      setIsScrolled(position < moving);
      setScroll(position < moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [position]);

  useEffect(()=>{
    setIsLogined(Boolean(localStorage.getItem('user')))
  },[modal])
  const header = `w-full fixed bg-white h-24 flex justify-between items-center ease-in-out duration-150 transition-transform ${
    isScrolled ? '-translate-y-full' : 'translate-y-0'
  } z-50`;
  return (
    <div className="w-full">
      <div className={header}>
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
          { isLogined ? (
            <Button
              width="80px"
              height="10"
              text="로그아웃"
              bg="rgb(96 165 250)"
              clickHandler={() => {
                Logout();
                setIsLogined(false);
              }}
            />
          ) : (
            <Button
              width="80px"
              height="10"
              text="로그인"
              bg="rgb(96 165 250)"
              clickHandler={() => {
                setIsModal(1);
              }}
            />
          )}

          <FontAwesomeIcon
            onClick={() => {
              navigate('/notification');
            }}
            className="text-3xl text-blue-400 cursor-pointer"
            icon={faBell}
          />
        </div>
      </div>
      {modal === 1 && <LoginModal Modal={modal} setIsModal={setIsModal} />}
      {modal === 2 && <SignUpModal Modal={modal} setIsModal={setIsModal} />}
    </div>
  );
}

export default NavBar;
