import { useState, useEffect } from 'react';
import arrow from '@/assets/keyboard_arrow_down_FILL0_wght400_GRAD0_opsz24.svg';

interface DropDownProps {
  selected: string; // 선택된 항목의 타입에 따라 수정하세요
  setSelected: (value: string) => void; // 선택된 항목을 업데이트하는 함수의 타입에 따라 수정하세요
  items: string[]; // 드롭다운 아이템의 타입에 따라 수정하세요
}
function DropDown({ selected, setSelected, items }: DropDownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleOutsideClick = (e: React.ChangeEvent<HTMLElement>) => {
    if (!e.target.closest('.dropdown')) {
      setIsDropdownOpen(false); // 입력 창 밖을 클릭하면 dropdown 메뉴를 숨김
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div
      className="relative bg-white flex justify-between mt-5 w-3/4 py-2 min-h-8 max-h-24 rounded-md shadow-md dropdown border-2 border-solid border-slate-200"
      onClick={() => {
        setIsDropdownOpen(!isDropdownOpen);
      }}
    >
      <span className="w-full h-full text-center"> {selected}</span>

      {isDropdownOpen && (
        <ul className="absolute top-full left-0 w-full list-none p-0 m-0 z-10 text-center bg-white rounded-md shadow-md max-h-48 overflow-auto">
          {items.map((a, i) => (
            <li
              key={i}
              className="p-2 cursor-pointer hover:bg-gray-200"
              onClick={() => {
                setSelected(a);
              }}
            >
              {a}
            </li>
          ))}
        </ul>
      )}
      <img className="absolute top-1/2 -translate-y-1/2 right-3" src={arrow} />
    </div>
  );
}
export default DropDown;
