import React from 'react';

interface LineProps {
  width: string;
  mt: string;
}

const Line: React.FC= ({ width, mt }:LineProps) => {
  // 클래스 이름을 문자열 더하기 연산을 사용하여 구성
  const lineClasses = `w-${width} mt-${mt} h-0.5 bg-gray-400`;
  return <div className={lineClasses}></div>;
};

export default Line;
