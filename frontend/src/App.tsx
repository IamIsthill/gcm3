import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { QuestionCard } from "./QuestionCard";
import { useSaveAnswer } from "./hook";

const questions = [
  "I worry about things.",
  "I make friends easily.",
  "I have a vivid imagination.",
];

function App() {
  const [submitted, setSubmitted] = useState({
    Q1: null,
    Q2: null,
    Q3: null,
  });
  const { loading, saveAnswer } = useSaveAnswer();

  const setAnswer = (question: string, answer: string) => {
    const questionString = `Q${question}`;
    setSubmitted((prev) => ({ ...prev, [questionString]: answer }));
  };

  const submitAnswer = async () => {
    if (Object.values(submitted).some((answer) => answer === null)) {
      return toast.error("Please answer all the questions.");
    }

    const success = await saveAnswer(submitted);

    if (success) {
      toast.success("Answers saved successfully");
      setSubmitted({ Q1: null, Q2: null, Q3: null });
    } else {
      toast.error(
        "Something went wrong. Please try submitting again your answers"
      );
    }
  };

  return (
    <>
      <div className="my-10 mx-5 md:mx-5 md:mt-10 grid gap-10 sm:gap-8">
        <div className="grid gap-6 sm:gap-8">
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              questionNumber={index + 1}
              question={question}
              setAnswer={setAnswer}
              selectedAnswer={
                submitted[`Q${index + 1}` as keyof typeof submitted]
              }
            />
          ))}
        </div>

        <div className="flex sm:justify-start">
          <button
            className={`text-white font-medium px-4 text-lg py-2 rounded-lg transition-colors ${
              loading
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-gray-500 cursor-pointer"
            }`}
            onClick={submitAnswer}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </div>
      </div>

      <ToastContainer />
    </>
  );
}

export default App;
