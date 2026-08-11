import { AbstractCheck } from './AbstractCheck.jsx';
import { AbstractCircle } from './AbstractCircle.jsx';
import { AbstractDotFilled } from './AbstractDotFilled.jsx';
import { ArrowsChevronRight } from './ArrowsChevronRight.jsx';
import { Icons24x24Check } from './Icons24x24Check.jsx';
import { Icons24x24ChevronRight } from './Icons24x24ChevronRight.jsx';

// figma node: 2044:1052 Dropdown Menu / Menu Item (36 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state);

export function DropdownMenuMenuItem(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default", type: _p.type ?? "standard", label: _p.label ?? "Menu Item", rIghtText: _p.rIghtText ?? "⇧⌘B︎", trailingVIsual2: _p.trailingVIsual2 ?? true, rightText: _p.rightText ?? true, state: _p.state ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual ?? <AbstractCircle />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual ?? <AbstractCircle />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.leadingVisual ?? <AbstractCircle />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24ChevronRight style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      )}
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      {props.rightText && (
      <span style={{
        position: "relative",
        minWidth: 24,
        opacity: 0.7,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 12,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "0.100em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>{props.rIghtText}</span>
      )}
      {props.trailingVIsual2 && (
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.trailingVIsual ?? <ArrowsChevronRight />}</div>
      )}
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        opacity: 0.5,
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24Check style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <AbstractCheck />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24Check style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <AbstractCheck />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <Icons24x24Check style={{ transform: "scale(0.667, 0.667)", transformOrigin: "0 0" }} />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-popover-foreground)",
        }}>{props.icon1 ?? <AbstractCheck />}</div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--gap-gap-8) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <AbstractDotFilled />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      borderRadius: 6,
      backgroundColor: "var(--tokens-secondary)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <AbstractDotFilled />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 32px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-4xl) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 300,
      height: 32,
      minWidth: 128,
      opacity: 0.5,
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "6px 8px 6px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--spacing-sm) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--spacing-sm) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 16,
          height: 16,
          flexShrink: 0,
          color: "var(--tokens-foreground)",
        }}>{props.icon1 ?? <AbstractDotFilled />}</div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-popover-foreground)",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>{props.label}</span>
    </div>
  );
  const __impls = {
    // figma: Style=Default, Type=Standard, State=Default
    "style2=default|type=standard|state=default": __body0,
    // figma: Style=New York, Type=Standard, State=Default
    "style2=new york|type=standard|state=default": __body1,
    // figma: Style=Default, Type=Standard, State=Hover
    "style2=default|type=standard|state=hover": __body2,
    // figma: Style=New York, Type=Standard, State=Hover
    "style2=new york|type=standard|state=hover": __body3,
    // figma: Style=Default, Type=Standard, State=Disabled
    "style2=default|type=standard|state=disabled": __body4,
    // figma: Style=New York, Type=Standard, State=Disabled
    "style2=new york|type=standard|state=disabled": __body5,
    // figma: Style=Default, Type=Padding Left, State=Default
    "style2=default|type=padding left|state=default": __body6,
    // figma: Style=New York, Type=Padding Left, State=Default
    "style2=new york|type=padding left|state=default": __body7,
    // figma: Style=Default, Type=Padding Left, State=Hover
    "style2=default|type=padding left|state=hover": __body8,
    // figma: Style=New York, Type=Padding Left, State=Hover
    "style2=new york|type=padding left|state=hover": __body9,
    // figma: Style=Default, Type=Padding Left, State=Disabled
    "style2=default|type=padding left|state=disabled": __body10,
    // figma: Style=New York, Type=Padding Left, State=Disabled
    "style2=new york|type=padding left|state=disabled": __body11,
    // figma: Style=Default, Type=Checkbox, State=Default
    "style2=default|type=checkbox|state=default": __body12,
    // figma: Style=New York, Type=Checkbox, State=Default
    "style2=new york|type=checkbox|state=default": __body13,
    // figma: Style=Default, Type=Checkbox, State=Hover
    "style2=default|type=checkbox|state=hover": __body14,
    // figma: Style=New York, Type=Checkbox, State=Hover
    "style2=new york|type=checkbox|state=hover": __body15,
    // figma: Style=Default, Type=Checkbox, State=Disabled
    "style2=default|type=checkbox|state=disabled": __body16,
    // figma: Style=New York, Type=Checkbox, State=Disabled
    "style2=new york|type=checkbox|state=disabled": __body17,
    // figma: Style=Default, Type=Checkbox, State=Selected
    "style2=default|type=checkbox|state=selected": __body18,
    // figma: Style=New York, Type=Checkbox, State=Selected
    "style2=new york|type=checkbox|state=selected": __body19,
    // figma: Style=Default, Type=Checkbox, State=Selected+isHover
    "style2=default|type=checkbox|state=selected+ishover": __body20,
    // figma: Style=New York, Type=Checkbox, State=Selected+isHover
    "style2=new york|type=checkbox|state=selected+ishover": __body21,
    // figma: Style=Default, Type=Checkbox, State=Selected+isDisabled
    "style2=default|type=checkbox|state=selected+isdisabled": __body22,
    // figma: Style=New York, Type=Checkbox, State=Selected+isDisabled
    "style2=new york|type=checkbox|state=selected+isdisabled": __body23,
    // figma: Style=Default, Type=Radio, State=Default
    "style2=default|type=radio|state=default": __body12,
    // figma: Style=New York, Type=Radio, State=Default
    "style2=new york|type=radio|state=default": __body12,
    // figma: Style=Default, Type=Radio, State=Hover
    "style2=default|type=radio|state=hover": __body14,
    // figma: Style=New York, Type=Radio, State=Hover
    "style2=new york|type=radio|state=hover": __body14,
    // figma: Style=Default, Type=Radio, State=Disabled
    "style2=default|type=radio|state=disabled": __body24,
    // figma: Style=New York, Type=Radio, State=Disabled
    "style2=new york|type=radio|state=disabled": __body24,
    // figma: Style=Default, Type=Radio, State=Selected
    "style2=default|type=radio|state=selected": __body25,
    // figma: Style=New York, Type=Radio, State=Selected
    "style2=new york|type=radio|state=selected": __body26,
    // figma: Style=Default, Type=Radio, State=Selected+isHover
    "style2=default|type=radio|state=selected+ishover": __body27,
    // figma: Style=New York, Type=Radio, State=Selected+isHover
    "style2=new york|type=radio|state=selected+ishover": __body28,
    // figma: Style=Default, Type=Radio, State=Selected+isDisabled
    "style2=default|type=radio|state=selected+isdisabled": __body29,
    // figma: Style=New York, Type=Radio, State=Selected+isDisabled
    "style2=new york|type=radio|state=selected+isdisabled": __body30,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default DropdownMenuMenuItem;
