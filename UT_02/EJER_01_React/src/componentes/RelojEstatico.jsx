export const RelojEstatico = () => {
    const hora = new Date().toLocaleTimeString('es-ES');
    return (<div>
        <h1>{hora}</h1>
    </div>)
}