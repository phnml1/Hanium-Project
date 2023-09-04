import { useState, useEffect } from 'react';
import DropDown from '../DropDown';
import Close from '@/assets/close.svg'
import Button from '@/components/Button';
function DocumentAddModal({ setIsModal, setData }) {
  const [selected, setSelected] = useState('알림 종류를 선택하세요');
  const [title, setTitle] = useState<String>('');
  const [content, setContent] = useState<String>('');
  const items: String[] = ['진행알림', '오류알림'];
  const handleButtonClicked = () => {
    const confirm: boolean = window.confirm('알림을 전송하시겠습니까?');
    if (confirm) {
      setData({ title: { title }, content: { content } });
      setIsModal(false);
    }
  };
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-700 bg-opacity-50 z-50">
      <div
        className={`w-2/3 h-fit relative bg-slate-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-white flex flex-col items-center`}
      >
        <img
          src={Close}
          className="absolute top-3 right-6 cursor-pointer w-4 h-4"
          onClick={() => {
            setIsModal(false);
          }}
        />
        <div className="mt-12 w-full flex flex-col items-center">
            <div className='w-3/4 h-fit flex gap-4'>
                <div className='w-1/2'>
          <div className="w-3/4 font-semibold text-left">기록 날짜</div>
          <input
            className="w-full h-12 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-left px-4"
            placeholder="기록 날짜를 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          </div>
          <div className='w-1/2'>
          <div className="w-3/4 text-left font-semibold">레일 번호</div>
          <input
            className="w-full h-12 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-left px-4"
            placeholder="레일 번호를 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          </div>
          </div>
          <div className='w-3/4 mt-4 flex gap-4'>
            <div className='w-1/2'>
          <div className="w-full text-left font-semibold">작성자 이름</div>
          <input
            className="w-full h-12 rounded-md border-2 resize-none border-solid border-slate-100 shadow-md mt-4 px-4"
            placeholder="레일 번호를 입력하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          </div>
          <div className='w-1/2'>
          <div className="w-full text-left font-semibold">작성자 코드</div>
          <input
            className="w-full h-12 rounded-md border-2 px-4 resize-none border-solid border-slate-100 shadow-md mt-4"
            placeholder="작성자 코드를 입력하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          />
          </div>
          </div>
          <div className='w-3/4 mt-4 text-left font-semibold'>상세 정보</div>
          <textarea
            className="w-3/4 h-40 text-left p-4 rounded-md border-2 resize-none border-solid border-slate-100 shadow-md mt-4"
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
