import { DataTableAspectRatio } from './DataTableAspectRatio.jsx';
import { DataTableAvatar } from './DataTableAvatar.jsx';
import { DataTableBadge } from './DataTableBadge.jsx';
import { Button2 } from './Button2.jsx';
import { DataTableDataBadge } from './DataTableDataBadge.jsx';
import { Heckbox } from './Heckbox.jsx';
import { DataTableProgress } from './DataTableProgress.jsx';
import { DataTableSwitch } from './DataTableSwitch.jsx';

// figma node: 2044:3118 Table Cell (108 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "state=" + __venc(p.state) + '|' + "type=" + __venc(p.type) + '|' + "position=" + __venc(p.position);

export function TableCell(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default - 65px", state: _p.state ?? "default", type: _p.type ?? "table item", position: _p.position ?? "on left" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body3 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body8 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body9 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body10 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body11 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 500,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body16 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"default"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body17 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"default"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body18 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"default"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body19 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"default"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body20 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body24 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-1-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-1-5) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body25 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"default"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body26 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <DataTableProgress
        style={{
          position: "relative",
          height: 16,
          flexGrow: 1,
          width: "auto",
        }}
        style2={"default"}
      />
    </div>
  );
  const __body27 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 6px 0px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-1-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-1-5) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body28 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"default"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body29 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <DataTableProgress
        style={{
          position: "relative",
          height: 16,
          flexGrow: 1,
          width: "auto",
        }}
        style2={"default"}
      />
    </div>
  );
  const __body30 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 6px 0px 6px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-1-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-1-5) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body31 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
      <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"default"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body32 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 6px 0px 6px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--padding-px-1-5) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-1-5) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 40,
            height: 40,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"default"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body33 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
      <div style={{ position: "relative", width: 44, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"default"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body34 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body35 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"new york"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body36 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableProgress
        style={{
          position: "relative",
          height: 8,
          flexGrow: 1,
          width: "auto",
        }}
        style2={"new york"}
      />
    </div>
  );
  const __body37 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body38 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"new york"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body39 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableProgress
        style={{
          position: "relative",
          height: 8,
          flexGrow: 1,
          width: "auto",
        }}
        style2={"new york"}
      />
    </div>
  );
  const __body40 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body41 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"new york"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body42 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--spacing-xs) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
      }}>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon2 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon3 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
        <div style={{
            position: "relative",
            width: 36,
            height: 36,
            flexShrink: 0,
          }}>{props.icon4 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={true} size={"default"} state={"default"} type={"ghost"} />}</div>
      </div>
    </div>
  );
  const __body43 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-1) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", width: 36, flexShrink: 0 }}>{props.icon1 ?? <DataTableSwitch showLabel={false} style2={"new york"} state={"inactive"} labelPosition={"on right"} disabled={false} />}</div>
    </div>
  );
  const __body44 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-1) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 32,
          width: 62,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body45 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 4px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-1) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 32,
          width: 62,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body46 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--container-padding-mobile) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 32,
          width: 62,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body47 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--container-padding-mobile) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-xs) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          height: 32,
          width: 62,
          flexShrink: 0,
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body48 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 62,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body49 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 62,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body50 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 62,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body51 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 62,
          flexShrink: 0,
          alignSelf: "stretch",
          height: "auto",
        }}>{props.icon1 ?? <Button2 leadingVisual={false} trailingVisual2={false} style2={"new york"} iconOnly={false} size={"sm"} state={"default"} type={"ghost"} />}</div>
    </div>
  );
  const __body52 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
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
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body53 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
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
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body54 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body55 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body56 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body57 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
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
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body58 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body59 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 16,
        height: 16,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <svg width={14.333} height={14.333} viewBox="0 0 14.333 14.333" fill="none" style={{
          position: "absolute",
          left: 0.833,
          top: 0.833,
          width: 14.333,
          height: 14.333,
          color: "var(--tokens-foreground)",
        }}>
          <path d={"M 1 7.167 C 1 3.761 3.761 1 7.167 1 C 10.572 1 13.333 3.761 13.333 7.167 C 13.333 10.572 10.572 13.333 7.167 13.333 C 3.761 13.333 1 10.572 1 7.167 Z M 7.167 0 C 3.209 0 0 3.209 0 7.167 C 0 11.125 3.209 14.333 7.167 14.333 C 11.125 14.333 14.333 11.125 14.333 7.167 C 14.333 3.209 11.125 0 7.167 0 Z M 10.468 4.498 C 10.527 4.318 10.481 4.12 10.347 3.986 C 10.213 3.853 10.015 3.806 9.835 3.866 L 5.595 5.279 C 5.446 5.329 5.329 5.446 5.279 5.595 L 3.866 9.835 C 3.806 10.015 3.852 10.213 3.986 10.347 C 4.12 10.481 4.318 10.528 4.498 10.468 L 8.738 9.054 C 8.887 9.005 9.004 8.887 9.054 8.738 L 10.468 4.498 Z M 5.13 9.203 L 6.148 6.149 L 9.203 5.131 L 8.185 8.185 L 5.13 9.203 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
        <svg width={14.667} height={14.667} viewBox="0 0 14.667 14.667" fill="none" style={{
          position: "absolute",
          left: 0.667,
          top: 0.667,
          width: 14.667,
          height: 14.667,
          color: "var(--tokens-muted-foreground)",
        }}>
          <path d={"M 1.333 7.333 C 1.333 4.02 4.02 1.333 7.333 1.333 C 10.647 1.333 13.333 4.02 13.333 7.333 C 13.333 10.647 10.647 13.333 7.333 13.333 C 4.02 13.333 1.333 10.647 1.333 7.333 Z M 7.333 0 C 3.283 0 0 3.283 0 7.333 C 0 11.383 3.283 14.667 7.333 14.667 C 11.383 14.667 14.667 11.383 14.667 7.333 C 14.667 3.283 11.383 0 7.333 0 Z M 10.792 4.717 C 10.872 4.478 10.81 4.214 10.631 4.035 C 10.453 3.857 10.189 3.794 9.949 3.874 L 5.709 5.288 C 5.51 5.354 5.354 5.51 5.288 5.709 L 3.874 9.949 C 3.794 10.189 3.857 10.453 4.035 10.631 C 4.214 10.81 4.478 10.872 4.717 10.792 L 8.957 9.379 C 9.157 9.313 9.313 9.157 9.379 8.957 L 10.792 4.717 Z M 5.561 9.106 L 6.447 6.447 L 9.106 5.561 L 8.22 8.22 L 5.561 9.106 Z"} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        textAlign: "right",
        whiteSpace: "nowrap",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body60 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body61 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
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
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body62 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body63 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
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
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body64 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body65 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexGrow: 1,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body66 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body67 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--gap-gap-2) * 1px)",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableDataBadge style={{ position: "relative", flexShrink: 0 }} />
      <span style={{
        position: "relative",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
        fontWeight: 400,
        fontSize: 14,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: "20px",
        color: "var(--tokens-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Invoice"}</span>
    </div>
  );
  const __body68 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body69 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 0px 16px",
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
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAvatar type={"with photo"} onGray={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body70 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 0px 16px",
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
        width: 40,
        height: 40,
        overflow: "hidden",
        borderRadius: 6,
        flexShrink: 0,
      }}>
        <div className="fig-asset-dcfd92a4b17e923d" style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 40,
          height: 40,
          borderRadius: 6,
        }} />
      </div>
    </div>
  );
  const __body71 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body72 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 0px 16px",
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
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAvatar type={"with photo"} onGray={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body73 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "0px 16px 0px 16px",
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
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAspectRatio style={{ transform: "scale(0.058, 0.103)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body74 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body75 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body76 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body77 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAvatar type={"with photo"} onGray={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body78 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAspectRatio style={{ transform: "scale(0.058, 0.103)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body79 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body80 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAvatar type={"with photo"} onGray={false} />}</div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body81 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      gap: "calc(var(--spacing-md) * 1px)",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
          position: "relative",
          width: 40,
          height: 40,
          flexShrink: 0,
        }}>{props.icon1 ?? <DataTableAspectRatio style={{ transform: "scale(0.058, 0.103)", transformOrigin: "0 0" }} />}</div>
    </div>
  );
  const __body82 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body83 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
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
        }}>{props.text1 ?? "Item"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
        }}>{props.text2 ?? "Details"}</span>
      </div>
    </div>
  );
  const __body84 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"default"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body85 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"default"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body86 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"default"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body87 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"default"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body88 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"new york"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body89 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"new york"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body90 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"new york"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body91 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <DataTableBadge style2={"new york"} type={"secondary"} state={"default"} />}</div>
    </div>
  );
  const __body92 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexGrow: 1,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body93 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body94 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body95 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 40,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body96 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 36,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body97 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 36,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body98 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 36,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body99 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 141,
        height: 36,
        display: "flex",
        flexDirection: "column",
        gap: "calc(var(--spacing-sm) * 1px)",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
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
          <span style={{
            position: "relative",
            fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 14,
            lineHeight: "20px",
            color: "var(--tokens-muted-foreground)",
            flexGrow: 1,
            alignSelf: "stretch",
          }}>Placeholder</span>
        </div>
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
      </div>
    </div>
  );
  const __body100 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body101 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body102 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body103 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 65,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--padding-px-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body104 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body105 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body106 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __body107 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 48,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "8px 8px 8px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-md) * 1px)",
      paddingTop: "calc(var(--gap-gap-2) * 1px)",
      paddingRight: "calc(var(--spacing-md) * 1px)",
      paddingBottom: "calc(var(--gap-gap-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: "calc(var(--gap-gap-1) * 1px)",
        alignItems: "center",
        flexWrap: "nowrap",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--spacing-none-2) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--spacing-none-2) * 1px)",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
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
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            width: "calc(var(--space-4) * 1px)",
            height: "calc(var(--space-4) * 1px)",
            flexShrink: 0,
          }}>
            <svg width={14.129} height={14.129} viewBox="0 0 14.129 14.129" fill="none" style={{
              position: "absolute",
              left: 0.936,
              top: 0.936,
              width: 14.129,
              height: 14.129,
              color: "var(--tokens-foreground)",
            }}>
              <path d={"M 0 7.064 C 0 3.163 3.163 0 7.064 0 C 10.966 0 14.129 3.163 14.129 7.064 C 14.129 10.966 10.966 14.129 7.064 14.129 C 3.163 14.129 0 10.966 0 7.064 Z M 7.064 1.013 C 3.722 1.013 1.013 3.722 1.013 7.064 C 1.013 10.406 3.722 13.115 7.064 13.115 C 10.406 13.115 13.115 10.406 13.115 7.064 C 13.115 3.722 10.406 1.013 7.064 1.013 Z"} fill="currentColor" fillRule="evenodd" />
              <path d={"M 1 7.064 C 1 3.715 3.715 1 7.064 1 L 7.064 -1 C 2.611 -1 -1 2.611 -1 7.064 L 1 7.064 Z M 7.064 1 C 10.414 1 13.129 3.715 13.129 7.064 L 15.129 7.064 C 15.129 2.611 11.518 -1 7.064 -1 L 7.064 1 Z M 13.129 7.064 C 13.129 10.414 10.414 13.129 7.064 13.129 L 7.064 15.129 C 11.518 15.129 15.129 11.518 15.129 7.064 L 13.129 7.064 Z M 7.064 13.129 C 3.715 13.129 1 10.414 1 7.064 L -1 7.064 C -1 11.518 2.611 15.129 7.064 15.129 L 7.064 13.129 Z M 7.064 0.013 C 3.17 0.013 0.013 3.17 0.013 7.064 L 2.013 7.064 C 2.013 4.275 4.275 2.013 7.064 2.013 L 7.064 0.013 Z M 0.013 7.064 C 0.013 10.959 3.17 14.115 7.064 14.115 L 7.064 12.115 C 4.275 12.115 2.013 9.854 2.013 7.064 L 0.013 7.064 Z M 7.064 14.115 C 10.958 14.115 14.115 10.958 14.115 7.064 L 12.115 7.064 C 12.115 9.854 9.854 12.115 7.064 12.115 L 7.064 14.115 Z M 14.115 7.064 C 14.115 3.17 10.959 0.013 7.064 0.013 L 7.064 2.013 C 9.854 2.013 12.115 4.275 12.115 7.064 L 14.115 7.064 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Table Item
    "style2=default - 65px|state=default|type=table item|position=on left": __body0,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Table Item
    "style2=default - 65px|state=hover|type=table item|position=on left": __body1,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Table Item
    "style2=default - 65px|state=default|type=table item|position=on right": __body2,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Table Item
    "style2=default - 65px|state=hover|type=table item|position=on right": __body3,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Table Item
    "style2=new york - 48px|state=default|type=table item|position=on left": __body4,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Table Item
    "style2=new york - 48px|state=hover|type=table item|position=on left": __body5,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Table Item
    "style2=new york - 48px|state=default|type=table item|position=on right": __body6,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Table Item
    "style2=new york - 48px|state=hover|type=table item|position=on right": __body7,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Table Item Medium
    "style2=default - 65px|state=default|type=table item medium|position=on left": __body8,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Table Item Medium
    "style2=default - 65px|state=hover|type=table item medium|position=on left": __body9,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Table Item Medium
    "style2=default - 65px|state=default|type=table item medium|position=on right": __body10,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Table Item Medium
    "style2=default - 65px|state=hover|type=table item medium|position=on right": __body11,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Table Item Medium
    "style2=new york - 48px|state=default|type=table item medium|position=on left": __body12,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Table Item Medium
    "style2=new york - 48px|state=hover|type=table item medium|position=on left": __body13,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Table Item Medium
    "style2=new york - 48px|state=default|type=table item medium|position=on right": __body14,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Table Item Medium
    "style2=new york - 48px|state=hover|type=table item medium|position=on right": __body15,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Checkbox
    "style2=default - 65px|state=default|type=checkbox|position=on left": __body16,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Checkbox
    "style2=default - 65px|state=hover|type=checkbox|position=on left": __body17,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Checkbox
    "style2=default - 65px|state=default|type=checkbox|position=on right": __body18,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Checkbox
    "style2=default - 65px|state=hover|type=checkbox|position=on right": __body19,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Checkbox
    "style2=new york - 48px|state=default|type=checkbox|position=on left": __body20,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Checkbox
    "style2=new york - 48px|state=hover|type=checkbox|position=on left": __body21,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Checkbox
    "style2=new york - 48px|state=default|type=checkbox|position=on right": __body22,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Checkbox
    "style2=new york - 48px|state=hover|type=checkbox|position=on right": __body23,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Actions
    "style2=default - 65px|state=default|type=actions|position=on left": __body24,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=DataTableSwitch
    "style2=default - 65px|state=default|type=switch|position=on left": __body25,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=DataTableProgress
    "style2=default - 65px|state=default|type=progress|position=on left": __body26,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Actions
    "style2=default - 65px|state=hover|type=actions|position=on left": __body27,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=DataTableSwitch
    "style2=default - 65px|state=hover|type=switch|position=on left": __body28,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=DataTableProgress
    "style2=default - 65px|state=hover|type=progress|position=on left": __body29,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Actions
    "style2=default - 65px|state=default|type=actions|position=on right": __body30,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=DataTableSwitch
    "style2=default - 65px|state=default|type=switch|position=on right": __body31,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Actions
    "style2=default - 65px|state=hover|type=actions|position=on right": __body32,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=DataTableSwitch
    "style2=default - 65px|state=hover|type=switch|position=on right": __body33,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Actions
    "style2=new york - 48px|state=default|type=actions|position=on left": __body34,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=DataTableSwitch
    "style2=new york - 48px|state=default|type=switch|position=on left": __body35,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=DataTableProgress
    "style2=new york - 48px|state=default|type=progress|position=on left": __body36,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Actions
    "style2=new york - 48px|state=hover|type=actions|position=on left": __body37,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=DataTableSwitch
    "style2=new york - 48px|state=hover|type=switch|position=on left": __body38,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=DataTableProgress
    "style2=new york - 48px|state=hover|type=progress|position=on left": __body39,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Actions
    "style2=new york - 48px|state=default|type=actions|position=on right": __body40,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=DataTableSwitch
    "style2=new york - 48px|state=default|type=switch|position=on right": __body41,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Actions
    "style2=new york - 48px|state=hover|type=actions|position=on right": __body42,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=DataTableSwitch
    "style2=new york - 48px|state=hover|type=switch|position=on right": __body43,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Link Button
    "style2=default - 65px|state=default|type=link button|position=on left": __body44,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Link Button
    "style2=default - 65px|state=hover|type=link button|position=on left": __body45,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Link Button
    "style2=default - 65px|state=default|type=link button|position=on right": __body46,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Link Button
    "style2=default - 65px|state=hover|type=link button|position=on right": __body47,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Link Button
    "style2=new york - 48px|state=default|type=link button|position=on left": __body48,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Link Button
    "style2=new york - 48px|state=hover|type=link button|position=on left": __body49,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Link Button
    "style2=new york - 48px|state=default|type=link button|position=on right": __body50,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Link Button
    "style2=new york - 48px|state=hover|type=link button|position=on right": __body51,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Icon + Text
    "style2=default - 65px|state=default|type=icon + text|position=on left": __body52,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Icon + Text
    "style2=default - 65px|state=hover|type=icon + text|position=on left": __body53,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Icon + Text
    "style2=default - 65px|state=default|type=icon + text|position=on right": __body54,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Icon + Text
    "style2=default - 65px|state=hover|type=icon + text|position=on right": __body55,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Icon + Text
    "style2=new york - 48px|state=default|type=icon + text|position=on left": __body56,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Icon + Text
    "style2=new york - 48px|state=hover|type=icon + text|position=on left": __body57,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Icon + Text
    "style2=new york - 48px|state=default|type=icon + text|position=on right": __body58,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Icon + Text
    "style2=new york - 48px|state=hover|type=icon + text|position=on right": __body59,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Documentation
    "style2=default - 65px|state=default|type=documentation|position=on left": __body60,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Documentation
    "style2=default - 65px|state=hover|type=documentation|position=on left": __body61,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Documentation
    "style2=default - 65px|state=default|type=documentation|position=on right": __body62,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Documentation
    "style2=default - 65px|state=hover|type=documentation|position=on right": __body63,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Documentation
    "style2=new york - 48px|state=default|type=documentation|position=on left": __body64,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Documentation
    "style2=new york - 48px|state=hover|type=documentation|position=on left": __body65,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Documentation
    "style2=new york - 48px|state=default|type=documentation|position=on right": __body66,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Documentation
    "style2=new york - 48px|state=hover|type=documentation|position=on right": __body67,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Item + Details
    "style2=default - 65px|state=default|type=item + details|position=on left": __body68,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=With DataTableAvatar
    "style2=default - 65px|state=default|type=with avatar|position=on left": __body69,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Picture
    "style2=default - 65px|state=default|type=picture|position=on left": __body70,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Item + Details
    "style2=default - 65px|state=hover|type=item + details|position=on left": __body71,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=With DataTableAvatar
    "style2=default - 65px|state=hover|type=with avatar|position=on left": __body72,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Picture
    "style2=default - 65px|state=hover|type=picture|position=on left": __body73,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Item + Details
    "style2=default - 65px|state=default|type=item + details|position=on right": __body74,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Item + Details
    "style2=default - 65px|state=hover|type=item + details|position=on right": __body75,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Item + Details
    "style2=new york - 48px|state=default|type=item + details|position=on left": __body76,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=With DataTableAvatar
    "style2=new york - 48px|state=default|type=with avatar|position=on left": __body77,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Picture
    "style2=new york - 48px|state=default|type=picture|position=on left": __body78,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Item + Details
    "style2=new york - 48px|state=hover|type=item + details|position=on left": __body79,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=With DataTableAvatar
    "style2=new york - 48px|state=hover|type=with avatar|position=on left": __body80,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Picture
    "style2=new york - 48px|state=hover|type=picture|position=on left": __body81,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Item + Details
    "style2=new york - 48px|state=default|type=item + details|position=on right": __body82,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Item + Details
    "style2=new york - 48px|state=hover|type=item + details|position=on right": __body83,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=DataTableBadge
    "style2=default - 65px|state=default|type=badge|position=on left": __body84,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=DataTableBadge
    "style2=default - 65px|state=hover|type=badge|position=on left": __body85,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=DataTableBadge
    "style2=default - 65px|state=default|type=badge|position=on right": __body86,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=DataTableBadge
    "style2=default - 65px|state=hover|type=badge|position=on right": __body87,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=DataTableBadge
    "style2=new york - 48px|state=default|type=badge|position=on left": __body88,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=DataTableBadge
    "style2=new york - 48px|state=hover|type=badge|position=on left": __body89,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=DataTableBadge
    "style2=new york - 48px|state=default|type=badge|position=on right": __body90,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=DataTableBadge
    "style2=new york - 48px|state=hover|type=badge|position=on right": __body91,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Input
    "style2=default - 65px|state=default|type=input|position=on left": __body92,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Input
    "style2=default - 65px|state=hover|type=input|position=on left": __body93,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Input
    "style2=default - 65px|state=default|type=input|position=on right": __body94,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Input
    "style2=default - 65px|state=hover|type=input|position=on right": __body95,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Input
    "style2=new york - 48px|state=default|type=input|position=on left": __body96,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Input
    "style2=new york - 48px|state=hover|type=input|position=on left": __body97,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Input
    "style2=new york - 48px|state=default|type=input|position=on right": __body98,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Input
    "style2=new york - 48px|state=hover|type=input|position=on right": __body99,
    // figma: Style=Default - 65px, State=Default, Position=On left, Type=Radio
    "style2=default - 65px|state=default|type=radio|position=on left": __body100,
    // figma: Style=Default - 65px, State=Hover, Position=On left, Type=Radio
    "style2=default - 65px|state=hover|type=radio|position=on left": __body101,
    // figma: Style=Default - 65px, State=Default, Position=On right, Type=Radio
    "style2=default - 65px|state=default|type=radio|position=on right": __body102,
    // figma: Style=Default - 65px, State=Hover, Position=On right, Type=Radio
    "style2=default - 65px|state=hover|type=radio|position=on right": __body103,
    // figma: Style=New York - 48px, State=Default, Position=On left, Type=Radio
    "style2=new york - 48px|state=default|type=radio|position=on left": __body104,
    // figma: Style=New York - 48px, State=Hover, Position=On left, Type=Radio
    "style2=new york - 48px|state=hover|type=radio|position=on left": __body105,
    // figma: Style=New York - 48px, State=Default, Position=On right, Type=Radio
    "style2=new york - 48px|state=default|type=radio|position=on right": __body106,
    // figma: Style=New York - 48px, State=Hover, Position=On right, Type=Radio
    "style2=new york - 48px|state=hover|type=radio|position=on right": __body107,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TableCell;
