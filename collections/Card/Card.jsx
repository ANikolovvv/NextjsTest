import { StyledSectionBigHeading, StyledSectionTinyHeading } from "../../components/Typography/elements";

// The Card to be exported goes here
export const Card = ({children}) => {
    return (
     <StyledSectionTinyHeading>{children}</StyledSectionTinyHeading>
    );
  };
