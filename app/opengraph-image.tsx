import { ImageResponse } from "next/og";

export const alt = "Prince Pandey — Software Engineer, Backend Developer, and DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#090a0d",
          color: "#f3efe6",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 4, color: "#b7b1a6" }}>
          PRINCE PANDEY
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 64,
            lineHeight: 1.05,
            letterSpacing: -2,
            maxWidth: 980,
          }}
        >
          Building Scalable Backend Systems & Cloud-Native Solutions.
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#b7b1a6" }}>
          Software Engineer · Backend · DevOps · Noida, India
        </div>
      </div>
    ),
    { ...size },
  );
}
