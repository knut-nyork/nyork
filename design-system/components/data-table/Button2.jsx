import { AbstractReload } from './AbstractReload.jsx';
import { Icons24x24Circle } from './Icons24x24Circle.jsx';
import { Icons24x24Loader } from './Icons24x24Loader.jsx';

// figma node: 2044:1841 Button (288 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "iconOnly=" + __venc(p.iconOnly) + '|' + "size=" + __venc(p.size) + '|' + "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type);

export function Button2(_p = {}) {
  const props = { ..._p, label: _p.label ?? "Button", style2: _p.style2 ?? "default", iconOnly: _p.iconOnly ?? true, leadingVisual: _p.leadingVisual ?? true, size: _p.size ?? "default", state: _p.state ?? "default", trailingVisual2: _p.trailingVisual2 ?? true, type: _p.type ?? "primary" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(15,23,42,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-primary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(241,245,249,0.8)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 7.333 1.333 C 4.02 1.333 1.333 4.02 1.333 7.333 C 1.333 10.647 4.02 13.333 7.333 13.333 C 10.647 13.333 13.333 10.647 13.333 7.333 C 13.333 4.02 10.647 1.333 7.333 1.333 Z M 0 7.333 C 0 3.283 3.283 0 7.333 0 C 11.383 0 14.667 3.283 14.667 7.333 C 14.667 11.383 11.383 14.667 7.333 14.667 C 3.283 14.667 0 11.383 0 7.333 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      )}
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 7.333 1.333 C 4.02 1.333 1.333 4.02 1.333 7.333 C 1.333 10.647 4.02 13.333 7.333 13.333 C 10.647 13.333 13.333 10.647 13.333 7.333 C 13.333 4.02 10.647 1.333 7.333 1.333 Z M 0 7.333 C 0 3.283 3.283 0 7.333 0 C 11.383 0 14.667 3.283 14.667 7.333 C 14.667 11.383 11.383 14.667 7.333 14.667 C 3.283 14.667 0 11.383 0 7.333 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      )}
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-secondary-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body108 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body109 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body110 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body111 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body112 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body113 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body114 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body115 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body116 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body117 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body118 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body119 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body120 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body121 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body122 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body123 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body124 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body125 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body126 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body127 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body128 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body129 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body130 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body131 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body132 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body133 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body134 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body135 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body136 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body137 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body138 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body139 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body140 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body141 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body142 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body143 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-background)",
      boxShadow: "inset 0 0 0 0.500px var(--tokens-border), 0 0 0 0.500px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body144 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body145 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body146 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body147 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body148 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body149 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body150 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body151 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body152 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body153 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body154 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body155 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body156 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body157 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body158 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body159 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body160 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body161 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body162 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body163 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body164 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body165 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body166 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body167 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-accent)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body168 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body169 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body170 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body171 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body172 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body173 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body174 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body175 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body176 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body177 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body178 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body179 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body180 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body181 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body182 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body183 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body184 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body185 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body186 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body187 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body188 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
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
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body189 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body190 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body191 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body192 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <svg height={1} viewBox="0 -0.500 45 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 45 0.5 L 45 0 L 45 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body193 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <svg height={1} viewBox="0 -0.500 45 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 45 0.5 L 45 0 L 45 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body194 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <svg height={1} viewBox="0 -0.500 45 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 45 0.5 L 45 0 L 45 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body195 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <svg height={1} viewBox="0 -0.500 45 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 45 0.5 L 45 0 L 45 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body196 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 12,
          whiteSpace: "nowrap",
          lineHeight: "16px",
          letterSpacing: "-0.006em",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.label}</span>
        <svg height={1} viewBox="0 -0.500 38 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 38 0.5 L 38 0 L 38 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body197 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
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
        <svg height={1} viewBox="0 -0.500 45 1" fill="none" style={{
          position: "relative",
          height: 1,
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <path d={"M 0 0 L 0 0.5 L 45 0.5 L 45 0 L 45 -0.5 L 0 -0.5 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body198 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
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
      {props.trailingVisual2 && (
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 7.333 1.333 C 4.02 1.333 1.333 4.02 1.333 7.333 C 1.333 10.647 4.02 13.333 7.333 13.333 C 10.647 13.333 13.333 10.647 13.333 7.333 C 13.333 4.02 10.647 1.333 7.333 1.333 Z M 0 7.333 C 0 3.283 3.283 0 7.333 0 C 11.383 0 14.667 3.283 14.667 7.333 C 14.667 11.383 11.383 14.667 7.333 14.667 C 3.283 14.667 0 11.383 0 7.333 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      )}
    </div>
  );
  const __body199 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body200 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body201 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body202 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body203 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body204 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body205 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body206 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body207 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body208 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body209 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body210 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body211 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body212 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body213 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body214 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body215 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body216 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body217 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body218 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body219 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body220 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body221 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body222 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      borderRadius: 6,
      backgroundColor: "rgba(239,68,68,0.9)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body223 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body224 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body225 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body226 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body227 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body228 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <Icons24x24Loader style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body229 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body230 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body231 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body232 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body233 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body234 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractReload />}</div>
    </div>
  );
  const __body235 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body236 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body237 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body238 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body239 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body240 = () => (
    <div className={props.className} style={{
      width: 44,
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body241 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body242 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-lg) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-lg) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 12,
        whiteSpace: "nowrap",
        lineHeight: "16px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body243 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 32px 0px 32px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-4xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.leadingVisual && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.leadingVisual2 ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--base-white)",
        flexShrink: 0,
      }}>{props.label}</span>
      {props.trailingVisual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.trailingVisual ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body244 = () => (
    <div className={props.className} style={{
      width: 36,
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "6px 12px 6px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--padding-py-1-5) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--padding-py-1-5) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body245 = () => (
    <div className={props.className} style={{
      width: 32,
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle />}</div>
    </div>
  );
  const __body246 = () => (
    <div className={props.className} style={{
      width: 40,
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-destructive)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 16px 8px 16px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--padding-py-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--padding-py-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--base-white)",
        }}>{props.icon ?? <Icons24x24Circle style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __impls = {
    // figma: Style=Default, Size=default, Type=Primary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=primary": __body0,
    // figma: Style=Default, Size=sm, Type=Primary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=primary": __body1,
    // figma: Style=Default, Size=lg, Type=Primary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=primary": __body2,
    // figma: Style=Default, Size=default, Type=Primary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=primary": __body3,
    // figma: Style=Default, Size=sm, Type=Primary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=primary": __body4,
    // figma: Style=Default, Size=lg, Type=Primary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=primary": __body5,
    // figma: Style=New York, Size=default, Type=Primary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=primary": __body6,
    // figma: Style=New York, Size=sm, Type=Primary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=primary": __body7,
    // figma: Style=New York, Size=lg, Type=Primary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=primary": __body8,
    // figma: Style=New York, Size=default, Type=Primary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=primary": __body9,
    // figma: Style=New York, Size=sm, Type=Primary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=primary": __body10,
    // figma: Style=New York, Size=lg, Type=Primary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=primary": __body11,
    // figma: Style=Default, Size=default, Type=Primary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=primary": __body12,
    // figma: Style=Default, Size=sm, Type=Primary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=primary": __body13,
    // figma: Style=Default, Size=lg, Type=Primary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=primary": __body14,
    // figma: Style=Default, Size=default, Type=Primary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=primary": __body15,
    // figma: Style=Default, Size=sm, Type=Primary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=primary": __body16,
    // figma: Style=Default, Size=lg, Type=Primary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=primary": __body17,
    // figma: Style=New York, Size=default, Type=Primary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=primary": __body18,
    // figma: Style=New York, Size=sm, Type=Primary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=primary": __body19,
    // figma: Style=New York, Size=lg, Type=Primary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=primary": __body20,
    // figma: Style=New York, Size=default, Type=Primary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=primary": __body21,
    // figma: Style=New York, Size=sm, Type=Primary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=primary": __body22,
    // figma: Style=New York, Size=lg, Type=Primary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=primary": __body23,
    // figma: Style=Default, Size=default, Type=Primary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=primary": __body24,
    // figma: Style=Default, Size=sm, Type=Primary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=primary": __body25,
    // figma: Style=Default, Size=lg, Type=Primary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=primary": __body26,
    // figma: Style=Default, Size=default, Type=Primary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=primary": __body27,
    // figma: Style=Default, Size=sm, Type=Primary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=primary": __body28,
    // figma: Style=Default, Size=lg, Type=Primary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=primary": __body29,
    // figma: Style=New York, Size=default, Type=Primary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=primary": __body30,
    // figma: Style=New York, Size=sm, Type=Primary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=primary": __body31,
    // figma: Style=New York, Size=lg, Type=Primary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=primary": __body32,
    // figma: Style=New York, Size=default, Type=Primary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=primary": __body33,
    // figma: Style=New York, Size=sm, Type=Primary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=primary": __body34,
    // figma: Style=New York, Size=lg, Type=Primary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=primary": __body35,
    // figma: Style=Default, Size=default, Type=Primary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=primary": __body36,
    // figma: Style=Default, Size=sm, Type=Primary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=primary": __body37,
    // figma: Style=Default, Size=lg, Type=Primary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=primary": __body38,
    // figma: Style=Default, Size=default, Type=Primary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=primary": __body39,
    // figma: Style=Default, Size=sm, Type=Primary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=primary": __body40,
    // figma: Style=Default, Size=lg, Type=Primary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=primary": __body41,
    // figma: Style=New York, Size=default, Type=Primary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=primary": __body42,
    // figma: Style=New York, Size=sm, Type=Primary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=primary": __body43,
    // figma: Style=New York, Size=lg, Type=Primary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=primary": __body44,
    // figma: Style=New York, Size=default, Type=Primary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=primary": __body45,
    // figma: Style=New York, Size=sm, Type=Primary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=primary": __body46,
    // figma: Style=New York, Size=lg, Type=Primary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=primary": __body47,
    // figma: Style=Default, Size=default, Type=Secondary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=secondary": __body48,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=secondary": __body49,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=secondary": __body50,
    // figma: Style=Default, Size=default, Type=Secondary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=secondary": __body51,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=secondary": __body52,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=secondary": __body53,
    // figma: Style=New York, Size=default, Type=Secondary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=secondary": __body54,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=secondary": __body55,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=secondary": __body56,
    // figma: Style=New York, Size=default, Type=Secondary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=secondary": __body57,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=secondary": __body58,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=secondary": __body59,
    // figma: Style=Default, Size=default, Type=Secondary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=secondary": __body60,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=secondary": __body61,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=secondary": __body62,
    // figma: Style=Default, Size=default, Type=Secondary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=secondary": __body63,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=secondary": __body64,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=secondary": __body65,
    // figma: Style=New York, Size=default, Type=Secondary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=secondary": __body66,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=secondary": __body67,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=secondary": __body68,
    // figma: Style=New York, Size=default, Type=Secondary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=secondary": __body69,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=secondary": __body70,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=secondary": __body71,
    // figma: Style=Default, Size=default, Type=Secondary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=secondary": __body72,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=secondary": __body73,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=secondary": __body74,
    // figma: Style=Default, Size=default, Type=Secondary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=secondary": __body75,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=secondary": __body76,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=secondary": __body77,
    // figma: Style=New York, Size=default, Type=Secondary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=secondary": __body78,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=secondary": __body79,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=secondary": __body80,
    // figma: Style=New York, Size=default, Type=Secondary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=secondary": __body81,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=secondary": __body82,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=secondary": __body83,
    // figma: Style=Default, Size=default, Type=Secondary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=secondary": __body84,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=secondary": __body85,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=secondary": __body86,
    // figma: Style=Default, Size=default, Type=Secondary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=secondary": __body87,
    // figma: Style=Default, Size=sm, Type=Secondary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=secondary": __body88,
    // figma: Style=Default, Size=lg, Type=Secondary, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=secondary": __body89,
    // figma: Style=New York, Size=default, Type=Secondary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=secondary": __body90,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=secondary": __body91,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=secondary": __body92,
    // figma: Style=New York, Size=default, Type=Secondary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=secondary": __body93,
    // figma: Style=New York, Size=sm, Type=Secondary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=secondary": __body94,
    // figma: Style=New York, Size=lg, Type=Secondary, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=secondary": __body95,
    // figma: Style=Default, Size=default, Type=Outline, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=outline": __body96,
    // figma: Style=Default, Size=sm, Type=Outline, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=outline": __body97,
    // figma: Style=Default, Size=lg, Type=Outline, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=outline": __body98,
    // figma: Style=Default, Size=default, Type=Outline, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=outline": __body99,
    // figma: Style=Default, Size=sm, Type=Outline, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=outline": __body100,
    // figma: Style=Default, Size=lg, Type=Outline, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=outline": __body101,
    // figma: Style=New York, Size=default, Type=Outline, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=outline": __body102,
    // figma: Style=New York, Size=sm, Type=Outline, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=outline": __body103,
    // figma: Style=New York, Size=lg, Type=Outline, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=outline": __body104,
    // figma: Style=New York, Size=default, Type=Outline, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=outline": __body105,
    // figma: Style=New York, Size=sm, Type=Outline, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=outline": __body106,
    // figma: Style=New York, Size=lg, Type=Outline, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=outline": __body107,
    // figma: Style=Default, Size=default, Type=Outline, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=outline": __body108,
    // figma: Style=Default, Size=sm, Type=Outline, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=outline": __body109,
    // figma: Style=Default, Size=lg, Type=Outline, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=outline": __body110,
    // figma: Style=Default, Size=default, Type=Outline, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=outline": __body111,
    // figma: Style=Default, Size=sm, Type=Outline, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=outline": __body112,
    // figma: Style=Default, Size=lg, Type=Outline, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=outline": __body113,
    // figma: Style=New York, Size=default, Type=Outline, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=outline": __body114,
    // figma: Style=New York, Size=sm, Type=Outline, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=outline": __body115,
    // figma: Style=New York, Size=lg, Type=Outline, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=outline": __body116,
    // figma: Style=New York, Size=default, Type=Outline, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=outline": __body117,
    // figma: Style=New York, Size=sm, Type=Outline, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=outline": __body118,
    // figma: Style=New York, Size=lg, Type=Outline, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=outline": __body119,
    // figma: Style=Default, Size=default, Type=Outline, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=outline": __body120,
    // figma: Style=Default, Size=sm, Type=Outline, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=outline": __body121,
    // figma: Style=Default, Size=lg, Type=Outline, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=outline": __body122,
    // figma: Style=Default, Size=default, Type=Outline, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=outline": __body123,
    // figma: Style=Default, Size=sm, Type=Outline, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=outline": __body124,
    // figma: Style=Default, Size=lg, Type=Outline, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=outline": __body125,
    // figma: Style=New York, Size=default, Type=Outline, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=outline": __body126,
    // figma: Style=New York, Size=sm, Type=Outline, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=outline": __body127,
    // figma: Style=New York, Size=lg, Type=Outline, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=outline": __body128,
    // figma: Style=New York, Size=default, Type=Outline, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=outline": __body129,
    // figma: Style=New York, Size=sm, Type=Outline, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=outline": __body130,
    // figma: Style=New York, Size=lg, Type=Outline, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=outline": __body131,
    // figma: Style=Default, Size=default, Type=Outline, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=outline": __body132,
    // figma: Style=Default, Size=sm, Type=Outline, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=outline": __body133,
    // figma: Style=Default, Size=lg, Type=Outline, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=outline": __body134,
    // figma: Style=Default, Size=default, Type=Outline, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=outline": __body135,
    // figma: Style=Default, Size=sm, Type=Outline, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=outline": __body136,
    // figma: Style=Default, Size=lg, Type=Outline, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=outline": __body137,
    // figma: Style=New York, Size=default, Type=Outline, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=outline": __body138,
    // figma: Style=New York, Size=sm, Type=Outline, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=outline": __body139,
    // figma: Style=New York, Size=lg, Type=Outline, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=outline": __body140,
    // figma: Style=New York, Size=default, Type=Outline, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=outline": __body141,
    // figma: Style=New York, Size=sm, Type=Outline, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=outline": __body142,
    // figma: Style=New York, Size=lg, Type=Outline, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=outline": __body143,
    // figma: Style=Default, Size=default, Type=Ghost, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=ghost": __body144,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=ghost": __body145,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=ghost": __body146,
    // figma: Style=Default, Size=default, Type=Ghost, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=ghost": __body147,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=ghost": __body148,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=ghost": __body149,
    // figma: Style=New York, Size=default, Type=Ghost, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=ghost": __body150,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=ghost": __body151,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=ghost": __body152,
    // figma: Style=New York, Size=default, Type=Ghost, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=ghost": __body153,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=ghost": __body154,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=ghost": __body155,
    // figma: Style=Default, Size=default, Type=Ghost, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=ghost": __body156,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=ghost": __body157,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=ghost": __body158,
    // figma: Style=Default, Size=default, Type=Ghost, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=ghost": __body159,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=ghost": __body160,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=ghost": __body161,
    // figma: Style=New York, Size=default, Type=Ghost, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=ghost": __body162,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=ghost": __body163,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=ghost": __body164,
    // figma: Style=New York, Size=default, Type=Ghost, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=ghost": __body165,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=ghost": __body166,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=ghost": __body167,
    // figma: Style=Default, Size=default, Type=Ghost, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=ghost": __body168,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=ghost": __body169,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=ghost": __body170,
    // figma: Style=Default, Size=default, Type=Ghost, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=ghost": __body171,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=ghost": __body172,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=ghost": __body173,
    // figma: Style=New York, Size=default, Type=Ghost, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=ghost": __body174,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=ghost": __body175,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=ghost": __body176,
    // figma: Style=New York, Size=default, Type=Ghost, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=ghost": __body177,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=ghost": __body178,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=ghost": __body179,
    // figma: Style=Default, Size=default, Type=Ghost, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=ghost": __body180,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=ghost": __body181,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=ghost": __body182,
    // figma: Style=Default, Size=default, Type=Ghost, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=ghost": __body183,
    // figma: Style=Default, Size=sm, Type=Ghost, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=ghost": __body184,
    // figma: Style=Default, Size=lg, Type=Ghost, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=ghost": __body185,
    // figma: Style=New York, Size=default, Type=Ghost, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=ghost": __body186,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=ghost": __body187,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=ghost": __body188,
    // figma: Style=New York, Size=default, Type=Ghost, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=ghost": __body189,
    // figma: Style=New York, Size=sm, Type=Ghost, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=ghost": __body190,
    // figma: Style=New York, Size=lg, Type=Ghost, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=ghost": __body191,
    // figma: Style=Default, Size=default, Type=Link, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=link": __body144,
    // figma: Style=Default, Size=sm, Type=Link, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=link": __body145,
    // figma: Style=Default, Size=lg, Type=Link, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=link": __body146,
    // figma: Style=Default, Size=default, Type=Link, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=link": __body147,
    // figma: Style=Default, Size=sm, Type=Link, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=link": __body148,
    // figma: Style=Default, Size=lg, Type=Link, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=link": __body149,
    // figma: Style=New York, Size=default, Type=Link, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=link": __body150,
    // figma: Style=New York, Size=sm, Type=Link, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=link": __body151,
    // figma: Style=New York, Size=lg, Type=Link, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=link": __body152,
    // figma: Style=New York, Size=default, Type=Link, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=link": __body153,
    // figma: Style=New York, Size=sm, Type=Link, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=link": __body154,
    // figma: Style=New York, Size=lg, Type=Link, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=link": __body155,
    // figma: Style=Default, Size=default, Type=Link, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=link": __body192,
    // figma: Style=Default, Size=sm, Type=Link, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=link": __body193,
    // figma: Style=Default, Size=lg, Type=Link, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=link": __body194,
    // figma: Style=Default, Size=default, Type=Link, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=link": __body147,
    // figma: Style=Default, Size=sm, Type=Link, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=link": __body148,
    // figma: Style=Default, Size=lg, Type=Link, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=link": __body149,
    // figma: Style=New York, Size=default, Type=Link, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=link": __body195,
    // figma: Style=New York, Size=sm, Type=Link, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=link": __body196,
    // figma: Style=New York, Size=lg, Type=Link, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=link": __body197,
    // figma: Style=New York, Size=default, Type=Link, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=link": __body153,
    // figma: Style=New York, Size=sm, Type=Link, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=link": __body154,
    // figma: Style=New York, Size=lg, Type=Link, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=link": __body155,
    // figma: Style=Default, Size=default, Type=Link, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=link": __body168,
    // figma: Style=Default, Size=sm, Type=Link, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=link": __body198,
    // figma: Style=Default, Size=lg, Type=Link, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=link": __body170,
    // figma: Style=Default, Size=default, Type=Link, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=link": __body171,
    // figma: Style=Default, Size=sm, Type=Link, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=link": __body172,
    // figma: Style=Default, Size=lg, Type=Link, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=link": __body173,
    // figma: Style=New York, Size=default, Type=Link, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=link": __body174,
    // figma: Style=New York, Size=sm, Type=Link, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=link": __body175,
    // figma: Style=New York, Size=lg, Type=Link, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=link": __body176,
    // figma: Style=New York, Size=default, Type=Link, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=link": __body177,
    // figma: Style=New York, Size=sm, Type=Link, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=link": __body178,
    // figma: Style=New York, Size=lg, Type=Link, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=link": __body179,
    // figma: Style=Default, Size=default, Type=Link, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=link": __body180,
    // figma: Style=Default, Size=sm, Type=Link, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=link": __body181,
    // figma: Style=Default, Size=lg, Type=Link, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=link": __body182,
    // figma: Style=Default, Size=default, Type=Link, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=link": __body183,
    // figma: Style=Default, Size=sm, Type=Link, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=link": __body184,
    // figma: Style=Default, Size=lg, Type=Link, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=link": __body185,
    // figma: Style=New York, Size=default, Type=Link, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=link": __body186,
    // figma: Style=New York, Size=sm, Type=Link, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=link": __body187,
    // figma: Style=New York, Size=lg, Type=Link, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=link": __body188,
    // figma: Style=New York, Size=default, Type=Link, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=link": __body189,
    // figma: Style=New York, Size=sm, Type=Link, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=link": __body190,
    // figma: Style=New York, Size=lg, Type=Link, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=link": __body191,
    // figma: Style=Default, Size=default, Type=Error, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=default|type=error": __body199,
    // figma: Style=Default, Size=sm, Type=Error, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=default|type=error": __body200,
    // figma: Style=Default, Size=lg, Type=Error, State=Default, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=default|type=error": __body201,
    // figma: Style=Default, Size=default, Type=Error, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=default|type=error": __body202,
    // figma: Style=Default, Size=sm, Type=Error, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=default|type=error": __body203,
    // figma: Style=Default, Size=lg, Type=Error, State=Default, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=default|type=error": __body204,
    // figma: Style=New York, Size=default, Type=Error, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=default|type=error": __body205,
    // figma: Style=New York, Size=sm, Type=Error, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=default|type=error": __body206,
    // figma: Style=New York, Size=lg, Type=Error, State=Default, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=default|type=error": __body207,
    // figma: Style=New York, Size=default, Type=Error, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=default|type=error": __body208,
    // figma: Style=New York, Size=sm, Type=Error, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=default|type=error": __body209,
    // figma: Style=New York, Size=lg, Type=Error, State=Default, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=default|type=error": __body210,
    // figma: Style=Default, Size=default, Type=Error, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=hover|type=error": __body211,
    // figma: Style=Default, Size=sm, Type=Error, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=hover|type=error": __body212,
    // figma: Style=Default, Size=lg, Type=Error, State=Hover, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=hover|type=error": __body213,
    // figma: Style=Default, Size=default, Type=Error, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=hover|type=error": __body214,
    // figma: Style=Default, Size=sm, Type=Error, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=hover|type=error": __body215,
    // figma: Style=Default, Size=lg, Type=Error, State=Hover, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=hover|type=error": __body216,
    // figma: Style=New York, Size=default, Type=Error, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=hover|type=error": __body217,
    // figma: Style=New York, Size=sm, Type=Error, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=hover|type=error": __body218,
    // figma: Style=New York, Size=lg, Type=Error, State=Hover, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=hover|type=error": __body219,
    // figma: Style=New York, Size=default, Type=Error, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=hover|type=error": __body220,
    // figma: Style=New York, Size=sm, Type=Error, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=hover|type=error": __body221,
    // figma: Style=New York, Size=lg, Type=Error, State=Hover, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=hover|type=error": __body222,
    // figma: Style=Default, Size=default, Type=Error, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=loading|type=error": __body223,
    // figma: Style=Default, Size=sm, Type=Error, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=loading|type=error": __body224,
    // figma: Style=Default, Size=lg, Type=Error, State=Loading, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=loading|type=error": __body225,
    // figma: Style=Default, Size=default, Type=Error, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=loading|type=error": __body226,
    // figma: Style=Default, Size=sm, Type=Error, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=loading|type=error": __body227,
    // figma: Style=Default, Size=lg, Type=Error, State=Loading, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=loading|type=error": __body228,
    // figma: Style=New York, Size=default, Type=Error, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=loading|type=error": __body229,
    // figma: Style=New York, Size=sm, Type=Error, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=loading|type=error": __body230,
    // figma: Style=New York, Size=lg, Type=Error, State=Loading, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=loading|type=error": __body231,
    // figma: Style=New York, Size=default, Type=Error, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=loading|type=error": __body232,
    // figma: Style=New York, Size=sm, Type=Error, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=loading|type=error": __body233,
    // figma: Style=New York, Size=lg, Type=Error, State=Loading, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=loading|type=error": __body234,
    // figma: Style=Default, Size=default, Type=Error, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=default|state=disabled|type=error": __body235,
    // figma: Style=Default, Size=sm, Type=Error, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=sm|state=disabled|type=error": __body236,
    // figma: Style=Default, Size=lg, Type=Error, State=Disabled, Icon Only=false
    "style2=default|iconOnly=false|size=lg|state=disabled|type=error": __body237,
    // figma: Style=Default, Size=default, Type=Error, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=default|state=disabled|type=error": __body238,
    // figma: Style=Default, Size=sm, Type=Error, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=sm|state=disabled|type=error": __body239,
    // figma: Style=Default, Size=lg, Type=Error, State=Disabled, Icon Only=true
    "style2=default|iconOnly=true|size=lg|state=disabled|type=error": __body240,
    // figma: Style=New York, Size=default, Type=Error, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=default|state=disabled|type=error": __body241,
    // figma: Style=New York, Size=sm, Type=Error, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=sm|state=disabled|type=error": __body242,
    // figma: Style=New York, Size=lg, Type=Error, State=Disabled, Icon Only=false
    "style2=new york|iconOnly=false|size=lg|state=disabled|type=error": __body243,
    // figma: Style=New York, Size=default, Type=Error, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=default|state=disabled|type=error": __body244,
    // figma: Style=New York, Size=sm, Type=Error, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=sm|state=disabled|type=error": __body245,
    // figma: Style=New York, Size=lg, Type=Error, State=Disabled, Icon Only=true
    "style2=new york|iconOnly=true|size=lg|state=disabled|type=error": __body246,
  };
  return (__impls[__vkey(props)] ?? __body3)();
}
export default Button2;
