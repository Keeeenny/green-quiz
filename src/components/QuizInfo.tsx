import type { LucideIcon } from "lucide-react";
import { Brain, Award, BookOpen, Users } from "lucide-react";

type Feature = {
    icon: LucideIcon,
    title: string,
    description: string
}

const QuizInfo = () => {
  const FEATURES: Feature[] = [
    {
      icon: Brain,
      title: "Test Your Knowledge",
      description:
        "Challenge yourself with questions covering climate science, environmental impacts, and solutions.",
    },
    {
      icon: BookOpen,
      title: "Learn as You Go",
      description:
        "Each question comes with detailed explanations to expand your understanding of climate issues.",
    },
    {
      icon: Award,
      title: "Track Your Progress",
      description:
        "See how well you perform and discover areas where you can learn more about climate change.",
    },
    {
      icon: Users,
      title: "Share Knowledge",
      description:
        "Compare your results and help spread awareness about climate change in your community.",
    },
  ];
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Climate Quiz Covers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our comprehensive quiz explores various aspects of climate change, from basic science to practical solutions.
          </p>
        </div>
        

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300 hover:bg-gray-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                <feature.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Climate change affects us all. By understanding the science and solutions, 
            you're taking an important step toward creating positive change for our planet.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuizInfo;
