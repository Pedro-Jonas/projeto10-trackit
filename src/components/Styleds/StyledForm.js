import styled from "styled-components";

export default function StyledForm({children}){

return(
    <Formstyled>
        {children}
    </Formstyled>
);

};

const Formstyled = styled.div`
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    input{
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #DBDBDB;
        padding-left: 11px;
    }
    .play{
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 5px;
        background-color: #52B6FF;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 20.976px;
        line-height: 26px;
        margin-bottom: 25px;
    }
    .link{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    a{
        font-weight: 400;
        font-size: 13.976px;
        line-height: 17px;  
        color: #52B6FF;
    }
`;