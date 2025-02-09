import React, { useState } from "react";


function Controlado() {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        setValue(e?.target?.value)
    }


    return (
        <>
            <label> Controlled Input</label>
            <input
                type='text'
                // title="Controlled"
                // value={value}
                onChange={handleChange}
            />
            <button
                onClick={() => {
                    console.log(value)
                }}
            >Obter valor</button >
        </>
    )
}

export default Controlado;