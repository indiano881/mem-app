import styled from "styled-components"


const StyledForm = styled.div`
    align-items: center;
    background-color: #F79D65;
    color: #333333;
    display: flex;
    font-family: "Monoton";
    justify-content: center;
    margin: 0;
    min-height: 60px;


`

const Form = () => {
    return (
        <StyledForm>
            <form>
                <label htmlFor="activity">Activity: </label>
                <input type="text" id="fname" name="fname" />
                <button> ADD </button>
            </form>
        </StyledForm>
    )
};

export default Form
