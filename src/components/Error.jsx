import { useRouteError } from "react-router-dom"

const Error = () => {

    const error = useRouteError();
    console.log(error); // Output: { statusText: 'Not Found', status: 404
    return (
        <div>
            <h1>OOPS !!</h1>
            <h2>error found</h2>
            <h2>{error.status + ":" + error.statusText}</h2>
        </div>
    )
}

export default  Error