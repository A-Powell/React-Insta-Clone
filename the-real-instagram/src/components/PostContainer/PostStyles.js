import styled from 'styled-components';


export const PostsContainerWrapper = styled.div `
    height: 500px;
    width: 50%;
    margin: 5px auto;
  `;
 
  export const PostBorder = styled.div `
    border: 1px solid #d3d3d3;
    margin: 50px 0;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  `;
 
  export const PostImageWrapper = styled.div` 
    height: 100%;
    width: 100%;
  `;
 
  export const PostImage = styled.img `
    width: 100%;
  `;
 
  export const PostHeaderStyle = styled.div`
    display: flex;
    align-items: center;
    padding: 15px;
    font-weight: bold;
  `;
 
  export const PostThumbWrapper = styled.div` 
    margin-right: 5px;
    height: 50px;
    width: 50px;
  `;

  export const PostThumb = styled.img`
    height: 100%;
    border-radius: 50%;
  `;

  