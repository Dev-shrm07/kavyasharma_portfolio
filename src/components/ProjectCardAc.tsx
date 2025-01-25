
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Image from "next/image";
import Link from "next/link";
interface HCardProps {
  image: string;
  title: string;
  desc: string;
  skills: string[];
  github: string;
  liveUrl?: string;
 
  
}

const HProjectCard = ({
  image,
  title,
  desc,
  skills,
  github,
  liveUrl,
  


}: HCardProps) => {
  return (
    <CardContainer className='inter-var w-[300px] md:w-[380px] h-[700px] md:h-[630px] p-0 '>
      <CardBody className="bg-neutral-900 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-full rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white dark:text-white"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {desc}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-4"
        >
          <Image
            src={image}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mb-10"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="bg-zinc-800 text-neutral-300 px-3 py-1 rounded-full text-xs font-medium hover:bg-zinc-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </CardItem>
        <CardItem className={`flex flex-row w-[90%] absolute bottom-5 ${liveUrl? "justify-between" : "justify-end"} items-center mt-auto`}>
          {liveUrl && (
            <CardItem
              translateZ={20}
              translateX={-40}
              as={Link}
              href={liveUrl}
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal bg-white dark:text-neutral-600"
            >
              Try now →
            </CardItem>
          )}

          <CardItem
            translateZ={20}
            translateX={40}
            as={Link}
            href={github}
            target="__blank"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Github
          </CardItem>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default HProjectCard;
