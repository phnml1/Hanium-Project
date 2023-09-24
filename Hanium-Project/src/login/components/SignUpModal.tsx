import { useState, useEffect } from 'react';
import DropDown from '@/components/DropDown';
import Button from '@/components/Button';
import Close from '@/assets/close.svg';
import { SignUpData, SignUpModalProps } from '../types';
import { useSignUp } from '../hooks/useSignUp';

function SignUpModal({ setIsModal }: SignUpModalProps) {
  const [data, setData] = useState<SignUpData>({
    email: '',
    password: '',
    passwordCheck: '',
    userName: '',
  });
  const [passwordEqual, setPasswordEqual] = useState<string>('');
  const [passwordAccept, setAccept] = useState(false);
  
  const passWordCheck = (data: SignUpData) => {
    if (data.passwordCheck === '') {
      setPasswordEqual('');
    } else if (data.password !== data.passwordCheck) {
      setPasswordEqual('n');
    } else if (data.password.length <4){
      setPasswordEqual('t')
    }else {
      setPasswordEqual('y');
    }
  };
  const signup = useSignUp();


  useEffect(() => {
    if (passwordAccept) {
      passWordCheck(data);
    }
  }, [data.password, data.passwordCheck]);


  const handleButtonClicked = async () => {
    const confirm: boolean = window.confirm('회원가입 하시겠습니까?');
    if (confirm && passwordEqual === 'y') {
      try {
        const issuccess = await signup(data);
        if (issuccess === '회원가입 성공') {
          alert('회원가입을 성공하였습니다!');
          setIsModal(1);
        } else {
          alert(issuccess);
        }
      } catch (error) {
        console.error(error);
      } finally {
        console.log('done');
      }
    }
    else if(confirm && passwordEqual === 'n'){
      alert('비밀번호가 다릅니다');
    }
    else if(confirm && passwordEqual === 't'){
      alert('비밀번호는 4자이상이어야합니다.');
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 z-50">
      <div
        className={`w-1/2 h-fit relative bg-slate-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-white flex flex-col items-center`}
      >
        <img
          src={Close}
          className="absolute top-3 right-6 cursor-pointer w-4 h-4"
          onClick={() => {
            setIsModal(false);
          }}
        />
        <div className="w-full h-fit flex flex-col items-center justify-center">
          <div className="w-3/4 mt-4 text-2xl font-bold text-blue-900 text-center">
            Sign in
          </div>
          <div className="w-3/4 text-xs mt-2 font-normal text-gray-400 text-center">
            물류창고내 장비 상태 및 수집획득을 위한 인공지능 기반
            <br />
            IOT 모니터링 제어 솔루션
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-3/4 text-left mt-4 font-semibold">이메일</div>
            <input
              className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
              placeholder="이메일을 입력하세요"
              onChange={(e) => {
                setData((prev: SignUpData) => ({
                  ...prev,
                  email: e.target.value,
                }));
              }}
            />
            <div className="w-3/4 text-left mt-4 font-semibold">비밀번호</div>
            <input
              className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
              placeholder="비밀번호를 입력하세요"
              type="password"
              onChange={(e) => {
                setData((prev: SignUpData) => ({
                  ...prev,
                  password: e.target.value,
                }));
                if (e.target.value.length >= 4) {
                  setAccept(true);
                }
              }}
            />
            {passwordAccept  && (
              <div className="w-3/4 text-center mt-2 text-green-600 text-xs">
                사용가능한 비밀번호입니다.
              </div>
            )}
            {(!passwordAccept && data.password.length >=1) && (
              <div className="w-3/4 text-center mt-2 text-red-600 text-xs">
                비밀번호는 4자이상 이어야합니다
              </div>
            )}

            <div className="w-3/4 text-left mt-4 font-semibold">
              비밀번호 확인
            </div>
            <input
              className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
              placeholder="비밀번호을 다시 입력하세요"
              type="password"
              onChange={(e) => {
                setData((prev: SignUpData) => ({
                  ...prev,
                  passwordCheck: e.target.value,
                }));
              }}
            />
            {passwordEqual === 'y' && (
              <div className="w-3/4 text-center mt-2 text-green-600 text-xs">
                비밀번호가 같습니다.
              </div>
            )}
            {passwordEqual === 'n' && (
              <div className="w-3/4 text-center mt-2 text-red-600 text-xs">
                비밀번호가 다릅니다.
              </div>
            )}

            <div className="w-3/4 text-left mt-4 font-semibold">이름</div>
            <input
              className="w-3/4 h-12 mt-2 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
              placeholder="이름을 입력하세요"
              onChange={(e) => {
                setData((prev: SignUpData) => ({
                  ...prev,
                  userName: e.target.value,
                }));
              }}
            />
          </div>
        </div>
        <div className="mt-8 w-full flex flex-col items-center text-center font-semibold text-lg">
          <Button
            width="33%"
            height="12"
            text="Sign In"
            bg="rgb(96 165 250)"
            clickHandler={() => {
              handleButtonClicked();
            }}
          />
          <div className="w-full mt-2">
            <Button
              width="33%"
              height="12"
              text="Sign With Google"
              bg="rgb(221 214 254)"
              clickHandler={() => {
                handleButtonClicked();
              }}
            />
            <div className="w-full text-s mt-2 mb-8 font-normal text-gray-400 text-center">
              You already have an account?{' '}
              <span
                className="text-orange-600 cursor-pointer"
                onClick={() => {
                  setIsModal(1);
                }}
              >
                log in
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUpModal;
