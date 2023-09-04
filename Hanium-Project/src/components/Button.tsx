function Button({ width, height, bg, text, clickHandler }) {
  return (
    <button style={{ backgroundColor: `${bg}`, width:`${width}` }} className={`h-${height} text-white`} onClick={clickHandler}>
      {text}
    </button>
  );
}
export default Button;
