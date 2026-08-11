import { DataTableHeaderHeaderButton } from './DataTableHeaderHeaderButton.jsx';
import { Heckbox } from './Heckbox.jsx';

// figma node: 2044:1760 Table Header (24 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2) + '|' + "type=" + __venc(p.type) + '|' + "state=" + __venc(p.state) + '|' + "position=" + __venc(p.position);

export function TableHeader(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default (48px)", type: _p.type ?? "title only", state: _p.state ?? "default", position: _p.position ?? "on left" };
  const __body0 = () => (
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body1 = () => (
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body2 = () => (
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
        whiteSpace: "nowrap",
        lineHeight: "20px",
        letterSpacing: "-0.006em",
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body3 = () => (
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
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body4 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body5 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body6 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body7 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
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
        color: "var(--tokens-muted-foreground)",
        flexShrink: 0,
      }}>{props.text1 ?? "Title"}</span>
    </div>
  );
  const __body8 = () => (
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
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableHeaderHeaderButton
        style={{
          position: "relative",
          height: 40,
          width: 86,
          flexShrink: 0,
        }}
        label={"Title"}
        style2={"default - 40px"}
        state={"default"}
      />
    </div>
  );
  const __body9 = () => (
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
      padding: "0px 16px 0px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      paddingLeft: "calc(var(--spacing-none-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--padding-px-4) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableHeaderHeaderButton
        style={{
          position: "relative",
          height: 40,
          width: 86,
          flexShrink: 0,
        }}
        label={"Title"}
        style2={"default - 40px"}
        state={"default"}
      />
    </div>
  );
  const __body10 = () => (
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
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-4) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableHeaderHeaderButton
        style={{
          position: "relative",
          height: 40,
          width: 86,
          flexShrink: 0,
        }}
        label={"Title"}
        style2={"default - 40px"}
        state={"hover"}
      />
    </div>
  );
  const __body11 = () => (
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
      padding: "0px 16px 0px 16px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--spacing-none-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <DataTableHeaderHeaderButton
        style={{
          position: "relative",
          height: 40,
          width: 86,
          flexShrink: 0,
        }}
        label={"Title"}
        style2={"default - 40px"}
        state={"default"}
      />
    </div>
  );
  const __body12 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 94,
        height: 36,
        flexShrink: 0,
      }}>
        <DataTableHeaderHeaderButton
          style={{
            position: "absolute",
            left: -12,
            top: 0,
            width: 78,
          }}
          label={"Title"}
          style2={"new york - 36px"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body13 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "4px 8px 4px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-xs) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-xs) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 94,
        height: 36,
        flexShrink: 0,
      }}>
        <DataTableHeaderHeaderButton
          style={{
            position: "absolute",
            left: -12,
            top: 0,
            width: 78,
          }}
          label={"Title"}
          style2={"new york - 36px"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body14 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 78,
        height: 36,
        flexShrink: 0,
      }}>
        <DataTableHeaderHeaderButton
          style={{
            position: "absolute",
            left: 12,
            top: 0,
            width: 78,
          }}
          label={"Title"}
          style2={"new york - 36px"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body15 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        width: 78,
        height: 36,
        flexShrink: 0,
      }}>
        <DataTableHeaderHeaderButton
          style={{
            position: "absolute",
            left: 12,
            top: 0,
            width: 78,
          }}
          label={"Title"}
          style2={"new york - 36px"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body16 = () => (
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
      height: 48,
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
      height: 48,
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
      height: 48,
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
      paddingLeft: "calc(var(--spacing-xl) * 1px)",
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
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body21 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body22 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "var(--tokens-background)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __body23 = () => (
    <div className={props.className} style={{
      width: 200,
      height: 40,
      backgroundColor: "rgb(248,250,252)",
      borderTop: "1px solid var(--tokens-border)",
      borderRight: "1px solid var(--tokens-border)",
      borderBottom: "1px solid var(--tokens-border)",
      borderLeft: "1px solid var(--tokens-border)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 8px 0px 8px",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      gap: "calc(var(--spacing-none-2) * 1px)",
      paddingLeft: "calc(var(--gap-gap-2) * 1px)",
      paddingTop: "calc(var(--spacing-none-2) * 1px)",
      paddingRight: "calc(var(--gap-gap-2) * 1px)",
      paddingBottom: "calc(var(--spacing-none-2) * 1px)",
      position: "relative",
      ...props.style,
    }}>
      <div style={{ position: "relative", flexShrink: 0 }}>{props.icon1 ?? <Heckbox style2={"new york"} type={"checkbox only"} disabled={false} state={"empty"} />}</div>
    </div>
  );
  const __impls = {
    // figma: Style=Default (48px), Type=Title Only, Position=On left, State=Default
    "style2=default (48px)|type=title only|state=default|position=on left": __body0,
    // figma: Style=Default (48px), Type=Title Only, Position=On left, State=Hover
    "style2=default (48px)|type=title only|state=hover|position=on left": __body1,
    // figma: Style=Default (48px), Type=Title Only, Position=On right, State=Default
    "style2=default (48px)|type=title only|state=default|position=on right": __body2,
    // figma: Style=Default (48px), Type=Title Only, Position=On right, State=Hover
    "style2=default (48px)|type=title only|state=hover|position=on right": __body3,
    // figma: Style=New York (40px), Type=Title Only, Position=On left, State=Default
    "style2=new york (40px)|type=title only|state=default|position=on left": __body4,
    // figma: Style=New York (40px), Type=Title Only, Position=On left, State=Hover
    "style2=new york (40px)|type=title only|state=hover|position=on left": __body5,
    // figma: Style=New York (40px), Type=Title Only, Position=On right, State=Default
    "style2=new york (40px)|type=title only|state=default|position=on right": __body6,
    // figma: Style=New York (40px), Type=Title Only, Position=On right, State=Hover
    "style2=new york (40px)|type=title only|state=hover|position=on right": __body7,
    // figma: Style=Default (48px), Type=With Filters, Position=On left, State=Default
    "style2=default (48px)|type=with filters|state=default|position=on left": __body8,
    // figma: Style=Default (48px), Type=With Filters, Position=On left, State=Hover
    "style2=default (48px)|type=with filters|state=hover|position=on left": __body9,
    // figma: Style=Default (48px), Type=With Filters, Position=On right, State=Default
    "style2=default (48px)|type=with filters|state=default|position=on right": __body10,
    // figma: Style=Default (48px), Type=With Filters, Position=On right, State=Hover
    "style2=default (48px)|type=with filters|state=hover|position=on right": __body11,
    // figma: Style=New York (40px), Type=With Filters, Position=On left, State=Default
    "style2=new york (40px)|type=with filters|state=default|position=on left": __body12,
    // figma: Style=New York (40px), Type=With Filters, Position=On left, State=Hover
    "style2=new york (40px)|type=with filters|state=hover|position=on left": __body13,
    // figma: Style=New York (40px), Type=With Filters, Position=On right, State=Default
    "style2=new york (40px)|type=with filters|state=default|position=on right": __body14,
    // figma: Style=New York (40px), Type=With Filters, Position=On right, State=Hover
    "style2=new york (40px)|type=with filters|state=hover|position=on right": __body15,
    // figma: Style=Default (48px), Type=Checkbox, Position=On left, State=Default
    "style2=default (48px)|type=checkbox|state=default|position=on left": __body16,
    // figma: Style=Default (48px), Type=Checkbox, Position=On left, State=Hover
    "style2=default (48px)|type=checkbox|state=hover|position=on left": __body17,
    // figma: Style=Default (48px), Type=Checkbox, Position=On right, State=Default
    "style2=default (48px)|type=checkbox|state=default|position=on right": __body18,
    // figma: Style=Default (48px), Type=Checkbox, Position=On right, State=Hover
    "style2=default (48px)|type=checkbox|state=hover|position=on right": __body19,
    // figma: Style=New York (40px), Type=Checkbox, Position=On left, State=Default
    "style2=new york (40px)|type=checkbox|state=default|position=on left": __body20,
    // figma: Style=New York (40px), Type=Checkbox, Position=On left, State=Hover
    "style2=new york (40px)|type=checkbox|state=hover|position=on left": __body21,
    // figma: Style=New York (40px), Type=Checkbox, Position=On right, State=Default
    "style2=new york (40px)|type=checkbox|state=default|position=on right": __body22,
    // figma: Style=New York (40px), Type=Checkbox, Position=On right, State=Hover
    "style2=new york (40px)|type=checkbox|state=hover|position=on right": __body23,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default TableHeader;
