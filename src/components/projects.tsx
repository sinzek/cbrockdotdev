export default function Projects() {
	return (
		<>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<div className="bg-foreground/10 p-4 rounded-b-lg">
						<h3 className="text-2xl font-semibold">Project 1</h3>
						<p className="text-base font-light">
							Description of project 1. This project showcases my
							ability to build full-stack applications using
							modern technologies.
						</p>
					</div>
				</div>
				<div className="bg-foreground/10 p-4 rounded-lg">
					<h3 className="text-2xl font-semibold">Project 2</h3>
					<p className="text-base font-light">
						Description of project 2. This project showcases my
						ability to build full-stack applications using modern
						technologies.
					</p>
				</div>
				<div className="bg-foreground/10 p-4 rounded-lg">
					<h3 className="text-2xl font-semibold">Project 3</h3>
					<p className="text-base font-light">
						Description of project 3. This project showcases my
						ability to build full-stack applications using modern
						technologies.
					</p>
				</div>
			</div>
		</>
	);
}
