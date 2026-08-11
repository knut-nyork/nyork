// figma node: 2044:1035 Icons 24x24 / chevron-right
export function Icons24x24ChevronRight(_p = {}) {
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
      <svg width={8} height={14} viewBox="0 0 8 14" fill="none" style={{
        position: "absolute",
        left: 8,
        top: 5,
        width: 8,
        height: 14,
      }}>
        <path d={"M 0.293 0.293 C 0.683 -0.098 1.317 -0.098 1.707 0.293 L 7.707 6.293 C 8.098 6.683 8.098 7.317 7.707 7.707 L 1.707 13.707 C 1.317 14.098 0.683 14.098 0.293 13.707 C -0.098 13.317 -0.098 12.683 0.293 12.293 L 5.586 7 L 0.293 1.707 C -0.098 1.317 -0.098 0.683 0.293 0.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24ChevronRight;
