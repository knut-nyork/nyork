// figma node: 2044:2875 Caption
export function Caption(_p = {}) {
  const props = { ..._p, caption: _p.caption ?? "Here is the caption" };
  return (
    <div className={props.className} style={{
      width: 125,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        lineHeight: "20px",
        color: "var(--tokens-muted-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.caption}</span>
    </div>
  );
}
export default Caption;
