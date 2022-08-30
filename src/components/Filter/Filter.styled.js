import styled from "styled-components";

export const FilterLabel = styled.label`
    font-size: ${p => p.theme.fontSizes.m};
    font-weight: ${p => p.theme.fontWeights.bold};
`;

export const FilterText = styled.input`
    width: 100%;
    height: 40px;
    padding: ${p => p.theme.space[3]}px;
    margin-bottom: ${p => p.theme.space[5]}px;
    margin-top: ${p => p.theme.space[3]}px;
    outline: none;
    border: ${p => p.theme.borders.none};
    border-radius: ${p => p.theme.radii.normal};

    :hover, :focus {
        border: ${p => p.theme.borders.normal};
        border-color: ${p => p.theme.colors.bgcButton};
    }
`;