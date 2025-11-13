const ANSWERS = {
  "1": "Very Inaccurate",
  "2": "Moderately Inaccurate",
  "3": "Neither Accurate Nor Inaccurate",
  "4": "Moderately Accurate",
  "5": "Very Accurate",
};

export function QuestionCard({
  questionNumber,
  question,
  setAnswer,
  selectedAnswer,
}: {
  questionNumber: number;
  question: string;
  selectedAnswer: string | null;
  setAnswer: (question: string, answer: string) => void;
}) {
  return (
    <div className="border-blue-900 border-t-4 p-5 shadow-sm grid space-y-4">
      <p className="font-bold">
        {questionNumber}. {question}
      </p>
      <div className="flex flex-wrap sm:flex-nowrap justify-center gap-3 sm:justify-evenly">
        {Object.entries(ANSWERS).map(([key, value]) => (
          <>
            <label
              key={key}
              className={`flex items-center space-x-2 border-2 rounded-lg px-3 py-1 cursor-pointer transition-all hover:border-blue-600 hover:text-blue-600 ${
                selectedAnswer === key
                  ? "border-blue-600 text-blue-600 bg-blue-50"
                  : "border-gray-400 text-gray-400"
              }`}
            >
              {value}

              <input
                type="radio"
                name={`question-${questionNumber}`}
                value={key}
                checked={selectedAnswer === key}
                onChange={() => {
                  setAnswer(questionNumber.toString(), key);
                }}
                className="hidden"
              />
            </label>
          </>
        ))}
      </div>
    </div>
  );
}
