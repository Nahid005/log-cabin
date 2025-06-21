import styled from "styled-components";

const StyledHeader = styled.header`
    background-color: var(--color-grey-0);
    padding: 2rem;
`

function Header() {
    return (
        <StyledHeader>
            <h1>Header</h1>
        </StyledHeader>
    )
}

export default Header;