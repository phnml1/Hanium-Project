// types.ts
export interface AlertModalProps {
    width: string;
    height: string;
    setIsModal: (isModal: boolean) => void;
  }
  
  
export interface AlertData {
    getUser: string,
    sendUser: string,
    noticeType: string,
    content: string,
    noticeURL:string
  }
export interface LoginData{
  email: string,
  password: string,
}