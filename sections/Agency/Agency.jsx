import { SectionAgencySmallTitle } from "../../components/Typography/SectionAgencySmallTitle";
import { SectionAgencyTitle } from "../../components/Typography/SectionAgencyTitle";
import { CardsBox, Container, HeaderBox, ImageContainer } from "./elements";
import Image from "next/dist/client/image";
import { Card } from "../../collections/Card/Card";
import { BiNews, BiGlobe, BiPackage } from "react-icons/bi";
import { ButtonCard } from "../../components/ButtonCard";
import { StyledCardParagraph } from "../../collections/Card/elements";

export const Agency = () => {
  const cardProps = [
    {
      title: "Brief",
      description: (
        <StyledCardParagraph>
          Complete <b>brief writing or simple guidance</b> on what to include,
          we've got you covered.
        </StyledCardParagraph>
      ),
      icon: <BiNews color="black" size={140} />,
    },
    {
      title: "Search",
      description: (
        <StyledCardParagraph>
          In depth agency search covering; <b>criteria matching,</b> door
          knocking and duo-dilligence veting.
        </StyledCardParagraph>
      ),
      icon: <BiGlobe color="black" size={140} />,
    },
    {
      title: "Pitch",
      description: (
        <StyledCardParagraph>
          Comprehencive <b>pitch management</b>, including comms, diary
          management and pitch hosting.
        </StyledCardParagraph>
      ),
      icon: <BiPackage color="black" size={140} />,
    },
  ];

  return (
    <>
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
          {cardProps.map((card) => (
            <ButtonCard key={card.title}>
              <Card
                title={card.title}
                desc={card.description}
                icon={card.icon}
              ></Card>
            </ButtonCard>
          ))}
        </CardsBox>
      </Container>
    </>
  );
};
