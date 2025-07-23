import { AnimationWrapper } from "@/components/animations";
import {
	MailboxIcon,
	LinkedinLogoIcon,
	GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AboutMePage() {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-12 lg:gap-20 pb-24 lg:pb-48 lg:px-0 px-5 lg:pt-0 pt-10">
			<section className="flex flex-col lg:gap-8 gap-6">
				<AnimationWrapper direction="right">
					<h1 className="text-3xl lg:text-4xl font-semibold font-header text-pretty">
						Hi, I&apos;m{" "}
						<span className="text-red">Chase Brock,</span> a
						full-stack developer and computer science student at the
						University of Houston.
					</h1>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.1}>
					<p className="text-lg font-light font-sans text-foreground/75">
						I&apos;ve built and deployed full-stack applications
						that serve real users, including a YouTube content
						planning platform and AI-integrated web tools. I enjoy
						turning ambitious ideas into working products that solve
						real problems.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.2}>
					<div className="space-y-2">
						<p className="text-lg font-light font-sans text-foreground/75">
							Some of my recent work includes:
						</p>
						<ul className="text-foreground/75 list-[circle] space-y-3 pl-8 pr-2 bg-gradient-to-b from-red/25 to-red/10 to-5% border-t-red/30 border-x border-x-red/5 border-t py-4 rounded-md">
							<li>
								Built a production-ready creator platform that
								supports end-to-end content workflows from
								brainstorming to scripting and publishing.
							</li>
							<li>
								Improved WordPress site load times by 30% on
								mobile and 20% on desktop by optimizing assets,
								implementing BunnyCDN to serve images and
								videos, and fine-tuning caching.
							</li>

							<li>
								Integrated AI features into web apps to boost
								user engagement and simplify complex workflows
								for content creators.
							</li>
						</ul>
					</div>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.3}>
					<p className="text-lg font-light font-sans text-foreground/75">
						I&apos;m constantly leveling up my skills. Recently, I
						taught myself Docker for containerization, learned the
						Stripe API to implement recurring payments, and dove
						deep into OAuth to securely manage user access across
						platforms.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.4}>
					<p className="text-lg font-light font-sans text-foreground/75">
						I thrive on solving complex problems, whether that’s
						designing scalable database schemas, implementing
						real-time features, or debugging tricky production
						issues. I bring both technical execution and product
						thinking to every project I work on.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.5}>
					<p className="text-lg font-light font-sans text-foreground/75">
						Outside of coding, I&apos;m passionate about creative
						work and helping others bring their ideas to life. I
						love building tools that make people&apos;s lives
						easier, whether that&apos;s through software, content
						creation, or just sharing knowledge. I&apos;m also an
						avid learner and enjoy exploring new technologies and
						frameworks in my free time.
					</p>
				</AnimationWrapper>
				<AnimationWrapper direction="right" delay={0.6}>
					<p className="text-lg font-light font-sans text-foreground/75">
						I&apos;m actively seeking software engineering
						internships where I can contribute to meaningful
						projects, learn from experienced developers, and help
						build products that people truly enjoy using.
					</p>
				</AnimationWrapper>
			</section>
			<AnimationWrapper direction="right" delay={0.7}>
				<section className="flex flex-col gap-6 lg:gap-8">
					<h2 className="text-3xl lg:text-4xl font-semibold font-header">
						Want to work together?
					</h2>
					<p className="text-lg font-light font-sans text-foreground/75">
						I&apos;m always open to new opportunities and
						challenges. If you have a project in mind, an internship
						opportunity, or just want to chat about software
						development, feel free to reach out!
					</p>
					<ul className="space-y-2 text-sm lg:text-lg whitespace-nowrap">
						<li className="flex flex-row items-center gap-2 ">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<MailboxIcon
									className="size-5 shrink-0"
									weight="duotone"
								/>
								<span className="hidden lg:inline">
									Email me:
								</span>
							</span>
							<Link
								href="mailto:chase.p.brock@gmail.com"
								className="text-red hover:underline"
								title="Email me"
								rel="noopener noreferrer"
								target="_blank"
							>
								chase.p.brock@gmail.com
							</Link>
						</li>
						<li className="flex flex-row items-center gap-2">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<LinkedinLogoIcon
									className="size-5 shrink-0"
									weight="duotone"
								/>
								<span className="hidden lg:inline">
									Let&apos;s connect:
								</span>
							</span>
							<Link
								href="https://www.linkedin.com/in/chasepbrock"
								className="text-red hover:underline"
								title="Connect with me on LinkedIn"
								rel="noopener noreferrer"
								target="_blank"
							>
								https://www.linkedin.com/in/chasepbrock
							</Link>
						</li>
						<li className="flex flex-row items-center gap-2">
							<span className="font-semibold font-sans text-foreground flex flex-row items-center gap-2">
								<GithubLogoIcon
									className="size-5 shrink-0"
									weight="duotone"
								/>
								<span className="hidden lg:inline">
									Follow me:
								</span>
							</span>
							<Link
								href="https://github.com/chasepbrock"
								className="text-red hover:underline"
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
