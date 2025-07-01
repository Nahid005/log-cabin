import styled from "styled-components"

const Error = styled.p`
    margin: 0px;
    font-size: 12px;
    color: red;
`

function Errors({children}) {
    return <Error>{children}</Error>
}

export default Errors;