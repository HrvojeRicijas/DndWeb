import  Axios  from "axios";
import { useEffect, useState } from "react";

const AxiosCalls = (props) => {
    const [call, setCall] = useState("");
    const [url, setUrl] = useState("");
    const [id, setId] = useState("");

    useEffect (() => {
        setCall(props.call);
        setUrl(props.url);
        setId(props.id);
    })
}

export default AxiosCalls