// figma node: 2044:1050 Abstract / dot-filled
export function AbstractDotFilled(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={5.067} height={5.067} viewBox="0 0 5.067 5.067" fill="none" style={{
        position: "absolute",
        left: 5.467,
        top: 5.467,
        width: 5.067,
        height: 5.067,
      }}>
        <path d={"M 5.067 2.533 C 5.067 3.932 3.932 5.067 2.533 5.067 C 1.134 5.067 0 3.932 0 2.533 C 0 1.134 1.134 0 2.533 0 C 3.932 0 5.067 1.134 5.067 2.533 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
}
export default AbstractDotFilled;
