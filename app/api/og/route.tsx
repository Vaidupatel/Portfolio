import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'Vaidik Ghelani';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#FAF8F2',
            padding: '80px',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Logo Brandmark */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                backgroundColor: '#D97706',
                display: 'flex',
                borderRadius: '6px',
              }}
            />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#171714',
                letterSpacing: '1px',
              }}
            >
              VG / STUDIO
            </span>
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: '60px',
              fontWeight: 'bold',
              color: '#171714',
              lineHeight: 1.15,
              letterSpacing: '-1.5px',
              maxWidth: '960px',
              margin: 0,
            }}
          >
            {title}
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: '24px',
              color: '#55534D',
              marginTop: '24px',
            }}
          >
            Independent Software Studio · Ahmedabad, IN
          </p>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
