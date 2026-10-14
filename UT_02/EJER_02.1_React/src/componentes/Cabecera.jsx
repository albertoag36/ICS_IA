import { RelojEstatico } from "./RelojEstatico"

export function Cabecera() {
    const nombreModulo = "ICS-IA_26_27"
    return (
        <div>
            <h1>{nombreModulo}</h1>
            <RelojEstatico />
        </div>
    )
}