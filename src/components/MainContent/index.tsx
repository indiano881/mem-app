import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import screens from "../../utils/breakpoints";

const slidein = keyframes`
  from {
    background-position: top;
    background-size: 3000px;
  }
  to {
    background-position: -100px 0px;
    background-size: 2750px;
  }
`;

const StyledMainContent = styled.div`
    align-items: center;
    animation: ${slidein} 65s alternate infinite forwards;
    background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
    background-size: cover;
    background-color: #A8DCD9;
    color: #333333;
    display: flex;
    flex-direction: column;
    font-family: "Kanit";
    margin: 0;
    min-height: 700px;
    text-align: center;

    @media only screen and ${screens.lg} {
        align-items: normal;
        display: flex;
        flex-direction: row;
        flex: 0 0 calc(50% - 24px);
        flex-wrap: wrap;
    }
`;

const StyledPar = styled.div<{ mark: boolean }>`
    align-items: center;
    background-color: #A8DCD9;
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    font-size: 1rem;
    justify-content: space-between;
    margin: 12px;
    max-height:auto;
    min-height: 60px;
    text-decoration: ${props => props.mark ? "line-through" : "none"};
    padding: 0 10px;
    width: 80%;
    
    &:hover {
        background-color: white;
    }

    @media only screen and ${screens.md} {
        font-size: 1.8rem;
        max-height:100px;
        min-height: 80px;
        width: 70%;
    }

    @media only screen and ${screens.lg} {
        flex: 0 0 calc(50% - 24px);
        max-height:100px;
        min-height: auto;
        width: 60%;
    }
`;
const StyledBtnContainer = styled.div`
    width: 80px;
`

const StyledButton = styled.button`
    border: 2px solid #333333;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    margin-left: 10px;
    width: 68px;

    &:hover {
        background-color: #F79D65;
    }
`;

interface MainContentProps {
    activitiesList: string[];
    setActivitiesList: React.Dispatch<React.SetStateAction<string[]>>;
    markedItems: string[];
    setMarkedItems: React.Dispatch<React.SetStateAction<string[]>>;
}

const MainContent = ({ activitiesList, setActivitiesList,markedItems, setMarkedItems}: MainContentProps) => {
    

    const handleDelete = (activity: string) => {
        const updatedActivities = activitiesList.filter(item => item !== activity);
        setActivitiesList(updatedActivities);
        localStorage.setItem("SavedActivity", JSON.stringify(updatedActivities));
    };

    const handleMark = (activity: string) => {
        
        setMarkedItems(prevState => {
            const updatedMarkedItems = prevState.includes(activity)
                ? prevState.filter(item => item !== activity) 
                : [...prevState, activity]; 
    
            
            localStorage.setItem("markedActivities", JSON.stringify(updatedMarkedItems));
    
            return updatedMarkedItems;
        });
    };

    useEffect(() => {
        
        const savedActivities = localStorage.getItem("SavedActivity");

        if (savedActivities) {
            setActivitiesList(JSON.parse(savedActivities));
        }

    }, [setActivitiesList]);

    useEffect(() => {
        
        const savedActivities = localStorage.getItem("markedActivities");

        if (savedActivities) {
            setMarkedItems(JSON.parse(savedActivities));
        }

    }, [setMarkedItems]);

    return (
        <StyledMainContent>
            {activitiesList.map((item, index) => (
                <StyledPar key={index} mark={markedItems.includes(item)}>
                    {item}
                    <StyledBtnContainer>
                        <StyledButton onClick={() => handleMark(item)}>MARK</StyledButton>
                        <StyledButton onClick={() => handleDelete(item)}>DELETE</StyledButton>
                    </StyledBtnContainer>
                </StyledPar>
            ))}
        </StyledMainContent>
    );
};

export default MainContent;
