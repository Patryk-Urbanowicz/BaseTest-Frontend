import {getTotalAnswered, getTotalCorrect} from "../../summaryUtil.ts";
import {resetToken} from "../../util.ts";

export default function Summary() {
    const totalAnswered = getTotalAnswered();
    const totalCorrect = getTotalCorrect();

    return (
        <div className="mx-auto p-3 w-fit">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
                Summary
            </h1>
            <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total answered: {totalAnswered}</p>
            <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total correct answers: {totalCorrect}</p>
            {
                totalAnswered != 0 &&
                <p className="mb-4 text-xl font-bold leading-none tracking-tight text-gray-900">Total correctness ratio: {Math.floor(totalCorrect / totalAnswered * 100 + 0.5)}%</p>
            }
            <button className="block mx-auto bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2" onClick={() => {
                resetToken().then(() => location.reload());
            }}>
                Reset tracking
            </button>
        </div>
    )
}