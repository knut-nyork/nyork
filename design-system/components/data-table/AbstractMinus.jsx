// figma node: 2044:1551 Abstract / minus
export function AbstractMinus(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={11.200} height={1.067} viewBox="0 0 11.200 1.067" fill="none" style={{
        position: "absolute",
        left: 2.4,
        top: 7.467,
        width: 11.2,
        height: 1.067,
      }}>
        <path d={"M 0 0.533 C 0 0.239 0.239 0 0.533 0 L 10.667 0 C 10.961 0 11.2 0.239 11.2 0.533 C 11.2 0.828 10.961 1.067 10.667 1.067 L 0.533 1.067 C 0.239 1.067 0 0.828 0 0.533 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default AbstractMinus;
