import styled from "styled-components"


const StyledHeader = styled.div`
    background-color: #A8DCD9;
    text-align: center;
    margin: 0;
    min-height: 80px;
    font-family: "Monoton";

    h1 {
        font-size: 2rem;
    }


`



const Header = () => {
    return (
        <StyledHeader>
          <h1>Mem-App</h1>
          <h3>Add and remove anything you need!</h3>
        </StyledHeader>
    )
};

export default Header
