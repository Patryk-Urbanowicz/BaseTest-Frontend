import {useState} from "react";
import Question from "./Question.tsx";
import QuizSummary from "./QuizSummary.tsx";

export default function Quiz({questions, resetHandler}) {

    function handleAnswer(newPoints: number) {
        setPoints(points + newPoints);
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion >= numberOfQuestions-1) setIsCompleted(true);
    }

    const numberOfQuestions = questions.length;
    const [points, setPoints] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);


    return (
        <div className="m-2">
            {!isCompleted && (
                <>
                    <div className="max-w-sm mx-auto text-center p-5 text-lg font-medium text-gray-900">
                        <p>Question {currentQuestion + 1}/{numberOfQuestions}</p>
                        <p>Points: {points}</p>
                    </div>

                    <Question question={questions[currentQuestion]} answerHandler={handleAnswer} resetHandler={resetHandler}/>
                </>

            )}
            {isCompleted && <QuizSummary maxPoints={numberOfQuestions} achievedPoints={points} resetHandler={resetHandler}/>}
        </div>
    )
}