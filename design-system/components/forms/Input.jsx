import { Icons24x24Box } from './Icons24x24Box.jsx';

// figma node: 2044:2890 Input (10 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state);

export function Input(_p = {}) {
  const props = { ..._p, label: _p.label ?? true, comment: _p.comment ?? true, style2: _p.style2 ?? "default", validationMessage: _p.validationMessage ?? true, caption: _p.caption ?? true, trailingAction: _p.trailingAction ?? false, state: _p.state ?? "default", placeholder: _p.placeholder ?? "FormsPlaceholder", leadingVisual2: _p.leadingVisual2 ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input), 0px 0px 0px 1px rgb(255,255,255), 0px 0px 0px 3px rgb(100,116,139)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <div style={{
          position: "relative",
          height: 20,
          display: "flex",
          flexDirection: "row",
          padding: "1px 0px 1px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
        }}>
          <svg width={16.572} height={1} viewBox="0 -0.500 16.572 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,0,1.714)",
            transformOrigin: "0 0",
            width: 16.572,
            height: 1,
          }}>
            <path d={"M 0 -0.5 L 0 0 L 16.572 0 L 16.572 -0.5 L 16.572 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-foreground)",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-muted-foreground)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          padding: "1px 0px 1px 0px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>
          <svg width={16.572} height={1} viewBox="0 -0.500 16.572 1" fill="none" style={{
            position: "absolute",
            left: 0,
            top: 0,
            transform: "matrix(0,1,-1,0,0,1.714)",
            transformOrigin: "0 0",
            width: 16.572,
            height: 1,
          }}>
            <path d={"M 0 -0.5 L 0 0 L 16.572 0 L 16.572 -0.5 L 16.572 -1 L 0 -1 L 0 -0.5 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>{props.placeholder}</span>
        </div>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-border)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-border)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input), 0px 0px 0px 1px rgb(255,255,255), 0px 0px 0px 3px rgb(239,68,68)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
      </div>
      {props.validationMessage && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-destructive)",
          flexGrow: 1,
        }}>Validation Message</span>
      </div>
      )}
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 259,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.label && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
        }}>Label Text</span>
      </div>
      )}
      <div style={{
        position: "relative",
        height: 36,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-destructive)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.placeholder}</span>
      </div>
      {props.validationMessage && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-destructive)",
          flexGrow: 1,
        }}>Validation Message</span>
      </div>
      )}
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 259,
      opacity: 0.5,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 69,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>Label Text</span>
      </div>
      <div style={{
        position: "relative",
        height: 40,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 259,
      opacity: 0.5,
      display: "flex",
      flexDirection: "column",
      gap: "calc(var(--spacing-sm) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        opacity: 0.5,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <span style={{
          position: "relative",
          width: 69,
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>Label Text</span>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "0 0 0 1px var(--tokens-input)",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-3) * 1px)",
        padding: "8px 12px 8px 12px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingLeft: "calc(var(--spacing-lg) * 1px)",
        paddingTop: "calc(var(--spacing-md) * 1px)",
        paddingRight: "calc(var(--gap-gap-3) * 1px)",
        paddingBottom: "calc(var(--spacing-md) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        {props.leadingVisual2 && (
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
            color: "var(--tokens-foreground)",
          }}>{props.leadingVisual ?? <Icons24x24Box style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
        )}
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
          alignSelf: "stretch",
        }}>{props.placeholder}</span>
      </div>
      {props.caption && (
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "nowrap",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexGrow: 1,
        }}>Here is the caption</span>
      </div>
      )}
    </div>
  );
  const __impls = {
    // figma: Style=Default, State=Default
    "style2=default|state=default": __body0,
    // figma: Style=New York, State=Default
    "style2=new york|state=default": __body1,
    // figma: Style=Default, State=Active
    "style2=default|state=active": __body2,
    // figma: Style=New York, State=Active
    "style2=new york|state=active": __body3,
    // figma: Style=Default, State=Filled
    "style2=default|state=filled": __body4,
    // figma: Style=New York, State=Filled
    "style2=new york|state=filled": __body5,
    // figma: Style=Default, State=Error
    "style2=default|state=error": __body6,
    // figma: Style=New York, State=Error
    "style2=new york|state=error": __body7,
    // figma: Style=Default, State=Disabled
    "style2=default|state=disabled": __body8,
    // figma: Style=New York, State=Disabled
    "style2=new york|state=disabled": __body9,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Input;
