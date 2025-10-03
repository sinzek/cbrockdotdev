import { AnimationWrapper } from "@/components/animations";
import { GithubLogoIcon, LinkedinLogoIcon, MailboxIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AboutMePage() {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-12 lg:gap-20 pb-24 lg:pb-48 lg:px-0 px-5 lg:pt-0 pt-10">
			<section className="flex flex-col lg:gap-8 gap-6">
				<AnimationWrapper direction="right">
					<h1 className="text-3xl lg:text-4xl font-semibold font-header text-pretty">
						hi, i&apos;m <span className="text-yellow">chase brock,</span> a full-stack developer and
						computer science student at the university of houston.
					</h1>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.1}>
					<p className="text-lg font-light font-sans test-foreground">
						i&apos;ve built and deployed full-stack applications that serve real users, including a youtube
						content planning platform and a learning management system for an online course. i enjoy turning
						ambitious ideas into working products that solve real problems.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.2}>
					<div className="space-y-2">
						<p className="text-lg font-light font-sans test-foreground">some of my recent work includes:</p>
						<ul className="text-foreground list-[circle] space-y-3 pl-8 pr-2 bg-yellow/15 py-4 rounded-md">
							<li>
								built a production-ready creator platform that supports end-to-end content workflows
								from brainstorming to scripting and publishing.
							</li>
							<li>
								improved wordpress site load times by 30% on mobile and 20% on desktop by optimizing
								assets, implementing bunnycdn to serve images and videos, and fine-tuning caching.
							</li>

							<li>
								integrated ai features into web apps to boost user engagement and simplify complex
								workflows for content creators.
							</li>
						</ul>
					</div>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.3}>
					<p className="text-lg font-light font-sans test-foreground">
						i&apos;m constantly looking for ways to expand my skills. recently, i taught myself docker for
						containerization, learned the stripe api to implement recurring payments, and dove deep into
						oauth to securely manage user access across platforms.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.4}>
					<p className="text-lg font-light font-sans test-foreground">
						i thrive on solving complex problems, whether that&apos;s designing scalable database schemas,
						implementing real-time features, or debugging tricky production issues. i bring both technical
						execution and product thinking to every project i work on.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.5}>
					<p className="text-lg font-light font-sans test-foreground">
						outside of coding, i&apos;m passionate about creative work and helping others bring their ideas
						to life. i love building tools that make people&apos;s lives easier, whether that&apos;s through
						software, content creation, or just sharing knowledge. i&apos;m also an avid learner and enjoy
						exploring new technologies and frameworks in my free time.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.6}>
					<p className="text-lg font-light font-sans test-foreground">
						i&apos;m actively seeking software engineering internships where i can contribute to meaningful
						projects, learn from experienced developers, and help build things that people truly enjoy
						using.
					</p>
				</AnimationWrapper>
			</section>
			<AnimationWrapper direction="right" delay={0.7}>
				<section className="flex flex-col gap-6 lg:gap-8">
					<h2 className="text-3xl lg:text-4xl font-semibold font-header">want to work together?</h2>
					<p className="text-lg font-light font-sans test-foreground">
						i&apos;m always open to new opportunities and challenges. if you have a project in mind, an
						internship opportunity, or just want to chat about software development, feel free to reach out!
					</p>
					<ul className="space-y-2 text-sm lg:text-lg whitespace-nowrap">
						<li className="flex flex-row items-center gap-2 ">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<MailboxIcon className="size-5 shrink-0" weight="fill" />
								<span className="hidden lg:inline">email me:</span>
							</span>
							<Link
								href="mailto:chase.p.brock@gmail.com"
								className="text-yellow hover:underline"
								title="Email me"
								rel="noopener noreferrer"
								target="_blank"
							>
								chase.p.brock@gmail.com
							</Link>
						</li>
						<li className="flex flex-row items-center gap-2">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<LinkedinLogoIcon className="size-5 shrink-0" weight="fill" />
								<span className="hidden lg:inline">let&apos;s connect:</span>
							</span>
							<Link
								href="https://www.linkedin.com/in/chasepbrock"
								className="text-yellow hover:underline"
								title="Connect with me on LinkedIn"
								rel="noopener noreferrer"
								target="_blank"
							>
								https://www.linkedin.com/in/chasepbrock
							</Link>
						</li>
						<li className="flex flex-row items-center gap-2">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<GithubLogoIcon className="size-5 shrink-0" weight="fill" />
								<span className="hidden lg:inline">follow me:</span>
							</span>
							<Link
								href="https://github.com/chasepbrock"
								className="text-yellow hover:underline"
								title="Follow me on GitHub"
								rel="noopener noreferrer"
								target="_blank"
							>
								https://github.com/chasepbrock
							</Link>
						</li>
					</ul>
				</section>
			</AnimationWrapper>
		</div>
	);
}
