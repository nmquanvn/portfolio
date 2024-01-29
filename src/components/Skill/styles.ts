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

