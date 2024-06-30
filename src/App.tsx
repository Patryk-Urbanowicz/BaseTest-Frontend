import './App.css'
import {createHashRouter, RouterProvider} from "react-router-dom";
import Root from "./routes/Root.tsx";
import Summary from "./components/summary/Summary.tsx";
import Error from "./components/Error.tsx";
import QuizInit from "./components/quiz/QuizInit.tsx";

function App() {
    const router = createHashRouter([{
        path: "/",
        element: <Root />,
        children: [
            {
                path: 'quiz',
                element: <QuizInit />
            },
            {
                path: 'summary',
                element: <Summary />
            },
        ],
        errorElement: <Error />
    }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default App
