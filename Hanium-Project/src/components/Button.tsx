function Button({ width, height, bg, text, clickHandler }) {
  return (
    <button className={`w-${width} h-${height} bg-${bg} text-white`} onClick={clickHandler}>
      {text}
    </button>
  );
}
export default Button;
