import { DataTableHeaderFiltersDropdown } from './DataTableHeaderFiltersDropdown.jsx';
import { Icons24x24ChevronsUpDown } from './Icons24x24ChevronsUpDown.jsx';

// figma node: 2044:1530 Data Table / Header / Header Button (4 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state);

export function DataTableHeaderHeaderButton(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Button", style2: _p.style2 ?? "default - 40px", showMenu: _p.showMenu ?? false, state: _p.state ?? "default", iconRight: _p.iconRight ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.iconRight && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.icon ?? <Icons24x24ChevronsUpDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.iconRight && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.icon ?? <Icons24x24ChevronsUpDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 16px 6px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
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
      }}>{props.label}</span>
      {props.iconRight && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24ChevronsUpDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showMenu && (
      <DataTableHeaderFiltersDropdown style={{ position: "absolute", left: 0, top: 39.672 }} />
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 12px 8px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
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
      }}>{props.label}</span>
      {props.iconRight && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24ChevronsUpDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      {props.showMenu && (
      <DataTableHeaderFiltersDropdown style={{ position: "absolute", left: 0, top: 36 }} />
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Default - 40px, State=Default
    "style2=default - 40px|state=default": __body0,
    // figma: Style=New York - 36px, State=Default
    "style2=new york - 36px|state=default": __body1,
    // figma: Style=Default - 40px, State=Hover
    "style2=default - 40px|state=hover": __body2,
    // figma: Style=New York - 36px, State=Hover
    "style2=new york - 36px|state=hover": __body3,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DataTableHeaderHeaderButton;
