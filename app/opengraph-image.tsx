import { ImageResponse } from 'next/og';

export const alt = "XPropTech.in - India's First PropTech Community";
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1e3a8a 0%, #2563eb 50%, #3b82f6 100%)',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 900,
            background: 'linear-gradient(90deg, #93c5fd, #60a5fa, #3b82f6)',
            backgroundClip: 'text',
            color: 'transparent',
          }}
        >
          XPropTech.in
        </div>
        <div style={{ fontSize: 28, color: 'rgba(255,255,255,0.9)', marginTop: 16 }}>
          India's First PropTech Community
        </div>
      </div>
    ),
    { ...size }
  );
}
