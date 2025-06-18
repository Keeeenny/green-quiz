// import StartButton from "./StartButton";
import { Leaf, Globe, ThermometerSun } from "lucide-react";

const Main = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 to-blue-50 px-6 py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-25">
        <div className="absolute left-10 top-10 text-green-300">
          <Leaf size={120} />
        </div>
        <div className="absolute bottom-10 right-10 text-blue-300">
          <Globe size={100} />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-orange-300">
          <ThermometerSun size={80} />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-5xl font-bold leading-tight text-gray-800 md:text-6xl">
          Test Your
          <span className="block text-green-600">Climate Knowledge</span>
        </h1>

        <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
          Understanding climate change is the first step toward making a
          difference. Discover how much you know about our planet's climate and
          learn fascinating facts along the way.
        </p>

        <div className="mb-8 flex justify-center space-x-8 text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>Educational</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
            <span>Science-Based</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
            <span>Interactive</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
