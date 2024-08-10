// Extending the Storage prototype
Storage.prototype.setObj = function(key: string, obj: any) {
    return this.setItem(key, JSON.stringify(obj));
};



// Form Component
import { SetStateAction, useState, useEffect } from "react";
import styled from "styled-components";

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
`;

const StyledButton = styled.button`
    border: 2px solid #333333;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: #94C9A9;
    }
`;

interface FormProps {
    setActivitiesList: React.Dispatch<React.SetStateAction<string[]>>,
    activitiesList: string[];
}

const Form = ({ setActivitiesList, activitiesList }: FormProps) => {
    const [activity, setActivity] = useState<string>("");

    const handleChange = (event: { target: { value: SetStateAction<string>; }; }) => {
        setActivity(event.target.value);
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        if (activity.trim()) {
            const updatedActivities = [...activitiesList, activity];
            setActivitiesList(updatedActivities);
            localStorage.setObj("SavedActivity", updatedActivities); // Save using the new method
            setActivity(""); // Clear the input field
        }
    };

    return (
        <StyledForm onSubmit={handleSubmit}>
            <label htmlFor="activity"><h3>ACTIVITY: </h3></label>
            <input onChange={handleChange} type="text" placeholder="..." value={activity} />
            <StyledButton type="submit"><h3>ADD</h3></StyledButton>
        </StyledForm>
    );
};

export default Form;
