import { AbstractCheck } from './AbstractCheck.jsx';
import { AbstractMinus } from './AbstractMinus.jsx';

// figma node: 2044:1553 Сheckbox (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "type=" + __venc(p.type) + '|' + "disabled=" + __venc(p.disabled) + '|' + "state=" + __venc(p.state);

export function Heckbox(_p = {}) {
  const props = { ..._p, required: _p.required ?? false, caption: _p.caption ?? true, captionText: _p.captionText ?? "Caption", style2: _p.style2 ?? "default", type: _p.type ?? "checkbox only", disabled: _p.disabled ?? false, labelText: _p.labelText ?? "Label", state: _p.state ?? "empty" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      borderRadius: 4,
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
      <svg width={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: 16,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--tokens-primary)",
      }}>
        <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--tokens-primary)",
        }}>
          <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          flexShrink: 0,
          color: "var(--tokens-primary)",
        }}>
          <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      borderRadius: 4,
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
      <svg width={16} viewBox="0 0 16 16" fill="none" style={{
        position: "relative",
        width: 16,
        borderRadius: 4,
        flexShrink: 0,
        alignSelf: "stretch",
        color: "var(--tokens-primary)",
      }}>
        <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <svg width={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          flexShrink: 0,
          alignSelf: "stretch",
          color: "var(--tokens-primary)",
        }}>
          <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          flexShrink: 0,
          color: "var(--tokens-primary)",
        }}>
          <path d={"M 4 0 L 4 1 L 12 1 L 12 0 L 12 -1 L 4 -1 L 4 0 Z M 16 4 L 15 4 L 15 12 L 16 12 L 17 12 L 17 4 L 16 4 Z M 12 16 L 12 15 L 4 15 L 4 16 L 4 17 L 12 17 L 12 16 Z M 0 12 L 1 12 L 1 4 L 0 4 L -1 4 L -1 12 L 0 12 Z M 4 16 L 4 15 C 2.343 15 1 13.657 1 12 L 0 12 L -1 12 C -1 14.761 1.239 17 4 17 L 4 16 Z M 16 12 L 15 12 C 15 13.657 13.657 15 12 15 L 12 16 L 12 17 C 14.761 17 17 14.761 17 12 L 16 12 Z M 12 0 L 12 1 C 13.657 1 15 2.343 15 4 L 16 4 L 17 4 C 17 1.239 14.761 -1 12 -1 L 12 0 Z M 4 0 L 4 -1 C 1.239 -1 -1 1.239 -1 4 L 0 4 L 1 4 C 1 2.343 2.343 1 4 1 L 4 0 Z"} fill="currentColor" fillRule="nonzero" />
        </svg>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <svg width={10} height={2} viewBox="0 0 10 2" fill="none" style={{
        position: "relative",
        width: 10,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
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
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractMinus />}</div>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "7px 3px 7px 3px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg height={2} viewBox="0 0 10 2" fill="none" style={{
            position: "relative",
            height: 2,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractMinus />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          flexShrink: 0,
        }}>
          <svg width={10} height={2} viewBox="0 0 10 2" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 7,
            width: 10,
            height: 2,
          }}>
            <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractMinus />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      opacity: 0.5,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <svg width={10} height={2} viewBox="0 0 10 2" fill="none" style={{
        position: "relative",
        width: 10,
        height: 2,
        flexShrink: 0,
      }}>
        <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
      </svg>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      opacity: 0.5,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
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
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractMinus />}</div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "7px 3px 7px 3px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg height={2} viewBox="0 0 10 2" fill="none" style={{
            position: "relative",
            height: 2,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractMinus />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          flexShrink: 0,
        }}>
          <svg width={10} height={2} viewBox="0 0 10 2" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 7,
            width: 10,
            height: 2,
          }}>
            <path d={"M 0 1 C 0 0.448 0.448 0 1 0 L 9 0 C 9.552 0 10 0.448 10 1 C 10 1.552 9.552 2 9 2 L 1 2 C 0.448 2 0 1.552 0 1 Z"} fill="currentColor" fillRule="evenodd" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractMinus />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
        position: "relative",
        width: 10.667,
        height: 7.333,
        flexShrink: 0,
      }}>
        <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
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
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractCheck />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          padding: "4px 3px 4px 3px",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
            position: "relative",
            height: 7.333,
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractCheck />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          flexShrink: 0,
        }}>
          <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
            position: "absolute",
            left: 2.667,
            top: 4,
            width: 10.667,
            height: 7.333,
          }}>
            <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexShrink: 0,
        }}>
          <div style={{
              position: "relative",
              height: 16,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
              color: "var(--tokens-primary-foreground)",
            }}>{props.icon1 ?? <AbstractCheck />}</div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      opacity: 0.5,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
        position: "relative",
        width: 10.667,
        height: 7.333,
        flexShrink: 0,
      }}>
        <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
      </svg>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 16,
      height: 16,
      opacity: 0.5,
      borderRadius: 4,
      backgroundColor: "var(--tokens-primary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      justifyContent: "center",
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
          width: 16,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
          color: "var(--tokens-primary-foreground)",
        }}>{props.icon1 ?? <AbstractCheck />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
            position: "absolute",
            left: 2.667,
            top: 4,
            width: 10.667,
            height: 7.333,
          }}>
            <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
            position: "relative",
            width: 16,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={true} state={"filled"} />}</div>
      </div>
      <div style={{
        position: "relative",
        width: 37,
        display: "flex",
        flexDirection: "row",
        gap: 2,
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
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
        }}>{props.labelText}</span>
        {props.required && (
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          letterSpacing: "-0.006em",
          color: "rgb(2,6,23)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "*"}</span>
        )}
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      color: "var(--tokens-primary-foreground)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          width: 16,
          height: 16,
          borderRadius: 4,
          backgroundColor: "var(--tokens-primary)",
          flexShrink: 0,
        }}>
          <svg width={10.667} height={7.333} viewBox="0 0 10.667 7.333" fill="none" style={{
            position: "absolute",
            left: 2.667,
            top: 4,
            width: 10.667,
            height: 7.333,
          }}>
            <path d={"M 11.197 0.53 C 11.49 0.237 11.49 -0.237 11.197 -0.53 C 10.904 -0.823 10.429 -0.823 10.136 -0.53 L 10.667 0 L 11.197 0.53 Z M 3.333 7.333 L 2.803 7.864 C 3.096 8.157 3.571 8.157 3.864 7.864 L 3.333 7.333 Z M 0.53 3.47 C 0.237 3.177 -0.237 3.177 -0.53 3.47 C -0.823 3.763 -0.823 4.237 -0.53 4.53 L 0 4 L 0.53 3.47 Z M 10.667 0 L 10.136 -0.53 L 2.803 6.803 L 3.333 7.333 L 3.864 7.864 L 11.197 0.53 L 10.667 0 Z M 3.333 7.333 L 3.864 6.803 L 0.53 3.47 L 0 4 L -0.53 4.53 L 2.803 7.864 L 3.333 7.333 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      opacity: 0.5,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
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
        display: "flex",
        flexDirection: "row",
        gap: 10,
        padding: "2px 0px 2px 0px",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        paddingTop: "calc(var(--gap-gap-0-5) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 16,
            height: 16,
            flexShrink: 0,
          }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={true} state={"filled"} />}</div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--gap-gap-0-5) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 2,
          alignItems: "flex-start",
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
          }}>{props.labelText}</span>
          {props.required && (
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 500,
            fontSize: 14,
            whiteSpace: "nowrap",
            lineHeight: "14px",
            color: "rgb(2,6,23)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "*"}</span>
          )}
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-foreground)",
          flexShrink: 0,
        }}>{props.captionText}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Default, Type=Checkbox Only, State=Empty, Disabled=no
    "style2=default|type=checkbox only|disabled=false|state=empty": __body0,
    // figma: Style=New York, Type=Checkbox Only, State=Empty, Disabled=no
    "style2=new york|type=checkbox only|disabled=false|state=empty": __body0,
    // figma: Style=Default, Type=With Label, State=Empty, Disabled=no
    "style2=default|type=with label|disabled=false|state=empty": __body1,
    // figma: Style=New York, Type=With Label, State=Empty, Disabled=no
    "style2=new york|type=with label|disabled=false|state=empty": __body1,
    // figma: Style=Default, Type=Label + Caption, State=Empty, Disabled=no
    "style2=default|type=label + caption|disabled=false|state=empty": __body2,
    // figma: Style=New York, Type=Label + Caption, State=Empty, Disabled=no
    "style2=new york|type=label + caption|disabled=false|state=empty": __body2,
    // figma: Style=Default, Type=Checkbox Only, State=Empty, Disabled=yes
    "style2=default|type=checkbox only|disabled=true|state=empty": __body3,
    // figma: Style=New York, Type=Checkbox Only, State=Empty, Disabled=yes
    "style2=new york|type=checkbox only|disabled=true|state=empty": __body3,
    // figma: Style=Default, Type=With Label, State=Empty, Disabled=yes
    "style2=default|type=with label|disabled=true|state=empty": __body4,
    // figma: Style=New York, Type=With Label, State=Empty, Disabled=yes
    "style2=new york|type=with label|disabled=true|state=empty": __body4,
    // figma: Style=Default, Type=Label + Caption, State=Empty, Disabled=yes
    "style2=default|type=label + caption|disabled=true|state=empty": __body5,
    // figma: Style=New York, Type=Label + Caption, State=Empty, Disabled=yes
    "style2=new york|type=label + caption|disabled=true|state=empty": __body5,
    // figma: Style=Default, Type=Checkbox Only, State=Indeterminate, Disabled=no
    "style2=default|type=checkbox only|disabled=false|state=indeterminate": __body6,
    // figma: Style=New York, Type=Checkbox Only, State=Indeterminate, Disabled=no
    "style2=new york|type=checkbox only|disabled=false|state=indeterminate": __body7,
    // figma: Style=Default, Type=With Label, State=Indeterminate, Disabled=no
    "style2=default|type=with label|disabled=false|state=indeterminate": __body8,
    // figma: Style=New York, Type=With Label, State=Indeterminate, Disabled=no
    "style2=new york|type=with label|disabled=false|state=indeterminate": __body9,
    // figma: Style=Default, Type=Label + Caption, State=Indeterminate, Disabled=no
    "style2=default|type=label + caption|disabled=false|state=indeterminate": __body10,
    // figma: Style=New York, Type=Label + Caption, State=Indeterminate, Disabled=no
    "style2=new york|type=label + caption|disabled=false|state=indeterminate": __body11,
    // figma: Style=Default, Type=Checkbox Only, State=Indeterminate, Disabled=yes
    "style2=default|type=checkbox only|disabled=true|state=indeterminate": __body12,
    // figma: Style=New York, Type=Checkbox Only, State=Indeterminate, Disabled=yes
    "style2=new york|type=checkbox only|disabled=true|state=indeterminate": __body13,
    // figma: Style=Default, Type=With Label, State=Indeterminate, Disabled=yes
    "style2=default|type=with label|disabled=true|state=indeterminate": __body14,
    // figma: Style=New York, Type=With Label, State=Indeterminate, Disabled=yes
    "style2=new york|type=with label|disabled=true|state=indeterminate": __body15,
    // figma: Style=Default, Type=Label + Caption, State=Indeterminate, Disabled=yes
    "style2=default|type=label + caption|disabled=true|state=indeterminate": __body16,
    // figma: Style=New York, Type=Label + Caption, State=Indeterminate, Disabled=yes
    "style2=new york|type=label + caption|disabled=true|state=indeterminate": __body17,
    // figma: Style=Default, Type=Checkbox Only, State=Filled, Disabled=no
    "style2=default|type=checkbox only|disabled=false|state=filled": __body18,
    // figma: Style=New York, Type=Checkbox Only, State=Filled, Disabled=no
    "style2=new york|type=checkbox only|disabled=false|state=filled": __body19,
    // figma: Style=Default, Type=With Label, State=Filled, Disabled=no
    "style2=default|type=with label|disabled=false|state=filled": __body20,
    // figma: Style=New York, Type=With Label, State=Filled, Disabled=no
    "style2=new york|type=with label|disabled=false|state=filled": __body21,
    // figma: Style=Default, Type=Label + Caption, State=Filled, Disabled=no
    "style2=default|type=label + caption|disabled=false|state=filled": __body22,
    // figma: Style=New York, Type=Label + Caption, State=Filled, Disabled=no
    "style2=new york|type=label + caption|disabled=false|state=filled": __body23,
    // figma: Style=Default, Type=Checkbox Only, State=Filled, Disabled=yes
    "style2=default|type=checkbox only|disabled=true|state=filled": __body24,
    // figma: Style=New York, Type=Checkbox Only, State=Filled, Disabled=yes
    "style2=new york|type=checkbox only|disabled=true|state=filled": __body25,
    // figma: Style=Default, Type=With Label, State=Filled, Disabled=yes
    "style2=default|type=with label|disabled=true|state=filled": __body26,
    // figma: Style=New York, Type=With Label, State=Filled, Disabled=yes
    "style2=new york|type=with label|disabled=true|state=filled": __body27,
    // figma: Style=Default, Type=Label + Caption, State=Filled, Disabled=yes
    "style2=default|type=label + caption|disabled=true|state=filled": __body28,
    // figma: Style=New York, Type=Label + Caption, State=Filled, Disabled=yes
    "style2=new york|type=label + caption|disabled=true|state=filled": __body29,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Heckbox;
