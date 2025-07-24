import sharp from 'sharp';
import { NextResponse, type NextRequest } from 'next/server';

const loadIconFromIconify = async (iconName: string | null, color?: string) => {
  try {
    if (!iconName) return null;
    const [prefix, icon] = iconName.split(':');

    const url = new URL(`https://api.iconify.design/${prefix}/${icon}.svg`);
    if (color) {
      url.searchParams.set('color', color);
    }

    const response = await fetch(url.toString());
    if (response.ok) return await response.text();

    return null;
  } catch {
    return null;
  }
};

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const iconName = request.nextUrl.searchParams.get('icon');
  const color = request.nextUrl.searchParams.get('color') ?? undefined;

  const iconData = await loadIconFromIconify(iconName, color);

  if (iconData) {
    const pngBuffer = await sharp(Buffer.from(iconData))
      .resize(128, 128, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();

    return new Response(pngBuffer, {
      headers: {
        'Content-Type': 'image/webp',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  return NextResponse.json(
    { message: `icon '${iconName}' not found.` },
    { status: 404 }
  );
}
