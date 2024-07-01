import {SyntheticEvent, useState} from "react";
import QuizForm from "./QuizForm.tsx";
import Quiz from "./Quiz.tsx";

export default function QuizInit() {

    async function handleSubmit(submitEvent: SyntheticEvent<HTMLFormElement>) {
        submitEvent.preventDefault();
        const form = submitEvent.currentTarget;
        const formElements = form.elements;
        const questionsNumber = formElements.questionsNumber.value;
        const questionsType = formElements.questionsType.value;

        const requestURL = `https://opentdb.com/api.php?amount=${questionsNumber}&type=${questionsType}`;
        const response = await fetch(requestURL);
        if (response.status !== 200) {
            alert('API error! Try using the app at another time.')
            return;
        }
        const requestData = await response.json();
        if (requestData.response_code === 1 || requestData.response_code === 4) alert('Out of questions with given criteria! Try changing criteria/number of expected questions or reset your session in \'summary\' tab');
        else if (requestData.response_code === 2) alert('Wrong criteria! Try changing them.');
        else if (requestData.response_code === 3) alert('Stale session! Try refreshing page or reseting it in \'summary\' tab');
        else if (requestData.response_code === 5) alert('Slow down! Too many requests from your ip.');
        else if (requestData.response_code === 0) {
            //gotten data
            setQuestions(requestData.results);
            setIsSubmited(true);
        }
    }

    const handleReset = () => {
        setIsSubmited(false);
    }

    const [isSubmited, setIsSubmited] = useState(false);
    const [questions, setQuestions] = useState();

    return (
        <>
            {!isSubmited && <QuizForm handler={handleSubmit} />}
            {isSubmited && <Quiz questions={questions} resetHandler={handleReset}/>}
        </>

    )
}