// figma node: 2044:1528 Data Table / Header / Filters Dropdown
export function DataTableHeaderFiltersDropdown(_p = {}) {
  const props = _p;
  return (
    <div className={props.className} style={{
      width: "fit-content",
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
        minWidth: 128,
        overflow: "hidden",
        borderRadius: 6,
        backgroundColor: "var(--tokens-background)",
        boxShadow: "inset 0 0 0 1px var(--tokens-border), 0px 4px 6px -1px rgba(0,0,0,0.1), 0px 2px 4px -2px rgba(0,0,0,0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexWrap: "nowrap",
        flexShrink: 0,
        alignSelf: "stretch",
      }}>
        <div style={{
          position: "relative",
          maxWidth: null,
          maxHeight: 300,
          borderRadius: "0px 0px 8px 8px",
          backgroundColor: "var(--tokens-popover)",
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
          alignSelf: "stretch",
        }}>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "4px 4px 4px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-xs) * 1px)",
            paddingTop: "calc(var(--spacing-xs) * 1px)",
            paddingRight: "calc(var(--spacing-xs) * 1px)",
            paddingBottom: "calc(var(--spacing-xs) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
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
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>
                <svg width={9.600} height={11.733} viewBox="0 0 9.600 11.733" fill="none" style={{
                  position: "absolute",
                  left: 3.2,
                  top: 2.133,
                  width: 9.6,
                  height: 11.733,
                  color: "var(--tokens-foreground)",
                }}>
                  <path d={"M 4.423 0.156 C 4.631 -0.052 4.969 -0.052 5.177 0.156 L 9.444 4.423 C 9.652 4.631 9.652 4.969 9.444 5.177 C 9.236 5.385 8.898 5.385 8.689 5.177 L 5.333 1.821 L 5.333 11.2 C 5.333 11.495 5.095 11.733 4.8 11.733 C 4.505 11.733 4.267 11.495 4.267 11.2 L 4.267 1.821 L 0.91 5.177 C 0.702 5.385 0.364 5.385 0.156 5.177 C -0.052 4.969 -0.052 4.631 0.156 4.423 L 4.423 0.156 Z"} fill="currentColor" fillRule="evenodd" />
                  <path d={"M 4.423 0.156 L 5.484 1.217 L 5.484 1.217 L 4.423 0.156 Z M 5.177 0.156 L 4.116 1.217 L 4.116 1.217 L 5.177 0.156 Z M 9.444 4.423 L 10.505 3.362 L 10.504 3.362 L 9.444 4.423 Z M 9.444 5.177 L 10.504 6.238 L 10.505 6.238 L 9.444 5.177 Z M 8.689 5.177 L 7.629 6.238 L 7.629 6.238 L 8.689 5.177 Z M 5.333 1.821 L 6.394 0.76 L 3.833 -1.8 L 3.833 1.821 L 5.333 1.821 Z M 4.267 1.821 L 5.767 1.821 L 5.767 -1.8 L 3.206 0.76 L 4.267 1.821 Z M 0.91 5.177 L -0.15 4.116 L -0.15 4.116 L 0.91 5.177 Z M 0.156 5.177 L 1.217 4.116 L 1.217 4.116 L 0.156 5.177 Z M 0.156 4.423 L 1.217 5.484 L 1.217 5.484 L 0.156 4.423 Z M 5.484 1.217 C 5.106 1.594 4.494 1.594 4.116 1.217 L 6.238 -0.904 C 5.444 -1.699 4.156 -1.699 3.362 -0.904 L 5.484 1.217 Z M 4.116 1.217 L 8.383 5.484 L 10.504 3.362 L 6.238 -0.904 L 4.116 1.217 Z M 8.383 5.483 C 8.006 5.106 8.006 4.494 8.383 4.117 L 10.505 6.238 C 11.298 5.444 11.298 4.156 10.505 3.362 L 8.383 5.483 Z M 8.383 4.116 C 8.761 3.739 9.373 3.739 9.75 4.116 L 7.629 6.238 C 8.423 7.032 9.71 7.032 10.504 6.238 L 8.383 4.116 Z M 9.75 4.116 L 6.394 0.76 L 4.273 2.882 L 7.629 6.238 L 9.75 4.116 Z M 3.833 1.821 L 3.833 11.2 L 6.833 11.2 L 6.833 1.821 L 3.833 1.821 Z M 3.833 11.2 C 3.833 10.666 4.266 10.233 4.8 10.233 L 4.8 13.233 C 5.923 13.233 6.833 12.323 6.833 11.2 L 3.833 11.2 Z M 4.8 10.233 C 5.334 10.233 5.767 10.666 5.767 11.2 L 2.767 11.2 C 2.767 12.323 3.677 13.233 4.8 13.233 L 4.8 10.233 Z M 5.767 11.2 L 5.767 1.821 L 2.767 1.821 L 2.767 11.2 L 5.767 11.2 Z M 3.206 0.76 L -0.15 4.116 L 1.971 6.238 L 5.327 2.882 L 3.206 0.76 Z M -0.15 4.116 C 0.227 3.739 0.839 3.739 1.217 4.116 L -0.904 6.238 C -0.11 7.032 1.177 7.032 1.971 6.238 L -0.15 4.116 Z M 1.217 4.116 C 1.594 4.494 1.594 5.106 1.217 5.484 L -0.904 3.362 C -1.699 4.156 -1.699 5.444 -0.904 6.238 L 1.217 4.116 Z M 1.217 5.484 L 5.484 1.217 L 3.362 -0.904 L -0.904 3.362 L 1.217 5.484 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
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
              }}>Asc</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={5.333} height={9.333} viewBox="0 0 5.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 5.333,
                  top: 3.333,
                  width: 5.333,
                  height: 9.333,
                  color: "var(--tokens-popover-foreground)",
                }}>
                  <path d={"M 0.195 0.195 C 0.456 -0.065 0.878 -0.065 1.138 0.195 L 5.138 4.195 C 5.398 4.456 5.398 4.878 5.138 5.138 L 1.138 9.138 C 0.878 9.398 0.456 9.398 0.195 9.138 C -0.065 8.878 -0.065 8.456 0.195 8.195 L 3.724 4.667 L 0.195 1.138 C -0.065 0.878 -0.065 0.456 0.195 0.195 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
            <div style={{
              position: "relative",
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
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>
                <svg width={9.600} height={11.733} viewBox="0 0 9.600 11.733" fill="none" style={{
                  position: "absolute",
                  left: 3,
                  top: 2,
                  width: 9.6,
                  height: 11.733,
                  color: "var(--tokens-foreground)",
                }}>
                  <path d={"M 4.8 0 C 5.095 0 5.333 0.239 5.333 0.533 L 5.333 9.912 L 8.689 6.556 C 8.898 6.348 9.236 6.348 9.444 6.556 C 9.652 6.764 9.652 7.102 9.444 7.31 L 5.177 11.577 C 5.077 11.677 4.941 11.733 4.8 11.733 C 4.659 11.733 4.523 11.677 4.423 11.577 L 0.156 7.31 C -0.052 7.102 -0.052 6.764 0.156 6.556 C 0.364 6.348 0.702 6.348 0.91 6.556 L 4.267 9.912 L 4.267 0.533 C 4.267 0.239 4.505 0 4.8 0 Z"} fill="currentColor" fillRule="evenodd" />
                  <path d={"M 5.333 9.912 L 3.833 9.912 L 3.833 13.534 L 6.394 10.973 L 5.333 9.912 Z M 8.689 6.556 L 7.629 5.495 L 7.629 5.496 L 8.689 6.556 Z M 9.444 6.556 L 10.505 5.496 L 10.504 5.495 L 9.444 6.556 Z M 9.444 7.31 L 10.505 8.371 L 10.505 8.371 L 9.444 7.31 Z M 5.177 11.577 L 6.237 12.638 L 6.238 12.638 L 5.177 11.577 Z M 4.423 11.577 L 3.362 12.638 L 3.363 12.638 L 4.423 11.577 Z M 0.156 7.31 L 1.217 6.25 L 1.217 6.25 L 0.156 7.31 Z M 0.156 6.556 L 1.217 7.617 L 1.217 7.617 L 0.156 6.556 Z M 0.91 6.556 L -0.15 7.617 L -0.15 7.617 L 0.91 6.556 Z M 4.267 9.912 L 3.206 10.973 L 5.767 13.534 L 5.767 9.912 L 4.267 9.912 Z M 4.8 1.5 C 4.266 1.5 3.833 1.067 3.833 0.533 L 6.833 0.533 C 6.833 -0.59 5.923 -1.5 4.8 -1.5 L 4.8 1.5 Z M 3.833 0.533 L 3.833 9.912 L 6.833 9.912 L 6.833 0.533 L 3.833 0.533 Z M 6.394 10.973 L 9.75 7.617 L 7.629 5.496 L 4.273 8.852 L 6.394 10.973 Z M 9.75 7.617 C 9.373 7.994 8.761 7.994 8.383 7.617 L 10.504 5.495 C 9.71 4.702 8.423 4.702 7.629 5.495 L 9.75 7.617 Z M 8.383 7.617 C 8.006 7.239 8.006 6.627 8.383 6.25 L 10.505 8.371 C 11.298 7.577 11.298 6.29 10.505 5.496 L 8.383 7.617 Z M 8.383 6.25 L 4.116 10.517 L 6.238 12.638 L 10.505 8.371 L 8.383 6.25 Z M 4.117 10.516 C 4.298 10.335 4.544 10.233 4.8 10.233 L 4.8 13.233 C 5.339 13.233 5.856 13.019 6.237 12.638 L 4.117 10.516 Z M 4.8 10.233 C 5.056 10.233 5.302 10.335 5.483 10.516 L 3.363 12.638 C 3.744 13.019 4.261 13.233 4.8 13.233 L 4.8 10.233 Z M 5.484 10.517 L 1.217 6.25 L -0.904 8.371 L 3.362 12.638 L 5.484 10.517 Z M 1.217 6.25 C 1.594 6.627 1.594 7.239 1.217 7.617 L -0.904 5.496 C -1.699 6.29 -1.699 7.577 -0.904 8.371 L 1.217 6.25 Z M 1.217 7.617 C 0.839 7.994 0.227 7.994 -0.15 7.617 L 1.971 5.496 C 1.177 4.701 -0.11 4.701 -0.904 5.496 L 1.217 7.617 Z M -0.15 7.617 L 3.206 10.973 L 5.327 8.852 L 1.971 5.496 L -0.15 7.617 Z M 5.767 9.912 L 5.767 0.533 L 2.767 0.533 L 2.767 9.912 L 5.767 9.912 Z M 5.767 0.533 C 5.767 1.067 5.334 1.5 4.8 1.5 L 4.8 -1.5 C 3.677 -1.5 2.767 -0.59 2.767 0.533 L 5.767 0.533 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
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
              }}>Desc</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={5.333} height={9.333} viewBox="0 0 5.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 5.333,
                  top: 3.333,
                  width: 5.333,
                  height: 9.333,
                  color: "var(--tokens-popover-foreground)",
                }}>
                  <path d={"M 0.195 0.195 C 0.456 -0.065 0.878 -0.065 1.138 0.195 L 5.138 4.195 C 5.398 4.456 5.398 4.878 5.138 5.138 L 1.138 9.138 C 0.878 9.398 0.456 9.398 0.195 9.138 C -0.065 8.878 -0.065 8.456 0.195 8.195 L 3.724 4.667 L 0.195 1.138 C -0.065 0.878 -0.065 0.456 0.195 0.195 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <svg height={1} viewBox="0 -0.500 139 1" fill="none" style={{
            position: "relative",
            height: 1,
            flexShrink: 0,
            alignSelf: "stretch",
            color: "var(--tokens-border)",
          }}>
            <path d={"M 0 0 L 139 0 L 139 -1 L 0 -1 L 0 0 Z"} fill="currentColor" fillRule="nonzero" />
          </svg>
          <div style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "4px 4px 4px 4px",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            boxSizing: "border-box",
            paddingLeft: "calc(var(--spacing-xs) * 1px)",
            paddingTop: "calc(var(--spacing-xs) * 1px)",
            paddingRight: "calc(var(--spacing-xs) * 1px)",
            paddingBottom: "calc(var(--spacing-xs) * 1px)",
            flexShrink: 0,
            alignSelf: "stretch",
          }}>
            <div style={{
              position: "relative",
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
              flexShrink: 0,
              alignSelf: "stretch",
            }}>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                flexShrink: 0,
              }}>
                <svg width={16} height={12.800} viewBox="0 0 16 12.800" fill="none" style={{
                  position: "absolute",
                  left: 0,
                  top: 1.6,
                  width: 16,
                  height: 12.8,
                  color: "var(--tokens-foreground)",
                }}>
                  <path d={"M 14.244 0.91 C 14.452 0.702 14.452 0.364 14.244 0.156 C 14.036 -0.052 13.698 -0.052 13.489 0.156 L 11.395 2.251 C 10.354 1.831 9.213 1.6 8 1.6 C 4.595 1.6 1.767 3.42 0.081 6.117 C -0.027 6.29 -0.027 6.51 0.081 6.683 C 0.963 8.094 2.158 9.265 3.585 10.061 L 1.756 11.889 C 1.548 12.098 1.548 12.436 1.756 12.644 C 1.964 12.852 2.302 12.852 2.51 12.644 L 4.605 10.549 C 5.646 10.969 6.787 11.2 8 11.2 C 11.405 11.2 14.233 9.38 15.919 6.683 C 16.027 6.51 16.027 6.29 15.919 6.117 C 15.037 4.706 13.842 3.535 12.415 2.739 L 14.244 0.91 Z M 10.565 3.081 C 9.764 2.812 8.904 2.667 8 2.667 C 5.123 2.667 2.698 4.137 1.169 6.4 C 1.998 7.626 3.089 8.62 4.373 9.273 L 10.565 3.081 Z M 5.435 9.719 L 11.627 3.527 C 12.911 4.18 14.002 5.174 14.831 6.4 C 13.302 8.663 10.877 10.133 8 10.133 C 7.096 10.133 6.236 9.988 5.435 9.719 Z"} fill="currentColor" fillRule="evenodd" />
                  <path d={"M 14.244 0.91 L 15.304 1.971 L 15.305 1.971 L 14.244 0.91 Z M 14.244 0.156 L 15.305 -0.904 L 15.304 -0.905 L 14.244 0.156 Z M 13.489 0.156 L 12.429 -0.905 L 12.429 -0.904 L 13.489 0.156 Z M 11.395 2.251 L 10.834 3.642 L 11.754 4.013 L 12.456 3.311 L 11.395 2.251 Z M 0.081 6.117 L -1.191 5.322 L -1.191 5.322 L 0.081 6.117 Z M 0.081 6.683 L 1.353 5.888 L 1.353 5.888 L 0.081 6.683 Z M 3.585 10.061 L 4.645 11.122 L 6.049 9.718 L 4.315 8.751 L 3.585 10.061 Z M 1.756 11.889 L 0.696 10.829 L 0.695 10.829 L 1.756 11.889 Z M 1.756 12.644 L 0.695 13.704 L 0.696 13.705 L 1.756 12.644 Z M 2.51 12.644 L 3.571 13.705 L 3.571 13.704 L 2.51 12.644 Z M 4.605 10.549 L 5.166 9.158 L 4.246 8.787 L 3.544 9.489 L 4.605 10.549 Z M 15.919 6.683 L 17.191 7.478 L 17.191 7.478 L 15.919 6.683 Z M 15.919 6.117 L 17.191 5.323 L 17.191 5.322 L 15.919 6.117 Z M 12.415 2.739 L 11.355 1.678 L 9.951 3.082 L 11.685 4.049 L 12.415 2.739 Z M 10.565 3.081 L 11.625 4.142 L 13.336 2.431 L 11.043 1.659 L 10.565 3.081 Z M 1.169 6.4 L -0.074 5.56 L -0.641 6.4 L -0.074 7.24 L 1.169 6.4 Z M 4.373 9.273 L 3.693 10.61 L 4.664 11.103 L 5.434 10.333 L 4.373 9.273 Z M 5.435 9.719 L 4.375 8.658 L 2.664 10.369 L 4.957 11.141 L 5.435 9.719 Z M 11.627 3.527 L 12.307 2.19 L 11.336 1.697 L 10.566 2.467 L 11.627 3.527 Z M 14.831 6.4 L 16.074 7.24 L 16.641 6.4 L 16.074 5.56 L 14.831 6.4 Z M 15.305 1.971 C 16.098 1.177 16.098 -0.11 15.305 -0.904 L 13.183 1.217 C 12.806 0.839 12.806 0.227 13.183 -0.15 L 15.305 1.971 Z M 15.304 -0.905 C 14.51 -1.698 13.223 -1.698 12.429 -0.905 L 14.55 1.217 C 14.173 1.594 13.561 1.594 13.183 1.217 L 15.304 -0.905 Z M 12.429 -0.904 L 10.334 1.19 L 12.456 3.311 L 14.55 1.217 L 12.429 -0.904 Z M 11.956 0.86 C 10.737 0.368 9.407 0.1 8 0.1 L 8 3.1 C 9.02 3.1 9.97 3.294 10.834 3.642 L 11.956 0.86 Z M 8 0.1 C 4.018 0.1 0.736 2.24 -1.191 5.322 L 1.353 6.912 C 2.798 4.601 5.172 3.1 8 3.1 L 8 0.1 Z M -1.191 5.322 C -1.603 5.982 -1.603 6.818 -1.191 7.478 L 1.353 5.888 C 1.549 6.201 1.549 6.599 1.353 6.912 L -1.191 5.322 Z M -1.191 7.478 C -0.185 9.088 1.191 10.443 2.854 11.371 L 4.315 8.751 C 3.125 8.087 2.111 7.1 1.353 5.888 L -1.191 7.478 Z M 2.524 9 L 0.696 10.829 L 2.817 12.95 L 4.645 11.122 L 2.524 9 Z M 0.695 10.829 C -0.098 11.623 -0.098 12.91 0.695 13.704 L 2.817 11.583 C 3.194 11.961 3.194 12.573 2.817 12.95 L 0.695 10.829 Z M 0.696 13.705 C 1.49 14.498 2.777 14.498 3.571 13.705 L 1.45 11.583 C 1.827 11.206 2.439 11.206 2.817 11.583 L 0.696 13.705 Z M 3.571 13.704 L 5.666 11.61 L 3.544 9.489 L 1.45 11.583 L 3.571 13.704 Z M 4.044 11.941 C 5.263 12.432 6.593 12.7 8 12.7 L 8 9.7 C 6.98 9.7 6.03 9.506 5.166 9.158 L 4.044 11.941 Z M 8 12.7 C 11.982 12.7 15.264 10.56 17.191 7.478 L 14.647 5.888 C 13.202 8.199 10.828 9.7 8 9.7 L 8 12.7 Z M 17.191 7.478 C 17.603 6.818 17.603 5.982 17.191 5.323 L 14.647 6.912 C 14.451 6.599 14.451 6.201 14.647 5.888 L 17.191 7.478 Z M 17.191 5.322 C 16.185 3.712 14.809 2.357 13.146 1.429 L 11.685 4.049 C 12.875 4.713 13.889 5.7 14.647 6.912 L 17.191 5.322 Z M 13.476 3.8 L 15.304 1.971 L 13.183 -0.15 L 11.355 1.678 L 13.476 3.8 Z M 11.043 1.659 C 10.087 1.338 9.066 1.167 8 1.167 L 8 4.167 C 8.742 4.167 9.44 4.286 10.086 4.503 L 11.043 1.659 Z M 8 1.167 C 4.572 1.167 1.703 2.93 -0.074 5.56 L 2.412 7.24 C 3.693 5.344 5.674 4.167 8 4.167 L 8 1.167 Z M -0.074 7.24 C 0.886 8.661 2.166 9.833 3.693 10.61 L 5.053 7.936 C 4.013 7.407 3.109 6.592 2.412 5.56 L -0.074 7.24 Z M 5.434 10.333 L 11.625 4.142 L 9.504 2.021 L 3.312 8.212 L 5.434 10.333 Z M 6.496 10.779 L 12.688 4.588 L 10.566 2.467 L 4.375 8.658 L 6.496 10.779 Z M 10.947 4.864 C 11.987 5.393 12.891 6.208 13.588 7.24 L 16.074 5.56 C 15.114 4.139 13.834 2.967 12.307 2.19 L 10.947 4.864 Z M 13.588 5.56 C 12.307 7.456 10.326 8.633 8 8.633 L 8 11.633 C 11.428 11.633 14.297 9.87 16.074 7.24 L 13.588 5.56 Z M 8 8.633 C 7.258 8.633 6.56 8.514 5.913 8.297 L 4.957 11.141 C 5.913 11.462 6.934 11.633 8 11.633 L 8 8.633 Z"} fill="currentColor" fillRule="nonzero" />
                </svg>
              </div>
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
              }}>Hide</span>
              <div style={{
                position: "relative",
                width: 16,
                height: 16,
                overflow: "hidden",
                flexShrink: 0,
              }}>
                <svg width={5.333} height={9.333} viewBox="0 0 5.333 9.333" fill="none" style={{
                  position: "absolute",
                  left: 5.333,
                  top: 3.333,
                  width: 5.333,
                  height: 9.333,
                  color: "var(--tokens-popover-foreground)",
                }}>
                  <path d={"M 0.195 0.195 C 0.456 -0.065 0.878 -0.065 1.138 0.195 L 5.138 4.195 C 5.398 4.456 5.398 4.878 5.138 5.138 L 1.138 9.138 C 0.878 9.398 0.456 9.398 0.195 9.138 C -0.065 8.878 -0.065 8.456 0.195 8.195 L 3.724 4.667 L 0.195 1.138 C -0.065 0.878 -0.065 0.456 0.195 0.195 Z"} fill="currentColor" fillRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DataTableHeaderFiltersDropdown;
