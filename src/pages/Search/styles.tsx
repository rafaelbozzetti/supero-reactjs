import styled from 'styled-components';

export const Container = styled.div`

`;

export const SearchHeader = styled.div`
    display: flex;
    padding: 10px;
    width: 100%;
    background-color: #F16550;
    padding-bottom: 10px;

    img {
        width: 200px;
        height: auto;
        filter: brightness(500%) grayscale(10%);
        padding-right: 20px;
    }
`;

export const SearchInput = styled.input`
    flex:1;
    padding: 0px 20px;
    border-radius: 5px;
    border: 1px solid #f88572;
    color: #696969;
    justify-content: center;
    
    &::placeholder {
        color: #d2d2d2;
    }
`;

export const SubmitButton = styled.button`
    width: 150px;
    margin-left: 20px;
    background-color: #fff;
    border: 1px solid #f88572;
    border-radius: 5px;
    transition: background-color 0.2s;

    &:hover{
        background-color: #ffc9c0;
    }
`;

export const Results = styled.div`
    width: 100%;
    height: 100%;
    padding: 10px;
    background-color: #fff;

    div {
        margin-top:20px;
        border: 1px solid #f6f6f6;
        background-color: #fbfbfb;
        padding: 10px;
        border-radius: 5px;
        color: #696969;
    }

    table {
        width: 100%;
        font-size: 15px;
        border: 1px solid #f1f1f1;
        padding: 5px;

        thead {
            font-weight: bolder;
            background: #f1f1f1;
        }
        td {
            height: 50px;
            padding: 10px;
        }
        a {
            color: #F16550;
            font-size: 16px;
            font-weight: bolder;
            text-decoration: none;
        }

        tbody {
            tr {
                transition: background-color 0.2s;

                &:hover {
                    background-color: #fff;
                }
            }
        }

    }

`;

export const Filters = styled.div`
    width: 100%;
    background-color: #f1f1f1;
    font-size: 12px;
    color: #696969;
    padding: 10px;
    display: flex;
    align-items: center;

    span {
        margin: 0 20px;
    }

    div {
        flex: 1;
        svg {
            padding-top: 5px;
        }

        & + div {
            text-align: right;
        }
    }

    input {
        width: 80px;
        height: 25px;
        border: 1px solid #d2d2d2;
        border-radius: 5px;
        margin-right: 3px;
        margin-left: 10px;
        font-size: 12px;
        padding: 3px;
    }
`;
