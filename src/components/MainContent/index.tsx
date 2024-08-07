import styled from "styled-components";

const StyledMainContent = styled.div`
    background-color: #A8DCD9;
    color: #333333;
    font-family: "Monoton";
    margin: 0;
    min-height: 800px;
    text-align: center;


`

interface MainContentProps {
    activitiesList: Array<string>;
}


const MainContent = ({activitiesList}:MainContentProps) => {
    return (
        <StyledMainContent>
          {activitiesList.map((item, index)=> <p key={index}><h3>{item}</h3></p>)}
        </StyledMainContent>
    )
};

export default MainContent
