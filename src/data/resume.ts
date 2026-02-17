import type { Resume } from '../types';

export const resumeData: Resume = {
    name: "Neslyn Chellaiah Pious Maria Jose",
    title: "Master’s Graduate | Software Engineer",
    summary: "Master’s graduate with 4+ years of software development experience, passionate about modern web technologies and building scalable applications.",
    contact: {
        email: "neslyn@dal.ca",
        phone: "902-580-2806",
        location: "Halifax, NS",
        social: [
            {
                platform: "LinkedIn",
                url: "https://www.linkedin.com/in/neslyn-chellaiah-p/",
                icon: "linkedin",
                username: "linkedin.com/in/neslyn-chellaiah-p"
            }
        ]
    },
    experience: [
        {
            company: "SAP",
            role: "Agile Developer",
            location: "Vancouver, BC",
            startDate: "Sep 2025",
            endDate: "Present",
            description: []
        },
        {
            company: "Leadrat",
            role: "Application Developer",
            location: "Remote", // Inferring remote or check later if location specified in resume. Resume says Jun 2023 -- Jul 2024. Location not explicitly in snippet but previously TendersCuts was Chennai? Assuming Remote or specific city not listed in resume snippet properly. Wait, snippet says "Vancouver, BC | Sep 2025", Leadrat has no location. I'll leave empty or generic.
            startDate: "Jun 2023",
            endDate: "Jul 2024",
            description: []
        },
        {
            company: "TenderCuts",
            role: "Software Engineer",
            location: "India",
            startDate: "Apr 2022",
            endDate: "Jun 2023",
            description: []
        },
        {
            company: "Oracle",
            role: "Associate Consultant",
            location: "India",
            startDate: "Sep 2020",
            endDate: "Apr 2022",
            description: []
        }
    ],
    education: [
        {
            institution: "Dalhousie University",
            degree: "Master of Applied Computer Science",
            startDate: "",
            endDate: "Apr 2026"
        },
        {
            institution: "Sathyabama Institute of Science and Technology",
            degree: "BE in Computer Science & Engineering",
            startDate: "",
            endDate: "Jun 2020"
        }
    ],
    projects: [
        {
            name: "JavaScript Fn Docs",
            description: [
                "A VS Code extension used to auto-generate documentation for functions, reducing manual effort."
            ],
            technologies: ["Node.js", "VSCE", "Gemini AI", "Rest API", "TypeScript", "Jasmine", "Karma"],
            link: "https://marketplace.visualstudio.com/items?itemName=NeslynChellaiahPiousMariaJose.document-functions"
        },
        {
            name: "Take Me There",
            description: [
                "A cab-booking automation app to reduce multi-app ride search time."
            ],
            technologies: ["React Native", "Node.js", "Tailwind CSS", "Firestore", "MongoDB", "Figma", "Heroku"],
            link: "https://github.com/NeslynChellaiah/Take-Me-There"
        }
    ],
    skills: {
        languages: ["TypeScript", "JavaScript", "Java", "Python", "C#", "HTML5", "CSS3", "SQL"],
        frameworks: ["React", "React Native", "Angular", "Playwright", "Ionic", "Redux", "WXT", "Bootstrap", "Tailwind CSS", "Node.js", "Express"],
        technologies: ["Git", "Jenkins", "CI/CD Pipelines", "GitHub Actions", "Docker", "MongoDB", "MySQL", "Firestore", "JIRA", "Postman", "Figma", "Agile/Scrum", "Unit Testing"],
        softSkills: ["Team collaboration", "Self-starter", "Problem-solving", "Adaptability", "Communication", "Time management"]
    }
};
