import { ArrowRight, Play } from "lucide-react";

const StartQuizButton = () => {
  function handleStartQuiz() {
    alert("Ciao");
  }
  return (
    <button
      onClick={handleStartQuiz}
      className="group m-auto flex transform cursor-pointer rounded-full bg-green-600 px-8 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:scale-105 hover:bg-green-700 hover:shadow-xl"
    >
      <Play className="mr-2 group-hover:animate-pulse" size={24} />
      Start Climate Quiz
      <ArrowRight
        className="ml-2 transition-transform group-hover:translate-x-1"
        size={24}
      />
    </button>
  );
};

export default StartQuizButton;
