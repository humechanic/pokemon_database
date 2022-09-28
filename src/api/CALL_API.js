import * as axios from "axios";
import { ROOT_API } from "../constants/globalConstants";

export const CALL_API = "CALL_API";

/**
 * @param {string} endpoint
 * @param {*} schema
 * @param  {...any} params
 * @returns
 * @param {number} count
 * @param {string|null} next
 * @param {string|null} previous
 * @param {array} results
 */
const callApi = (endpoint, schema, ...params) => {
    const fullUrl =
        endpoint.indexOf(ROOT_API) === -1 ? ROOT_API + endpoint : endpoint;

    return axios(fullUrl).then((response) => response.data);
};

export default (store) => (next) => (action) => {
    const apiData = action[CALL_API];

    if (typeof apiData === "undefined") {
        return next(action);
    }

    let { endpoint } = apiData;
    const { schema, types } = apiData;

    if (typeof endpoint === "function") {
        endpoint = endpoint(store.getState());
    }

    if (typeof endpoint !== "string") {
        throw new Error("Specify a string endpoint URL.");
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error("Expected an array of three action types.");
    }
    if (!types.every((type) => typeof type === "string")) {
        throw new Error("Expected action types to be strings.");
    }

    const [requestType, successType, failureType] = types;

    const actionWith = (data) => {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    };

    const initialPayload = apiData.payload;
    next(
        actionWith({
            type: requestType,
            payload: apiData.payload,
            initialPayload: initialPayload, //to be consistent with other 2 actions
        })
    );

    return callApi(endpoint, schema).then(
        (response) =>
            next(
                actionWith({
                    payload: response,
                    type: successType,
                })
            ),
        (error) =>
            next(
                actionWith({
                    type: failureType,
                    error: error.message || "Unhandled error",
                })
            )
    );
};
