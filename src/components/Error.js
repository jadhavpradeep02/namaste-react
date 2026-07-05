import {useRouteError} from "react-router";

const Error = () => {
    const error = useRouteError();

    return (
        <div>
            <h1>Oops!!! Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <h3>Error Details: {error.status} - {error.statusText}</h3>
        </div>
    )
};

export default Error;
