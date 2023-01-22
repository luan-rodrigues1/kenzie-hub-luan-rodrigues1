import { createGlobalStyle } from "styled-components";

export const TypographyStyle = createGlobalStyle`

@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap");

.title1{
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 18px;
}
.title2{
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 16px;
}
.headline{
    font-family: "Inter", sans-serif;
    font-weight: 400;
    font-size: 12px;
}
.headlineBold{
    font-family: "Inter", sans-serif;
    font-weight: bold;
    font-size: 12px;
}
.HeadlineItalic{
    font-family: "Inter", sans-serif;
    font-weight: italic;
    font-size: 12px;
}
`;