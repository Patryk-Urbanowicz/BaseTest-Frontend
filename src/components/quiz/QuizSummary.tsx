export default function QuizSummary({maxPoints, achievedPoints}) {
    return(
        <div className="max-w-sm mx-auto text-center text-lg font-medium text-gray-900 border-2 p-6 mt-4">
            <p>Points achieved: {achievedPoints}</p>
            <p>Out of possible: {maxPoints}</p>
            <p>{Math.round(achievedPoints/maxPoints*100)}%</p>
        </div>
    )
}