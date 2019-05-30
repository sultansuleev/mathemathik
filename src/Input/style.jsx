import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: 20px 0 0 20px;
    
    & form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 1em;
        position:relative;
        
        & input {
             background: #fff;
             margin: .5em;
             border: 2px solid #fff;
             outline: none;
             font-size: 21px;
             font-family: Montserrat,sans-serif;
             color: #000;
             border-radius: 47px;
             height: 3em;
             text-align: center;
             transition: 1s ease;
        }
        
        & input::placeholder {
            color: #595959;
            font-size: 19px;
        }
        
        & input::-webkit-input-placeholder       {opacity: 1; transition: opacity 0.3s ease;}
        & input::-moz-placeholder                {opacity: 1; transition: opacity 0.3s ease;}
        & input:-moz-placeholder                 {opacity: 1; transition: opacity 0.3s ease;}
        & input:-ms-input-placeholder            {opacity: 1; transition: opacity 0.3s ease;}
        & input:focus::-webkit-input-placeholder {opacity: 0; transition: opacity 0.3s ease;}
        & input:focus::-moz-placeholder          {opacity: 0; transition: opacity 0.3s ease;}
        & input:focus:-moz-placeholder           {opacity: 0; transition: opacity 0.3s ease;}
        & input:focus:-ms-input-placeholder      {opacity: 0; transition: opacity 0.3s ease;}
        
        & input:hover {
            opacity: 0.8;
            transform: scale(1.2);
        }
        
        & button {
              height: 3em;
              background: #3b79f5;
              border: 1px solid #3b79f5;
              border-radius: 60px;
              font-size: 22px;
              color: #fff;
              outline: none;
              line-height: 1em;
              margin-top: 1em;
              transition: 1s ease;
        }
        
        & button:hover {
            transform: scale(0.96);
        }
        
        & button:active {
            transition: 0.1s;
            background: #fff;
            color: #000;
        }
        
        & h1 {
            position: absolute;
            margin: 0;
            color: ghostwhite;
            bottom: 22px;
            left: 13px;
            font-family: Roboto, sans-serif;
        }
    }
`;

export {Container};