import styled from "@emotion/styled";

export const Button = styled.button`
color: black;
background-color: #DCDCDC;
font-size: 20px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
border:none;
box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 5px 0px;
transition-property: color, background-color ;
transition-duration: 350ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    background-color: black;
    color: white;
     }
`
export const Form = styled.form`
margin: 0 auto;
display: flex;
flex-direction: column;
padding: 20px;
gap: 20px;
background-color: #DCDCDC;
border-radius: 20px;
margin-bottom: 50px;
`

export const Container = styled.div`
align-items: center;
display: flex;
flex-direction: column;
margin: 20px auto;
width: 900px;
`
export const Label = styled.label`
display: flex;
flex-direction: column;
padding: 5px;
`
export const Input = styled.input`
height: 30px;
border-radius: 20px;
font-size: 18px;
padding: 10px;
`
export const ContactLists = styled.ul`
display: flex;
flex-direction: column;
gap: 20px;
padding-top: 20px;
`
export const ContactItem = styled.li`
display: flex;
justify-content: space-between;

`
export const Btn = styled.button`
color: black;
background-color: #DCDCDC;
font-size: 15px;
padding: 10px;
border-radius: 20px;
cursor: pointer;
border:none;
box-shadow: rgba(0, 0, 0, 0.75) 2px 2px 5px 0px;
margin-left: 20px;
transition-property: color, background-color ;
transition-duration: 350ms;
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
:hover {
    background-color: black;
    color: white;
     }
`