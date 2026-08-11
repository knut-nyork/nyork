// figma node: 2044:1279 Arrows / arrow-up
export function ArrowsArrowUp(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={9.600} height={11.733} viewBox="0 0 9.600 11.733" fill="none" style={{
        position: "absolute",
        left: 3.2,
        top: 2.133,
        width: 9.6,
        height: 11.733,
      }}>
        <path d={"M 4.423 0.156 C 4.631 -0.052 4.969 -0.052 5.177 0.156 L 9.444 4.423 C 9.652 4.631 9.652 4.969 9.444 5.177 C 9.236 5.385 8.898 5.385 8.689 5.177 L 5.333 1.821 L 5.333 11.2 C 5.333 11.495 5.095 11.733 4.8 11.733 C 4.505 11.733 4.267 11.495 4.267 11.2 L 4.267 1.821 L 0.91 5.177 C 0.702 5.385 0.364 5.385 0.156 5.177 C -0.052 4.969 -0.052 4.631 0.156 4.423 L 4.423 0.156 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ArrowsArrowUp;
