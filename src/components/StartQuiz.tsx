import StartQuizButton from "./StartQuizButton";
// import { Button } from "@/components/ui/button";

const StartQuiz = () => {


  return (
    <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Start Your Climate Journey Today
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Take the first step toward becoming a climate champion. 
          Test your knowledge and discover new insights about our changing planet.
        </p>
        
        <div className="space-y-4">
          <StartQuizButton />
          
          <p className="text-sm text-gray-500 mt-4">
            ⏱️ Takes about 5-10 minutes • 📚 Educational content included
          </p>
        </div>
        
        <div className="mt-12 flex justify-center space-x-8 text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-green-600">✓</span>
            <span>No registration required</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-blue-600">✓</span>
            <span>Instant results</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-orange-600">✓</span>
            <span>Educational explanations</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartQuiz;