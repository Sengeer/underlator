export default function SyncIcon({
  width = 24,
  height = 24,
  color,
  style,
}: Icon) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      style={style}
      width={width}
      height={height}
      fill={color}
      viewBox='0 -960 960 960'>
      <path d='M280-120 80-320l200-200 57 56-104 104h607v80H233l104 104-57 56Zm400-320-57-56 104-104H120v-80h607L623-784l57-56 200 200-200 200Z' />
    </svg>
  );
}
