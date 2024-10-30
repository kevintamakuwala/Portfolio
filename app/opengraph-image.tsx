import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export default async function handler(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  // Get parameters from the URL
  const title = searchParams.get('title') || 'Default Title';
  const description = searchParams.get('description') || 'Default Description';
  const imageUrl = searchParams.get('image') || 'https://example.com/default-image.png';
  const theme = searchParams.get('theme') || 'dark';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
          justifyContent: 'center',
          backgroundColor: theme === 'light' ? '#fff' : '#101110',
          color: theme === 'light' ? '#000' : '#fff',
          fontSize: '48px',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <h1 style={{ margin: 0 }}>{title}</h1>
        <p style={{ margin: '10px 0' }}>{description}</p>
        <img
          src={imageUrl}
          alt="Open Graph Image"
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
