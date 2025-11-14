const ANSWERS = {
  "1": "Very Inaccurate",
  "2": "Moderately Inaccurate",
  "3": "Neither Accurate Nor Inaccurate",
  "4": "Moderately Accurate",
  "5": "Very Accurate",
};

interface QuestionCardProps {
  questionNumber: number;
  question: string;
  selectedAnswer: string | null;
  setAnswer: (questionNumber: string, answer: string) => void;
}

export function QuestionCard({
  questionNumber,
  question,
  setAnswer,
  selectedAnswer,
}: QuestionCardProps) {
  return (
    <div className="border-blue-950 border-t-4 p-5 shadow-md grid gap-4">
      <p className="font-bold tracking-wide">
        {questionNumber}. {question}
      </p>
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-evenly">
        {Object.entries(ANSWERS).map(([key, value]) => (
          <label
            key={key}
            className={`flex items-center font-semibold space-x-2 border-2 rounded-lg px-3 py-1 cursor-pointer transition-all hover:border-blue-600 whitespace-nowrap hover:text-blue-600 text-center truncate ${
              selectedAnswer === key
                ? "border-blue-600 text-blue-600 bg-blue-50"
                : "border-gray-500 text-gray-500"
            }`}
            title={value}
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
        ))}
      </div>
    </div>
  );
}
