import {
	MailboxIcon,
	LinkedinLogoIcon,
	GithubLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function AboutMePage() {
	return (
		<div className="flex w-full max-w-4xl flex-col gap-20 pb-48">
			<section className="flex flex-col gap-8">
				<h1 className="text-4xl font-semibold font-header">
					Hi, I&apos;m <span className="text-red">Chase Brock,</span>{" "}
					a full-stack developer and computer science student at the
					University of Houston.
				</h1>
				<p className="text-lg font-light font-sans text-foreground/75">
					I&apos;ve built and deployed full-stack applications that
					serve real users, including a YouTube content planning
					platform and AI-integrated web tools. I enjoy turning
					ambitious ideas into working products that solve real
					problems.
				</p>
				<div className="space-y-2">
					<p className="text-lg font-light font-sans text-foreground/75">
						Some of my recent work includes:
					</p>
					<ul className="text-foreground/75 list-[circle] space-y-3 pl-8 bg-gradient-to-b from-red/25 to-red/10 to-5% border-t-red/30 border-x border-x-red/5 border-t py-4 rounded-md">
						<li>
							Built a production-ready creator platform that
							supports end-to-end content workflows from
							brainstorming to scripting and publishing.
						</li>
						<li>
							Improved WordPress site load times by 30% on mobile
							and 20% on desktop by optimizing assets,
							implementing BunnyCDN to serve images and videos,
							and fine-tuning caching.
						</li>

						<li>
							Integrated AI features into web apps to boost user
							engagement and simplify complex workflows for
							content creators.
						</li>
					</ul>
				</div>
				<p className="text-lg font-light font-sans text-foreground/75">
					I&apos;m constantly leveling up my skills. Recently, I
					taught myself Docker for containerization, learned the
					Stripe API to implement recurring payments, and dove deep
					into OAuth to securely manage user access across platforms.
				</p>
				<p className="text-lg font-light font-sans text-foreground/75">
					I thrive on solving complex problems, whether that’s
					designing scalable database schemas, implementing real-time
					features, or debugging tricky production issues. I bring
					both technical execution and product thinking to every
					project I work on.
				</p>
				<p className="text-lg font-light font-sans text-foreground/75">
					Outside of coding, I&apos;m passionate about creative work
					and helping others bring their ideas to life. I love
					building tools that make people&apos;s lives easier, whether
					that&apos;s through software, content creation, or just
					sharing knowledge. I&apos;m also an avid learner and enjoy
					exploring new technologies and frameworks in my free time.
				</p>
				<p className="text-lg font-light font-sans text-foreground/75">
					I&apos;m actively seeking software engineering internships
					where I can contribute to meaningful projects, learn from
					experienced developers, and help build products that people
					truly enjoy using.
				</p>
			</section>
			<section className="flex flex-col gap-8">
				<h2 className="text-4xl font-semibold font-header">
					Want to work together?
				</h2>
				<p className="text-lg font-light font-sans text-foreground/75">
					I&apos;m always open to new opportunities and challenges. If
					you have a project in mind, an internship opportunity, or
					just want to chat about software development, feel free to
					reach out!
				</p>
				<ul className="space-y-2">
					<li className="flex flex-row items-center gap-2">
						<span className="text-lg font-semibold font-sans text-foreground flex flex-row items-center gap-2">
							<MailboxIcon className="size-5" weight="duotone" />
							Email me:
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
						<span className="text-lg font-semibold font-sans text-foreground flex flex-row items-center gap-2">
							<LinkedinLogoIcon
								className="size-5"
								weight="duotone"
							/>
							Connect with me on LinkedIn:
						</span>
						<Link
							href="https://www.linkedin.com/in/chasepbrock/"
							className="text-red hover:underline"
							title="Connect with me on LinkedIn"
							rel="noopener noreferrer"
							target="_blank"
						>
							https://www.linkedin.com/in/chasepbrock/
						</Link>
					</li>
					<li className="flex flex-row items-center gap-2">
						<span className="text-lg font-semibold font-sans text-foreground flex flex-row items-center gap-2">
							<GithubLogoIcon
								className="size-5"
								weight="duotone"
							/>
							Follow me on GitHub:
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
		</div>
	);
}
