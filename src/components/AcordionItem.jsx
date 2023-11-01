import { useState } from "react"

export default function AcordionItem({ title, body, id }) {


    const [isExpanded, setIsExpanded] = useState(false)

    function handleToggle() {
        setIsExpanded(!isExpanded)
    }
    return (
        <div className="acordion">
            <div className="top">
                <h1>{title}</h1>
                <button className="btn" onClick={handleToggle}>{isExpanded ? "-" : "+"}</button>
            </div>
            {
                isExpanded && (<p className="top">{body}</p>)
            }
        </div>
    )
}