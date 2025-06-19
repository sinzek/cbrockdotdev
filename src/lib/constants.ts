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
		href: "/ChaseBrockResume.pdf",
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
	},
	{
		name: "JavaScript",
		icon: "js",
	},
	{
		name: "TypeScript",
		icon: "typescript",
	},
	{
		name: "HTML",
		icon: "html5",
	},
	{
		name: "CSS",
		icon: "css3",
	},
	{
		name: "React",
		icon: "react",
	},
	{
		name: "NextJS",
		icon: "nextjs2",
	},
	{
		name: "NodeJS",
		icon: "nodejs",
	},
	{
		name: "WordPress",
		icon: "wordpress",
	},
	{
		name: "Tailwind CSS",
		icon: "tailwindcss",
	},
	{
		name: "PostgreSQL",
		icon: "postgresql",
	},
	{
		name: "Supabase",
		icon: "supabase",
	},
	{
		name: "MongoDB",
		icon: "mongodb",
	},
];
