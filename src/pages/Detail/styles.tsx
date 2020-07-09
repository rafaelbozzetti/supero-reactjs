import styled from 'styled-components';

export const Container = styled.div`
`;

export const Error = styled.div`
    padding: 20px;

    div {
        margin-top:20px;
        border: 1px solid #f6f6f6;
        background-color: #fbfbfb;
        padding: 10px;
        border-radius: 5px;
        color: #696969;
        margin-bottom: 20px;
    }
    a {
        color: #F16550;
        font-size: 16px;
        font-weight: bolder;
        text-decoration: none;

        svg {
           padding-top: 5px; 
        }
    }
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

export const BookInfo = styled.div`
    max-width: 80%;
    margin: 10px auto 0px auto;
    background-color: #f1f1f1;
    padding: 20px;
    border-radius: 5px;

    h1 {
        font-size: 25px;
    }

    strong {
        color: #000;
    }

    p {
        margin: 10px 0;
        font-size: 16px;
    }

    table {
        width: 100%;
        font-size: 15px;
        border: 1px solid #f1f1f1;
        padding: 5px 0px;

        thead {
            font-weight: bolder;
            background: #f1f1f1;
        }
        td {
            height: 30px;
            padding: 10px 0px;
        }
        a {
            color: #F16550;
            font-size: 16px;
            font-weight: bolder;
            text-decoration: none;
        }
    }

    a {
        color: #F16550;
        font-size: 16px;
        font-weight: bolder;
        text-decoration: none;

        svg {
           padding-top: 5px; 
        }
    }
`;