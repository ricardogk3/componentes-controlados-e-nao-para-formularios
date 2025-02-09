import React, { useRef } from "react";


function CriarUsuarioNovo() {
    const emailRef = useRef(null)
    const senhaRef = useRef(null)
    const nivelRef = useRef('usuario')

    function onClick() {
        console.log(emailRef.current.value)
        console.log(senhaRef.current.value)
        console.log(nivelRef.current.value)
    }

    return (
        <>
            <label>Usuario</label>
            <input
                type='email'
                title="Uncontrolled"
                ref={emailRef}
            />
            <label>Senha</label>
            <input
                type='password'
                title="Uncontrolled"
                ref={senhaRef}
            />
            <label>Nível de Segurança:</label>
            <select ref={nivelRef}>
                <option value="usuario">Usuário</option>
                <option value="admin">Admin</option>
                <option value="orientador">Orientador</option>
            </select>
            <button
                onClick={onClick}

            >Obter valor</button >
        </>
    )
}

export default CriarUsuarioNovo;