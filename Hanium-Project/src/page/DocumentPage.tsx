import DropDown from '@/components/DropDown';
import DocumentAddModal from '@/components/Modal/DocumentAddModal';
import NavBar from '@/components/NavBar';
import Line from '@/components/Line';
import { useEffect, useState } from 'react';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';

function DocumentPage() {
  type Documents = {
    title: string;
    content: string;
    time: string;
    writer: string;
  };

  const items: String[] = [
    'D-23번 컨베이어',
    'D-24번 컨베이어',
    'D-25번 컨베이어',
    'D-26번 컨베이어',
    'D-27번 컨베이어',
  ];
  const [documents, setDocuments] = useState<Documents[]>([
    {
      title: '9/3 검사 결과 입니다',
      content: '장비 이상없음',
      time: '6hours ago',
      writer: 'admin',
    },
    {
      title: '9/2 검사 결과 입니다',
      content: '장비 이상없음',
      time: '9/2 16:00',
      writer: 'admin',
    },
    {
      title: '9/1 검사 결과 입니다',
      content: '장비 이상없음',
      time: '9/1 13:00',
      writer: 'admin',
    },
    {
      title: '8/31 검사 결과 입니다',
      content: '장비 이상없음',
      time: '8/31 14:00',
      writer: 'admin',
    },
  ]);
  const [scroll, setScroll] = useState(false);
  const [selected, setSelected] = useState<String>('D-23번 컨베이어');
  const [modal, setIsModal] = useState(false);
  const stickyStyle: string = `w-full flex flex-col items-center h-fit ease-in-out duration-150 items-center sticky ${
    scroll ? '-top-24' : 'top-0'
  } z-20 bg-slate-100`;
  useEffect(() => {
    axiosInstance.post(
      '/record',
      {
        userName: '박수현',
        railNum: 4,
        content: 'test',
      },
      getJWTHeader(),
    );
  }, []);

  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center">
      <NavBar setScroll={setScroll} />
      <div className="w-3/4 flex flex-col items-center">
        <div className={stickyStyle}>
          <div className="w-full mt-24 flex flex-col items-center h-fit mt-2 text-center text-lg font-semibold">
            <DropDown
              selected={selected}
              setSelected={setSelected}
              items={items}
            />
            <div className="mt-2">RFEDG354</div>
          </div>
          <div className="w-3/4 mt-4 mb-4 text-center">
            <button
              className="w-24 h-12 text-pink-600 bg-pink-100"
              onClick={() => {
                setIsModal(true);
              }}
            >
              Add
            </button>
          </div>
          <Line width="3/4" />
        </div>
        <div className="w-full flex flex-col items-center mt-28">
          {documents.map((a, i) => (
            <div className="w-3/4 h-36 bg-white mt-4 rounded-lg relative">
              <div className="w-1/3 h-1/2 absolute top-4 left-6">
                <div className="text-lg font-semibold">{a.title}</div>
                <div className="text-md">{a.content}</div>
              </div>
              <div className="w-1/3 font-normal text-gray-400 absolute bottom-4 left-6">
                {a.time}
              </div>
              <div className="w-1/3 text-lg font-normal text-gray-400 absolute text-right top-4 right-6">
                {a.writer}
              </div>
            </div>
          ))}
        </div>
      </div>

      {modal && <DocumentAddModal setIsModal={setIsModal} />}
    </div>
  );
}
export default DocumentPage;
