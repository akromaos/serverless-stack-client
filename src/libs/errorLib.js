import { Alert } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export function onError(error) {
    let message = error.toString();

    // Auth errors
    if (!(error instanceof Error) && error.message) {
        message = error.message;
    }
    return(
        alert(message)
    )
}
