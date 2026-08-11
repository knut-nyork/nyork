// figma node: 2044:1500 Icons 24x24 / chevron-up
export function Icons24x24ChevronUp(_p = {}) {
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
        <path d={"M 6.293 0.293 C 6.683 -0.098 7.317 -0.098 7.707 0.293 L 13.707 6.293 C 14.098 6.683 14.098 7.317 13.707 7.707 C 13.317 8.098 12.683 8.098 12.293 7.707 L 7 2.414 L 1.707 7.707 C 1.317 8.098 0.683 8.098 0.293 7.707 C -0.098 7.317 -0.098 6.683 0.293 6.293 L 6.293 0.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24ChevronUp;
