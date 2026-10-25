import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#090a0d",
          color: "#f3efe6",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: 48,
            height: 4,
            background: "#a9b6ff",
            marginBottom: 16,
            display: "flex",
          }}
        />
        <div style={{ fontSize: 68, fontWeight: 600, letterSpacing: -2, display: "flex" }}>PP</div>
      </div>
    ),
    { ...size },
  );
}
