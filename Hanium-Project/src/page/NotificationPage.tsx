import NavBar from '@/components/NavBar';
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import DropDown from '@/components/DropDown';
import Line from '@/components/Line';
import InfiniteScroll from 'react-infinite-scroller';
import { useAlertPage } from '@/alert/hooks/useAlertPage';
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
  const { data, hasNextPage, isFetching, isFetchingNextPage, fetchNextPage } =
    useAlertPage(selected);
  console.log(data);
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
          <div className="w-full flex justify-end mt-4">
            <div className="w-fit text-red-400 cursor-pointer">delete</div>
          </div>
          <Line width="full" mt="4" />
        </div>
        <div className="mt-16 mb-8 w-full flex flex-col items-center gap-6">
          <InfiniteScroll loadMore={fetchNextPage} hasMore={hasNextPage}>
            {data?.pages.map((pageData) =>
              pageData.content.map((data) => (
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
              )),
            )}
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
};
export default NotificationPage;
