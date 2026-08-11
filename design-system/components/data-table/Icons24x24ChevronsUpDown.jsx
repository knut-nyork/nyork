// figma node: 2044:995 Icons 24x24 / chevrons-up-down
export function Icons24x24ChevronsUpDown(_p = {}) {
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
      <svg width={12} height={18} viewBox="0 0 12 18" fill="none" style={{
        position: "absolute",
        left: 6,
        top: 3,
        width: 12,
        height: 18,
      }}>
        <path d={"M 6.707 0.293 C 6.317 -0.098 5.683 -0.098 5.293 0.293 L 0.293 5.293 C -0.098 5.683 -0.098 6.317 0.293 6.707 C 0.683 7.098 1.317 7.098 1.707 6.707 L 6 2.414 L 10.293 6.707 C 10.683 7.098 11.317 7.098 11.707 6.707 C 12.098 6.317 12.098 5.683 11.707 5.293 L 6.707 0.293 Z M 1.707 11.293 C 1.317 10.902 0.683 10.902 0.293 11.293 C -0.098 11.683 -0.098 12.317 0.293 12.707 L 5.293 17.707 C 5.683 18.098 6.317 18.098 6.707 17.707 L 11.707 12.707 C 12.098 12.317 12.098 11.683 11.707 11.293 C 11.317 10.902 10.683 10.902 10.293 11.293 L 6 15.586 L 1.707 11.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24ChevronsUpDown;
