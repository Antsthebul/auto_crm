import { AppContext } from "../../types"

export const TEXT_TO_STATUS = {
    "NOT_FOUND":404,
    "BAD_DATA":400,
    "UNAUTHORIZED":401,
    "SUCCESS":200,
    "PROCESSED":201,
    "SERVER_ERROR":500
}

export type TextToStatus = keyof typeof TEXT_TO_STATUS
//** Returns HTTP status code or defaults to 500 if key not found  */
export function getStatusFromText(text: TextToStatus  | null): number{
    return text ? TEXT_TO_STATUS[text] : 500
}

export function setResponse(ctx:AppContext, {hasErr, details, data}:{hasErr:boolean, 
    details:TextToStatus|null, data:any
}){
    let response
    let status = getStatusFromText(details)
    if (hasErr){
        response = {error:{details, message:data}}
    }else{
        if (!details){
            status = 200
        }
        response = {data}
    }
    ctx.response.body = response
    ctx.response.status = status
}