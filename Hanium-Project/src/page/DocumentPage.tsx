import DropDown from '@/components/DropDown';
import DocumentAddModal from '@/components/Modal/DocumentAddModal';
import NavBar from '@/components/NavBar';
import { useState } from 'react';

function DocumentPage() {
  const items: String[] = [
    'D-23번 컨베이어',
    'D-24번 컨베이어',
    'D-25번 컨베이어',
    'D-26번 컨베이어',
    'D-27번 컨베이어',
  ];
  const [documents, setDocuments] = useState([
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
  const [selected, setSelected] = useState<String>('D-23번 컨베이어');
  const [modal, setIsModal] = useState(false);
  return (
    <div className="w-full bg-slate-100 min-h-screen flex flex-col items-center">
      <NavBar />
      <div className="w-3/4 flex flex-col items-center">
        <div className="w-full flex flex-col items-center h-fit mt-2 text-center text-lg font-semibold">
          <DropDown
            selected={selected}
            setSelected={setSelected}
            items={items}
          />
          <div className="mt-2">RFEDG354</div>
        </div>
        <div className="w-3/4 mt-4 text-center">
          <button className="w-24 h-12 text-pink-600 bg-pink-100" onClick={()=>{setIsModal(true)}}>Add</button>
        </div>
        <div className="w-full flex flex-col items-center mt-8">
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

      {modal && <DocumentAddModal setIsModal={setIsModal}/>}
    </div>
  );
}
export default DocumentPage;
