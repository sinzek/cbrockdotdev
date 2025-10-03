import {
	EnvelopeSimpleIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	PersonIcon,
	ReadCvLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import { BriefcaseIcon } from "@phosphor-icons/react/dist/ssr/Briefcase";

export const mainLinks = [
	{
		name: "projects",
		href: "/projects",
		icon: BriefcaseIcon,
		externalLink: false,
	},

	{
		name: "about me",
		href: "/about-me",
		icon: PersonIcon,
		externalLink: false,
	},
];

export const externalLinks = [
	{
		name: "resume",
		href: "/chase-brock-resume-2025.pdf",
		icon: ReadCvLogoIcon,
		externalLink: true,
	},
	{
		name: "github",
		href: "https://github.com/sinzek",
		icon: GithubLogoIcon,
		externalLink: true,
	},
	{
		name: "linkedIn",
		href: "https://www.linkedin.com/in/chasepbrock",
		icon: LinkedinLogoIcon,
		externalLink: true,
	},

	{
		name: "email",
		href: "mailto:chase.p.brock@gmail.com",
		icon: EnvelopeSimpleIcon,
		externalLink: true,
	},
];

export const technologies = [
	{
		name: "git",
		icon: "git",
		url: "https://git-scm.com/",
	},
	{
		name: "javascript",
		icon: "js",
		url: "https://www.javascript.com/",
	},
	{
		name: "typescript",
		icon: "typescript",
		url: "https://www.typescriptlang.org/",
	},
	{
		name: "html",
		icon: "html5",
		url: "https://www.w3.org/html/",
	},
	{
		name: "css",
		icon: "css3",
		url: "https://www.w3.org/Style/CSS/",
	},
	{
		name: "react",
		icon: "react",
		url: "https://react.dev/",
	},
	{
		name: "nextjs",
		icon: "nextjs2",
		url: "https://nextjs.org/",
	},
	{
		name: "nodejs",
		icon: "nodejs",
		url: "https://nodejs.org/",
	},
	{
		name: "wordpress",
		icon: "wordpress",
		url: "https://wordpress.org/",
	},
	{
		name: "tailwind css",
		icon: "tailwindcss",
		url: "https://tailwindcss.com/",
	},
	{
		name: "postgresql",
		icon: "postgresql",
		url: "https://www.postgresql.org/",
	},
	{
		name: "supabase",
		icon: "supabase",
		url: "https://supabase.com/",
	},
	{
		name: "mongodb",
		icon: "mongodb",
		url: "https://www.mongodb.com/",
	},
];
