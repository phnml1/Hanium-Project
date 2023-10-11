import { useEffect, useState } from 'react';
import DropDown from '@/components/DropDown';
import Button from '@/components/Button';
import Close from '@/assets/close.svg';
import { AlertData, AlertModalProps } from '../types';
import { useAddAlert } from '../hooks/useAddAlert';
function AlertModal({ width, height, setIsModal }: AlertModalProps) {
  const [selected, setSelected] = useState('알림 종류를 선택하세요');
  const [data, setData] = useState<AlertData>({
    getUser: '',
    sendUser: '이주영',
    noticeType: '',
    content: '',
    noticeURL: 'http://~~',
  });
  const items: string[] = ['진행알림', '오류알림'];
  const styleprops = `w-${width} h-${height}`;
  const { mutate, isSuccess, isError } = useAddAlert();
  useEffect(() => {
        if (isSuccess) {
      alert('알림을 전송했습니다.');
      setIsModal(false);
    }
    if (isError) {
      alert('에러가 발생했습니다 다시시도하세요');
    }
  }, [isSuccess, isError, setIsModal]);

  const handleButtonClicked = () => {
    const confirm: boolean = window.confirm('알림을 전송하시겠습니까?');
    if (confirm && areValuesEmpty(data).length==0) {
      mutate(data);
    } 
  };
  useEffect(() => {
    if (selected === '진행알림') {
      setData((data) => ({ ...data, noticeType: 'record' }));
    } else if (selected === '오류알림') {
      setData((data) => ({ ...data, noticeType: 'error' }));
    }
  }, [selected]);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 z-50">
      <div
        className={`${styleprops} relative bg-slate-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-white flex flex-col items-center`}
      >
        <img
          src={Close}
          className="absolute top-3 right-6 cursor-pointer w-4 h-4"
          onClick={() => {
            setIsModal(false);
          }}
        />
        <div className="mt-12 w-full flex flex-col items-center">
          <div className="w-3/4 font-semibold text-center">알림 종류</div>
          <DropDown
            items={items}
            selected={selected}
            setSelected={setSelected}
          />
          <div className="w-3/4 text-center mt-4 font-semibold">
            보내는 사람
          </div>
          <input
            className="w-3/4 h-8 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
            placeholder="보내는 사람을 입력하세요"
            onChange={(e) => {
              setData((data) => ({ ...data, getUser: e.target.value }));
            }}
          />
          {/* <div className="w-3/4 text-center mt-4 font-semibold">제목</div>
          <input
            className="w-3/4 h-8 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              setData((data) => ({ ...data, sendUser: e.target.value }));
            }}
          /> */}
          <div className="w-3/4 text-center mt-4 font-semibold">내용</div>
          <textarea
            className="w-3/4 h-44 text-center rounded-md border-2 p-2 resize-none border-solid border-slate-100 shadow-md mt-4"
            placeholder="내용을 입력하세요"
            onChange={(e) => {
              setData((data) => ({ ...data, content: e.target.value }));
            }}
          ></textarea>
        </div>
        <div className="mt-8 mb-8 w-full text-center font-semibold text-lg">
          <Button
            width="20%"
            height="12"
            text="알림 전송"
            bg="rgb(96 165 250)"
            clickHandler={() => {
              handleButtonClicked();
            }}
          />
        </div>
      </div>
    </div>
  );
}
import { areValuesEmpty } from '../utils';
export default AlertModal;
