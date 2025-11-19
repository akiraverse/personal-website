export type IProject = {
	id: number;
	title: string;
	description: string;
	category: string;
	github_url: string;
	demo_url?: string | null;
	thumbnail_url?: string | null;
	tech_stack?: string[] | null;
	created_at: Date;
	updated_at: Date;
};

export type ICertificate = {
	id: number;
	title: string;
	desc: string;
	category: string;
	thumbnail_url?: string | null;
	created_at: Date;
	updated_at: Date;
};

export type IBlog = {
	id: number;
	title: string;
	description: string;
	category: string;
	created_at: Date;
	updated_at: Date;
};