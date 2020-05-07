
import React,{Fragment} from "react";
import "mdbreact/dist/css/mdb.css";
import "bootstrap-css-only/css/bootstrap.min.css";

const HomePage = () => {
    return (
        <Fragment>
            <button type="button" class="btn btn-primary btn-rounded">SignUp</button>
            <button type="button" class="btn btn-default btn-rounded">SignIn</button>
        </Fragment>

    );
};

export default HomePage;