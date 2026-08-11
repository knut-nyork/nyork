import { DataTableComponentsAvatar } from './DataTableComponentsAvatar.jsx';

// figma node: 2044:2823 DataTableAvatar (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "onGray=" + __venc(p.onGray);

export function DataTableAvatar(_p = {}) {
  const props = { ..._p, type: _p.type ?? "with photo", onGray: _p.onGray ?? false };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-secondary)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 11.672,
          width: 16,
          height: 16,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <DataTableComponentsAvatar />}</div>
    </div>
  );
  const __body1 = () => (
    <div className={"fig-asset-2b4f3ec8d15deacc " + (props.className || '')} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      position: "relative",
      ...props.style,
    }} />
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "var(--tokens-background)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "absolute",
          left: 12,
          top: 11.672,
          width: 16,
          height: 16,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <DataTableComponentsAvatar />}</div>
    </div>
  );
  const __impls = {
    // figma: Type=No photo, On Gray=false
    "type=no photo|onGray=false": __body0,
    // figma: Type=With Photo, On Gray=false
    "type=with photo|onGray=false": __body1,
    // figma: Type=No photo, On Gray=true
    "type=no photo|onGray=true": __body2,
    // figma: Type=With Photo, On Gray=true
    "type=with photo|onGray=true": __body1,
  };
  return (__impls[__vkey(props)] ?? __body1)();
}
export default DataTableAvatar;
