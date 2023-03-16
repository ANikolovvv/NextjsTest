import { SectionAgencySmallTitle } from "../../components/Typography/SectionAgencySmallTitle";
import { SectionAgencyTitle } from "../../components/Typography/SectionAgencyTitle";
import {
  CardsBox,
  Container,
  HeaderBox,
  ImageContainer,
  MainBox,
} from "./elements";
import Image from "next/dist/client/image";
import { Card } from "../../collections/Card/Card";
import { BiNews, BiGlobe, BiPackage } from "react-icons/bi";
import { ButtonCard } from "../../components/ButtonCard";
import { StyledCardParagraph } from "../../collections/Card/elements";

export const Agency = () => {
  const cardProps = [
    {
      title: "Brief",
      icon: <BiNews color="black" size={140} />,
    },
    {
      title: "Search",
      icon: <BiGlobe color="black" size={140} />,
    },
    {
      title: "Pitch",
      icon: <BiPackage color="black" size={140} />,
    },
  ];

  return (
    <>
      <MainBox>
        <HeaderBox>
          <SectionAgencyTitle>Managed agensy section</SectionAgencyTitle>
          <SectionAgencySmallTitle>
            Stengthen your onboarding process
          </SectionAgencySmallTitle>
        </HeaderBox>
        <Container image={"/img/background.png"}>
          <ImageContainer>
            <Image
              src={"/img/video.png"}
              width={400}
              alt="video"
              height={650}
            ></Image>
          </ImageContainer>
          <CardsBox>
            <ButtonCard key={cardProps[0].title}>
              <Card title={cardProps[0].title} icon={cardProps[0].icon}>
                {" "}
                <StyledCardParagraph>
                  Complete <b>brief writing or simple guidance</b> on what to
                  include, we've got you covered.
                </StyledCardParagraph>
              </Card>
            </ButtonCard>
            <ButtonCard key={cardProps[1].title}>
              <Card title={cardProps[1].title} icon={cardProps[1].icon}>
                {" "}
                <StyledCardParagraph>
                  In depth agency search covering; <b>criteria matching,</b>{" "}
                  door knocking and duo-dilligence veting.
                </StyledCardParagraph>
              </Card>
            </ButtonCard>
            <ButtonCard key={cardProps[2].title}>
              <Card title={cardProps[2].title} icon={cardProps[2].icon}>
                {" "}
                <StyledCardParagraph>
                  Comprehencive <b>pitch management</b>, including comms, diary
                  management and pitch hosting.
                </StyledCardParagraph>
              </Card>
            </ButtonCard>
          </CardsBox>
        </Container>
      </MainBox>
    </>
  );
};
