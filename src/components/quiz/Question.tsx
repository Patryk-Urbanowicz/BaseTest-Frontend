
export default function Question({question, answerHandler}) {

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const handleAnswer = () => answerHandler(1);

    const answers = structuredClone(question.incorrect_answers);
    answers.push(question.correct_answer);
    shuffleArray(answers);
    console.log(answers);

    return (
        <>
            <p>Question: {question.question}</p>
            {

                answers.map((answer: string, index: number) => (<p key={index}>{answer}</p>))
            }
            <button onClick={handleAnswer}>To jest Button</button>
        </>
    )
}