import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 0 20px 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    
    & .rect {
        border-bottom: 2px solid #fff;
    }
    
    & p {
        font-size: 25px;
        color: #fff;
        font-family: Roboto, sans-serif;
    }
`;

export {Container};