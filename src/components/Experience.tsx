"use client";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";


import "react-vertical-timeline-component/style.min.css";
import { Experiences as experiences } from "@/data/experience";


interface ExperienceTypes {
  title: string;
  company_name: string;
  icon?: React.FC
  iconBg: string;
  date: string;
  points: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceTypes }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#171717",
        color: "#fff",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.2)", // Consistent shadow
      }}
      contentArrowStyle={{ borderRight: "7px solid #fff" }}
      date={experience.date}
      icon={experience.icon ? <experience.icon /> : null}
      dateClassName="rounded-md"
      iconStyle={{
        background: experience.iconBg,
        borderColor: "#00FFAB",
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.3)", // Consistent icon shadow
      }}
    >
      <div className="mb-2 rounded-md bg-[#262626] p-2 shadow-lg">
        {" "}
        {/* Consistent shadow */}
        <div className="py-5">
          <h3 className="text-xl font-semibold leading-6 text-zinc-100">
            {experience.title}
          </h3>
          <p
            className="mt-1 max-w-2xl text-sm font-thin text-zinc-100"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <div className="border-t border-aquamarine px-4 py-5 sm:p-0">
          <ul className="mt-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline lineColor="#FFF">
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      ))}
    </VerticalTimeline>
  );
}
