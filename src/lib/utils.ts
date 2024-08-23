import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Function to give more importance to the classes
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// Function to format the date to spain format
export function formatDate(date: Date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");

	return `${year}-${month}-${day}`;
}

// Function capitalize words
export function capitalizer(text: string) {
	return text.charAt(0).toUpperCase() + text.slice(1);
}

export function toggleUrl(lang: string, url: URL) {
	const urlSplit = url.pathname.split("/").slice();
	urlSplit[1] = lang;
	return urlSplit.join("/");
}

export function readingTime(html: string) {
	const textOnly = html.replace(/<[^>]+>/g, "");
	const wordCount = textOnly.split(/\s+/).length;
	const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
	return `${readingTimeMinutes} min read`;
}

export function wait(ms: number) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export function extractSegmentURL(path: string) {
	if (!path) return "";
	if (path === "/") return null;
	return path.split("/")[1];
}
