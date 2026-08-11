// figma node: 2044:1027 Abstract / circle
export function AbstractCircle(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
        position: "absolute",
        left: 0.936,
        top: 0.936,
        width: 14.129,
        height: 14.129,
      }}>
        <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default AbstractCircle;
