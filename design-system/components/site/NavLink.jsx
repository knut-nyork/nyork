// figma node: 2004:750 _nav_link (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function NavLink(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 22,
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.265px",
        color: "var(--semantic-color-foreground-default)",
      }}>{props.text1 ?? "Hjem"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 22,
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: 44,
        height: 22,
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 18,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        letterSpacing: "0.265px",
        color: "var(--semantic-color-foreground-brand)",
      }}>{props.text1 ?? "Hjem"}</span>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default NavLink;
