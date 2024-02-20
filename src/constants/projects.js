import { elearning, codeenchant } from "../assets/images";
let projects = {
    featured: [
        {
            date: "1",
            title: "E-learning Platform",
            github: "https://github.com/nmquanvn/SuperSchool-beta",
            tech: [
                "Node.js",
                "Express.js",
                "React.js",
                "Material UI",
                "MySQL",
                "Cloudinary",
                "Knex.js",
            ],
            info: `An E-learning website is built using Javascript stack (https://nodejs.org/en)[Node.js], (https://react.dev/)[ React.js Library], (https://www.mysql.com/)[ MySQL] for database storage, and Cloudinary for video streaming.`,
            image: elearning,
        },
        {
            date: "2",
            title: "Code Enchant",
            github: "https://github.com/nmquanvn/CodeEnchant",
            external: "https://code-enchant.vercel.app/",
            tech: [
                "ReactJS",
                "Tailwind",
                "Prisma",
                "NextJS",
                "Zustand",
                "RadixUI",
            ],
            info: `Enhance code visualization for sharing or editing.`,
            image: codeenchant,
        },
    ],
};

export default projects;
