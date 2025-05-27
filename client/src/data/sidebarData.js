import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGrip, faFileWaveform, faCalendarDays, faSquarePlus, faChartPie, faCommentDots, faPhone, faGear } from "@fortawesome/free-solid-svg-icons";

export const generalLinks = [
    {
        id: "dash-icon",
        icon: faGrip,
        link: "Dashboard"
    },
    {
        id: "his-icon",
        icon: faFileWaveform,
        link: "History"
    },
    {
        id: "calendar-icon",
        icon: faCalendarDays,
        link: "Calendar"
    },
    {
        id: "app-icon",
        icon: faSquarePlus,
        link: "Appointments"
    },
    {
        id: "stat-icon",
        icon: faChartPie,
        link: "Statistics"
    }
];

export const toolLink = [
    {
        id: "chat-icon",
        icon: faCommentDots,
        link: "Chat"
    },
    {
        id: "sup-icon",
        icon: faPhone,
        link: "Support"
    }
];

export const settingLink = [
    {
        id: "set-icon",
        icon: faGear,
        link: "Setting"
    }
];