function Button({ width, height, bg, text, clickHandler }) {
  return (
    <button style={{ backgroundColor: `${bg}` }} className={`w-${width} h-${height} text-white`} onClick={clickHandler}>
      {text}
    </button>
  );
}
export default Button;
