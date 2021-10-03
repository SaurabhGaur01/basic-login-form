import React from "react";
import SavePost from "./SavePost";
import ViewPost from "./ViewPost";

const HomePage = () => (
    <div className="d-flex justify-content-around">
        <SavePost />
        <ViewPost />
    </div>
)

export default HomePage;