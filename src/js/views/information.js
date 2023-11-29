import { useParams } from "react-router"
import React from "react";

export const Information = ({ type, ...data }) => {
    const params = useParams();

    console.log("params", params);

    return <></>;
}