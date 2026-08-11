// figma node: 2044:1281 Arrows / arrow-down
export function ArrowsArrowDown(_p = {}) {
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
        left: 3,
        top: 2,
        width: 9.6,
        height: 11.733,
      }}>
        <path d={"M 4.8 0 C 5.095 0 5.333 0.239 5.333 0.533 L 5.333 9.912 L 8.689 6.556 C 8.898 6.348 9.236 6.348 9.444 6.556 C 9.652 6.764 9.652 7.102 9.444 7.31 L 5.177 11.577 C 5.077 11.677 4.941 11.733 4.8 11.733 C 4.659 11.733 4.523 11.677 4.423 11.577 L 0.156 7.31 C -0.052 7.102 -0.052 6.764 0.156 6.556 C 0.364 6.348 0.702 6.348 0.91 6.556 L 4.267 9.912 L 4.267 0.533 C 4.267 0.239 4.505 0 4.8 0 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ArrowsArrowDown;
