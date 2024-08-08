import React from "react";
import styled from "styled-components";

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
`;

const StyledPar = styled.p`
    background-color: #94C9A9;
    height: 60px;
    width: 60%;
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: white;
    }
`;

interface MainContentProps {
    activitiesList: string[];
    setActivitiesList: React.Dispatch<React.SetStateAction<string[]>>;
}

const MainContent = ({ activitiesList, setActivitiesList }: MainContentProps) => {

    const handleDelete = (activity: string) => {
        setActivitiesList(prevActivities => prevActivities.filter(item => item !== activity));
    };

    return (
        <StyledMainContent>
            {activitiesList.map((item, index) => (
                <StyledPar key={index}>
                    <h3>{item}</h3>
                    <button onClick={() => handleDelete(item)}>DELETE</button>
                </StyledPar>
            ))}
        </StyledMainContent>
    );
};

export default MainContent;
