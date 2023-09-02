import { useState, useEffect } from 'react';
import DropDown from '@/components/DropDown';
import Button from '@/components/Button';
import Close from '@/assets/close.svg';
function Modal({ width, height, setIsModal, setData }) {
  const [selected, setSelected] = useState('알림 종류를 선택하세요');
  const [title, setTitle] = useState<String>('');
  const [content, setContent] = useState<String>('');
  const items:String[] = ['진행알림','오류알림']
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
        className={`w-${width} h-3/4 relative bg-slate-200 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-3xl bg-white flex flex-col items-center`}
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
          <DropDown items={items} selected={selected} setSelected={setSelected} />
          <div className="w-3/4 text-center mt-4 font-semibold">제목</div>
          <input
            className="w-3/4 h-8 mt-4 rounded-md shadow-md dropdown border-2 border-solid border-slate-100 text-center"
            placeholder="제목을 입력하세요"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <div className="w-3/4 text-center mt-4 font-semibold">내용</div>
          <textarea
            className="w-3/4 h-44 text-center rounded-md border-2 p-2 resize-none border-solid border-slate-100 shadow-md mt-4"
            placeholder="내용을 입력하세요"
            onChange={(e) => {
              setContent(e.target.value);
            }}
          ></textarea>
        </div>
        <div className="mt-8 w-full text-center font-semibold text-lg">
          <Button
            width="1/3"
            height="12"
            text="알림 전송"
            bg="rgb(59 130 246)"
            clickHandler={() => {
              handleButtonClicked();
            }}
          />
        </div>
      </div>
    </div>
  );
}
export default Modal;
