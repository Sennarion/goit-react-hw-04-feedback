import styled from "styled-components";

export const Button = styled.button`
    border: none;
    cursor: pointer;
    padding: 5px 15px;
    border-radius: 5px;

    background-color: ${({ styleType }) => {
    switch (styleType) {
        case 'positive':
            return 'green';
        case 'neutral':
            return 'yellow';
        case 'bad':
            return 'red';
        default: return 'grey'
        }
}};
    &:not(:last-child) {
        margin-right: 10px;
    }

    
`