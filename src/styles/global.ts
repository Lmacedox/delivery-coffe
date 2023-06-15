import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: ${(props) => props.theme.base['background-body']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 1rem;
    }

    button {
        border: none;
        &:hover{
          cursor: pointer;
          transition: 0.4s
        }

        &:not(:hover){ 
           transition: 0.4s 
        }
    }
    
    input, textarea{
        background: ${(props) => props.theme.base['base-input']};
    }



    .text-regular-S {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 0.85rem;
        line-height: 130%;
        color: ${(props) => props.theme.base['base-label']};
    }

    .text-regular-M {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.text};
    }

    .text-bold-M {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.text};
    }

    .text-bold-L {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.subtitle};     
    }

    .text-regular-L {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 130%;
        font-stretch: 100;
        color: ${(props) => props.theme.base.subtitle};     
    }

    .title-XS {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 1.12rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.subtitle};        
    }

    .title-S {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.subtitle};
    }

    .title-L {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 2rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.subtitle};     
    }

    .title-XL {
        font-family: 'Baloo 2';
        font-style: normal;
        font-weight: 800;
        font-size: 3rem;
        line-height: 130%;
        color: ${(props) => props.theme.base.title};        
    }

    .text-required{
        font-family: 'Roboto';
        font-size: 10px;
        color: rgb(211, 66, 66);
        margin-top: 5px;
    }

    .react-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgb(0 0 0 / 48%);
        display: flex;
        align-items: center;
        justify-content: center;
  }



`
