import { Button } from './Button.jsx';

// figma node: 2004:798 nav (3 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "property1=" + __venc(p.property1);

export function Nav(_p = {}) {
  const props = { ..._p, property1: _p.property1 ?? "desktop" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: 1584,
      height: 70,
      minWidth: 800,
      backgroundColor: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(11.100px)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 40px 12px 40px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--semantic-color-foreground-default)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 8px 8px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1.0716094970703125,
          padding: "2.143px 2.143px 2.143px 2.143px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16.325} height={15.739} viewBox="0 0 16.325 15.739" fill="none" style={{
            position: "relative",
            width: 16.325,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 15.066 2.176 L 16.325 0 L 11.431 0 L 11.431 9.266 L 4.139 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.891 15.739 L 4.891 6.74 L 12.096 15.739 L 16.325 15.739 L 15.066 13.563 L 15.066 2.176 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.740} height={15.739} viewBox="0 0 14.740 15.739" fill="none" style={{
            position: "relative",
            width: 14.74,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 9.133 10.376 L 14.74 0 L 10.773 0 L 7.338 6.961 L 3.947 0 L 0 0 L 5.521 10.329 L 5.521 13.563 L 5.517 13.563 L 4.261 15.739 L 10.388 15.739 L 9.133 13.563 L 9.133 10.376 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.437} height={15.739} viewBox="0 0 14.437 15.739" fill="none" style={{
            position: "relative",
            width: 14.437,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 14.437 0 L 5.387 0 C 4.71 -0.002 4.039 0.13 3.412 0.387 C 2.786 0.645 2.217 1.024 1.737 1.502 C 1.258 1.98 0.877 2.548 0.618 3.174 C 0.358 3.799 0.224 4.47 0.224 5.147 L 0.224 10.593 C 0.224 11.684 0.573 12.747 1.22 13.626 L 0 15.739 L 9.29 15.739 C 10.655 15.739 11.964 15.197 12.929 14.232 C 13.895 13.267 14.437 11.958 14.437 10.593 L 14.437 5.147 C 14.438 3.983 14.043 2.853 13.315 1.944 L 14.437 0 Z M 3.494 5.528 C 3.494 4.929 3.732 4.354 4.155 3.93 C 4.579 3.506 5.153 3.267 5.753 3.266 L 8.901 3.266 C 9.501 3.266 10.076 3.504 10.5 3.929 C 10.925 4.353 11.163 4.928 11.163 5.528 L 11.163 10.073 L 10.034 8.405 L 9.03 9.727 L 6.54 5.902 L 3.585 10.848 C 3.526 10.647 3.496 10.44 3.494 10.231 L 3.494 5.528 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.382} height={15.739} viewBox="0 0 14.382 15.739" fill="none" style={{
            position: "relative",
            width: 14.382,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 10.923 9.888 C 11.448 9.597 11.914 9.21 12.296 8.747 C 12.682 8.279 12.982 7.746 13.182 7.173 C 13.391 6.578 13.496 5.951 13.492 5.32 C 13.487 4.658 13.353 4.003 13.099 3.392 C 12.843 2.76 12.478 2.178 12.021 1.672 C 11.566 1.164 11.015 0.749 10.4 0.453 C 9.759 0.149 9.058 -0.006 8.35 0 L 0 0 L 1.255 2.176 L 1.255 13.563 L 0 15.739 L 4.891 15.739 L 4.891 10.663 L 7.354 10.663 L 10.368 15.739 L 14.382 15.739 L 10.923 9.888 Z M 9.569 6.449 C 9.445 6.747 9.251 7.01 9.003 7.217 C 8.782 7.399 8.503 7.497 8.216 7.492 L 4.891 7.492 L 4.891 3.191 L 8.106 3.191 C 8.389 3.196 8.665 3.29 8.893 3.459 C 9.159 3.654 9.376 3.909 9.526 4.203 C 9.702 4.548 9.788 4.932 9.778 5.32 C 9.791 5.707 9.72 6.092 9.569 6.449 L 9.569 6.449 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={15.137} height={15.739} viewBox="0 0 15.137 15.739" fill="none" style={{
            position: "relative",
            width: 15.137,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 8.841 7.028 L 14.736 0 L 10.659 0 L 4.895 6.784 L 4.895 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.895 15.739 L 4.895 11.108 L 6.536 9.42 L 10.97 15.739 L 15.137 15.739 L 8.841 7.028 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 32,
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text1 ?? "Hjem"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text2 ?? "Hytter"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text3 ?? "Tomter"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text4 ?? "Området"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>Nyheter</span>
        <Button
          style={{
            position: "relative",
            width: 111,
            flexShrink: 0,
            alignSelf: "stretch",
            height: "auto",
          }}
          iconLeft2={false}
          iconRight2={false}
          text={"Kontakt oss"}
          type={"secondary"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: 389,
      height: 70,
      backgroundColor: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(11.100px)",
      display: "flex",
      flexDirection: "row",
      padding: "12px 40px 12px 40px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--semantic-color-foreground-default)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 8px 8px 8px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 1.0716094970703125,
          padding: "2.143px 2.143px 2.143px 2.143px",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <svg width={16.325} height={15.739} viewBox="0 0 16.325 15.739" fill="none" style={{
            position: "relative",
            width: 16.325,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 15.066 2.176 L 16.325 0 L 11.431 0 L 11.431 9.266 L 4.139 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.891 15.739 L 4.891 6.74 L 12.096 15.739 L 16.325 15.739 L 15.066 13.563 L 15.066 2.176 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.740} height={15.739} viewBox="0 0 14.740 15.739" fill="none" style={{
            position: "relative",
            width: 14.74,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 9.133 10.376 L 14.74 0 L 10.773 0 L 7.338 6.961 L 3.947 0 L 0 0 L 5.521 10.329 L 5.521 13.563 L 5.517 13.563 L 4.261 15.739 L 10.388 15.739 L 9.133 13.563 L 9.133 10.376 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.437} height={15.739} viewBox="0 0 14.437 15.739" fill="none" style={{
            position: "relative",
            width: 14.437,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 14.437 0 L 5.387 0 C 4.71 -0.002 4.039 0.13 3.412 0.387 C 2.786 0.645 2.217 1.024 1.737 1.502 C 1.258 1.98 0.877 2.548 0.618 3.174 C 0.358 3.799 0.224 4.47 0.224 5.147 L 0.224 10.593 C 0.224 11.684 0.573 12.747 1.22 13.626 L 0 15.739 L 9.29 15.739 C 10.655 15.739 11.964 15.197 12.929 14.232 C 13.895 13.267 14.437 11.958 14.437 10.593 L 14.437 5.147 C 14.438 3.983 14.043 2.853 13.315 1.944 L 14.437 0 Z M 3.494 5.528 C 3.494 4.929 3.732 4.354 4.155 3.93 C 4.579 3.506 5.153 3.267 5.753 3.266 L 8.901 3.266 C 9.501 3.266 10.076 3.504 10.5 3.929 C 10.925 4.353 11.163 4.928 11.163 5.528 L 11.163 10.073 L 10.034 8.405 L 9.03 9.727 L 6.54 5.902 L 3.585 10.848 C 3.526 10.647 3.496 10.44 3.494 10.231 L 3.494 5.528 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={14.382} height={15.739} viewBox="0 0 14.382 15.739" fill="none" style={{
            position: "relative",
            width: 14.382,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 10.923 9.888 C 11.448 9.597 11.914 9.21 12.296 8.747 C 12.682 8.279 12.982 7.746 13.182 7.173 C 13.391 6.578 13.496 5.951 13.492 5.32 C 13.487 4.658 13.353 4.003 13.099 3.392 C 12.843 2.76 12.478 2.178 12.021 1.672 C 11.566 1.164 11.015 0.749 10.4 0.453 C 9.759 0.149 9.058 -0.006 8.35 0 L 0 0 L 1.255 2.176 L 1.255 13.563 L 0 15.739 L 4.891 15.739 L 4.891 10.663 L 7.354 10.663 L 10.368 15.739 L 14.382 15.739 L 10.923 9.888 Z M 9.569 6.449 C 9.445 6.747 9.251 7.01 9.003 7.217 C 8.782 7.399 8.503 7.497 8.216 7.492 L 4.891 7.492 L 4.891 3.191 L 8.106 3.191 C 8.389 3.196 8.665 3.29 8.893 3.459 C 9.159 3.654 9.376 3.909 9.526 4.203 C 9.702 4.548 9.788 4.932 9.778 5.32 C 9.791 5.707 9.72 6.092 9.569 6.449 L 9.569 6.449 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg width={15.137} height={15.739} viewBox="0 0 15.137 15.739" fill="none" style={{
            position: "relative",
            width: 15.137,
            height: 15.739,
            flexShrink: 0,
          }}>
            <path d={"M 8.841 7.028 L 14.736 0 L 10.659 0 L 4.895 6.784 L 4.895 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.895 15.739 L 4.895 11.108 L 6.536 9.42 L 10.97 15.739 L 15.137 15.739 L 8.841 7.028 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
      <div style={{
        position: "relative",
        width: 24,
        height: 24,
        overflow: "hidden",
        flexShrink: 0,
      }}>
        <div style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: 24,
          height: 24,
          clipPath: "inset(0px 0px 0px 0px)",
        }}>
          <svg width={18} height={12} viewBox="0 0 18 12" fill="none" style={{
            position: "absolute",
            left: 3,
            top: 6,
            width: 18,
            height: 12,
          }}>
            <path d={"M 1 12 C 0.717 12 0.479 11.904 0.287 11.713 C 0.096 11.521 0 11.283 0 11 C 0 10.717 0.096 10.479 0.287 10.288 C 0.479 10.096 0.717 10 1 10 L 17 10 C 17.283 10 17.521 10.096 17.712 10.288 C 17.904 10.479 18 10.717 18 11 C 18 11.283 17.904 11.521 17.712 11.713 C 17.521 11.904 17.283 12 17 12 L 1 12 Z M 1 7 C 0.717 7 0.479 6.904 0.287 6.713 C 0.096 6.521 0 6.283 0 6 C 0 5.717 0.096 5.479 0.287 5.287 C 0.479 5.096 0.717 5 1 5 L 17 5 C 17.283 5 17.521 5.096 17.712 5.287 C 17.904 5.479 18 5.717 18 6 C 18 6.283 17.904 6.521 17.712 6.713 C 17.521 6.904 17.283 7 17 7 L 1 7 Z M 1 2 C 0.717 2 0.479 1.904 0.287 1.712 C 0.096 1.521 0 1.283 0 1 C 0 0.717 0.096 0.479 0.287 0.287 C 0.479 0.096 0.717 0 1 0 L 17 0 C 17.283 0 17.521 0.096 17.712 0.287 C 17.904 0.479 18 0.717 18 1 C 18 1.283 17.904 1.521 17.712 1.712 C 17.521 1.904 17.283 2 17 2 L 1 2 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
        </div>
      </div>
    </div>
  );
  const __body2 = () => (
    <div className={props.className} style={{
      width: 389,
      backgroundColor: "rgba(255,255,255,0.85)",
      backdropFilter: "blur(11.100px)",
      display: "flex",
      flexDirection: "column",
      gap: 42,
      padding: "12px 40px 12px 40px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      color: "var(--semantic-color-foreground-default)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          gap: 8,
          padding: "8px 8px 8px 8px",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "nowrap",
          boxSizing: "border-box",
          flexShrink: 0,
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            gap: 1.0716094970703125,
            padding: "2.143px 2.143px 2.143px 2.143px",
            alignItems: "center",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            flexShrink: 0,
          }}>
            <svg width={16.325} height={15.739} viewBox="0 0 16.325 15.739" fill="none" style={{
              position: "relative",
              width: 16.325,
              height: 15.739,
              flexShrink: 0,
            }}>
              <path d={"M 15.066 2.176 L 16.325 0 L 11.431 0 L 11.431 9.266 L 4.139 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.891 15.739 L 4.891 6.74 L 12.096 15.739 L 16.325 15.739 L 15.066 13.563 L 15.066 2.176 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={14.740} height={15.739} viewBox="0 0 14.740 15.739" fill="none" style={{
              position: "relative",
              width: 14.74,
              height: 15.739,
              flexShrink: 0,
            }}>
              <path d={"M 9.133 10.376 L 14.74 0 L 10.773 0 L 7.338 6.961 L 3.947 0 L 0 0 L 5.521 10.329 L 5.521 13.563 L 5.517 13.563 L 4.261 15.739 L 10.388 15.739 L 9.133 13.563 L 9.133 10.376 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={14.437} height={15.739} viewBox="0 0 14.437 15.739" fill="none" style={{
              position: "relative",
              width: 14.437,
              height: 15.739,
              flexShrink: 0,
            }}>
              <path d={"M 14.437 0 L 5.387 0 C 4.71 -0.002 4.039 0.13 3.412 0.387 C 2.786 0.645 2.217 1.024 1.737 1.502 C 1.258 1.98 0.877 2.548 0.618 3.174 C 0.358 3.799 0.224 4.47 0.224 5.147 L 0.224 10.593 C 0.224 11.684 0.573 12.747 1.22 13.626 L 0 15.739 L 9.29 15.739 C 10.655 15.739 11.964 15.197 12.929 14.232 C 13.895 13.267 14.437 11.958 14.437 10.593 L 14.437 5.147 C 14.438 3.983 14.043 2.853 13.315 1.944 L 14.437 0 Z M 3.494 5.528 C 3.494 4.929 3.732 4.354 4.155 3.93 C 4.579 3.506 5.153 3.267 5.753 3.266 L 8.901 3.266 C 9.501 3.266 10.076 3.504 10.5 3.929 C 10.925 4.353 11.163 4.928 11.163 5.528 L 11.163 10.073 L 10.034 8.405 L 9.03 9.727 L 6.54 5.902 L 3.585 10.848 C 3.526 10.647 3.496 10.44 3.494 10.231 L 3.494 5.528 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={14.382} height={15.739} viewBox="0 0 14.382 15.739" fill="none" style={{
              position: "relative",
              width: 14.382,
              height: 15.739,
              flexShrink: 0,
            }}>
              <path d={"M 10.923 9.888 C 11.448 9.597 11.914 9.21 12.296 8.747 C 12.682 8.279 12.982 7.746 13.182 7.173 C 13.391 6.578 13.496 5.951 13.492 5.32 C 13.487 4.658 13.353 4.003 13.099 3.392 C 12.843 2.76 12.478 2.178 12.021 1.672 C 11.566 1.164 11.015 0.749 10.4 0.453 C 9.759 0.149 9.058 -0.006 8.35 0 L 0 0 L 1.255 2.176 L 1.255 13.563 L 0 15.739 L 4.891 15.739 L 4.891 10.663 L 7.354 10.663 L 10.368 15.739 L 14.382 15.739 L 10.923 9.888 Z M 9.569 6.449 C 9.445 6.747 9.251 7.01 9.003 7.217 C 8.782 7.399 8.503 7.497 8.216 7.492 L 4.891 7.492 L 4.891 3.191 L 8.106 3.191 C 8.389 3.196 8.665 3.29 8.893 3.459 C 9.159 3.654 9.376 3.909 9.526 4.203 C 9.702 4.548 9.788 4.932 9.778 5.32 C 9.791 5.707 9.72 6.092 9.569 6.449 L 9.569 6.449 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
            <svg width={15.137} height={15.739} viewBox="0 0 15.137 15.739" fill="none" style={{
              position: "relative",
              width: 15.137,
              height: 15.739,
              flexShrink: 0,
            }}>
              <path d={"M 8.841 7.028 L 14.736 0 L 10.659 0 L 4.895 6.784 L 4.895 0 L 0 0 L 1.259 2.176 L 1.259 13.563 L 0 15.739 L 4.895 15.739 L 4.895 11.108 L 6.536 9.42 L 10.97 15.739 L 15.137 15.739 L 8.841 7.028 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <div style={{
          position: "relative",
          width: 24,
          height: 24,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 24,
            height: 24,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={18} height={12} viewBox="0 0 18 12" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 6,
              width: 18,
              height: 12,
            }}>
              <path d={"M 1 12 C 0.717 12 0.479 11.904 0.287 11.713 C 0.096 11.521 0 11.283 0 11 C 0 10.717 0.096 10.479 0.287 10.288 C 0.479 10.096 0.717 10 1 10 L 17 10 C 17.283 10 17.521 10.096 17.712 10.288 C 17.904 10.479 18 10.717 18 11 C 18 11.283 17.904 11.521 17.712 11.713 C 17.521 11.904 17.283 12 17 12 L 1 12 Z M 1 7 C 0.717 7 0.479 6.904 0.287 6.713 C 0.096 6.521 0 6.283 0 6 C 0 5.717 0.096 5.479 0.287 5.287 C 0.479 5.096 0.717 5 1 5 L 17 5 C 17.283 5 17.521 5.096 17.712 5.287 C 17.904 5.479 18 5.717 18 6 C 18 6.283 17.904 6.521 17.712 6.713 C 17.521 6.904 17.283 7 17 7 L 1 7 Z M 1 2 C 0.717 2 0.479 1.904 0.287 1.712 C 0.096 1.521 0 1.283 0 1 C 0 0.717 0.096 0.479 0.287 0.287 C 0.479 0.096 0.717 0 1 0 L 17 0 C 17.283 0 17.521 0.096 17.712 0.287 C 17.904 0.479 18 0.717 18 1 C 18 1.283 17.904 1.521 17.712 1.712 C 17.521 1.904 17.283 2 17 2 L 1 2 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        gap: 32,
        justifyContent: "center",
        alignItems: "flex-start",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text1 ?? "Hjem"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text2 ?? "Hytter"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text3 ?? "Tomter"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>{props.text4 ?? "Området"}</span>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
        }}>Nyheter</span>
        <Button
          style={{
            position: "relative",
            height: 48,
            flexShrink: 0,
            alignSelf: "stretch",
            width: "auto",
          }}
          iconLeft2={false}
          iconRight2={false}
          text={"Kontakt oss"}
          type={"secondary"}
          state={"default"}
        />
      </div>
    </div>
  );
  const __impls = {
    // figma: Property 1=Desktop
    "property1=desktop": __body0,
    // figma: Property 1=Mobile
    "property1=mobile": __body1,
    // figma: Property 1=Variant3
    "property1=variant3": __body2,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Nav;
