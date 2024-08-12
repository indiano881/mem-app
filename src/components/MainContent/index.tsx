import React, { useEffect, useState } from "react";
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
    background-color: #A8DCD9;
    color: #333333;
    display: flex;
    flex-direction: column;
    font-family: "Kanit";
    margin: 0;
    min-height: 800px;
    text-align: center;

    background-image: url('https://static.pexels.com/photos/414171/pexels-photo-414171.jpeg');
    background-size: cover;
    animation: ${slidein} 65s alternate infinite forwards;

    @media only screen and ${screens.lg} {
        display: flex;
        flex-direction: row;
        flex: 0 0 calc(50% - 24px);
        flex-wrap: wrap;
    }
`;

const StyledPar = styled.div<{ mark: boolean }>`
    background-color: #A8DCD9;
    height: 60px;
    width: 60%;
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;
    text-decoration: ${props => props.mark ? "line-through" : "none"};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;

    &:hover {
        background-color: white;
    }

    @media only screen and ${screens.lg} {
        flex: 0 0 calc(50% - 24px);
    }
`;

const StyledButton = styled.button`
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;

    &:hover {
        background-color: #F79D65;
    }
`;

interface MainContentProps {
    activitiesList: string[];
    setActivitiesList: React.Dispatch<React.SetStateAction<string[]>>;
}

const MainContent = ({ activitiesList, setActivitiesList }: MainContentProps) => {
    const [markedItems, setMarkedItems] = useState<string[]>([]);

    const handleDelete = (activity: string) => {
        const updatedActivities = activitiesList.filter(item => item !== activity);
        setActivitiesList(updatedActivities);
        localStorage.setItem("SavedActivity", JSON.stringify(updatedActivities));
    };

    const handleMark = (activity: string) => {
        setMarkedItems(prevState =>
            prevState.includes(activity)
                ? prevState.filter(item => item !== activity)
                : [...prevState, activity]
        );
    };

    useEffect(() => {
        // Load activities from localStorage on component mount
        const savedActivities = localStorage.getItem("SavedActivity");
        if (savedActivities) {
            setActivitiesList(JSON.parse(savedActivities));
        }
    }, [setActivitiesList]);

    return (
        <StyledMainContent>
            {activitiesList.map((item, index) => (
                <StyledPar key={index} mark={markedItems.includes(item)}>
                    {item}
                    <div>
                        <StyledButton onClick={() => handleMark(item)}>MARK</StyledButton>
                        <StyledButton onClick={() => handleDelete(item)}>DELETE</StyledButton>
                    </div>
                </StyledPar>
            ))}
        </StyledMainContent>
    );
};

export default MainContent;
