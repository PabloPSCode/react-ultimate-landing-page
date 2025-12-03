"use client";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { MinusCircleIcon, PlusCircleIcon } from "@phosphor-icons/react";
import clsx from "clsx";


interface IQuestion {
  id: string;
  question: string;
  answer: string;
}

interface FaqCollapsibleCardProps {
  questions: IQuestion[];
}

export default function FaqCollapsibleCard({ questions }: FaqCollapsibleCardProps) {
  const [openedQuestions, setOpenedQuestions] = useState<number[]>([]);

  const toggleQuestion = (questionIndex: number) => {
    setOpenedQuestions((prev) =>
      prev.includes(questionIndex)
        ? prev.filter((index) => index !== questionIndex)
        : [...prev, questionIndex]
    );
  };

  return (
    <div className="w-full overflow-hidden rounded-md border border-border-card bg-bg-card text-foreground shadow-sm">
      <div className="divide-y divide-border-card/70">
        {questions.map((question, i) => {
          const isOpen = openedQuestions.includes(i);
          const answerId = `faq-answer-${question.id ?? i}`;

          return (
            <div key={question.id ?? `${question.question}-${i}`} className="w-full">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggleQuestion(i)}
                className={clsx(
                  "flex w-full items-start justify-between gap-3 p-4 sm:p-5 text-left transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-400/40",
                  isOpen ? "bg-foreground/5" : "hover:bg-foreground/5"
                )}
              >
                <span className="text-sm sm:text-base font-semibold leading-snug">
                  {question.question}
                </span>
                <span className="flex size-8 items-center justify-center rounded-full text-primary-600">
                  {isOpen ? (
                    <MinusCircleIcon size={22} weight="bold" />
                  ) : (
                    <PlusCircleIcon size={22} weight="bold" />
                  )}
                </span>
              </button>

              <Collapse isOpened={isOpen}>
                <div
                  id={answerId}
                  className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed text-foreground/80"
                >
                  {question.answer}
                </div>
              </Collapse>
            </div>
          );
        })}
      </div>
    </div>
  );
}
