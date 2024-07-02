export default function QuizSummary({maxPoints, achievedPoints, resetHandler}) {
    return (
        <div className="max-w-sm mx-auto text-center text-lg font-medium text-gray-900 border-2 p-6 mt-4">
            <p>Points achieved: {achievedPoints}</p>
            <p>Out of possible: {maxPoints}</p>
            <p>{Math.round(achievedPoints / maxPoints * 100)}%</p>
            <button onClick={resetHandler} className="block bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2">New quiz</button>
        </div>
    )
}