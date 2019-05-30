import styled from 'styled-components';

const Block=styled.div`
    width: 65rem;
    height: 30rem;
    margin: 0;
    padding: 0;
    background: rgba(230,39,208,1);
    background: -moz-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
    background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(230,39,208,1)), color-stop(96%, rgba(59,121,245,1)), color-stop(99%, rgba(59,121,245,1)));
    background: -webkit-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
    background: -o-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
    background: -ms-linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
    background: linear-gradient(45deg, rgba(230,39,208,1) 0%, rgba(59,121,245,1) 96%, rgba(59,121,245,1) 99%);
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e627d0', endColorstr='#3b79f5', GradientType=1 );
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    border-radius: 20px;
`;

export {Block};