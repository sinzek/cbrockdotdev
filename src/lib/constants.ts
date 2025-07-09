import {
	ChatCircleDotsIcon,
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	PersonIcon,
	ReadCvLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { BriefcaseIcon } from "@phosphor-icons/react/dist/ssr/Briefcase";

export const links = [
	{
		name: "Projects",
		href: "/projects",
		icon: BriefcaseIcon,
	},
	{
		name: "Resume",
		href: "/chase-brock-resume.pdf",
		icon: ReadCvLogoIcon,
	},
	{
		name: "About Me",
		href: "/about-me",
		icon: PersonIcon,
	},
	{
		name: "Blog",
		href: "/blog",
		icon: ChatCircleDotsIcon,
	},
	{
		name: "GitHub",
		href: "https://github.com/sinzek",
		icon: GithubLogoIcon,
		externalLink: true,
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/chasepbrock",
		icon: LinkedinLogoIcon,
		externalLink: true,
	},

	{
		name: "Email",
		href: "mailto:chase.p.brock@gmail.com",
		icon: EnvelopeSimpleIcon,
		externalLink: true,
	},
];

export const technologies = [
	{
		name: "Git",
		icon: "git",
		url: "https://git-scm.com/",
	},
	{
		name: "JavaScript",
		icon: "js",
		url: "https://www.javascript.com/",
	},
	{
		name: "TypeScript",
		icon: "typescript",
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "HTML",
		icon: "html5",
		url: "https://www.w3.org/html/",
	},
	{
		name: "CSS",
		icon: "css3",
		url: "https://www.w3.org/Style/CSS/",
	},
	{
		name: "React",
		icon: "react",
		url: "https://react.dev/",
	},
	{
		name: "NextJS",
		icon: "nextjs2",
		url: "https://nextjs.org/",
	},
	{
		name: "NodeJS",
		icon: "nodejs",
		url: "https://nodejs.org/",
	},
	{
		name: "WordPress",
		icon: "wordpress",
		url: "https://wordpress.org/",
	},
	{
		name: "Tailwind CSS",
		icon: "tailwindcss",
		url: "https://tailwindcss.com/",
	},
	{
		name: "PostgreSQL",
		icon: "postgresql",
		url: "https://www.postgresql.org/",
	},
	{
		name: "Supabase",
		icon: "supabase",
		url: "https://supabase.com/",
	},
	{
		name: "MongoDB",
		icon: "mongodb",
		url: "https://www.mongodb.com/",
	},
];
