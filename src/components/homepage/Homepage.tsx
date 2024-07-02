export default function Homepage() {
    return (
        <div className="mx-auto w-fit">
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl p-3">
                Homepage
            </h1>
            <p className="mb-4 text-xl font-bold tracking-tight text-gray-900 p-3 leading-1">
                This app allows you to take trivia quests, while also tracking your total number of questions answered
                and rate of correctness.
            </p>
            <p className="mb-4 text-xl font-bold tracking-tight text-gray-900 p-3 leading-1">
                Due to app constraints, however, the tracking information gets vanished after 6 hours. You can aswell force a vanish in Summary tab.
            </p>
        </div>
    )
}