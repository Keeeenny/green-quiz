import Main from "../components/Main";
import QuizInfo from "../components/QuizInfo";
import StartQuiz from "../components/StartQuiz";

const Index = () => {
  return (
    <div className="relative flex min-h-screen flex-col justify-between bg-blue-700">
      <Main />
      <QuizInfo />
      <StartQuiz />
    </div>
  );
};

export default Index;
