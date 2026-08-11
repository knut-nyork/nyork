// figma node: 2044:2958 Icons 24x24 / bold
export function Icons24x24Bold(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 24,
      height: 24,
      overflow: "hidden",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={15} height={18} viewBox="0 0 15 18" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 3,
        width: 15,
        height: 18,
      }}>
        <path d={"M 1 0 C 0.448 0 0 0.448 0 1 L 0 9 L 0 17 C 0 17.552 0.448 18 1 18 L 10 18 C 11.326 18 12.598 17.473 13.536 16.536 C 14.473 15.598 15 14.326 15 13 C 15 11.674 14.473 10.402 13.536 9.464 C 13.206 9.135 12.835 8.856 12.435 8.633 C 12.469 8.601 12.503 8.569 12.536 8.536 C 13.473 7.598 14 6.326 14 5 C 14 3.674 13.473 2.402 12.536 1.464 C 11.598 0.527 10.326 0 9 0 L 1 0 Z M 9 8 C 9.796 8 10.559 7.684 11.121 7.121 C 11.684 6.559 12 5.796 12 5 C 12 4.204 11.684 3.441 11.121 2.879 C 10.559 2.316 9.796 2 9 2 L 2 2 L 2 8 L 9 8 Z M 2 10 L 2 16 L 10 16 C 10.796 16 11.559 15.684 12.121 15.121 C 12.684 14.559 13 13.796 13 13 C 13 12.204 12.684 11.441 12.121 10.879 C 11.559 10.316 10.796 10 10 10 L 9 10 L 2 10 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24Bold;
