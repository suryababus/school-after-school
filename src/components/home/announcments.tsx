import React from "react";
import TextWithLink from "../ui/TextWithLink";

export interface Announcement {
  text: string;
  link: string;
  hrefText: string;
}

interface AnnouncementsProps {
  announcements: Announcement[];
}

const Announcements: React.FC<AnnouncementsProps> = ({ announcements }) => (
  <div className="flex flex-col">
    <div className="text-2xl m-8 font-bold"> Announcements</div>
    <ul>
      {announcements.map((announcement, index) => (
        <li key={index} style={{ listStyleType: "none", padding: "2px 0" }}>
          <span
            className="bg-orange-500"
            style={{
              display: "inline-block",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              marginRight: "8px",
            }}
          ></span>
          <TextWithLink
            link={announcement.link}
            hrefText={announcement.hrefText}
            text={announcement.text}
          />
        </li>
      ))}
    </ul>
  </div>
);

export default Announcements;
