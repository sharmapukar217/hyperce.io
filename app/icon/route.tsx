import sharp from 'sharp';
import { NextResponse, type NextRequest } from 'next/server';

const loadIconFromIconify = async (iconName: string | null) => {
  try {
    if (!iconName) return null;
    const [prefix, icon] = iconName.split(':');

    const response = await fetch(
      `https://api.iconify.design/${prefix}/${icon}.svg`
    );
    if (response.ok) return await response.text();

    return null;
  } catch {
    return null;
  }
};

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const iconName = request.nextUrl.searchParams.get('icon');
  const iconData = await loadIconFromIconify(iconName);

  if (iconData) {
    const pngBuffer = await sharp(Buffer.from(iconData))
      .resize(128, 128)
      .webp({ alphaQuality: 0 })
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
