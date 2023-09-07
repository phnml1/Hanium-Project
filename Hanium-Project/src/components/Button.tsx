function Button({ width, height, bg, text, color, clickHandler }) {
  return (
    <button style={{ backgroundColor: `${bg}`, width:`${width}`,color: `${color}` }} className={`h-${height} text-${color || 'white'}`} onClick={clickHandler}>
      {text}
    </button>
  );
}
export default Button;
