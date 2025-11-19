"use client"

import Projects from "@/components/Projects"
import Navbar from "@/components/Navbar"
import React, { useEffect, useState } from "react";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { IProject } from "../types";

import { supabase } from "@/global";

export default function ProjectsPage() {

	const [projects, setProjects] = useState<IProject[] | null>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [table, setTable] = useState("projects")

	useEffect(() => {

		async function load() {
			setLoading(true);
			setError(null);

			try {
			// 1) Fetch project metadata from Supabase
			const { data, error: sbError } = await supabase
				.from<string, any>(table)
				.select("*");

			setProjects(data)
			} catch (err: any) {
			setError(err?.message ?? String(err));
			} finally {
			setLoading(false);
			}
		}

		load();
	}, [table]);

	if (loading) return <div className="p-6">Loading...</div>;
	if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
	if (!projects) return <div className="p-6">No project found.</div>;

	return (
		<main className="w-full">
			<Navbar scrolled={true}/>

			<div className="w-full justify-center mx-auto m-[30vh]">
				<Projects projects={projects} id={'projects'}/>
			</div>
		</main>
	)
}