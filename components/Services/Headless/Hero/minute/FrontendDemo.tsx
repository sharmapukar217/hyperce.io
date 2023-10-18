export default function FrontendDemo({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <a
      className="mt-10 w-fit bg-opacity-70 hover:scale-[102%] transition duration-200 text-white hover:bg-opacity-75 flex justify-center items-center gap-x-3 text-center border-white font-bold shadow-lg shadow-transparent border border-transparent text-sm rounded-full py-3 px-6"
      href={link}
      target="_blank"
    >
      {name}
    </a>
  );
}
