import styled from "styled-components"

const StyledHeader = styled.div`
    background-color: #A8DCD9;
    color: #333333;
    font-family: "Kanit";
    margin: 0;
    min-height: 80px;
    text-align: center;

    h1 {
        font-size: 2rem;
        margin-top: 0;
    }

    h3 {
        margin: 0;
    }
`

const Header = () => {
    return (
        <StyledHeader>
          <h1>Mem-App</h1>
          <h3>Add and remove anything you want !</h3>
        </StyledHeader>
    )
};

export default Header
