interface DemoCredentialsInterface {
  productName: string;
  demoEmail: string;
  demoPassword: string;
  qrSource: string;
  demoLink: string;
}

export default function DemoCredentials({
  productName,
  demoEmail,
  demoPassword,
  qrSource,
  demoLink
}: DemoCredentialsInterface) {
  return (
    <div className="border rounded-xl py-10 md:px-20 md:max-w-[50vw] flex flex-col lg:flex-row gap-5 justify-center items-center mb-10 container w-[70vw] md:w-full">
      <div className="flex flex-col gap-8 lg:w-1/2 w-fit">
        <div className="demo-button flex justify-start">
          <a href={demoLink} target="_blank">
            <button className="border px-5 py-2 rounded-full shadow-2xl bg-[#357D8A] hover:bg-[#386d76] transition-colors duration-300 text-white">
              Check {productName} Demo
            </button>
          </a>
        </div>
        <div className="flex-col flex items-start gap-3">
          <span className="text-2xl font-bold">Credentials</span>
          <p className="text-left">
            Go to the admin panel and login with the following credentials.
          </p>
          <div className="text-left">
            <div className="email">
              <span className="font-bold text-lg">Email: </span>
              <span className="italic font-light">{demoEmail}</span>
            </div>
            <div className="password">
              <span className="font-bold text-lg">Password: </span>
              <span className="italic font-light"> {demoPassword}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/2 w-[90%] flex justify-center h-auto">
        {/* <Image src={QRCode} height={100} width={300} alt="" /> */}
        <img className="w-[90%] h-aut" src={qrSource} alt="" />
      </div>
    </div>
  );
}
