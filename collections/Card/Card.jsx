
import { SectionCardTitle } from "../../components/Typography/SectionCardTitle";
import { StyledCardBox, StyledCardsBoxTitle } from "./elements";

// The Card to be exported goes here
export const Card = ({ children, title, desc, icon }) => {
  console.log(title);
  return (
    <StyledCardBox>
      {icon}
      <StyledCardsBoxTitle>
        <SectionCardTitle>{title}</SectionCardTitle>
       {desc}
      </StyledCardsBoxTitle>
    </StyledCardBox>
  );
};
