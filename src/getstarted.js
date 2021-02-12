import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Started = props => {
    const location = useLocation();

    useEffect(() => {
       console.log(location.pathname); // result: '/secondpage'
       console.log(location.search); // result: '?query=abc'
       console.log(location.state.detail); // result: 'some_value'
    }, [location]);
    return(
        <div>started</div>
    )

};
export default Started;