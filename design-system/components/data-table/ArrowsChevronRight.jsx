// figma node: 2044:1025 Arrows / chevron-right
export function ArrowsChevronRight(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={5.067} height={9.600} viewBox="0 0 5.067 9.600" fill="none" style={{
        position: "absolute",
        left: 6.4,
        top: 3.2,
        width: 5.067,
        height: 9.6,
      }}>
        <path d={"M 0.169 0.144 C 0.383 -0.057 0.721 -0.046 0.922 0.169 L 4.922 4.435 C 5.115 4.64 5.115 4.96 4.922 5.165 L 0.922 9.431 C 0.721 9.646 0.383 9.657 0.169 9.456 C -0.046 9.254 -0.057 8.917 0.144 8.702 L 3.802 4.8 L 0.144 0.898 C -0.057 0.683 -0.046 0.346 0.169 0.144 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ArrowsChevronRight;
