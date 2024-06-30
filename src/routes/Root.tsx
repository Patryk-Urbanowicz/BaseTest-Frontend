import {Link, Outlet} from "react-router-dom";

export default function Root() {
    return (
        <>
            <nav>
                <ul className={'flex bg-blue-400 pt-2 pb-2'}>
                    <li>
                        <Link to={'/'}>
                            <p className={'mr-3 ml-2 bg-amber-400 hover:bg-amber-600 p-2 border-2 bd border-amber-950 rounded-md'}> Homepage </p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'quiz'}>
                            <p className={'mr-3 ml-2 bg-amber-400 hover:bg-amber-600 p-2 border-2 bd border-amber-950 rounded-md'}> Quiz
                                page </p>
                        </Link>
                    </li>
                    <li>
                        <Link to={'summary'}>
                            <p className={'mr-3 ml-2 bg-amber-400 hover:bg-amber-600 p-2 border-2 bd border-amber-950 rounded-md'}> Summary </p>
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}