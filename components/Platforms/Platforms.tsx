import { Link } from 'lucide-react';
import Image from 'next/image';

export function EachPlatform({ platform }: { platform: any }) {
  return (
    <div className="w-full p-5 flex flex-col items-center">
      <span className="text-2xl font-medium mb-10">
        {platform.platformName}
      </span>
      <div className="grid grid-cols-1 gap-5">
        {platform.platformProducts?.map((product: any, index: number) => (
          <div>
            <EachProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function EachProduct({ product }: { product: any }) {
  return (
    <Link
      target="_blank"
      className="group flex gap-x-5 hover:bg-gray-100 rounded-lg p-4 dark:text-gray-200 transition-all duration-200 dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
      href={product.href}
    >
      <Image
        height={40}
        width={40}
        className="h-10 w-10 hidden dark:block"
        src={product.darkIcon}
        alt=""
      />
      <Image
        height={40}
        width={40}
        className="h-10 w-10 dark:hidden"
        src={product.whiteIcon}
        alt=""
      />

      <div className="grow">
        <p className="font-medium text-gray-800 dark:text-gray-200">
          {product.name}
        </p>
        <p className="text-sm text-gray-500 group-hover:text-gray-800 dark:group-hover:text-gray-200 line-clamp-2">
          {product.des}
        </p>
      </div>
    </Link>
  );
}
