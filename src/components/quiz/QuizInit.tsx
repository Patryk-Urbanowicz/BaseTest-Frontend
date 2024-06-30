import {Form} from "react-router-dom";

export default function QuizInit() {
    return (
        <div >
            <Form className="max-w-sm mx-auto">


                <label htmlFor="questionsType" className="block mb-2 text-sm font-medium text-gray-900">Questions
                    type:</label>
                <select id="questionsType" defaultValue="any"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                            focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                    <option value="any">Any</option>
                </select>

                <label htmlFor="number-input" className="block mb-2 text-sm font-medium text-gray-900"> Number of questions: </label>
                <input type="number" id="questionsNumber" aria-describedby="helper-text-explanation"
                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                       required defaultValue={10}/>

                <input type="submit"
                        className="mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" />
            </Form>
        </div>
    )
}