import { SectionAgencySmallTitle } from "../../components/Typography/SectionAgencySmallTitle";
import { SectionAgencyTitle } from "../../components/Typography/SectionAgencyTitle";
import { Container, HeaderBox } from "./elements";

export const Agency = () => {
  return (
    <>
      <HeaderBox>
        <SectionAgencyTitle>Managed agensy section</SectionAgencyTitle>
        <SectionAgencySmallTitle>
          Stengthen your onboarding process
        </SectionAgencySmallTitle>
      </HeaderBox>
      <Container image={"/img/background.png"}>
     
      </Container>
    </>
  );
};
