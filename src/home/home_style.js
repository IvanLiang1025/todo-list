import styled from "styled-components";


//header style
export const HeaderWrapper = styled.div`
    background-color: #F2E0CF;
    text-align: center;
    color: #EC6149;
    font-size: 40px;
    padding: 10px 0;
`;

// addtodo component style
export const AddTodoWrapper = styled.div`
    padding: 50px 5%;
    margin-bottom: 20px;
    background-color: #F2E0CF;
    background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL-nCEUZBU-AzZTbrBHhEKEOro08JeOsYuTbsC-L3frqz-XHRFEA");
    background-position: left;
    background-repeat: no-repeat;
`;


export const Button = styled.button`
    display: block;
    margin: 0 auto;
    padding: 5px 30px;
    border: 1px solid black;
    border-radius: 5px;
    outline-style: none;
    color: white;
    background-color: #DB7A6B;
`;


//list component style
export const ListWrapper = styled.div`
    margin: 50px 0;
    // border: 1px solid red;
`

export const List = styled.div`
    magrin-bottom: 250px;

    .title{
        text-align: center;
        font-size: 30px;
        font-weight: 400px;
        margin-bottom: 20px;
    }
`;

export const ListItem = styled.div`

    background-color: #F5F199;
    margin-bottom: 5px;
    color: #6186D5;
    border-bottom: 1px solid blue;
    font-size: 500px;

    .todo-content{
        font-size: 20px;
        padding: 5px 15px;
    }

    .todo-duedate{
        font-size: 15px;
        padding: 5px 15px;
        text-align: right;
    }
`;

export const ListButton = styled.button`
    
    background-color: #EA6A27;
    border: 1px solid #EA6A27;
    border-radius: 3px;
    float:right;
`;

