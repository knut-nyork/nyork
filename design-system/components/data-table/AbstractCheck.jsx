// figma node: 2044:1047 Abstract / check
export function AbstractCheck(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={8.800} height={8.267} viewBox="0 0 8.800 8.267" fill="none" style={{
        position: "absolute",
        left: 3.733,
        top: 3.867,
        width: 8.8,
        height: 8.267,
      }}>
        <path d={"M 8.498 0.109 C 8.806 0.31 8.893 0.723 8.691 1.032 L 4.158 7.965 C 4.051 8.128 3.878 8.237 3.684 8.261 C 3.491 8.286 3.296 8.225 3.152 8.093 L 0.218 5.427 C -0.054 5.179 -0.074 4.757 0.173 4.485 C 0.421 4.213 0.843 4.192 1.115 4.44 L 3.47 6.581 L 7.575 0.302 C 7.777 -0.006 8.19 -0.093 8.498 0.109 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default AbstractCheck;
