// types.ts
export interface AlertModalProps {
    width: string;
    height: string;
    setIsModal: (isModal: boolean) => void;
  }
  
  
export interface DocumentData {
    userName: string,
    railNum: number,
    content: string,
  }