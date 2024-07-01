import {useState} from "react";
import Question from "./Question.tsx";
import QuizSummary from "./QuizSummary.tsx";

export default function Quiz({questions}) {

    function handleAnswer(newPoints: number) {
        setPoints(points + newPoints);
        setCurrentQuestion(currentQuestion + 1);
        if (currentQuestion >= numberOfQuestions) setIsCompleted(true);
    }

    console.log(questions);

    const numberOfQuestions = questions.length;
    const [points, setPoints] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isCompleted, setIsCompleted] = useState(false);


    return (
        <>
            {!isCompleted && (
                <>
                    <p>Question {currentQuestion + 1}/{numberOfQuestions}</p>
                    <p>Points: {points}</p>
                    <Question question={questions[currentQuestion]} answerHandler={handleAnswer} />
                </>

            )}
            {isCompleted && <QuizSummary />}
        </>
    )
}