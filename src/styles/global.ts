import { createGlobalStyle } from "styled-components";
import variables from "./variables";

export const GlobalStyle = createGlobalStyle`

  ${variables};
  :root{
    --pink: #E31F71;
    --green: #23ce6b;
    --blue: #016fb9;

    --main: var(--green);
    --text: var(--white);
    --box: #2b2b2b;
    --project-title: var(--white);
    --project-skills: #ccd6f6; 
    --background: var(--black);
    --dodgerblue: #1E90FF;
    scroll-padding-top: 10rem;


    
    &.light{

      --main: var(--dodgerblue);
      
      --background: var(--white);

      --text: var(--black);

      --box: var(--blue);
      
      --project-skills: #495670;

      --project-title: var(--black);
      
      --project-description: var(--white);

      @media (max-width: 768px) {
        --project-description: var(--black);
        .date {
          color: var(--white);
        }
      }

      body{
        transition: 0.5s;
        background-color: var(--background);
        color: var(--black);
      }

      .logo{
        color: var(--black);
      }
      
      .hero-text{
         h3{
          color:var(--dodgerblue);
          margin: 1rem 0;
         }
      }

      .first-word{
        margin-right: 5px;
        color: var(--dodgerblue);
      }

      .timeline {
        h3 {
          color: var(--dodgerblue);
        }
      }

      .contacts {
        a {
          background-color: var(--dodgerblue);
          div {
            color: var(--white);
          }
          &:hover {
            background-color: var(--pink);
            a {
                color: #fff;
            }
          }
        }
      }

      form > button {
        background-color: var(--dodgerblue);
      }

      header.header-fixed{
        transition: 0.5s;
        background-color: #f5f5f550;
        a{
          transition: 0.5s;
          color: black;
        }
        .menu,.menu:before, .menu:after{
          background-color: var(--black); 
        }
        .menu.active{
          background-color: rgba(555,555,555,0);
        }
        a:not(.logo,.button):hover {
          color: var(--main);
        }

        a.button:hover {
            background-color: var(--pink);
            a {
                color: #fff;
            }
        }
      }

      footer.footer{
        transition: 0.5s;
        background-color: rgba(0,0,0,0.1);
        color: var(--black);
      }

      form{
        input,textarea{
          transition: 0.5s;
          border: solid 1px var(--black);
          color: var(--black);
          &::placeholder{
            transition: 0.5s;
            color: var(--black);
          }
        }
      }

    }
  }



  ul, li {
    text-decoration: none;
    list-style: none;
    margin: 0;
    padding:0;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    font-size: 62.5%;
  }

  body{
    font-size: 1.6rem;
    -webkit-font-smoothing: antialiased;
    background-color: var(--background);
    color: #FFFF;
  }

  body, input, textarea, button{
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 400;
  }

  a{
    text-decoration: none;
  }

  button, .button{
    border: none;
    cursor: pointer;
    background-color: var(--green);
    color: #FFFF;
    border-radius: 2rem;
    font-weight: 500;
    transition: filter 0.25s;
  }

  button:disabled, .button:disabled{
    filter: brightness(0.8);
    cursor: not-allowed;
  }


  .logo{
    font-size: 3rem;
    font-weight: 700;
    color: #FFFF;
  }
  
  .active-scroll-spy {
    color: var(--green);
  }

`;
