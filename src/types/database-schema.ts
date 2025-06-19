export type ProjectType = {
	id: string; // uuid in db
	slug: string; // UNIQUE slug for the project
	title: string; // title of the project
	description: string | null; // description of the project
	technologies: string[]; // array of technology names used in the project
	photos: string[]; // array of photo URLs for the project
	link: string | null; // link to the project
	blogPosts: string[]; // array of blog post slugs related to the project
	launchDate: Date | null; // date when the project was launched
};

export type BlogPostType = {
	id: string; // uuid in db
	createdAt: Date; // date when the blog post was created
	updatedAt: Date; // date when the blog post was last updated
	title: string; // title of the blog post
	tags: string[]; // array of tags for the blog post
	content: object | null; // jsonb markdown content of the blog post
	references: string[]; // array of references (links) related to the blog post
	published: boolean; // whether the blog post is published
	publishedAt: Date | null; // date when the blog post was published
	slug: string; // UNIQUE slug for the blog post
};

export type UserType = {
	id: string; // uuid in db
	email: string; // email of the user
};
