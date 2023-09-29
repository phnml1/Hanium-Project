import DropDown from '@/components/DropDown';
import DocumentAddModal from '@/document/component/DocumentAddModal';
import NavBar from '@/components/NavBar';
import Line from '@/components/Line';
import { useEffect, useState } from 'react';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import Documents from '@/document/component/Documents';
import { useDocumentPage } from '@/document/hooks/useDocumentPage';
import InfiniteScroll from "react-infinite-scroller";
function DocumentPage() {
  type Documents = {
    title: string;
    content: string;
    time: string;
    writer: string;
  };

  const items: string[] = [
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
  const [selected, setSelected] = useState<string>('D-23번 컨베이어');
  const [modal, setIsModal] = useState(false);
  const stickyStyle: string = `w-full flex flex-col items-center h-fit ease-in-out duration-150 items-center sticky ${
    scroll ? '-top-24' : 'top-0'
  } z-20 bg-slate-100`;
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } = useDocumentPage();
  console.log(data);
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
        {(isFetching)&& (<div className="loading">Loading...</div>)}
    <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data?.pages.map((pageData) =>
        pageData.data.content.map((data) => (
          // <Documents
          //   key={data.recordId}
          //   content={data.content}
          //   time={data.createdDate}
          //   writer={data.userName}
          // />
          <div className="w-3/4 h-36 bg-white mt-4 rounded-lg relative">
      <div className="w-1/3 h-1/2 absolute top-4 left-6">
        <div className="text-md">{data.content}</div>
      </div>
      <div className="w-1/3 font-normal text-gray-400 absolute bottom-4 left-6">
        {data.createdDate}
      </div>
      <div className="w-1/3 text-lg font-normal text-gray-400 absolute text-right top-4 right-6">
        {data.userName}
      </div>
    </div>
        ))
      )}
    </InfiniteScroll>
    {/* {documents.map((a, i) => (
            <Documents
            key={i}
              content={a.content}
              time={a.time}
              writer={a.writer}
            />
          ))} */}
      </div>

      {modal && <DocumentAddModal setIsModal={setIsModal} />}
    </div>
  );
}
export default DocumentPage;
