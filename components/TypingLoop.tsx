"use client"

import React, { useEffect, useState, useRef } from "react";

export default function TypingLoop({
		words = ["Learner.", "Thinker.", "Developer."],
		typingDuration = 1000, 
		deletingDuration = 900, 
	}: {
		words?: string[];
		typingDuration?: number;
		deletingDuration?: number;
}) {
	const [wordIndex, setWordIndex] = useState(0);
	const [display, setDisplay] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const mounted = useRef(true);

	useEffect(() => {
		mounted.current = true;
			return () => {
				mounted.current = false;
		};
	}, []);

	useEffect(() => {
		const fullWord = words[wordIndex % words.length];
		const charCount = Math.max(1, fullWord.length);

		// interval per char so the whole typing (or deleting) takes the target duration
		const typingInterval = Math.max(10, Math.floor(typingDuration / charCount));
		const deletingInterval = Math.max(10, Math.floor(deletingDuration / charCount));

		let timer: ReturnType<typeof setTimeout>;

		if (!isDeleting) {
			// typing phase: add one character at a time
			if (display !== fullWord) {
				timer = setTimeout(() => {
					if (!mounted.current) return;
					setDisplay(fullWord.slice(0, display.length + 1));
				}, typingInterval);
			} else {
			// finished typing: hold for a short pause equal to typingDuration (so the user sees it fully typed)
				timer = setTimeout(() => {
					if (!mounted.current) return;
					setIsDeleting(true);
				}, typingDuration);
			}
		} else {
			// deleting phase: remove one character at a time
			if (display !== "") {
				timer = setTimeout(() => {
					if (!mounted.current) return;
					setDisplay(fullWord.slice(0, display.length - 1));
				}, deletingInterval);
			} else {
				// finished deleting: move to next word and start typing
				timer = setTimeout(() => {
					if (!mounted.current) return;
					setIsDeleting(false);
					setWordIndex((w) => (w + 1) % words.length);
				}, 50);
			}
		}

		return () => clearTimeout(timer);
		// we intentionally depend on display, isDeleting and wordIndex
	}, [display, isDeleting, wordIndex, words, typingDuration, deletingDuration]);

	return (
		<div className="w-fit lg:text-8xl md:text-7xl text-6xl text-wrap leading-[100%]  font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
			<span>A {' '}</span>
			<span className="h-fit">
				<span aria-live="polite" >{display}</span>
				<span className="h-auto" aria-hidden>
					|
				</span>
			</span>
		</div>
	);
}
