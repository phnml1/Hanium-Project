// types.ts
export interface SignUpModalProps {
    setIsModal: (isModal: boolean) => void;
    setData: (data: { title: string; content: string }) => void;
  }
  
export interface SignUpData {
    email: string;
    password: string;
    passwordCheck: string;
    userName: string;
  }
  