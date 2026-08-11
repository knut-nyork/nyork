// figma node: 2011:318 tab (2 variants)
const __venc = (v) => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey = (p) => "type=" + __venc(p.type);

export function Tab(_p = {}) {
  const props = { ..._p, type: _p.type ?? "summer" };
  const __body0 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--semantic-color-background-surface-1)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--semantic-color-foreground-default)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        backgroundColor: "var(--semantic-color-background-surface-4)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 24px 8px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={13.708} height={13.708} viewBox="0 0 13.708 13.708" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 13.708,
              height: 13.708,
            }}>
              <path d={"M 12.417 13.479 L 8.708 9.75 C 8.556 9.597 8.479 9.424 8.479 9.229 C 8.479 9.035 8.556 8.861 8.708 8.708 C 8.861 8.556 9.038 8.479 9.24 8.479 C 9.441 8.479 9.618 8.556 9.771 8.708 L 13.479 12.417 C 13.632 12.569 13.708 12.747 13.708 12.948 C 13.708 13.149 13.632 13.326 13.479 13.479 C 13.326 13.632 13.149 13.708 12.948 13.708 C 12.747 13.708 12.569 13.632 12.417 13.479 Z M 1.458 12.604 C 0.972 11.91 0.608 11.149 0.365 10.323 C 0.122 9.497 0 8.681 0 7.875 C 0 6.833 0.191 5.847 0.573 4.917 C 0.955 3.986 1.542 3.125 2.333 2.333 C 3.125 1.542 4.007 0.955 4.979 0.573 C 5.951 0.191 6.958 0 8 0 C 8.806 0 9.604 0.122 10.396 0.365 C 11.188 0.608 11.924 0.972 12.604 1.458 C 12.882 1.653 13.042 1.931 13.083 2.292 C 13.125 2.653 13.007 2.972 12.729 3.25 L 3.25 12.729 C 2.972 13.007 2.653 13.128 2.292 13.094 C 1.931 13.059 1.653 12.896 1.458 12.604 Z M 2.479 11.417 L 3.5 10.375 C 3.292 10.111 3.094 9.84 2.906 9.563 C 2.719 9.285 2.542 8.997 2.375 8.698 C 2.208 8.399 2.063 8.097 1.938 7.792 C 1.813 7.486 1.708 7.167 1.625 6.833 C 1.458 7.625 1.458 8.413 1.625 9.198 C 1.792 9.983 2.076 10.722 2.479 11.417 Z M 4.563 9.313 L 9.292 4.563 C 8.708 4.118 8.118 3.764 7.521 3.5 C 6.924 3.236 6.358 3.059 5.823 2.969 C 5.288 2.878 4.809 2.868 4.385 2.938 C 3.962 3.007 3.632 3.16 3.396 3.396 C 3.174 3.632 3.024 3.965 2.948 4.396 C 2.872 4.826 2.882 5.309 2.979 5.844 C 3.076 6.378 3.253 6.944 3.51 7.542 C 3.767 8.139 4.118 8.729 4.563 9.313 Z M 11.417 2.458 C 10.722 2.056 9.979 1.767 9.188 1.594 C 8.396 1.42 7.597 1.424 6.792 1.604 C 7.125 1.688 7.448 1.792 7.76 1.917 C 8.073 2.042 8.378 2.188 8.677 2.354 C 8.976 2.521 9.267 2.701 9.552 2.896 C 9.837 3.09 10.111 3.292 10.375 3.5 L 11.417 2.458 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 500,
          fontSize: 48,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Sommer"}</span>
      </div>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 24px 8px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 16,
              height: 16,
            }}>
              <path d={"M 7.25 12.563 L 5.104 14.708 C 4.951 14.861 4.774 14.938 4.573 14.938 C 4.372 14.938 4.194 14.861 4.042 14.708 C 3.889 14.556 3.813 14.378 3.813 14.177 C 3.813 13.976 3.889 13.799 4.042 13.646 L 7.25 10.458 L 7.25 8.75 L 5.542 8.75 L 2.333 11.958 C 2.181 12.111 2.003 12.188 1.802 12.188 C 1.601 12.188 1.424 12.111 1.271 11.958 C 1.118 11.806 1.042 11.628 1.042 11.427 C 1.042 11.226 1.118 11.049 1.271 10.896 L 3.438 8.75 L 0.729 8.75 C 0.535 8.75 0.365 8.677 0.219 8.531 C 0.073 8.385 0 8.208 0 8 C 0 7.806 0.073 7.632 0.219 7.479 C 0.365 7.326 0.542 7.25 0.75 7.25 L 3.438 7.25 L 1.292 5.125 C 1.139 4.972 1.063 4.795 1.063 4.594 C 1.063 4.392 1.139 4.215 1.292 4.063 C 1.444 3.91 1.622 3.833 1.823 3.833 C 2.024 3.833 2.201 3.91 2.354 4.063 L 5.542 7.25 L 7.25 7.25 L 7.25 5.542 L 4.042 2.375 C 3.889 2.222 3.813 2.045 3.813 1.844 C 3.813 1.642 3.889 1.465 4.042 1.313 C 4.194 1.16 4.372 1.083 4.573 1.083 C 4.774 1.083 4.951 1.16 5.104 1.313 L 7.25 3.438 L 7.25 0.75 C 7.25 0.556 7.323 0.382 7.469 0.229 C 7.615 0.076 7.792 0 8 0 C 8.194 0 8.368 0.076 8.521 0.229 C 8.674 0.382 8.75 0.556 8.75 0.75 L 8.75 3.438 L 10.875 1.292 C 11.028 1.139 11.205 1.063 11.406 1.063 C 11.608 1.063 11.785 1.139 11.938 1.292 C 12.09 1.444 12.167 1.622 12.167 1.823 C 12.167 2.024 12.09 2.201 11.938 2.354 L 8.75 5.542 L 8.75 7.25 L 10.458 7.25 L 13.625 4.063 C 13.778 3.91 13.955 3.833 14.156 3.833 C 14.358 3.833 14.535 3.91 14.688 4.063 C 14.84 4.215 14.917 4.392 14.917 4.594 C 14.917 4.795 14.84 4.972 14.688 5.125 L 12.563 7.25 L 15.25 7.25 C 15.444 7.25 15.618 7.326 15.771 7.479 C 15.924 7.632 16 7.806 16 8 C 16 8.208 15.924 8.385 15.771 8.531 C 15.618 8.677 15.444 8.75 15.25 8.75 L 12.563 8.75 L 14.708 10.896 C 14.861 11.049 14.938 11.226 14.938 11.427 C 14.938 11.628 14.861 11.806 14.708 11.958 C 14.556 12.111 14.378 12.188 14.177 12.188 C 13.976 12.188 13.799 12.111 13.646 11.958 L 10.458 8.75 L 8.75 8.75 L 8.75 10.458 L 11.938 13.667 C 12.09 13.819 12.167 13.997 12.167 14.198 C 12.167 14.399 12.09 14.576 11.938 14.729 C 11.785 14.882 11.608 14.958 11.406 14.958 C 11.205 14.958 11.028 14.882 10.875 14.729 L 8.75 12.563 L 8.75 15.271 C 8.75 15.465 8.674 15.635 8.521 15.781 C 8.368 15.927 8.194 16 8 16 C 7.792 16 7.615 15.927 7.469 15.781 C 7.323 15.635 7.25 15.458 7.25 15.25 L 7.25 12.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 48,
          whiteSpace: "nowrap",
          lineHeight: "54px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text2 ?? "Vinter"}</span>
      </div>
    </div>
  );
  const __body1 = () => (
    <div className={props.className} style={{
      width: "fit-content",
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "var(--semantic-color-background-surface-1)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "var(--semantic-color-foreground-default)",
      ...props.style,
    }}>
      <div style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 24px 8px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={13.708} height={13.708} viewBox="0 0 13.708 13.708" fill="none" style={{
              position: "absolute",
              left: 3,
              top: 3,
              width: 13.708,
              height: 13.708,
            }}>
              <path d={"M 12.417 13.479 L 8.708 9.75 C 8.556 9.597 8.479 9.424 8.479 9.229 C 8.479 9.035 8.556 8.861 8.708 8.708 C 8.861 8.556 9.038 8.479 9.24 8.479 C 9.441 8.479 9.618 8.556 9.771 8.708 L 13.479 12.417 C 13.632 12.569 13.708 12.747 13.708 12.948 C 13.708 13.149 13.632 13.326 13.479 13.479 C 13.326 13.632 13.149 13.708 12.948 13.708 C 12.747 13.708 12.569 13.632 12.417 13.479 Z M 1.458 12.604 C 0.972 11.91 0.608 11.149 0.365 10.323 C 0.122 9.497 0 8.681 0 7.875 C 0 6.833 0.191 5.847 0.573 4.917 C 0.955 3.986 1.542 3.125 2.333 2.333 C 3.125 1.542 4.007 0.955 4.979 0.573 C 5.951 0.191 6.958 0 8 0 C 8.806 0 9.604 0.122 10.396 0.365 C 11.188 0.608 11.924 0.972 12.604 1.458 C 12.882 1.653 13.042 1.931 13.083 2.292 C 13.125 2.653 13.007 2.972 12.729 3.25 L 3.25 12.729 C 2.972 13.007 2.653 13.128 2.292 13.094 C 1.931 13.059 1.653 12.896 1.458 12.604 Z M 2.479 11.417 L 3.5 10.375 C 3.292 10.111 3.094 9.84 2.906 9.563 C 2.719 9.285 2.542 8.997 2.375 8.698 C 2.208 8.399 2.063 8.097 1.938 7.792 C 1.813 7.486 1.708 7.167 1.625 6.833 C 1.458 7.625 1.458 8.413 1.625 9.198 C 1.792 9.983 2.076 10.722 2.479 11.417 Z M 4.563 9.313 L 9.292 4.563 C 8.708 4.118 8.118 3.764 7.521 3.5 C 6.924 3.236 6.358 3.059 5.823 2.969 C 5.288 2.878 4.809 2.868 4.385 2.938 C 3.962 3.007 3.632 3.16 3.396 3.396 C 3.174 3.632 3.024 3.965 2.948 4.396 C 2.872 4.826 2.882 5.309 2.979 5.844 C 3.076 6.378 3.253 6.944 3.51 7.542 C 3.767 8.139 4.118 8.729 4.563 9.313 Z M 11.417 2.458 C 10.722 2.056 9.979 1.767 9.188 1.594 C 8.396 1.42 7.597 1.424 6.792 1.604 C 7.125 1.688 7.448 1.792 7.76 1.917 C 8.073 2.042 8.378 2.188 8.677 2.354 C 8.976 2.521 9.267 2.701 9.552 2.896 C 9.837 3.09 10.111 3.292 10.375 3.5 L 11.417 2.458 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
        <span style={{
          position: "relative",
          fontFamily: "Outfit, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
          fontWeight: 400,
          fontSize: 18,
          whiteSpace: "nowrap",
          lineHeight: "22px",
          letterSpacing: "0.265px",
          color: "var(--semantic-color-foreground-default)",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>{props.text1 ?? "Sommer"}</span>
      </div>
      <div style={{
        position: "relative",
        backgroundColor: "var(--semantic-color-background-surface-4)",
        display: "flex",
        flexDirection: "row",
        gap: 8,
        padding: "8px 24px 8px 24px",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "nowrap",
        boxSizing: "border-box",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          width: 20,
          overflow: "hidden",
          flexShrink: 0,
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 20,
            height: 20,
            clipPath: "inset(0px 0px 0px 0px)",
          }}>
            <svg width={16} height={16} viewBox="0 0 16 16" fill="none" style={{
              position: "absolute",
              left: 2,
              top: 2,
              width: 16,
              height: 16,
            }}>
              <path d={"M 7.25 12.563 L 5.104 14.708 C 4.951 14.861 4.774 14.938 4.573 14.938 C 4.372 14.938 4.194 14.861 4.042 14.708 C 3.889 14.556 3.813 14.378 3.813 14.177 C 3.813 13.976 3.889 13.799 4.042 13.646 L 7.25 10.458 L 7.25 8.75 L 5.542 8.75 L 2.333 11.958 C 2.181 12.111 2.003 12.188 1.802 12.188 C 1.601 12.188 1.424 12.111 1.271 11.958 C 1.118 11.806 1.042 11.628 1.042 11.427 C 1.042 11.226 1.118 11.049 1.271 10.896 L 3.438 8.75 L 0.729 8.75 C 0.535 8.75 0.365 8.677 0.219 8.531 C 0.073 8.385 0 8.208 0 8 C 0 7.806 0.073 7.632 0.219 7.479 C 0.365 7.326 0.542 7.25 0.75 7.25 L 3.438 7.25 L 1.292 5.125 C 1.139 4.972 1.063 4.795 1.063 4.594 C 1.063 4.392 1.139 4.215 1.292 4.063 C 1.444 3.91 1.622 3.833 1.823 3.833 C 2.024 3.833 2.201 3.91 2.354 4.063 L 5.542 7.25 L 7.25 7.25 L 7.25 5.542 L 4.042 2.375 C 3.889 2.222 3.813 2.045 3.813 1.844 C 3.813 1.642 3.889 1.465 4.042 1.313 C 4.194 1.16 4.372 1.083 4.573 1.083 C 4.774 1.083 4.951 1.16 5.104 1.313 L 7.25 3.438 L 7.25 0.75 C 7.25 0.556 7.323 0.382 7.469 0.229 C 7.615 0.076 7.792 0 8 0 C 8.194 0 8.368 0.076 8.521 0.229 C 8.674 0.382 8.75 0.556 8.75 0.75 L 8.75 3.438 L 10.875 1.292 C 11.028 1.139 11.205 1.063 11.406 1.063 C 11.608 1.063 11.785 1.139 11.938 1.292 C 12.09 1.444 12.167 1.622 12.167 1.823 C 12.167 2.024 12.09 2.201 11.938 2.354 L 8.75 5.542 L 8.75 7.25 L 10.458 7.25 L 13.625 4.063 C 13.778 3.91 13.955 3.833 14.156 3.833 C 14.358 3.833 14.535 3.91 14.688 4.063 C 14.84 4.215 14.917 4.392 14.917 4.594 C 14.917 4.795 14.84 4.972 14.688 5.125 L 12.563 7.25 L 15.25 7.25 C 15.444 7.25 15.618 7.326 15.771 7.479 C 15.924 7.632 16 7.806 16 8 C 16 8.208 15.924 8.385 15.771 8.531 C 15.618 8.677 15.444 8.75 15.25 8.75 L 12.563 8.75 L 14.708 10.896 C 14.861 11.049 14.938 11.226 14.938 11.427 C 14.938 11.628 14.861 11.806 14.708 11.958 C 14.556 12.111 14.378 12.188 14.177 12.188 C 13.976 12.188 13.799 12.111 13.646 11.958 L 10.458 8.75 L 8.75 8.75 L 8.75 10.458 L 11.938 13.667 C 12.09 13.819 12.167 13.997 12.167 14.198 C 12.167 14.399 12.09 14.576 11.938 14.729 C 11.785 14.882 11.608 14.958 11.406 14.958 C 11.205 14.958 11.028 14.882 10.875 14.729 L 8.75 12.563 L 8.75 15.271 C 8.75 15.465 8.674 15.635 8.521 15.781 C 8.368 15.927 8.194 16 8 16 C 7.792 16 7.615 15.927 7.469 15.781 C 7.323 15.635 7.25 15.458 7.25 15.25 L 7.25 12.563 Z"} fill="currentColor" fillRule="nonzero" />
            </svg>
          </div>
        </div>
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
          alignSelf: "stretch",
        }}>{props.text2 ?? "Vinter"}</span>
      </div>
    </div>
  );
  const __impls = {
    // figma: Type=Summer
    "type=summer": __body0,
    // figma: Type=Winter
    "type=winter": __body1,
  };
  return (__impls[__vkey(props)] ?? __body0)();
}
export default Tab;
