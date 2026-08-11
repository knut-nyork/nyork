// figma node: 2004:914 menu (1 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Menu(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 20,
      height: 20,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "absolute",
        left: 2.372,
        top: 7.391,
        width: 15.256,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
      }}>
        <div style={{
          position: "relative",
          height: 1.609,
          borderRadius: 200,
          backgroundColor: "rgb(28,27,31)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          height: 1.609,
          borderRadius: 200,
          backgroundColor: "rgb(28,27,31)",
          flexShrink: 0,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Menu;
