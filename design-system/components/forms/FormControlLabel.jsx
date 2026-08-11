// figma node: 2044:2867 Form Control Label (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "disabled=" + __venc(p.disabled);

export function FormControlLabel(_p = {}) {
  const props = { ..._p, required: _p.required ?? false, disabled: _p.disabled ?? true, text: _p.text ?? "Label Text" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
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
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
      {props.required && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(2,6,23)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "*"}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
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
        width: 69,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text}</span>
      {props.required && (
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "center",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "rgb(100,116,139)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.text1 ?? "*"}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Disabled=no
    "disabled=false": __body0,
    // figma: Disabled=yes
    "disabled=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default FormControlLabel;
