
import { SectionCardTitle } from "../../components/Typography/SectionCardTitle";
import { StyledCardBox, StyledCardsBoxTitle } from "./elements";

// The Card to be exported goes here
export const Card = ({ children, title,  icon }) => {

  return (
    <StyledCardBox>
      {icon}
      <StyledCardsBoxTitle>
        <SectionCardTitle  href={title}
     target="_blank">{title}</SectionCardTitle>
       {children}
      </StyledCardsBoxTitle>
    </StyledCardBox>
  );
};
