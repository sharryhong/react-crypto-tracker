import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@300;400;700&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
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
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	font-family: 'Noto Sans Mono', monospace, sans-serif;
	color: ${(props) => props.theme.textColor};
	background-color: ${(props) => props.theme.bgColor};
}
ol, ul {
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
a {
	color: inherit;
	text-decoration: none;
}
button {
	font-family: inherit;
	cursor: pointer;
	color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.accentColor};
  border-color: ${(props) => props.theme.accentColor};
	border-style:none;
}
* {
	box-sizing: border-box;
}
`;

export default GlobalStyle;
