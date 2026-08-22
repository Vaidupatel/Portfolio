import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';

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
            fontFamily: 'serif',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '32px',
            }}
          >
            <div
              style={{
                width: '16px',
                height: '16px',
                borderRadius: '999px',
                backgroundColor: '#D97706',
              }}
            />
            <span
              style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#171714',
                letterSpacing: '-0.02em',
              }}
            >
              Vaidik Ghelani
            </span>
          </div>

          <h1
            style={{
              fontSize: '56px',
              fontWeight: 800,
              color: '#171714',
              lineHeight: 1.1,
              maxWidth: '900px',
              letterSpacing: '-0.03em',
            }}
          >
            {title}
          </h1>

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
  } catch {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
