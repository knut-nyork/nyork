// figma node: 2027:798 nyheter_tittel (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function NyheterTittel(_p = {}) {
  const props = { ..._p, title: _p.title ?? "Tittel her om hva vi skriver om, det vet ikke jeg.", property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 326.427,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 326.427,
        height: 56,
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "28px",
        letterSpacing: "0.265px",
        color: "var(--semantic-color-foreground-default)",
      }}>{props.title}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 326.427,
      height: 56,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 326.427,
        height: 56,
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 24,
        lineHeight: "28px",
        letterSpacing: "0.265px",
        color: "var(--semantic-color-foreground-default)",
      }}>{props.text1 ?? "Tittel her om hva vi skriver om, det vet ikke jeg."}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NyheterTittel;
