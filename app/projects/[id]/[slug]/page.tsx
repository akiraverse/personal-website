"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import { IProject } from "@/app/types";
import { Calendar, Code2, ArrowLeftCircleIcon } from "lucide-react";
import { supabase } from "@/global";
import React from "react";
import ReactMarkdown from "react-markdown"
import { useRouter } from "next/router";
import { use } from 'react';

interface PageProps {
  params: Promise<{
    id: string;
    slug: string;
  }>;
}

export default function ProjectDetailPage({ params }: { params: Promise<{ id: string; slug: string }> }) {
  const { id, slug } =  use(params);

  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const table = "projects";

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);

        const { data, error: sbError } = await supabase
          .from(table)
          .select("*")
          .eq("id", id)
          .single();

        if (sbError) throw sbError;
        setProject(data);
      } catch (err: any) {
        setError(err?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    load();
  }, [id]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;
  if (!project) return <div className="p-6">No project found.</div>;

  return (
    <div className="w-[80%] justify-center mx-auto">
      <Navbar scrolled={true} />

      {/* Hero Image */}
      <div className="mx-auto mt-[30vh]">
        <button className="flex flex-row text-emerald-400 gap-2 items-center my-auto mr-auto mb-[5vh]" onClick={() => (window.location.href = "/")}>
          <ArrowLeftCircleIcon/> back
        </button>
        <div className="w-full h-auto rounded-2xl overflow-hidden mb-10">
          <img
            src={project?.thumbnail_url as string}
            alt={project?.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Project Info */}
      <div className="w-[95%] mx-auto flex flex-col pb-20">
        <div className="gap-3 text-sm text-gray-400 mb-4 flex items-center">
          <Calendar size={16} />
          <span>{new Date(project?.created_at).toLocaleDateString()}</span>
        </div>

        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mb-4">
          {project?.tech_stack?.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-emerald-400/10 text-emerald-400 rounded-full text-sm border border-emerald-400/20"
            >
              {tech}
            </span>
          ))}
        </div>

        <ReactMarkdown>{project.description}
        </ReactMarkdown>

        <div>
          {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <Code2 size={18} />
            View Full Repository on GitHub →
          </a>
        )}
        </div>
      </div>
    </div>
  );
}

