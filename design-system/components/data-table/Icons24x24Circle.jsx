// figma node: 2044:1814 Icons 24x24 / circle
export function Icons24x24Circle(_p = {}) {
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
      <svg width={22} height={22} viewBox="0 0 22 22" fill="none" style={{
        position: "absolute",
        left: 1,
        top: 1,
        width: 22,
        height: 22,
      }}>
        <path d={"M 11 2 C 6.029 2 2 6.029 2 11 C 2 15.971 6.029 20 11 20 C 15.971 20 20 15.971 20 11 C 20 6.029 15.971 2 11 2 Z M 0 11 C 0 4.925 4.925 0 11 0 C 17.075 0 22 4.925 22 11 C 22 17.075 17.075 22 11 22 C 4.925 22 0 17.075 0 11 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24Circle;
