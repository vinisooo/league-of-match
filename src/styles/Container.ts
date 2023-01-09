import styled, { css } from "styled-components";

interface iStyledContainerProps {
    isFooter?: boolean;
}

export const StyledContainerPlayers = styled.div<iStyledContainerProps>`
    width: 100%;
    max-width: 1220px;
    margin: 0 auto;
    padding: 0 1.2rem;

    ${({ isFooter }) => {
        if (isFooter) {
            return css`
                display: flex;
                justify-content: space-between;
            `
        }
    }}

    @media (max-width: 340px) {
        padding: 0 0.6rem;
        
    }
`
