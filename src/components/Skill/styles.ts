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

  .section__Jobs-styledContent {
    font-family: sans-serif;
    text-align: left;
    color: #c9d1eb;
    padding: 20px 20px;
  }
  
  .section__Jobs-styledContent h4 {
    color: #ccd6f6;
    font-size: 22px;
    font-weight: 500;
  }
  
  .section__Jobs-styledContent h5 {
    font-size: 13px;
    font-family: "Roboto Mono", monospace;
    letter-spacing: 0.05em;
    margin-bottom: 30px;
    color: #64ffda;
  }
  
  .section__Jobs-styledContent p {
    font-size: 18px;
    font-family: Arial, Helvetica, sans-serif;
    margin-bottom: 10px;
  }
  
  .section__Jobs-detail::before {
    content: "▹";
    position: relative;
    left: 0px;
    color: #64ffda;
  }

  .section__Jobs-buttonCompany {
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
  
  .section__Jobs-buttonCompany:hover,
  .section__Jobs-buttonCompany:focus {
    background-color: #172a45;
  }
  
  .section__Jobs-buttonCompany:hover,
  .section__Jobs-buttonCompany:active,
  .section__Jobs-buttonCompany:focus {
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
    width: 150px;
    max-width: 200px;
    background-color: #295a9e;opacity: 0.8;
  }
  #col-2 {
    width: 100%;
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
  .section__Jobs-styledTab{
    width: 100%;
  }
  .section__Jobs-styledTabList {
    padding: 0;
  }

  @media (max-width: 960px){
    display: block;
    text-align: center;
  }

`

