export const passWordCheck = (data: SignUpData) => {
    if (data.passwordCheck === '') {
      setPasswordEqual('');
    } else if (data.password !== data.passwordCheck) {
      setPasswordEqual('n');
    } else {
      setPasswordEqual('y');
    }
  };