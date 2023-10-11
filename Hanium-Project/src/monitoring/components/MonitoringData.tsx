import { useEffect } from 'react';
import { MonitoringDataType } from '../types';
import Line from '@/components/Line';

const MonitoringData: React.FC<MonitoringDataType> = ({
  timestamp,
  payload,
}) => {
  const formatTimestamp = (timestamp: number): string => {
    const date = new Date(timestamp);
    // 예시: "2023-10-12 12:34:56"
    return `${date.getFullYear()}-${padZero(date.getMonth() + 1)}-${padZero(date.getDate())} ${padZero(date.getHours())}:${padZero(date.getMinutes())}:${padZero(date.getSeconds())}`;
  };
  
  const padZero = (num: number): string => (num < 10 ? `0${num}` : `${num}`);
  const formattedTimestamp = formatTimestamp(timestamp);
 
  return (
    <div className="h-full flex flex-col bg-neutral-300 rounded-md">
      <div className="w-full h-1/6 flex justify-center items-center text-center">
        {formattedTimestamp}
      </div>
      <Line width="full" mt="0"/>
      <div className='w-full h-5/6 flex flex-col justify-evenly'>
        <div className='w-full h-fit flex'>
            <div className='w-1/2'>경로</div>
      <div className="w-1/2 text-center">
        {payload.sectionDecision}
      </div>
      </div>
      <div className='w-full h-fit flex'>
            <div className='w-1/2'>부피</div>
      <div className="w-1/2 text-center break-words">
      {payload.boxVolume.split('^')[0]}<sup>{payload.boxVolume.split('^')[1]}</sup>
      </div>
      </div>
      <div className='w-full h-fit flex'>
            <div className='w-1/2'>무게</div>
      <div className="w-1/2 text-center">
      {parseInt(payload.boxWeight)}
      </div>
      </div>
      <div className='w-full h-fit flex'>
            <div className='w-1/2'>목표달성률</div>
      <div className="w-1/2 text-center">
      {`${Math.round(parseInt(payload.percentCondition))}%`}
      </div>
      </div>
      </div>
    </div>
  );
};
export default MonitoringData;
