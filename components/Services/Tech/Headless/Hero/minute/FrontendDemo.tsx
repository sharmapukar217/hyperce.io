export default function FrontendDemo({
  link,
  name
}: {
  link: string;
  name: string;
}) {
  return (
    <a
      // className="mt-10 w-fit bg-opacity-70 hover:scale-[102%] transition duration-200 hover:bg-opacity-75 flex justify-center items-center gap-x-3 text-center font-bold shadow-lg shadow-transparent border border-black dark:border-white text-sm rounded-full py-3 px-6"
      className="mt-10 py-3 px-6 border rounded-full hover:scale-[102%] hover:shadow-2xl transition border-black dark:border-white"
      href={link}
      target="_blank"
    >
      {name}
    </a>
  );
}
