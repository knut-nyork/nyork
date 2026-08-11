import { SiteIconSlotPlaceholder } from './SiteIconSlotPlaceholder.jsx';

// figma node: 2004:92 button (12 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function Button(_p = {}) {
  const props = { ..._p, text: _p.text ?? "Les mer", type: _p.type ?? "primary", text2: _p.text2 ?? true, state: _p.state ?? "default", iconRight2: _p.iconRight2 ?? true, iconLeft2: _p.iconLeft2 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-foreground-default)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-inreverse)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-foreground-inreverse)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      opacity: 0.5,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-foreground-default)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-inreverse)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      opacity: 0.5,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-background-surface-neutral)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      opacity: 0.5,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      borderTop: "1px solid var(--semantic-color-border-inreverse)",
      borderRight: "1px solid var(--semantic-color-border-inreverse)",
      borderBottom: "1px solid var(--semantic-color-border-inreverse)",
      borderLeft: "1px solid var(--semantic-color-border-inreverse)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      opacity: 0.5,
      borderRadius: 8,
      borderTop: "1px solid var(--semantic-color-border-inreverse)",
      borderRight: "1px solid var(--semantic-color-border-inreverse)",
      borderBottom: "1px solid var(--semantic-color-border-inreverse)",
      borderLeft: "1px solid var(--semantic-color-border-inreverse)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-background-surface-4)",
      borderTop: "1px solid var(--semantic-color-border-inreverse)",
      borderRight: "1px solid var(--semantic-color-border-inreverse)",
      borderBottom: "1px solid var(--semantic-color-border-inreverse)",
      borderLeft: "1px solid var(--semantic-color-border-inreverse)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-foreground-hover)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-inreverse)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-background-surface-4)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 48,
      borderRadius: 8,
      backgroundColor: "var(--semantic-color-background-surface-4)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 14px 0px 14px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      {props.iconLeft2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconLeft ?? <SiteIconSlotPlaceholder />}</div>
      )}
      {props.text2 && (
      <span style={{
        position: "relative",
        fontFamily: "\"ITC Franklin Gothic LT Pro\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 16,
        whiteSpace: "nowrap",
        lineHeight: "22px",
        textBox: "trim-both cap alphabetic",
        color: "var(--semantic-color-foreground-default)",
        flexShrink: 0,
      }}>{props.text}</span>
      )}
      {props.iconRight2 && (
      <div style={{
          position: "relative",
          width: 20,
          height: 20,
          flexShrink: 0,
        }}>{props.iconRight ?? <SiteIconSlotPlaceholder />}</div>
      )}
    </div>
  );
  const __impls = {
    // figma: Type=Primary, State=Default
    "type=primary|state=default": __body0,
    // figma: Type=Inreverse, State=Default
    "type=inreverse|state=default": __body1,
    // figma: Type=Primary, State=Disabled
    "type=primary|state=disabled": __body2,
    // figma: Type=Inreverse, State=Disabled
    "type=inreverse|state=disabled": __body3,
    // figma: Type=Ghost, State=Default
    "type=ghost|state=default": __body4,
    // figma: Type=Ghost, State=Disabled
    "type=ghost|state=disabled": __body5,
    // figma: Type=Secondary, State=Default
    "type=secondary|state=default": __body6,
    // figma: Type=Secondary, State=Disabled
    "type=secondary|state=disabled": __body7,
    // figma: Type=Secondary, State=Hover
    "type=secondary|state=hover": __body8,
    // figma: Type=Primary, State=Hover
    "type=primary|state=hover": __body9,
    // figma: Type=Inreverse, State=Hover
    "type=inreverse|state=hover": __body10,
    // figma: Type=Ghost, State=Hover
    "type=ghost|state=hover": __body11,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Button;
