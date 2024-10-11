import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SparklesText from "@/components/magicui/sparkles-text";

const WelcomePage = () => {
  return (
    <>
      <Header />
      <div className="custom-scrollbar flex">
        <div className="relative w-screen h-fit flex flex-col">
          <SparklesText
            className="mt-20 text-slate-600 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
            text="Welcome to AI-Town!"
          />
          <SparklesText
            className="mb-5 text-slate-600 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center"
            text="Your destination for AI-driven adventures!!"
          />

          <div className="flex justify-center"></div>
          {/* <MarqueeDemo /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WelcomePage;
