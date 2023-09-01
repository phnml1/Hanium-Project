import { useState } from 'react';
import NavBar from '@/components/NavBar';

function MainPage() {
  type FeatureMenu = {
    name: string;
    kor: string;
    bg: string;
  };

  // useState를 사용하여 featureMenus 상태를 선언하고 초기값으로 FeatureMenu[] 타입을 지정
  const [featureMenus, setFeatureMenus] = useState<FeatureMenu[]>([
    { name: 'Monitoring', kor: '장비를 모니터링 합니다.', bg: 'sky' },
    { name: 'Management', kor: '물류를 관리합니다.', bg: 'indigo' },
    { name: 'Document', kor: '기록을 봅니다.', bg: 'orange' },
    { name: 'Status', kor: '물류 현황을 봅니다.', bg: 'lime' },
    { name: 'Notification', kor: '각종 알림', bg: 'rose' },
  ]);


  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-2/3 h-72 flex justify-evenly items-center bg-blue-800 mt-12 rounded-xl">
        <div className="w-1/3 h-52 flex flex-col text-white">
          <div>
            <div className="w-full text-2xl">2023.08.31</div>
            <div className="w-full text-2xl mt-4">A-3 물류창고</div>
          </div>
          <div className="w-32 h-12 bg-amber-500 text-center flex justify-center items-center mt-16 rounded-md">
            활성상태
          </div>
        </div>
        <div className="w-1/3 h-40"></div>
      </div>
      <div className="w-2/3 text-lg mt-8">
      <div className='font-semibold'>
          기능
          </div>
        <div className="w-full min-h-56 flex gap-6 flex-wrap justify-center items-center mt-8">
          {featureMenus.map((a, i) => {
            return (
              <div
                key={i}
                className={`group w-40 cursor-pointer h-48 scale-100 flex flex-col justify-center items-center ease-in-out duration-300 bg-${a.bg}-200 rounded-lg hover:scale-110`}
              >
                <div className="w-full text-center text-lg">
                  {a.name}
                  <div className="text-sm ease-in-out opacity-0 -translate-y-2 duration-200 group-hover:translate-y-0 group-hover:opacity-100">{a.kor}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className='w-2/3 flex flex-col items-center text-lg mt-8'>
        <div className='w-full h-fit text-left font-semibold'>
          선택된 컨베이어
          </div>
          <div className='w-5/6 h-52 my-10 relative items-center bg-white rounded-md'>
            <div className = 'w-fit flex gap-6 absolute left-16 top-8'>
              <div className = 'w-12 h-12 rounded-full bg-slate-900'>
              </div>
              <div className='text-xl'>
                D37번 컨베이어
                <div className='text-sm text-gray-500'>
                  번호: WS1023910
                </div>
              </div>
              
            </div>
            <div className='w-24 h-12 bg-orange-300 rounded-md absolute bottom-8 right-16 flex justify-center items-center'>
                  작동중
              </div>
          </div>
      </div>
    </div>
  );
}

export default MainPage;
