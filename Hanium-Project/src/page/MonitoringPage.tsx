import NavBar from '@/components/NavBar';
import '@/css/Monitoring.css';
import Button from '@/components/Button';
import AlertModal from '@/components/Modal/AlertModal';
import { useState } from 'react';
function MonitoringPage() {
  const currentDate: Date = new Date();
  const currentTime = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1,
    date: currentDate.getDate(),
    hour: currentDate.getHours(),
    min: currentDate.getMinutes(),
  };
  const [isModal, setIsModal] = useState<boolean>(false);
  const [data, setData] = useState({});

  return (
    <div className="w-full bg-slate-100 h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-3/4 text-2xl mt-3 font-semibold">D-37번 컨베이어</div>
      <div className="w-3/4 flex justify-between MonitoringContent mt-6">
        <div className="w-3/4 h-full bg-white rounded-l-xl"></div>
        <div className="w-1/4 h-full flex flex-col justify-between text-center font-semibold text-lg bg-gray-300 rounded-r-xl">
          <div className="h-2/3 flex flex-col justify-evenly">
            <div className="w-full text-center">
              {`${currentTime.year}-${currentTime.month}-${currentTime.date} ${currentTime.hour}:${currentTime.min}`}
            </div>
            <div className="w-full text-center">
              현재 물류 개수
              <br />3
            </div>
          </div>
          <Button
            width="full"
            height="12"
            text="알림 전송"
            bg="rgb(59 130 246)"
            clickHandler={() => {
              setIsModal(true);
            }}
          />
        </div>
      </div>
      {isModal && (
        <AlertModal
          width="3/4"
          height="3/4"
          setIsModal={setIsModal}
          setData={setData}
        />
      )}
    </div>
  );
}
export default MonitoringPage;
