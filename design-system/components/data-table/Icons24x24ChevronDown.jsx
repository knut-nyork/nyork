// figma node: 2044:1504 Icons 24x24 / chevron-down
export function Icons24x24ChevronDown(_p = {}) {
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
      <svg width={14} height={8} viewBox="0 0 14 8" fill="none" style={{
        position: "absolute",
        left: 5,
        top: 8,
        width: 14,
        height: 8,
      }}>
        <path d={"M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 7 5.586 L 12.293 0.293 C 12.683 -0.098 13.317 -0.098 13.707 0.293 C 14.098 0.683 14.098 1.317 13.707 1.707 L 7.707 7.707 C 7.317 8.098 6.683 8.098 6.293 7.707 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24ChevronDown;
