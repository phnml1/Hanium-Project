import NavBar from '@/components/NavBar';
import '@/css/Monitoring.css';
import Button from '@/components/Button';
import AlertModal from '@/alert/component/AlertModal';
import { useState } from 'react';
import { useMonitoringData } from '@/monitoring/hooks/useMonitotingData';
import MonitoringData from '@/monitoring/components/MonitoringData';
const MonitoringPage: React.FC = () => {
  
  const [isModal, setIsModal] = useState<boolean>(false);
  const { isLoading, isFetching, data, isError, error } =  useMonitoringData();
  console.log(data);
  return (
    <div className="w-full bg-slate-100 h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-3/4 text-2xl mt-28 font-semibold">D-37번 컨베이어</div>
      <div className="w-3/4 flex justify-between MonitoringContent mt-6">
        <div className="w-3/4 h-full bg-white rounded-l-xl"></div>
        <div className="w-1/4 h-full flex flex-col justify-between text-center font-semibold text-lg bg-gray-300 rounded-r-xl">
        {data? (<MonitoringData timestamp = {data.timestamp} payload = {data.payload} />): <div className='h-2/3 flex justify-center items-center'>데이터를 가져오는 중입니다...</div>}
          <Button
            width="full"
            height="12"
            text="알림 전송"
            bg="rgb(59 130 246)"
            color = "white"
            clickHandler={() => {
              setIsModal(true);
            }}
          />
        </div>
      </div>
      {isModal && (
        <AlertModal
          width="1/2"
          height="fit"
          setIsModal={setIsModal}
        />
      )}
    </div>
  );
}
export default MonitoringPage;
