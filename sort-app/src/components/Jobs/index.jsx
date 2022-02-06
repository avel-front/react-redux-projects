import React, {useEffect} from "react";
import api from "../../modules/api/api";
import {JOBS} from "../../modules/api/endpoints";
import {useDispatch, useSelector} from "react-redux";
import {apiActions} from "../../modules/api/actions";


export default function Jobs() {
    const state = useSelector(state => state.api[JOBS])
    const dispatch = useDispatch()

    useEffect(async () => {
        try {
            dispatch(apiActions.fetch(JOBS))
            const data = await api.fetch(JOBS)
            dispatch(apiActions.fetchSuccess(JOBS, data))

        } catch(err) {
            dispatch(apiActions.fetchFailure(JOBS, err))
        }

    }, [])

    console.log(state)

    return (
        <div>
            Jobs Component
        </div>
    )
}