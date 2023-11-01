import { useState } from "react"

let index = 4
export default function AcordionInput({ list, setList }) {
    const [textTitle, setTextTitle] = useState("")
    const [textBody, setTextBody] = useState("")

    function handleAdd(e) {
        e.preventDefault()
        setList([
            ...list,
            {
                id: index++,
                title: textTitle,
                body: textBody,

            }
        ])
        setTextBody("")
        setTextTitle("")
        
    }
    return (
        <form>
            <input type="text" placeholder="Insira o Titulo" onChange={(e) => setTextTitle(e.target.value)} />
            <input type="text" placeholder="Conteudo do Acordion" onChange={(e) => setTextBody(e.target.value)} />
            <button onClick={handleAdd}>Adicionar</button>
        </form>
    )
}