import { useState, useEffect } from 'react';
import DropDown from '@/components/DropDown';
import Button from '@/components/Button';
import Close from '@/assets/close.svg';
function LoginModal({ Modal, setIsModal }) {
  const [selected, setSelected] = useState('알림 종류를 선택하세요');
  const [id, setId] = useState<String>('');
  const [password, setPassword] = useState<String>('');
  const items:String[] = ['진행알림','오류알림']
  const handleButtonClicked = () => {
      setIsModal(false);
    }
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 z-50">
      <div
        className={`w-1/2 h-3/4 relative bg-slate-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-white flex flex-col items-center`}
      >
        <img
          src={Close}
          className="absolute top-3 right-6 cursor-pointer w-4 h-4"
          onClick={() => {
            setIsModal(0);
          }}
        />
        
          <div className="w-3/4 mt-4 text-2xl font-bold text-blue-900 text-center">Log in</div>
          <div className='w-3/4 text-xs mt-2 font-normal text-gray-400 text-center'>물류창고내 장비 상태 및 수집획득을 위한 인공지능 기반
          <br/>IOT 모니터링 제어 솔루션</div>
          <div className='w-full h-fit flex flex-col items-center justify-center'>
          <div className="w-3/4 text-left mt-8 font-semibold">E-mail</div>
          <input
            className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
            placeholder="이메일을 입력하세요"
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <div className="w-3/4 text-left mt-4 font-semibold">Password</div>
          <input
            className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
            placeholder="비밀번호를 입력하세요"
            type='password'
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          </div>
        <div className="absolute bottom-4 w-full flex flex-col items-center text-center font-semibold text-lg">
          <Button
            width="33%"
            height="12"
            text="Login"
            bg="rgb(96 165 250)"
            clickHandler={() => {
              handleButtonClicked();
            }}
          />
          <div className='w-full mt-2'>
          <Button
            width="33%"
            height="12"
            text="Sign With Google"
            bg="rgb(221 214 254)"
            clickHandler={() => {
              handleButtonClicked();
            }}
          />
          </div>
          <div className='w-3/4 text-s mt-2 font-normal text-gray-400 text-center'>
            You don't have an account yet? <span className='text-orange-600 cursor-pointer' onClick={()=>{setIsModal(2)}}>Sign in</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoginModal;
