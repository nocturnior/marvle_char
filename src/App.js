import { createGlobalStyle, styled } from 'styled-components';

import Router from './Routes/Router';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />

      <Wrapper>
        <Title>
          <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg' alt='lgo' width={'180px'} />
        </Title>
        <Router />
      </Wrapper>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard-dynamic-subset.css");

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
*{
  box-sizing: border-box;
}
*::selection {
  background-color: #B71C1C;
  color:#fff
}
body {
  width: 100%;
  height: auto;
  line-height: 1;
  font-family: 'Pretendard', sans-serif;
  color:#fff;
  /* overflow: hidden; */
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a{
  text-decoration: none;
  color:inherit;
}
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url('https://www.pcclean.io/wp-content/uploads/2020/4/36Ffii.jpg');

  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 bottom;
`;

const Title = styled.h1`
  padding: 40px 0;
  position: sticky;
  top: 0;
`;

export default App;
