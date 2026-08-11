// figma node: 2044:1283 Objects / eye-none
export function ObjectsEyeNone(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "calc(var(--space-4) * 1px)",
      height: "calc(var(--space-4) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      <svg width={16} height={12.800} viewBox="0 0 16 12.800" fill="none" style={{
        position: "absolute",
        left: 0,
        top: 1.6,
        width: 16,
        height: 12.8,
      }}>
        <path d={"M 14.244 0.91 C 14.452 0.702 14.452 0.364 14.244 0.156 C 14.036 -0.052 13.698 -0.052 13.489 0.156 L 11.395 2.251 C 10.354 1.831 9.213 1.6 8 1.6 C 4.595 1.6 1.767 3.42 0.081 6.117 C -0.027 6.29 -0.027 6.51 0.081 6.683 C 0.963 8.094 2.158 9.265 3.585 10.061 L 1.756 11.889 C 1.548 12.098 1.548 12.436 1.756 12.644 C 1.964 12.852 2.302 12.852 2.51 12.644 L 4.605 10.549 C 5.646 10.969 6.787 11.2 8 11.2 C 11.405 11.2 14.233 9.38 15.919 6.683 C 16.027 6.51 16.027 6.29 15.919 6.117 C 15.037 4.706 13.842 3.535 12.415 2.739 L 14.244 0.91 Z M 10.565 3.081 C 9.764 2.812 8.904 2.667 8 2.667 C 5.123 2.667 2.698 4.137 1.169 6.4 C 1.998 7.626 3.089 8.62 4.373 9.273 L 10.565 3.081 Z M 5.435 9.719 L 11.627 3.527 C 12.911 4.18 14.002 5.174 14.831 6.4 C 13.302 8.663 10.877 10.133 8 10.133 C 7.096 10.133 6.236 9.988 5.435 9.719 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
}
export default ObjectsEyeNone;
