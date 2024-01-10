import React from "react";
import TextWithLink from "../ui/TextWithLink";

export interface Activity {
  text: string;
  link: string;
  hrefText: string;
}

interface RecentActivitiesProps {
  activities: Activity[];
}

const RecentActivities: React.FC<RecentActivitiesProps> = ({ activities }) => {
  return (
    <div className="flex flex-col">
      <div className="text-2xl m-8 font-bold"> Recent Activities</div>
      <ul>
        {activities.map((activity, index) => (
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
              link={activity.link}
              hrefText={activity.hrefText}
              text={activity.text}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
