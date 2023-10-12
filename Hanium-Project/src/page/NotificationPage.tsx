import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import DropDown from '@/components/DropDown';
import Line from '@/components/Line';
import InfiniteScroll from 'react-infinite-scroller';
import { useAlertPage } from '@/alert/hooks/useAlertPage';
import { useAlertAllDelete } from '@/alert/hooks/useAlertAllDelete';
import Alert from '@/alert/component/Alert';
interface Notification {
  kinds: string;
  title: string;
  writer: string;
  content: string;
}
const NotificationPage: React.FC = () => {
  const [selected, setSelected] = useState<string>('전체 알림');
  const items: string[] = ['전체 알림', '진행 알림', '오류 알림'];
  const [scroll, setScroll] = useState<boolean>(false);
  const stickyStyle: string = `${scroll ? 'sticky top-0' : 'sticky top-24'}`;
  const {mutate, isSuccess, isError} = useAlertAllDelete();
  const handleButtonClicked = async () => {
    const confirm: boolean = window.confirm('알림을 삭제하시겠습니까?');
    if (confirm) {
      mutate(); 
    }
  };
  useEffect(()=>{
    if(isSuccess) {
      alert('알림이 전체 삭제 되었습니다');
    }
    if(isError) {
      alert('에러가 발생했어요!');
    }
  },[isSuccess,isError]);
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    useAlertPage(selected);
  
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
          <div className="w-3/4 flex justify-end mt-4">
            <div className="w-fit text-red-400 cursor-pointer" onClick = {()=>{handleButtonClicked()}}>delete</div>
          </div>
          <Line width="3/4" mt="4" />
        </div>

          <InfiniteScroll className="mt-16 mb-8 w-3/4 flex flex-col items-center gap-6" loadMore={fetchNextPage} hasMore={hasNextPage}>
            {data?.pages.map((pageData) =>
              pageData.data.content.map((data) => (
                <Alert
                  key={data.noticeId}
                  alertId={data.noticeId}
                  content={data.content}
                  createdDate={data.createdDate}
                  userName={data.userName}
                />
                
              )),
            )}
          </InfiniteScroll>
      </div>
    </div>
  );
};
export default NotificationPage;
