// figma node: 2044:1043 Icons 24x24 / check
export function Icons24x24Check(_p = {}) {
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
      <svg width={18} height={13} viewBox="0 0 18 13" fill="none" style={{
        position: "absolute",
        left: 3,
        top: 5,
        width: 18,
        height: 13,
      }}>
        <path d={"M 17.707 0.293 C 18.098 0.683 18.098 1.317 17.707 1.707 L 6.707 12.707 C 6.52 12.895 6.265 13 6 13 C 5.735 13 5.48 12.895 5.293 12.707 L 0.293 7.707 C -0.098 7.317 -0.098 6.683 0.293 6.293 C 0.683 5.902 1.317 5.902 1.707 6.293 L 6 10.586 L 16.293 0.293 C 16.683 -0.098 17.317 -0.098 17.707 0.293 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default Icons24x24Check;
