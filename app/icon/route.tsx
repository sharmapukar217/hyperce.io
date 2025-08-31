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

// Helper function to modify the color of the SVG content
const changeSvgColor = (svgContent: string, color: string) => {
  return svgContent.replace(/fill="([^"]*)"/g, `fill="${color}"`);
};

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const iconName = request.nextUrl.searchParams.get('icon');
  const color = request.nextUrl.searchParams.get('color') || '#000000'; // Default to black if no color is provided

  const iconData = await loadIconFromIconify(iconName);

  if (iconData) {
    const svgData =
      color !== '#000000' ? changeSvgColor(iconData, color) : iconData;

    const pngBuffer = await sharp(Buffer.from(svgData))
      .resize(128, 128, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 }
      })
      .png()
      .toBuffer();

    // @ts-expect-error
    return new Response(pngBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  return NextResponse.json(
    { message: `Icon '${iconName}' not found.` },
    { status: 404 }
  );
}
