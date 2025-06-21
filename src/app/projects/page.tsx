import { Technologies } from "@/components/technologies";

export default function ProjectsPage() {
	// since this page is rendered on the server, we can fetch data directly here
	// and pass it to a component as props
	// essentially, this is where i'll fetch projects from supabase

	return (
		<div className="flex w-full max-w-4xl flex-col gap-20">
			<section className="flex flex-col gap-12">
				<h1 className="text-4xl font-semibold font-header">
					I&apos;ve created{" "}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-red to-yellow">
						full-stack applications
					</span>{" "}
					using a variety of technologies.
				</h1>
				<Technologies />
			</section>
			<section className="flex flex-col gap-12">
				<h2 className="text-4xl font-semibold font-header">
					Here are some of the things I&apos;ve built so far:
				</h2>
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
					<div className="bg-foreground/10 p-4 rounded-lg">
						<h3 className="text-2xl font-semibold">Project 1</h3>
						<p className="text-base font-light">
							Description of project 1. This project showcases my
							ability to build full-stack applications using
							modern technologies.
						</p>
					</div>
					<div className="bg-foreground/10 p-4 rounded-lg">
						<h3 className="text-2xl font-semibold">Project 1</h3>
						<p className="text-base font-light">
							Description of project 1. This project showcases my
							ability to build full-stack applications using
							modern technologies.
						</p>
					</div>
					<div className="bg-foreground/10 p-4 rounded-lg">
						<h3 className="text-2xl font-semibold">Project 1</h3>
						<p className="text-base font-light">
							Description of project 1. This project showcases my
							ability to build full-stack applications using
							modern technologies.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
