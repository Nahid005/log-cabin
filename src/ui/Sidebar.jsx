import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledAside = styled.aside`
    background-color: var(--color-grey-0);
    grid-row: 1 / -1;
    padding: 2rem;;
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

function Sidebar() {
    return (
        <StyledAside>
            <Logo />
            <MainNav />
            
            <Uploader />
        </StyledAside>
    )
}

export default Sidebar;