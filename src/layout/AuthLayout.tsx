import React, { ReactNode } from "react";
export function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "center",
        width: "100%",
        height: "100vh",
        justifyContent: "space-between",
        gap: "20px",
        // padding: "5vh 20px",
      }}
    >
      <div
        style={{
          height: "94vh",
          justifyContent: "center",
          alignContent: "center",
          alignSelf: "center",
          backgroundColor: "black",
          width: "90%",
          borderRadius: "0 20px 20px 0",
          flex: 0.6,
        }}
      >
        Hey there!
      </div>
      <div style={{ flex: 0.4 }}>{children}</div>
    </div>
  );
}
