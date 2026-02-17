export interface SocialLink {
    platform: string;
    url: string;
    icon: string; // FontAwesome icon name or similar identifier
    username?: string;
}

export interface Experience {
    company: string;
    role: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[]; // Kept for completeness, though UI might opt to hide it
    logo?: string; // Placeholder for company logo URL
}

export interface Education {
    institution: string;
    degree: string;
    startDate: string;
    endDate: string;
    logo?: string; // Placeholder for institution logo URL
}

export interface Project {
    name: string;
    description: string[];
    technologies: string[];
    link?: string;
    github?: string;
    logo?: string; // Placeholder
    type: string;
}

export interface Resume {
    name: string;
    title: string;
    summary: string;
    contact: {
        email: string;
        phone: string;
        location: string;
        social: SocialLink[];
    };
    experience: Experience[];
    education: Education[];
    projects: Project[];
    skills: {
        languages: string[];
        frameworks: string[];
        technologies: string[];
        softSkills: string[];
    };
}
