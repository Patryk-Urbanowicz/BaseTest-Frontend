import {Form} from "react-router-dom";

export default function QuizInit() {
    return (
        <div >
            <Form>
                <label htmlFor="questionsNumber" > Number of questions: </label>
                <input id="questionsNumber" type="number" min="1" max="100" defaultValue={0}/><br />
                <label htmlFor="questionsType" >Questions type: </label>
                <select id="questionsType" defaultValue="any">
                    <option value="multiple">Multiple Choice</option>
                    <option value="boolean">True/False</option>
                    <option value="any">Any</option>
                </select>
            </Form>
        </div>
    )
}