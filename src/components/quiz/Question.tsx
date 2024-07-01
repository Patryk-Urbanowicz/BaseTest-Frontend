
export default function Question({question, answerHandler}) {

    const shuffleArray = array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    const handleAnswer = (e) => {
        const answer = e.target.innerText;
        if (answer === question.correct_answer) answerHandler(1);
        else answerHandler(0);
    };

    const answers = structuredClone(question.incorrect_answers);
    answers.push(question.correct_answer);
    shuffleArray(answers);
    console.log(answers);

    return (
        <div className="max-w-sm mx-auto border-2 p-6">
            <p className="text-lg font-medium text-gray-900 pb-6">{question.question}</p>
            {
                answers.map((answer: string, index: number) => (
                    <button key={index} className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2" onClick={handleAnswer}>
                        {answer}
                    </button>
                ))
            }
        </div>
    )
}