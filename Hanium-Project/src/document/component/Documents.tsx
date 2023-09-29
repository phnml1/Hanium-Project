export default function Documents({ content, time, writer}) {
    console.log(content)
    return (
    <div className="w-3/4 h-36 bg-white mt-4 rounded-lg relative">
      <div className="w-1/3 h-1/2 absolute top-4 left-6">
        <div className="text-md">{content}</div>
      </div>
      <div className="w-1/3 font-normal text-gray-400 absolute bottom-4 left-6">
        {time}
      </div>
      <div className="w-1/3 text-lg font-normal text-gray-400 absolute text-right top-4 right-6">
        {writer}
      </div>
    </div>
  );
}
