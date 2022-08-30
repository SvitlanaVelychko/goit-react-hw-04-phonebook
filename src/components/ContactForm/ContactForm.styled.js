import styled from "styled-components";

export const Label = styled.label`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Error = styled.div`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.s};
    font-weight: ${p => p.theme.fontWeights.normal};
    color: ${p => p.theme.colors.accent};
`;

export const AddBtn = styled.button`
    width: 150px;
    height: 40px;
    margin: 20px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};
    font-weight: ${p => p.theme.fontWeights.bold};
    background-color: ${p => p.theme.colors.bgcStat};
    box-shadow: -4px 4px 59px 0px rgba(50,140,17,1);
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1), 
    transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: ${p => p.theme.colors.bgcButton};
        color: ${p => p.theme.colors.white};
        transform: scale(1.1);
    }
`;