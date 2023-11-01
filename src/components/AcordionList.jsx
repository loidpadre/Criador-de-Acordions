import AcordionItem from "./AcordionItem";

export default function AcordionList({list}){
    return(
        <div>
            {
                list.map((item) => (
                    <AcordionItem title={item.title} body={item.body} id={item.id}/>
                ))
            }
        </div>
    )
}