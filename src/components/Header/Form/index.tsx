import { SetStateAction, useState } from "react";
import styled from "styled-components"


const StyledForm = styled.form`
    align-items: center;
    background-color: #F79D65;
    color: #333333;
    display: flex;
    font-family: "Monoton";
    justify-content: center;
    margin: 0;
    min-height: 60px;

    input {
        border: 2px solid #333333;
        border-radius: 10px;
        margin-left: 8px; 
        margin-right: 8px; 
    }
`

const StyledBotton = styled.button`
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
    background-color: #A8DCD9;}

`

interface FormProps {
    setActivitiesList: (activities: string[])=>void;
}

const Form = ({setActivitiesList}:FormProps) => {

    const [activity, setActivity]= useState()

    const handleChange = (event: { target: { value: SetStateAction<undefined>; }; }) => {
        setActivity(event.target.value)
        console.log(activity)
    }

    const handleSubmit = () => {
        event.preventDefault();
        setActivitiesList(prevActivities => [...prevActivities, activity]);
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            
                <label htmlFor="activity">ACTIVITY: </label>
                <input onChange={handleChange} type="text" id="fname" name="fname" />
                <StyledBotton>ADD</StyledBotton>
            
        </StyledForm>
    )
};

export default Form
