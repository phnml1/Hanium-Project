import { useState, useEffect } from 'react';
import Close from '@/assets/close.svg';
import Button from '@/components/Button';
import { useDocumentAdd } from '../hooks/useDocumentAdd';
interface DocumentAddModalProps {
  setIsModal: (isModal: boolean) => void;
  setData: (data: { title: string; content: string }) => void;
}

function DocumentAddModal({ setIsModal }: DocumentAddModalProps) {
  const [railNum, setNum] = useState<number>(1);
  const [content, setContent] = useState<string>('');

  const {mutate, isSuccess, isError} = useDocumentAdd();
  const handleButtonClicked = async () => {
    const confirm: boolean = window.confirm('기록을 추가하시겠습니까?');
    if (confirm) {
      await mutate({ userName: '이주영', railNum: railNum, content: content });
      if(isSuccess){
        alert('기록이 추가되었습니다.');
        setIsModal(false);
      } else if(isError){
        alert('서버 에러')
      }
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
        <div className="mt-12 w-full flex flex-col items-center">
          <div className="w-3/4 h-fit flex flex-col gap-1">
            <div className="w-3/4 text-left font-semibold">레일 번호</div>
            <input
              className="w-full h-12 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-left px-4"
              placeholder="레일 번호를 입력하세요"
              type='number'
              onChange={(e) => {
                setNum(e.target.value);
              }}
            />
          </div>

          <div className="w-3/4 mt-8 text-left font-semibold">상세 정보</div>
          <textarea
            className="w-3/4 h-80 text-left p-4 rounded-md border-2 resize-none border-solid border-slate-100 shadow-md mt-4"
            placeholder="장비에 대한 기록 작성"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-8 mb-8 w-full text-center font-semibold text-lg">
          <Button
            width="20%"
            height="12"
            text="기록 추가"
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
export default DocumentAddModal;
