import {getTotalAnswered, getTotalCorrect} from "../../summaryUtil.ts";

export default function Summary() {
    const totalAnswered = getTotalAnswered();
    const totalCorrect = getTotalCorrect();

    return (
        <div>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Summary
            </h1>
            <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total answered: {totalAnswered}</p>
            <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total correct answers: {totalCorrect}</p>
            {
                totalAnswered != 0 &&
                <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total correctness ratio: {Math.floor(totalCorrect / totalAnswered * 100 + 0.5)}%</p>
            }
        </div>
    )
}