// figma node: 2044:2803 DataTableProgress (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function DataTableProgress(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "new york" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 262,
      height: 16,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 90,
        backgroundColor: "var(--tokens-foreground)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 90px 0px 90px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 262,
      height: 8,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "rgba(2,6,23,0.2)",
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 90,
        backgroundColor: "var(--tokens-foreground)",
        display: "flex",
        flexDirection: "row",
        padding: "0px 90px 0px 90px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }} />
    </div>
  );
  const __impls = {
    // figma: Style=Default
    "style2=default": __body0,
    // figma: Style=New York
    "style2=new york": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default DataTableProgress;
