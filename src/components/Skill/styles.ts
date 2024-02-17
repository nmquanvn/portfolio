import styled from "styled-components";


export const Container = styled.section`

  margin-top: 15rem;

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    border-bottom: 0.2rem solid var(--blue);
  }

  .section__Skills-container {
    margin-top: 50px;
    position: relative;
  }

  .styledContent {
    font-family: sans-serif;
    text-align: left;
    color: #c9d1eb;
    padding: 20px 20px;
  }
  
  .styledContent h4 {
    color: #ccd6f6;
    font-size: 25px;
    font-weight: 700;
  }
  
  .styledContent h5 {
    font-size: 13px;
    font-family: "Roboto Mono", monospace;
    letter-spacing: 0.05em;
    margin-bottom: 30px;
    color: #64ffda;
  }
  
  .styledContent p {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
  }
  
  .wrapper {
    display: flex;
  }

  .detail::before {
    content: "▹";
    position: relative;
    left: 0px;
    color: #64ffda;
  }

  .detail {
    display:flex;
  }

  .subject {
    color: var(--main);
    font-weight: 700;
  }

  .category {
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    border-radius: 0;
    outline: none;
    font-size: 18px;
    height: 60px;
    width: 100%;
    text-align: left;
    padding: 0 20px;
  }
  
  .category:hover,
  .category:focus {
    background-color: #172a45;
  }
  
  .category:hover,
  .category:active,
  .category:focus {
    color: #64ffda;
    outline: 0px;
    border-left: 2px solid#64ffda;
  }  

  .row {
    display: flex;
  }
  .col {
    display: flex;
  }
  #col-1 {
    width: 180px;
    max-width: 250px;
    background-color: #295a9e;opacity: 0.8;
  }
  #col-2 {
    width: 100%;
    height: 300px;
    background-color: #131a24;opacity: 0.8;
  }
  .section__Skills-container span {
    font-size: 12px;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 15px;
    display: inline-block;
    width: 2px;
    height: 42px;
    transition: transform 0.5s;
  }
  .styledTab{
    width: 100%;
  }
  .styledTabList {
    list-style-type: none;
    padding: 0;
    width: 100%;
    height: 100%;
    display: table;
    flex-direction: column;

    li {
      display: table-row;
      button {
        display: table-cell;
        vertical-align: middle;
        width: 100%;
        height: 100%;
      }
    }
  }


  @media (max-width: 960px){
    display: block;
    text-align: center;
    #col-1 {
      width: 50%
    }
    #col-2 {
      height: 500px;
      background-color: #131a24;opacity: 0.8;
    }
  }

`

