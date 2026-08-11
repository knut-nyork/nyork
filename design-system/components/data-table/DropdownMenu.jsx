import { DropdownMenuContent } from './DropdownMenuContent.jsx';
import { DropdownMenuSectionTitle } from './DropdownMenuSectionTitle.jsx';
import { Icons24x24ChevronDown } from './Icons24x24ChevronDown.jsx';
import { Icons24x24ChevronUp } from './Icons24x24ChevronUp.jsx';

// figma node: 2044:1508 Dropdown Menu (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function DropdownMenu(_p = {}) {
  const props = { ..._p, scrollUp: _p.scrollUp ?? false, style2: _p.style2 ?? "default", scrollDown: _p.scrollDown ?? false, divider: _p.divider ?? true, showHeader: _p.showHeader ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 224,
      minWidth: 128,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--tokens-popover)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border), 0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-border)",
      ...props.style,
    }}>
      {props.showHeader && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xs) * 1px)",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingRight: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <DropdownMenuSectionTitle
          style={{
            position: "relative",
            height: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          title={"Section Title"}
          size={"lg"}
          paddingLeft={false}
          muted={false}
        />
        {props.divider && (
        <svg width={224} height={1} viewBox="0 -0.500 224 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 39.672,
          width: 224,
          height: 1,
        }}>
          <path d={"M 0 -0.5 L 0 0 L 224 0 L 224 -0.5 L 224 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        )}
      </div>
      )}
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.dropdownContent2 ?? <DropdownMenuContent style2={"default"} type={"default"} />}</div>
      {props.scrollUp && (
      <div style={{
        position: "absolute",
        left: 0,
        top: -0.328,
        width: 224,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icons24x24ChevronUp style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.scrollDown && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 327.672,
        width: 224,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icons24x24ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 224,
      minWidth: 128,
      overflow: "hidden",
      borderRadius: 6,
      backgroundColor: "var(--tokens-popover)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border), 0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-border)",
      ...props.style,
    }}>
      {props.showHeader && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        padding: "4px 4px 4px 4px",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-xs) * 1px)",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingRight: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <DropdownMenuSectionTitle
          style={{
            position: "relative",
            height: 32,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          title={"Section Title"}
          size={"lg"}
          paddingLeft={false}
          muted={false}
        />
        {props.divider && (
        <svg width={224} height={1} viewBox="0 -0.500 224 1" fill="none" style={{
          position: "absolute",
          left: 0,
          top: 39.672,
          width: 224,
          height: 1,
        }}>
          <path d={"M 0 -0.5 L 0 0 L 224 0 L 224 -0.5 L 224 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
        )}
      </div>
      )}
      <div style={{
          position: "relative",
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}>{props.dropdownContent ?? <DropdownMenuContent style2={"new york"} type={"default"} />}</div>
      {props.scrollDown && (
      <div style={{
        position: "absolute",
        left: 0,
        top: 327.672,
        width: 224,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Icons24x24ChevronDown style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
      {props.scrollUp && (
      <div style={{
        position: "absolute",
        left: 0,
        top: -0.328,
        width: 224,
        backgroundColor: "rgb(255,255,255)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "4px 8px 4px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--spacing-xs) * 1px)",
        paddingBottom: "calc(var(--spacing-xs) * 1px)",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon2 ?? <Icons24x24ChevronUp style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Default
    "style2=default": __body0,
    // figma: Style=New York
    "style2=new york": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DropdownMenu;
