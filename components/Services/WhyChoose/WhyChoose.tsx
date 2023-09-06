import Card from "./Card";

export default function WhyChoose() {
  return (
    <section className="  text-white container mx-auto py-20 mb-20 px-10 bg-gradient-to-r from-[#101525] to-[#212642] rounded-3xl">
      <div className="flex items-center flex-col gap-5">
        <span className="text-2xl md:text-4xl font-bold text-center">
          Why Choose Headless E-commerce ?!
        </span>
        <p className="w-3/4 text-base md:text-xl text-center">
          Take the opportunity to elevate your business to new heights with our
          futuristic ecommerce platforms and AI-powered ecommerce solutions.
          Take the opportunity to elevate your business to new heights with our
          futuristic ecommerce platforms and AI-powered ecommerce solutions.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-20 w-fit lg:grid-cols-4 md:px-20 py-10">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </section>
  );
}
