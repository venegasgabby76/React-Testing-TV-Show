import React from "react";

export const fetchShow = () => {
    return axios
    .get("https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes")
    .then(response => {
        console.log(response);
        return response;
    })
    .catch(error => {
        console.error("error fetchong your api data, error:", error.message);
        return error;
    })
}