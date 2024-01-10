import Announcements, { Announcement } from "@/components/home/announcments";
import RecentActivities, {
  Activity,
} from "@/components/home/recent-activities";
import Image from "next/image";

export default function ActivityAnnouncementWidget() {
  const activities: Activity[] = [
    {
      text: "School children participated in Drawing Program",
      hrefText: "click",
      link: "g",
    },
    {
      text: "Children has won Carrom board game ",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Children has achieved first rank in class",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "One Student got dstinction in the board exam",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Students has won prize in ramayana competition",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Students Got second prize in kabaddi",
      hrefText: "click2",
      link: "s",
    },
  ];
  const announcements: Announcement[] = [
    {
      text: "School children participated in Drawing Program",
      hrefText: "click",
      link: "g",
    },
    {
      text: "Children has won Carrom board game ",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Children has achieved first rank in class",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "One Student got dstinction in the board exam",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Students has won prize in ramayana competition",
      hrefText: "click2",
      link: "s",
    },
    {
      text: "Students Got second prize in kabaddi",
      hrefText: "click2",
      link: "s",
    },
  ];
  return (
    <div className="flex  justify-around  pt-10 pb-10 ">
      <div className="flex justify-center w-2/5">
        <RecentActivities activities={activities} />
      </div>
      <div className="flex w-2/5">
        <Announcements announcements={announcements} />
      </div>
    </div>
  );
}
