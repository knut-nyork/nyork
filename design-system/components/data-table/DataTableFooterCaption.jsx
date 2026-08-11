// figma node: 2044:3482 Data Table / Footer / Caption
export function DataTableFooterCaption(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: 1165,
      height: 52,
      backgroundColor: "var(--base-white)",
      display: "flex",
      flexDirection: "row",
      padding: "16px 0px 16px 0px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--gap-gap-4) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--gap-gap-4) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "A list of your recent invoices."}</span>
    </div>
  );
}
export default DataTableFooterCaption;
