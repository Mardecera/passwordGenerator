import styled, { css } from 'styled-components'

const SelectThemeContainer = styled.div`
   ${({ theme }) =>
      theme &&
      css`
         position: relative;
         align-items: center;
         box-shadow: inset 5px 0px 20px rgba(29, 26, 26, 0.356);
         border-radius: 200px;
         padding: 0.6rem;
         background: ${theme.buttonSelectTheme.backgroundColor};
         transition: background 0.3s ease;
         width: max-content;
         height: 2.5rem;
         display: flex;

         & .switch {
            width: 2rem;
            height: 2rem;
            border-radius: 100%;
            background-color: ${theme.buttonSelectTheme.switchButtonColor};
            box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.404);
            position: absolute;
            top: .2rem;
            transition: left 0.3s ease;
            box-shadow: 0px -5px 20px  rgba(10, 10, 10, 0.61);
         }
      `}
`

export default SelectThemeContainer
