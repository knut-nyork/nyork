// figma node: 2044:2834 Badge (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function Badge(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", type: _p.type ?? "default", state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-primary)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-secondary)",
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
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-destructive)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
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
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(15,23,42,0.9)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(241,245,249,0.8)",
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
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      backgroundColor: "rgba(239,68,68,0.9)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 9999,
      boxShadow: "inset 0 0 0 1px var(--tokens-accent)",
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
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
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
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body11 = () => (
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
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
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
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
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
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-accent)",
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
      }}>{props.text1 ?? "Badge"}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Default, Type=Default, State=Default
    "style2=default|type=default|state=default": __body0,
    // figma: Style=Default, Type=Secondary, State=Default
    "style2=default|type=secondary|state=default": __body1,
    // figma: Style=Default, Type=Destructive, State=Default
    "style2=default|type=destructive|state=default": __body2,
    // figma: Style=Default, Type=Outline, State=Default
    "style2=default|type=outline|state=default": __body3,
    // figma: Style=Default, Type=Default, State=Hover
    "style2=default|type=default|state=hover": __body4,
    // figma: Style=Default, Type=Secondary, State=Hover
    "style2=default|type=secondary|state=hover": __body5,
    // figma: Style=Default, Type=Destructive, State=Hover
    "style2=default|type=destructive|state=hover": __body6,
    // figma: Style=Default, Type=Outline, State=Hover
    "style2=default|type=outline|state=hover": __body7,
    // figma: Style=New York, Type=Default, State=Default
    "style2=new york|type=default|state=default": __body8,
    // figma: Style=New York, Type=Secondary, State=Default
    "style2=new york|type=secondary|state=default": __body9,
    // figma: Style=New York, Type=Destructive, State=Default
    "style2=new york|type=destructive|state=default": __body10,
    // figma: Style=New York, Type=Outline, State=Default
    "style2=new york|type=outline|state=default": __body11,
    // figma: Style=New York, Type=Default, State=Hover
    "style2=new york|type=default|state=hover": __body12,
    // figma: Style=New York, Type=Secondary, State=Hover
    "style2=new york|type=secondary|state=hover": __body13,
    // figma: Style=New York, Type=Destructive, State=Hover
    "style2=new york|type=destructive|state=hover": __body14,
    // figma: Style=New York, Type=Outline, State=Hover
    "style2=new york|type=outline|state=hover": __body15,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Badge;
