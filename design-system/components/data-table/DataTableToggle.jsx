import { Icons24x24Bold } from './Icons24x24Bold.jsx';
import { TypographyFontBold } from './TypographyFontBold.jsx';

// figma node: 2044:2968 DataTableToggle (48 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state) + '|' + "size=" + __venc(p.size);

export function DataTableToggle(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, style2: _p.style2 ?? "default", type: _p.type ?? "outline", withText: _p.withText ?? true, state: _p.state ?? "default", labelText: _p.labelText ?? "Label", size: _p.size ?? "sm" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-2-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-2-5) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-2-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-2-5) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-muted-foreground)",
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-2-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-2-5) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 10px 0px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-2-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-2-5) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 44,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "0px 20px 0px 20px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-2xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-2xl) * 1px)",
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
        }}>{props.iconDf ?? <Icons24x24Bold style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 36,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-3) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-3) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 32,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 8px 0px 8px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      height: 40,
      opacity: 0.5,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        }}>{props.iconNy ?? <TypographyFontBold />}</div>
      {props.label && (
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
      }}>{props.labelText}</span>
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Default, Type=Ghost, Size=md, State=Default
    "style2=default|type=ghost|state=default|size=md": __body0,
    // figma: Style=Default, Type=Ghost, Size=sm, State=Default
    "style2=default|type=ghost|state=default|size=sm": __body1,
    // figma: Style=Default, Type=Ghost, Size=lg, State=Default
    "style2=default|type=ghost|state=default|size=lg": __body2,
    // figma: Style=Default, Type=Outline, Size=md, State=Default
    "style2=default|type=outline|state=default|size=md": __body3,
    // figma: Style=Default, Type=Outline, Size=sm, State=Default
    "style2=default|type=outline|state=default|size=sm": __body4,
    // figma: Style=Default, Type=Outline, Size=lg, State=Default
    "style2=default|type=outline|state=default|size=lg": __body5,
    // figma: Style=New York, Type=Ghost, Size=md, State=Default
    "style2=new york|type=ghost|state=default|size=md": __body6,
    // figma: Style=New York, Type=Ghost, Size=sm, State=Default
    "style2=new york|type=ghost|state=default|size=sm": __body7,
    // figma: Style=New York, Type=Ghost, Size=lg, State=Default
    "style2=new york|type=ghost|state=default|size=lg": __body8,
    // figma: Style=New York, Type=Outline, Size=md, State=Default
    "style2=new york|type=outline|state=default|size=md": __body9,
    // figma: Style=New York, Type=Outline, Size=sm, State=Default
    "style2=new york|type=outline|state=default|size=sm": __body10,
    // figma: Style=New York, Type=Outline, Size=lg, State=Default
    "style2=new york|type=outline|state=default|size=lg": __body11,
    // figma: Style=Default, Type=Ghost, Size=md, State=Hover
    "style2=default|type=ghost|state=hover|size=md": __body12,
    // figma: Style=Default, Type=Ghost, Size=sm, State=Hover
    "style2=default|type=ghost|state=hover|size=sm": __body13,
    // figma: Style=Default, Type=Ghost, Size=lg, State=Hover
    "style2=default|type=ghost|state=hover|size=lg": __body14,
    // figma: Style=Default, Type=Outline, Size=md, State=Hover
    "style2=default|type=outline|state=hover|size=md": __body15,
    // figma: Style=Default, Type=Outline, Size=sm, State=Hover
    "style2=default|type=outline|state=hover|size=sm": __body16,
    // figma: Style=Default, Type=Outline, Size=lg, State=Hover
    "style2=default|type=outline|state=hover|size=lg": __body17,
    // figma: Style=New York, Type=Ghost, Size=md, State=Hover
    "style2=new york|type=ghost|state=hover|size=md": __body18,
    // figma: Style=New York, Type=Ghost, Size=sm, State=Hover
    "style2=new york|type=ghost|state=hover|size=sm": __body19,
    // figma: Style=New York, Type=Ghost, Size=lg, State=Hover
    "style2=new york|type=ghost|state=hover|size=lg": __body20,
    // figma: Style=New York, Type=Outline, Size=md, State=Hover
    "style2=new york|type=outline|state=hover|size=md": __body21,
    // figma: Style=New York, Type=Outline, Size=sm, State=Hover
    "style2=new york|type=outline|state=hover|size=sm": __body22,
    // figma: Style=New York, Type=Outline, Size=lg, State=Hover
    "style2=new york|type=outline|state=hover|size=lg": __body23,
    // figma: Style=Default, Type=Ghost, Size=md, State=Active
    "style2=default|type=ghost|state=active|size=md": __body24,
    // figma: Style=Default, Type=Ghost, Size=sm, State=Active
    "style2=default|type=ghost|state=active|size=sm": __body25,
    // figma: Style=Default, Type=Ghost, Size=lg, State=Active
    "style2=default|type=ghost|state=active|size=lg": __body26,
    // figma: Style=Default, Type=Outline, Size=md, State=Active
    "style2=default|type=outline|state=active|size=md": __body27,
    // figma: Style=Default, Type=Outline, Size=sm, State=Active
    "style2=default|type=outline|state=active|size=sm": __body28,
    // figma: Style=Default, Type=Outline, Size=lg, State=Active
    "style2=default|type=outline|state=active|size=lg": __body29,
    // figma: Style=New York, Type=Ghost, Size=md, State=Active
    "style2=new york|type=ghost|state=active|size=md": __body30,
    // figma: Style=New York, Type=Ghost, Size=sm, State=Active
    "style2=new york|type=ghost|state=active|size=sm": __body31,
    // figma: Style=New York, Type=Ghost, Size=lg, State=Active
    "style2=new york|type=ghost|state=active|size=lg": __body32,
    // figma: Style=New York, Type=Outline, Size=md, State=Active
    "style2=new york|type=outline|state=active|size=md": __body33,
    // figma: Style=New York, Type=Outline, Size=sm, State=Active
    "style2=new york|type=outline|state=active|size=sm": __body34,
    // figma: Style=New York, Type=Outline, Size=lg, State=Active
    "style2=new york|type=outline|state=active|size=lg": __body35,
    // figma: Style=Default, Type=Ghost, Size=md, State=Disabled
    "style2=default|type=ghost|state=disabled|size=md": __body36,
    // figma: Style=Default, Type=Ghost, Size=sm, State=Disabled
    "style2=default|type=ghost|state=disabled|size=sm": __body37,
    // figma: Style=Default, Type=Ghost, Size=lg, State=Disabled
    "style2=default|type=ghost|state=disabled|size=lg": __body38,
    // figma: Style=Default, Type=Outline, Size=md, State=Disabled
    "style2=default|type=outline|state=disabled|size=md": __body39,
    // figma: Style=Default, Type=Outline, Size=sm, State=Disabled
    "style2=default|type=outline|state=disabled|size=sm": __body40,
    // figma: Style=Default, Type=Outline, Size=lg, State=Disabled
    "style2=default|type=outline|state=disabled|size=lg": __body41,
    // figma: Style=New York, Type=Ghost, Size=md, State=Disabled
    "style2=new york|type=ghost|state=disabled|size=md": __body42,
    // figma: Style=New York, Type=Ghost, Size=sm, State=Disabled
    "style2=new york|type=ghost|state=disabled|size=sm": __body43,
    // figma: Style=New York, Type=Ghost, Size=lg, State=Disabled
    "style2=new york|type=ghost|state=disabled|size=lg": __body44,
    // figma: Style=New York, Type=Outline, Size=md, State=Disabled
    "style2=new york|type=outline|state=disabled|size=md": __body45,
    // figma: Style=New York, Type=Outline, Size=sm, State=Disabled
    "style2=new york|type=outline|state=disabled|size=sm": __body46,
    // figma: Style=New York, Type=Outline, Size=lg, State=Disabled
    "style2=new york|type=outline|state=disabled|size=lg": __body47,
  };
  return (__impls[__vkey(props)] ?? __body4)();
}
export default DataTableToggle;
