import { DataTableFooterTotal } from './DataTableFooterTotal.jsx';
import { TableCell } from './TableCell.jsx';
import { TableHeader } from './TableHeader.jsx';

// figma node: 2044:3484 Table (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "style2=" + __venc(p.style2);

export function Table(_p = {}) {
  const props = { ..._p, style2: _p.style2 ?? "default" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 910,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
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
        <div style={{
          position: "relative",
          width: 150,
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
          <TableHeader
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            style2={"default (48px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV001"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV002"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV003"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV004"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV005"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV006"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV007"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 150,
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
          <TableHeader
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Status"}
            style2={"default (48px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Pending"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Unpaid"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Pending"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Unpaid"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
        </div>
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
          flexGrow: 1,
        }}>
          <TableHeader
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Method"}
            style2={"default (48px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"PayPal"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Bank Transfer"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"PayPal"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Bank Transfer"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
        </div>
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
          <TableHeader
            style={{
              position: "relative",
              height: 48,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Amount"}
            style2={"default (48px)"}
            type={"title only"}
            state={"default"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$250.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$150.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$350.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$450.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$550.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$200.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 52,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$300.00"}
            style2={"default - 65px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
        </div>
      </div>
      <DataTableFooterTotal
        style={{
          position: "relative",
          height: 52,
          flexShrink: 0,
          alignSelf: "stretch",
          width: "auto",
        }}
        style2={"default"}
      />
      <div style={{
        position: "relative",
        height: 52,
        backgroundColor: "var(--tokens-background)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--gap-gap-4) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--gap-gap-4) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>A list of your recent invoices.</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 910,
      overflow: "hidden",
      borderRadius: 8,
      boxShadow: "inset 0 0 0 1px var(--tokens-border)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      gap: "calc(var(--spacing-none-2) * 1px)",
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
        <div style={{
          position: "relative",
          width: 150,
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
          <TableHeader
            style={{
              position: "relative",
              height: 40,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            style2={"new york (40px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV001"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV002"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV003"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV004"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV005"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV006"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"INV007"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item medium"}
            position={"on left"}
          />
        </div>
        <div style={{
          position: "relative",
          width: 150,
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
          <TableHeader
            style={{
              position: "relative",
              height: 40,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Status"}
            style2={"new york (40px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Pending"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Unpaid"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Paid"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Pending"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Unpaid"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
        </div>
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
          flexGrow: 1,
        }}>
          <TableHeader
            style={{
              position: "relative",
              height: 40,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Method"}
            style2={"new york (40px)"}
            type={"title only"}
            state={"default"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"PayPal"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Bank Transfer"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"PayPal"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Bank Transfer"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"Credit Card"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on left"}
          />
        </div>
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
          <div style={{
              position: "relative",
              height: 40,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon1 ?? <TableHeader text1={"Amount"} style2={"new york (40px)"} type={"title only"} state={"default"} position={"on right"} />}</div>
          <div style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon2 ?? <TableCell text1={"$250.00"} style2={"new york - 48px"} state={"default"} type={"table item"} position={"on right"} />}</div>
          <div style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon3 ?? <TableCell text1={"$150.00"} style2={"new york - 48px"} state={"default"} type={"table item"} position={"on right"} />}</div>
          <div style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}>{props.icon4 ?? <TableCell text1={"$350.00"} style2={"new york - 48px"} state={"default"} type={"table item"} position={"on right"} />}</div>
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$450.00"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$550.00"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$200.00"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
          <TableCell
            style={{
              position: "relative",
              height: 36,
              flexShrink: 0,
              alignSelf: "stretch",
              width: "auto",
            }}
            text1={"$300.00"}
            style2={"new york - 48px"}
            state={"default"}
            type={"table item"}
            position={"on right"}
          />
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 36,
        maxWidth: null,
        maxHeight: 36,
        backgroundColor: "var(--tokens-secondary)",
        borderTop: "1px solid var(--tokens-border)",
        borderRight: "1px solid var(--tokens-border)",
        borderBottom: "1px solid var(--tokens-border)",
        borderLeft: "1px solid var(--tokens-border)",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
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
          width: 65,
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
          }}>Total</span>
        </div>
        <div style={{
          position: "relative",
          width: 100,
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
          flexShrink: 0,
          alignSelf: "stretch",
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
            alignSelf: "stretch",
          }}>$2,500.00</span>
        </div>
      </div>
      <div style={{
        position: "relative",
        height: 52,
        backgroundColor: "var(--tokens-background)",
        display: "flex",
        flexDirection: "row",
        padding: "16px 0px 16px 0px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        gap: "calc(var(--spacing-none-2) * 1px)",
        paddingLeft: "calc(var(--spacing-none-2) * 1px)",
        paddingTop: "calc(var(--gap-gap-4) * 1px)",
        paddingRight: "calc(var(--spacing-none-2) * 1px)",
        paddingBottom: "calc(var(--gap-gap-4) * 1px)",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 14,
          whiteSpace: "nowrap",
          lineHeight: "20px",
          color: "var(--tokens-muted-foreground)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>A list of your recent invoices.</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Style=Default
    "style2=default": __body0,
    // figma: Style=New York
    "style2=new york": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Table;
