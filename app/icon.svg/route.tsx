import { cache } from 'react';
import { NextResponse, type NextRequest } from 'next/server';

const loadIconFromIconify = async (iconName: string) => {
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

export async function GET(request: NextRequest) {
  const iconName = request.nextUrl.searchParams.get('icon');
  const iconData = await loadIconFromIconify(iconName);

  if (iconData) {
    return new Response(iconData, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable'
      }
    });
  }

  return NextResponse.json(
    { message: `icon '${iconName}' not found.` },
    { status: 404 }
  );
}
