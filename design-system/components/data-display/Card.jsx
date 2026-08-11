import { DataDisplayButton } from './DataDisplayButton.jsx';

// figma node: 2027:1480 card (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Card(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "left" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1704,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "48px 24px 48px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "space-between",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 44,
        padding: "0px 40px 0px 40px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "space-between",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div className="fig-asset-f5e81149d72a4c5f" style={{
          position: "relative",
          minWidth: 400,
          borderRadius: 12,
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
        <div style={{
          position: "relative",
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 23,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: "42px",
            letterSpacing: "0.265px",
            color: "var(--semantic-color-foreground-default)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text1 ?? "1 innflytningsklar  arkitetegnet hytte til salgs"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "26px",
            letterSpacing: "0.265px",
            color: "var(--semantic-color-foreground-default)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."}</span>
          <DataDisplayButton
            style={{
              position: "relative",
              height: 48,
              width: 140,
              flexShrink: 0,
            }}
            iconLeft2={false}
            iconRight2={false}
            text={"Sjekk ut hyttene"}
            type={"primary"}
            state={"default"}
          />
        </div>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 1704,
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "48px 24px 48px 24px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
      alignContent: "space-between",
      boxSizing: "border-box",
      position: "relative",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 44,
        padding: "0px 40px 0px 40px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        alignContent: "space-between",
        boxSizing: "border-box",
        flexGrow: 1,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          minWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 23,
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "nowrap",
          flexGrow: 1,
        }}>
          <span style={{
            position: "relative",
            fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 600,
            fontSize: 36,
            lineHeight: "42px",
            letterSpacing: "0.265px",
            color: "var(--semantic-color-foreground-default)",
            flexShrink: 0,
            alignSelf: "stretch",
            whiteSpace: "nowrap",
          }}>{props.text1 ?? "Tomter kommer snart til salgs!"}</span>
          <span style={{
            position: "relative",
            fontFamily: "Poppins, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
            fontWeight: 400,
            fontSize: 20,
            lineHeight: "26px",
            letterSpacing: "0.265px",
            color: "var(--semantic-color-foreground-default)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>{props.text2 ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla."}</span>
          <DataDisplayButton
            style={{
              position: "relative",
              height: 48,
              width: 137,
              flexShrink: 0,
            }}
            iconLeft2={false}
            iconRight2={false}
            text={"Sjekk ut tomter"}
            type={"primary"}
            state={"default"}
          />
        </div>
        <div className="fig-asset-8df3dff2591c8ab8" style={{
          position: "relative",
          minWidth: 400,
          minHeight: 286.615,
          borderRadius: 12,
          flexGrow: 1,
          alignSelf: "stretch",
        }} />
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Left
    "property1=left": __body0,
    // figma: Property 1=Right
    "property1=right": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Card;
