import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, HelpCircle, RotateCcw } from 'lucide-react';
import type { QuizQuestion } from '../types/birthday.ts';

interface FriendshipQuizProps {
  title: string;
  subtitle: string;
  questions: QuizQuestion[];
  closingMessage: string;
}

export function FriendshipQuiz({
  title,
  subtitle,
  questions,
  closingMessage,
}: FriendshipQuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQuestion?.correctAnswer;

  const handleSelectOption = (option: string) => {
    if (isAnswered) return;
    setSelectedOption(option);
    if (option === currentQuestion.correctAnswer) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setFinished(true);
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setScore(0);
    setFinished(false);
  };

  return (
    <section className="border-b border-[#E8C2D4]/60 bg-[#FCE7F0]/35 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            Friendship Quiz
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-[#6E4A5D]">{subtitle}</p>
        </div>

        <div className="mt-10 rounded-2xl border border-[#E8C2D4] bg-white p-6 shadow-sm sm:p-8">
          {!finished && currentQuestion ? (
            <div>
              <div className="flex items-center justify-between text-xs text-[#6E4A5D]">
                <span className="tabular-nums">
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="tabular-nums">Score: {score}</span>
              </div>

              {/* Subtle progress track */}
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#FCE7F0]">
                <div
                  className="h-full rounded-full bg-[#9C6580] transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              <h3 className="mt-6 font-serif text-2xl font-semibold text-[#3B1E2D]">
                {currentQuestion.question}
              </h3>

              <div className="mt-5 grid gap-3">
                {currentQuestion.options.map((option) => {
                  const chosen = selectedOption === option;
                  const rightOption = option === currentQuestion.correctAnswer;

                  let stateStyle =
                    'border-[#E8C2D4] bg-[#FFF6EF]/60 text-[#3B1E2D] hover:bg-[#FCE7F0]/70';
                  if (isAnswered) {
                    if (rightOption) {
                      stateStyle = 'border-[#9C6580] bg-[#FCE7F0] text-[#3B1E2D] font-medium';
                    } else if (chosen) {
                      stateStyle = 'border-[#E7D9C8] bg-[#E7D9C8]/45 text-[#6E4A5D]';
                    } else {
                      stateStyle = 'border-[#E8C2D4]/50 bg-white text-[#6E4A5D] opacity-65';
                    }
                  }

                  return (
                    <button
                      key={option}
                      type="button"
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(option)}
                      className={`flex min-h-[46px] w-full cursor-pointer items-center justify-between rounded-xl border px-4 py-3 text-left text-sm transition-colors disabled:cursor-default ${stateStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && rightOption && (
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-[#9C6580]" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <div className="mt-5 rounded-xl border border-[#E8C2D4] bg-[#FFF6EF] p-4">
                  <p className="text-sm leading-relaxed text-[#3B1E2D]">
                    {isCorrect ? currentQuestion.feedbackCorrect : currentQuestion.feedbackWrong}
                  </p>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="mt-4 inline-flex min-h-[42px] cursor-pointer items-center gap-2 rounded-xl bg-[#9C6580] px-5 py-2 text-xs font-medium text-white hover:bg-[#85526B]"
                  >
                    <span>
                      {currentIndex + 1 >= questions.length ? 'See Final Score' : 'Next Question'}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="py-4 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#FCE7F0] text-[#9C6580]">
                <HelpCircle className="h-6 w-6" aria-hidden="true" />
              </div>

              <p className="mt-4 text-xs tracking-widest text-[#9C6580] uppercase">
                Quiz Complete
              </p>
              <h3 className="mt-1 font-serif text-4xl font-semibold text-[#3B1E2D] tabular-nums">
                {score} / {questions.length}
              </h3>

              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-[#6E4A5D] sm:text-base">
                {closingMessage}
              </p>

              <button
                type="button"
                onClick={handleRestart}
                className="mt-6 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl border border-[#E8C2D4] bg-[#FFF6EF] px-5 py-2.5 text-xs font-medium text-[#3B1E2D] hover:bg-[#FCE7F0]"
              >
                <RotateCcw className="h-3.5 w-3.5 text-[#9C6580]" aria-hidden="true" />
                <span>Play Again</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
