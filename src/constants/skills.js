import {
    java,
    firebase,
    springio,
    golang,
    jupyter,
    microsoft,
    mysql,
    ubuntu,
    docker,
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    mui,
    nodejs,
    react,
    tailwindcss,
    typescript,
    aws,
    python,
} from "../assets/icons";

export const skillsData = {
    fields: [
        {
            expData: {
                tech: "Web App",
                position: "Web Developer (Spring Boot)",
                period: "more than 2 years of experience",
                details: [
                    {
                        subject:"Languages",
                        value:"Java, Golang, Javascript, Typescript, Python, Html/Css."
                    },
                    {
                        subject:"Web frameworks/libaries",
                        value:"Spring Framework, Gin, Express.js, React.js."
                    },
                    {
                        subject:"Databases",
                        value:"MySQL, PostgreSQL, Redis, MongoDB, Firebase."
                    },
                    {
                        subject:"Unit Testing frameworks",
                        value:"JUnit, Mocha."
                    },
                ],
            },
        },
        {
            expData: {
                tech: "Desktop App",
                position: ".NET App Developer",
                period: "nearly 1 year of experience",
                details: [
                    {
                        subject:"Languages",
                        value:"C#, C++, Visual Basic."
                    },
                    {
                        subject:"App frameworks/libraries",
                        value:".NET Framework, Winform, WPF, VBA."
                    },
                    {
                        subject:"Databases",
                        value:"SQL Server, MS Access, MS Excel."
                    },
                ],
            },
        },
        {
            expData: {
                tech: "Quality Assurance",
                position: "QA Engineer",
                period: "nearly 1 year of experience",
                details: [
                    {
                        subject:"Functional testing",
                        value:"System & Unit, Regression, User Acceptance, Integration."
                    },
                    {
                        subject:"Non-Functional testing",
                        value:"Usability, , Usability, Stress, Load, Performance, Volumn."
                    },
                    {
                        subject:"Tracker/Management",
                        value:"Mantis, MS Excel, Redmine."
                    },
                    {
                        subject:"Automation",
                        value:"Selenium WebDriver, JMeter, Beautiful Soup (Python / Javascript)."
                    },
                    
                ],
            },
        },
        {
            expData: {
                tech: "Tools",
                details: [
                    {
                        subject:"Version control",
                        value:"Git, SVN, Tortoise Git, GitKraken."
                    },
                    {
                        subject:"OS",
                        value:"Windows, Linux."
                    },
                    {
                        subject:"IDE",
                        value:"IntelliJ, Eclipse, Visual Studio (Code)."
                    },
                    {
                        subject:"Virtualization",
                        value:"Docker, VMWare, Oracle VirtualBox."
                    },
                    {
                        subject:"Testing",
                        value:"Selenium IDE, JMeter."
                    },
                    {
                        subject:"Others",
                        value:"Slack, Office 365."
                    },
                ],
            },
        },
    ],
};

export const skills = [
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springio,
        name: "Spring",
        type: "Backend",
    },
    {
        imageUrl: golang,
        name: "Golang",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: jupyter,
        name: "Jupyter Notebook",
        type: "Cloud Platform",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Platform",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: mysql,
        name: "Mysql",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: firebase,
        name: "FireBase",
        type: "Database",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: microsoft,
        name: "Windows",
        type: "Operating System",
    },
    {
        imageUrl: ubuntu,
        name: "Linux",
        type: "Operating System",
    },
];
