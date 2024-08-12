import styled from "styled-components"


const StyledFooter= styled.footer`
    align-items: center;
    background-color: #F79D65;
    border: 2px solid #333333;
    color: #333333;
    display: flex;
    font-family: "Kanit";
    justify-content: center;
    margin: 0;
    min-height: 60px;
`

const Footer = () => {
    return (
        <StyledFooter>
          <h4>Mem-App created By Davide Fea23 AUG/2024</h4>
        </StyledFooter>
    )
};

export default Footer
