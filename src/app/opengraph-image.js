import { ImageResponse } from 'next/og';

export const alt = 'Yi-Chi (Trista) Chen — firmware, robotics, validation, and software';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: '#261e30',
          color: '#f4eadf',
          padding: '72px',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 4, color: '#9af7c8' }}>TRISTA.CHEN</div>
        <div style={{ fontSize: 72, marginTop: 18, lineHeight: 1.05 }}>Yi-Chi (Trista) Chen</div>
        <div style={{ fontSize: 32, marginTop: 24, color: '#d9cdc2' }}>
          Firmware, robotics, validation, and software.
        </div>
      </div>
    ),
    { ...size },
  );
}
