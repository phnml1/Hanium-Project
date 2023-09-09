import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import { ReactComponent as LocationImg } from '@/assets/locationImg.svg';
import React, { useState } from 'react';
import ProgressBar from '@ramonak/react-progress-bar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LogisticsPage: React.FC = ()=> {
  const [currentLog, setCurrentLog] = useState<Number>(200);
  const [goalLog, setGoalLog] = useState<Number>(1000);

  return (
    <div className="w-full bg-slate-100 h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-3/4 mt-8 flex flex-col items-center">
        <div className="w-full text-center font-extrabold text-blue-800 text-2xl mt-4">
          물류 관리
        </div>
        <div className="w-1/2 mt-4 flex justify-center items-center text-center text-lg py-2 font-semibold min-h-8 bg-blue-300 rounded-md shadow-md dropdown border-2 border-solid border-blue-200">
          <div className="w-fit flex gap-3 relative">
            <LocationImg fill="rgb(30 64 175)" />
            인천 계양구 계산동 A-3 물류창고
          </div>
        </div>
        <div className="w-1/2 mt-4 text-center text-lg py-2 font-semibold min-h-8 bg-white rounded-md shadow-md dropdown border-2 border-solid border-slate-200">
          D-23번 컨베이어
        </div>
        <div className="w-full text-center text-lg mt-2">RFEDG354</div>
        <div className="w-24 h-12 mt-4 bg-orange-300 rounded-md flex justify-center items-center">
          작동중
        </div>

        <div className="w-1/2 mt-8 font-semibold text-xl text-blue-800 text-center">
          물류 현황
        </div>
        <div className="w-1/2 mt-4 relative font-semibold text-center text-gray-400">
          현재 물류: {currentLog}개
          <div className="w-full text-center mt-2">
            목표까지 {goalLog - currentLog}개
          </div>
          
        </div>
        <div className="relative w-1/2 mt-8 ">
          <ProgressBar
            style={{ overFlow: 'auto' }}
            completed={`${currentLog}`}
            customLabel={`${currentLog}개`}
            maxCompleted={`${goalLog}`}
          />
          <span className="absolute -right-4 text-gray-600 -top-6">{goalLog}개</span>
        </div>
        <div className='mt-8'>
        <Button width="100px" bg="rgb(59 130 246)" height="12"
            text="수정"/>
            </div>
      </div>
    </div>
  );
}
export default LogisticsPage;
