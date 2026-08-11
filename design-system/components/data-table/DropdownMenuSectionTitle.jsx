// figma node: 2044:1483 Dropdown Menu / Section Title (8 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "size=" + __venc(p.size) + '|' + "paddingLeft=" + __venc(p.paddingLeft) + '|' + "muted=" + __venc(p.muted);

export function DropdownMenuSectionTitle(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Section Title", size: _p.size ?? "lg", paddingLeft: _p.paddingLeft ?? true, muted: _p.muted ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      display: "flex",
      flexDirection: "column",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 203,
      display: "flex",
      flexDirection: "column",
      padding: "6px 8px 6px 8px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      minWidth: 128,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.title}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      minWidth: 128,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexGrow: 1,
      }}>{props.title}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      display: "flex",
      flexDirection: "column",
      padding: "6px 8px 6px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 203,
      display: "flex",
      flexDirection: "column",
      padding: "6px 8px 6px 32px",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 600,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.title}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      minWidth: 128,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.title}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 203,
      height: 32,
      minWidth: 128,
      display: "flex",
      flexDirection: "row",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexGrow: 1,
      }}>{props.title}</span>
    </div>
  );
  const __impls = {
    // figma: Size=lg, Padding Left=false, Muted=false
    "size=lg|paddingLeft=false|muted=false": __body0,
    // figma: Size=lg, Padding Left=false, Muted=true
    "size=lg|paddingLeft=false|muted=true": __body1,
    // figma: Size=sm, Padding Left=false, Muted=false
    "size=sm|paddingLeft=false|muted=false": __body2,
    // figma: Size=sm, Padding Left=false, Muted=true
    "size=sm|paddingLeft=false|muted=true": __body3,
    // figma: Size=lg, Padding Left=true, Muted=false
    "size=lg|paddingLeft=true|muted=false": __body4,
    // figma: Size=lg, Padding Left=true, Muted=true
    "size=lg|paddingLeft=true|muted=true": __body5,
    // figma: Size=sm, Padding Left=true, Muted=false
    "size=sm|paddingLeft=true|muted=false": __body6,
    // figma: Size=sm, Padding Left=true, Muted=true
    "size=sm|paddingLeft=true|muted=true": __body7,
  };
  return (__impls[__vkey(props)] ?? __body5)();
}
export default DropdownMenuSectionTitle;
