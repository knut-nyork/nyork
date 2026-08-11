// figma node: 42:117 pattern (6 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Pattern(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 8332,
      height: 8332,
      overflow: "hidden",
      position: "relative",
      ...props.style,
    }} />
  );
  const __impls = {
    // figma: Property 1=Default
    "property1=default": __body0,
    // figma: Property 1=Variant3
    "property1=variant3": __body0,
    // figma: Property 1=Variant5
    "property1=variant5": __body0,
    // figma: Property 1=Variant6
    "property1=variant6": __body0,
    // figma: Property 1=Variant4
    "property1=variant4": __body0,
    // figma: Property 1=Variant2
    "property1=variant2": __body0,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Pattern;
