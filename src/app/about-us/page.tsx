import Announcements, { Announcement } from "@/components/home/announcments";
import RecentActivities, {
  Activity,
} from "@/components/home/recent-activities";
import Image from "next/image";

export default function AboutUs() {
  const activities: Activity[] = [
    { text: "home grown plants", hrefText: "click", link: "g" },
    { text: "home grown plants2", hrefText: "click2", link: "s" },
  ];
  const announcements: Announcement[] = [
    { text: "home grown plants", hrefText: "click", link: "g" },
    { text: "home grown plants2", hrefText: "click2", link: "s" },
  ];
  return (
    <div>
      <h1>About Us</h1>
      <div className="flex w-4/5 pr-4">
        <div className="flex flex-start w-1/2">
          <RecentActivities activities={activities} />
        </div>
        <div className="flex flex-start w-1/2">
          <Announcements announcements={announcements} />
        </div>
      </div>
    </div>
  );
}
