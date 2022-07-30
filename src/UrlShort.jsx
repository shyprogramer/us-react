import { useEffect } from "react";
import {useParams} from "react-router-dom"

function UrlShort(){

    let { code } = useParams()

    useEffect(() => {
        fetch(`https://shyprogramer-python-project-v6jrqv454hjj5-8000.githubpreview.dev/url/${code}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            window.location.href = data.url
        })
    }, [code])

    return (
        <div>
        </div>
    )
}

export default UrlShort;