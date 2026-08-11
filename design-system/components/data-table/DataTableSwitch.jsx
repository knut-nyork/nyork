// figma node: 2044:2721 switch (16 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state) + '|' + "labelPosition=" + __venc(p.labelPosition) + '|' + "disabled=" + __venc(p.disabled);

export function DataTableSwitch(_p = {}) {
  const props = { ..._p, showLabel: _p.showLabel ?? true, style2: _p.style2 ?? "default", label: _p.label ?? "Label", state: _p.state ?? "active", labelPosition: _p.labelPosition ?? "on right", disabled: _p.disabled ?? true };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-border)",
        }} />
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-border)",
        }} />
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-border)",
        }} />
        <div style={{
          position: "absolute",
          left: 1.636,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-border)",
        }} />
        <div style={{
          position: "absolute",
          left: 1.636,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 22,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 22,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 2,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 1.636,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 1.636,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 22,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 44,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 44,
          height: 24,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 22,
          top: 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
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
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
      {props.showLabel && (
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
      )}
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      {props.showLabel && (
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
      )}
      <div style={{
        position: "relative",
        width: 36,
        overflow: "hidden",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 36,
          height: 20,
          borderRadius: 9999,
          backgroundColor: "var(--tokens-primary)",
        }} />
        <div style={{
          position: "absolute",
          left: 18,
          top: 1.667,
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: "var(--tokens-background)",
          boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Default, State=Inactive, Disabled=false, Label Position=On Right
    "style2=default|state=inactive|labelPosition=on right|disabled=false": __body0,
    // figma: Style=Default, State=Inactive, Disabled=false, Label Position=On Left
    "style2=default|state=inactive|labelPosition=on left|disabled=false": __body1,
    // figma: Style=New York, State=Inactive, Disabled=false, Label Position=On Right
    "style2=new york|state=inactive|labelPosition=on right|disabled=false": __body2,
    // figma: Style=New York, State=Inactive, Disabled=false, Label Position=On Left
    "style2=new york|state=inactive|labelPosition=on left|disabled=false": __body3,
    // figma: Style=Default, State=Active, Disabled=false, Label Position=On Right
    "style2=default|state=active|labelPosition=on right|disabled=false": __body4,
    // figma: Style=Default, State=Active, Disabled=false, Label Position=On Left
    "style2=default|state=active|labelPosition=on left|disabled=false": __body5,
    // figma: Style=New York, State=Active, Disabled=false, Label Position=On Right
    "style2=new york|state=active|labelPosition=on right|disabled=false": __body6,
    // figma: Style=New York, State=Active, Disabled=false, Label Position=On Left
    "style2=new york|state=active|labelPosition=on left|disabled=false": __body7,
    // figma: Style=Default, State=Inactive, Disabled=true, Label Position=On Right
    "style2=default|state=inactive|labelPosition=on right|disabled=true": __body8,
    // figma: Style=Default, State=Inactive, Disabled=true, Label Position=On Left
    "style2=default|state=inactive|labelPosition=on left|disabled=true": __body9,
    // figma: Style=New York, State=Inactive, Disabled=true, Label Position=On Right
    "style2=new york|state=inactive|labelPosition=on right|disabled=true": __body10,
    // figma: Style=New York, State=Inactive, Disabled=true, Label Position=On Left
    "style2=new york|state=inactive|labelPosition=on left|disabled=true": __body11,
    // figma: Style=Default, State=Active, Disabled=true, Label Position=On Right
    "style2=default|state=active|labelPosition=on right|disabled=true": __body12,
    // figma: Style=Default, State=Active, Disabled=true, Label Position=On Left
    "style2=default|state=active|labelPosition=on left|disabled=true": __body13,
    // figma: Style=New York, State=Active, Disabled=true, Label Position=On Right
    "style2=new york|state=active|labelPosition=on right|disabled=true": __body14,
    // figma: Style=New York, State=Active, Disabled=true, Label Position=On Left
    "style2=new york|state=active|labelPosition=on left|disabled=true": __body15,
  };
  return (__impls[__vkey(props)] ?? __body12)();
}
export default DataTableSwitch;
