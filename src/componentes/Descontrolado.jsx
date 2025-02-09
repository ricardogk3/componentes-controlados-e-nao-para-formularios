import React, { useRef } from "react";


function Descontrolado() {

    const inputRef = useRef(null)

    return (
        <>
            <label> Uncontrolled Input</label>
            <input
                type='text'
                title="Uncontrolled"
                ref={inputRef}
            />
            <button
                onClick={() => {
                    console.log(inputRef?.current?.value)
                }}

            >Obter valor</button >
        </>
    )
}

export default Descontrolado;