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

export const BookInfo = styled.div`
    max-width: 80%;
    margin: 10px auto 0px auto;
    background-color: #f1f1f1;
    padding: 10px;
    border-radius: 5px;

    h1 {
        font-size: 25px;
    }

    strong {
        color: #696969;
        font-weight: normal;
    }

    p {
        margin: 10px 0;
        font-size: 16px;
    }

    table {
        width: 100%;
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