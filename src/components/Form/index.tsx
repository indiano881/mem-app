import { SetStateAction, useState } from "react";
import styled from "styled-components"


const StyledForm = styled.form`
    align-items: center;
    background-color: #F79D65;
    color: #333333;
    display: flex;
    font-family: "Kanit";
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
        background-color: #94C9A9;
    }

`

interface FormProps {
    setActivitiesList: React.Dispatch<React.SetStateAction<string[]>>
}

const Form = ({setActivitiesList}:FormProps) => {

    const [activity, setActivity]= useState<string>("")

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setActivity(event.target.value)
        console.log(activity)
    }

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        setActivitiesList((prevActivities: string[]) => [...prevActivities, activity]); {/**FX THIS HERE BETTER */}
        setActivity("");
    }

    const handleDelete=(activity:string)=>{
        setActivitiesList(prevActivities=> prevActivities.filter((item)=> item !== activity))
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            
                <label htmlFor="activity"><h3>ACTIVITY: </h3></label>
                <input onChange={handleChange} type="text" id="fname" name="fname" />
                <StyledBotton><h3>ADD</h3></StyledBotton>
            
        </StyledForm>
    )
};

export default Form
