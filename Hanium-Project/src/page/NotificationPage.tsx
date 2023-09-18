import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import DropDown from '@/components/DropDown';
import Line from '@/components/Line';

interface Notification {
  kinds: string;
  title: string;
  writer: string;
  content: string;
}
const NotificationPage: React.FC = () => {
  const [currentLog, setCurrentLog] = useState<number>(200);
  const [goalLog, setGoalLog] = useState<number>(1000);
  const [selected, setSelected] = useState<string>('전체 알림');
  const items: string[] = ['전체 알림', '진행 알림', '오류 알림'];

  const [scroll, setScroll] = useState<boolean>(false);
  const stickyStyle: string = `${scroll ? 'sticky top-0' : 'sticky top-24'}`;
  const notifydummy: Notification[] = [
    {
      kinds: '오류 알림',
      title: '카메라 상태 이상',
      writer: 'admin',
      content: '카메라 오류가 발생했습니다. 가능하시다면 확인 부탁드립니다.',
    },
    {
      kinds: '진행 알림',
      title: '할당된 물류 이송 완료',
      writer: 'admin',
      content: '모두 이송 완료 되었습니다.',
    },
    {
      kinds: '오류 알림',
      title: '네트워크 연결 끊김',
      writer: 'admin',
      content: '네트워크 연결이 끊겼습니다. 확인 부탁드립니다.',
    },
    {
      kinds: '진행 알림',
      title: '새로운 주문 접수',
      writer: 'admin',
      content: '새로운 주문이 접수되었습니다. 처리해주세요.',
    },
    {
      kinds: '오류 알림',
      title: '데이터베이스 오류',
      writer: 'admin',
      content: '데이터베이스에 오류가 발생했습니다. 조치가 필요합니다.',
    },
    {
      kinds: '진행 알림',
      title: '배송 예정 시간 변경',
      writer: 'admin',
      content:
        '배송 예정 시간이 변경되었습니다. 고객에게 알릴 필요가 있습니다.',
    },
    // 더 많은 객체 추가 가능
  ];
  return (
    <div className="w-full bg-slate-100 h-fit flex flex-col items-center">
      <NavBar setScroll={setScroll} />
      <div className="w-full mt-24 bg-slate-100 h-fit flex flex-col items-center relative">
        <div
          className={`w-3/4 mt-8 flex flex-col ease-in-out duration-150 items-center ${stickyStyle} z-20 bg-slate-100`}
        >
          <div className="w-full text-center font-extrabold text-blue-800 text-2xl mt-4">
            보고된 알림
          </div>
          <div className="w-1/2 flex justify-center mt-2 ">
            <DropDown
              selected={selected}
              setSelected={setSelected}
              items={items}
            />
          </div>
          <div className="w-full flex justify-end mt-4">
            <div className="w-fit text-red-400 cursor-pointer">delete</div>
          </div>
          <Line width="full" mt="4" />
        </div>
        <div className="mt-16 mb-8 w-full flex flex-col items-center gap-6">
          {notifydummy.map((a, i) => (
            <div className="relative w-3/4 bg-white h-fit rounded-xl">
              <div className="w-full h-10 text-white flex items-center justify-center bg-sky-300 rounded-t-xl font-semibold">
                {a.kinds}
              </div>
              <div className="mx-8 mt-2 font-bold text-blue-800 relative">
                {a.title}
              </div>
              <div className="mx-8 mt-1 text-sm text-gray-300">{a.writer}</div>

              <div className="max-w-3/4 h-fit mx-8 mt-3 mb-8 flex flex-wrap justify-start items-center break-all">
                {a.content}
              </div>
              <div className="absolute bottom-4 right-4 text-red-400 cursor-pointer">
                delete
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default NotificationPage;
