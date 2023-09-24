export function areValuesEmpty(obj:object): string[] {
  const emptyFields = [];

  // 필드에 대한 설명을 정의합니다.
  const fieldDescriptions = {
    sendUser: '보내는 사람',
    noticeType: '알림 종류',
    content: '내용',
    noticeURL: '알림 URL',
  };

  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === '') {
      emptyFields.push(fieldDescriptions[key]); // 필드에 대한 설명과 함께 빈 필드 저장
    }
  }
  return emptyFields;
}
