interface ButtonProps {
  width: string;
  height: string;
  bg: string;
  text: string;
  color: string;
  clickHandler: () => void;
}

function Button({ width, height, bg, text, color, clickHandler }: ButtonProps) {
  return (
    <button
      style={{ backgroundColor: `${bg}`, width: `${width}`, color: `${color}` }}
      className={`h-${height} text-${color || 'white'}`}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
}
export default Button;
