import { useDocumentDelete } from "../hooks/useDocumentDelete";

export default function Documents({ recordId, content, createdDate, userName}) {
  const originalDate = new Date(createdDate);
const formattedDate = originalDate.toLocaleString(); // 혹은 다른 원하는 형식으로 변환 가능
const trimmedDate = formattedDate.trim();

const date = trimmedDate;

  const {mutate,isSuccess,isError} = useDocumentDelete();
  const handleButtonClicked = async () => {
    const confirm: boolean = window.confirm('기록을 삭제하시겠습니까?');
    if (confirm) {
      await mutate(recordId);
      if(isError){
        alert('서버 에러')
      }
    }
    
  };
    console.log(content)
    return (
      <div className="w-full h-36 bg-white mt-4 rounded-lg relative">
      <div className="w-1/3 h-1/2 absolute top-4 left-6">
        <div className="text-md">{content}</div>
      </div>
      <div className="w-1/2 font-normal text-gray-400 absolute bottom-4 left-6">
        {date}
      </div>
      <div className="w-fit text-lg font-normal text-gray-400 absolute text-right top-4 right-6">
        {userName}
      </div>
      <div onClick={()=>{handleButtonClicked()}} className="w-fit text-base font-normal cursor-pointer text-red-500 absolute text-right bottom-4 right-6">
        delete
      </div>
    </div>
  );
}
