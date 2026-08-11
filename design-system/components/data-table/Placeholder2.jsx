// figma node: 2044:1289 Placeholder
export function Placeholder2(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 313,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--violet-50)",
      outline: "1px dashed var(--violet-700)",
      outlineOffset: "-1px",
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-lg) * 1px)",
      padding: "16px 16px 16px 16px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-xl) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-xl) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--violet-700)",
          flexShrink: 0,
        }}>{props.text1 ?? "Replace me"}</span>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            border: "1px dashed currentColor",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            fontSize: 10,
            opacity: 0.45,
          }}>Vector</div>
          <svg width={9.687} height={9.687} viewBox="0 0 9.687 9.687" fill="none" style={{
            position: "absolute",
            left: 10.906,
            top: 10.907,
            width: 9.687,
            height: 9.687,
            color: "var(--violet-700)",
          }}>
            <path d={"M 9.366 0.32 C 9.793 0.747 9.793 1.439 9.366 1.866 L 1.866 9.366 C 1.439 9.793 0.747 9.793 0.32 9.366 C -0.107 8.939 -0.107 8.247 0.32 7.82 L 7.82 0.32 C 8.247 -0.107 8.939 -0.107 9.366 0.32 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
          <svg width={16.437} height={16.437} viewBox="0 0 16.437 16.437" fill="none" style={{
            position: "absolute",
            left: 2.657,
            top: 2.657,
            width: 16.437,
            height: 16.437,
            color: "var(--violet-700)",
          }}>
            <path d={"M 16.116 0.32 C 16.543 0.747 16.543 1.439 16.116 1.866 L 1.866 16.116 C 1.439 16.543 0.747 16.543 0.32 16.116 C -0.107 15.689 -0.107 14.997 0.32 14.57 L 14.57 0.32 C 14.997 -0.107 15.689 -0.107 16.116 0.32 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <span style={{
        position: "relative",
        width: 194.615,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text2 ?? "Choose an alternative component to replace this placeholder"}</span>
    </div>
  );
}
export default Placeholder2;
