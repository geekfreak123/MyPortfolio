import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithHubIcon from "@/assets/icons/github.svg";
import { TeachIcon } from "@/components/TeachIcon";
import mapImage from "@/assets/images/map.png";
import smileEmoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS3",
    iconType: CssIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Chrome",
    iconType: ChromeIcon,
  },
  {
    title: "GitHub",
    iconType: GithHubIcon,
  },
];

const hobbies = [
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Fitness",
    emoji: "⛹️‍♂️",
  },
  {
    title: "Photography",
    emoji: "📸",
  },
  {
    title: "Hiking",
    emoji: "🥾",
  },
  {
    title: "Singing",
    emoji: "🎤",
  },
  {
    title: "Painting",
    emoji: "🎨",
  },
];

export const AboutSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimse Into My World"
          description="Learn more about who I am,what I do & what Inspires me."
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspective"
            />
            <div>
              <Image
                src={bookImage}
                alt="Book Cover"
                className="w-40 mx-auto mt-8 "
              />
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My Toolbox"
              description="Explore the technology I use to craft exceptional digital
              experiences."
            />
          <ToolBoxItems items={toolboxItems} />
          <ToolBoxItems items={toolboxItems} />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the code"
              description="Explore the interest & hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map" />
            <Image src={smileEmoji} alt="Smile Emoji" />
          </Card>
        </div>
      </div>
    </section>
  );
};
