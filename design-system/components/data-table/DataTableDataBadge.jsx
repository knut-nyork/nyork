// figma node: 2044:2819 Data DataTableBadge
export function DataTableDataBadge(_p = {}) {
  const props = { ..._p, icon: _p.icon ?? true };
  return (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "2px 10px 2px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-xxs) * 1px)",
      paddingBottom: "calc(var(--spacing-xxs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Documentation"}</span>
    </div>
  );
}
export default DataTableDataBadge;
