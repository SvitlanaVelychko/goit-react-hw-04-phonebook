import styled from 'styled-components';

export const Title = styled.h2`
    padding-bottom: ${p => p.theme.space[5]}px;
    font-size: ${p => p.theme.fontSizes.l};
    text-align: center;
    color: ${p => p.theme.colors.text};
`;