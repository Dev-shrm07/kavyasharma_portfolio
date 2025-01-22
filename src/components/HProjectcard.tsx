import { Button } from "@/components/ui/button";

interface HCardProps {
  image: string;
  title: string;
  desc: string;
  skills: string[];
  github: string;
  liveUrl?: string;
}

const HProjectCard = ({ image, title, desc, skills, github, liveUrl }: HCardProps) => {
  return (
    <div className="bg-zinc-900 h-650px md:h-[500px] w-[280px] md:w-[350px] border-[0.05px] border-neutral-700 rounded-md shadow-sm overflow-hidden flex flex-col">
      <div className="h-[220px] overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          className="w-full h-full cursor-pointer object-cover rounded-t-md transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
      </div>
      
      <div className="p-4 flex flex-col h-[420px]">
        <div className="flex-grow">
          <h1 className="text-white text-xl font-bold mb-2">{title}</h1>
          <p className="text-neutral-400 text-sm mb-4">
            {desc}
          </p>
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
        </div>

        <div className={`flex flex-row ${liveUrl ? "justify-between" : "justify-end"} w-full mt-auto`}>
          {liveUrl && (
            <Button
              onClick={() => window.open(liveUrl, '_blank')}
              className="bg-white w-20 md:w-30 text-black px-5 md:px-8 font-bold text-[12px] hover:bg-neutral-300 hover:bg-opacity-90 hover:text-black"
            >
              Try it
            </Button>
          )}
          <Button
            onClick={() => window.open(github, '_blank')}
            className="bg-neutral-700 bg-opacity-55 w-20 md:w-30 text-white px-5 md:px-8 font-bold text-[12px] hover:bg-opacity-40 hover:text-white"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HProjectCard;