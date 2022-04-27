import { useState, useEffect } from "react";
import { getGifs} from "../helpers/getGifs";

export const useFetchGif = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })


    useEffect(() => {

        setTimeout( () => {
            getGifs( category)
                .then( imgs => setState( {
                    data: imgs,
                    loading: false
                } ));
        }, 300);

    }, [ ])

    return state; // { data: [], loading: true };
}