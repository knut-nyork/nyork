// figma node: 2004:56 placeholder
export function Placeholder(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      position: "relative",
      color: "rgb(44,49,67)",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 20,
        height: 20,
        clipPath: "inset(0px 0px 0px 0px)",
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 16,
          height: 16,
        }}>
          <path d={"M 8 16 C 7.778 16 7.583 15.965 7.417 15.896 C 7.25 15.826 7.09 15.715 6.938 15.563 L 0.438 9.063 C 0.285 8.91 0.174 8.75 0.104 8.583 C 0.035 8.417 0 8.222 0 8 C 0 7.778 0.035 7.583 0.104 7.417 C 0.174 7.25 0.285 7.09 0.438 6.938 L 6.938 0.438 C 7.09 0.285 7.25 0.174 7.417 0.104 C 7.583 0.035 7.778 0 8 0 C 8.222 0 8.417 0.035 8.583 0.104 C 8.75 0.174 8.91 0.285 9.063 0.438 L 15.563 6.938 C 15.715 7.09 15.826 7.25 15.896 7.417 C 15.965 7.583 16 7.778 16 8 C 16 8.222 15.965 8.417 15.896 8.583 C 15.826 8.75 15.715 8.91 15.563 9.063 L 9.063 15.563 C 8.91 15.715 8.75 15.826 8.583 15.896 C 8.417 15.965 8.222 16 8 16 Z M 8 14.5 L 14.5 8 L 8 1.5 L 1.5 8 L 8 14.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
    </div>
  );
}
export default Placeholder;
