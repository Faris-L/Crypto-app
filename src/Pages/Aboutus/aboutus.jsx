import {
  Page,
  TeamGrid,
  Card,
  Avatar,
  Name,
  Location,
  Description,
  GitHubIcon,
} from "./aboutus.styled";
import hamzinaslika from "../../assets/hamza.jpeg";
import farisslika from "../../assets/faris.jpeg";

const team = [
  {
    id: 1,
    name: "Hamza Fijuljanin",
    location: "NOVI PAZAR, SERBIA",
    description:
      "Dženan is a mathematician, and he work's in center NIT as a Web developer",
    image: hamzinaslika, 
    github: "https://github.com/",
  },
  {
    id: 2,
    name: "Faris Lakota",
    location: "NOVI PAZAR, SERBIA",
    description:
      "Senad work's in center NIT as a Web developer",
    image: farisslika, 
    github: "https://github.com/",
  },
];

export default function AboutUs() {
  return (
    <Page>
      <TeamGrid>
        {team.map((p) => (
          <Card key={p.id}>
            <Avatar src={p.image} alt={p.name} />

            <Name>{p.name}</Name>
            <Location>{p.location}</Location>

            <hr />

            <Description>{p.description}</Description>

            <a href={p.github} target="_blank" rel="noreferrer">
              <GitHubIcon className="bx bxl-github" />
            </a>
          </Card>
        ))}
      </TeamGrid>
    </Page>
  );
}
