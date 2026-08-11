// figma node: 2044:2888 Form Control Validation Message / Error
export function FormControlValidationMessageError(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Validation Message" };
  return (
    <div className={props.className} style={{
      width: 129,
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
        color: "var(--tokens-destructive)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.text}</span>
    </div>
  );
}
export default FormControlValidationMessageError;
