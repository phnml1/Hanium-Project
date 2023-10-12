import DropDown from '@/components/DropDown';
import DocumentAddModal from '@/document/component/DocumentAddModal';
import NavBar from '@/components/NavBar';
import Line from '@/components/Line';
import { useEffect, useState } from 'react';
import { axiosInstance, getJWTHeader } from '@/axiosinstance';
import Documents from '@/document/component/Documents';
import { useDocumentPage } from '@/document/hooks/useDocumentPage';
import InfiniteScroll from "react-infinite-scroller";
import { useDocumentAllDelete } from '@/document/hooks/useDocumentAllDelete';
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
  const {mutate,isSuccess,isError} = useDocumentAllDelete();
  const [scroll, setScroll] = useState(false);
  const [selected, setSelected] = useState<string>('D-23번 컨베이어');
  const [modal, setIsModal] = useState(false);
  const stickyStyle: string = `w-full flex flex-col items-center h-fit ease-in-out duration-150 items-center sticky ${
    scroll ? '-top-24' : 'top-0'
  } z-20 bg-slate-100`;
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } = useDocumentPage();
  console.log(data);
  const handleButtonClicked = async () => {
    const confirm: boolean = window.confirm('기록을 삭제하시겠습니까?');
    if (confirm) {
      mutate();
      console.log(isSuccess);
      if(isError){
        alert('서버 에러')
      } 
    }
    
  };
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
            <div className="absolute w-3/4 bottom-3 text-base text-right font-normal  text-red-500">
              <button onClick={()=>{handleButtonClicked()}} className='w-fit cursor-pointer mr-6'>delete</button>
        
      </div>
            </div>
          <Line width="3/4" />
        </div>
        {(isFetching)&& (<div className="loading">Loading...</div>)}
    {data?(<InfiniteScroll className="w-3/4 flex flex-col items-center gap-6" loadMore={fetchNextPage} hasMore={hasNextPage}>
      {data?.pages.map((pageData) =>
        pageData.data.content.map((data) => (
          <Documents
            key={data.recordId}
            recordId={data.recordId}
            content={data.content}
            createdDate={data.createdDate}
            userName={data.userName}
          />
        ))
      )}
    </InfiniteScroll>):(<div>기록이 없습니다.</div>)
}
      </div>

      {modal && <DocumentAddModal setIsModal={setIsModal} />}
    </div>
  );
}
export default DocumentPage;
