"use client";
import React, { useMemo, useState } from "react";

type FeedPost = {
  id: number;
  author: string;
  handle: string;
  avatarColor: string; // tailwind bg color
  content: string;
  image?: string; // optional image url
  timestamp: string;
  likes: number;
  comments: number;
  shares: number;
};

const samplePosts: FeedPost[] = [
  {
    id: 1,
    author: "Alex Johnson",
    handle: "@alex",
    avatarColor: "bg-blue-500",
    content:
      "Just launched a new feature built with Next.js and Tailwind CSS. Performance looks great!",
    timestamp: "2h",
    likes: 24,
    comments: 8,
    shares: 2,
  },
  {
    id: 2,
    author: "Priya Sharma",
    handle: "@priya",
    avatarColor: "bg-pink-500",
    content:
      "Designing a clean onboarding flow this week. Any favorite UX patterns for progressive disclosure?",
    timestamp: "5h",
    likes: 42,
    comments: 13,
    shares: 5,
  },
  {
    id: 3,
    author: "Marco Rossi",
    handle: "@marco",
    avatarColor: "bg-emerald-500",
    content:
      "Dockerized our monorepo and shaved 3 minutes off CI. Small wins add up!",
    timestamp: "1d",
    likes: 87,
    comments: 21,
    shares: 9,
  },
  {
    id: 4,
    author: "Sara Lee",
    handle: "@sara",
    avatarColor: "bg-purple-500",
    content:
      "Prototyping a dark mode color system. Keeping contrast accessible while looking sleek ✨",
    timestamp: "1d",
    likes: 64,
    comments: 12,
    shares: 3,
  },
  {
    id: 5,
    author: "David Kim",
    handle: "@dk",
    avatarColor: "bg-orange-500",
    content:
      "Shipped our first WebSocket feature today. Real-time updates feel so smooth!",
    timestamp: "2d",
    likes: 133,
    comments: 34,
    shares: 12,
  },
  {
    id: 6,
    author: "Lin Chen",
    handle: "@lin",
    avatarColor: "bg-cyan-500",
    content:
      "Any tips for optimizing images in Next.js 15? Experimenting with the new Image component settings.",
    timestamp: "3d",
    likes: 19,
    comments: 6,
    shares: 1,
  },
  {
    id: 7,
    author: "Emily Nguyen",
    handle: "@emily",
    avatarColor: "bg-fuchsia-500",
    content:
      "Refactoring state with Zustand. Loving the simplicity compared to heavier solutions.",
    timestamp: "4d",
    likes: 58,
    comments: 17,
    shares: 4,
  },
  {
    id: 8,
    author: "Mohamed Ali",
    handle: "@mo",
    avatarColor: "bg-teal-500",
    content:
      "Trying out edge middleware for geo-based routing. Setup was surprisingly straightforward!",
    timestamp: "5d",
    likes: 73,
    comments: 18,
    shares: 7,
  },
  {
    id: 9,
    author: "Julia Santos",
    handle: "@julia",
    avatarColor: "bg-red-500",
    content:
      "Sketching some brand illustrations this weekend. Warm palettes are back ☀️",
    timestamp: "6d",
    likes: 51,
    comments: 9,
    shares: 2,
  },
  {
    id: 10,
    author: "Tom Becker",
    handle: "@tom",
    avatarColor: "bg-indigo-500",
    content:
      "Benchmarking server actions vs API routes. Numbers look promising for simple mutations.",
    timestamp: "1w",
    likes: 28,
    comments: 11,
    shares: 3,
  },
];

function getInitials(name: string) {
  const [first = "", second = ""] = name.split(" ");
  return `${first.charAt(0)}${second.charAt(0)}`.toUpperCase();
}

export default function FeedPage() {
  const [query, setQuery] = useState("");

  const posts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return samplePosts;
    return samplePosts.filter((p) =>
      [p.author, p.handle, p.content].some((v) => v.toLowerCase().includes(q))
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Feed</h1>
            <div className="hidden md:block text-sm text-gray-500">{posts.length} posts</div>
          </div>
        </div>
      </div>

      {/* Composer + Search */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-xl shadow-md p-4 mb-4">
          <div className="flex items-start gap-3">
            <div className={`h-10 w-10 rounded-full ${samplePosts[0].avatarColor} text-white flex items-center justify-center font-semibold`}>
              {getInitials(samplePosts[0].author)}
            </div>
            <input
              disabled
              placeholder="Share something... (disabled demo)"
              className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 text-gray-500 cursor-not-allowed"
            />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by people or keywords..."
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Feed list */}
        <div className="space-y-4 pb-8">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-xl shadow-md p-5">
              <header className="flex items-start gap-3 mb-3">
                <div className={`h-10 w-10 rounded-full ${post.avatarColor} text-white flex items-center justify-center font-semibold`}>
                  {getInitials(post.author)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900">{post.author}</span>
                    <span className="text-gray-500">{post.handle}</span>
                    <span className="text-gray-400">• {post.timestamp}</span>
                  </div>
                  <p className="text-gray-800 mt-1 whitespace-pre-wrap">{post.content}</p>
                </div>
              </header>

              {post.image && (
                <div className="mt-3 overflow-hidden rounded-lg">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="post attachment" className="w-full object-cover" />
                </div>
              )}

              <footer className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-2 text-sm">
                <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 9l-2 2-2-2m0 6l2-2 2 2" />
                  </svg>
                  <span className="text-gray-700">Like</span>
                  <span className="text-gray-400">{post.likes}</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h6m-6 8l-4-4V6a2 2 0 012-2h12a2 2 0 012 2v10l-4 4H7z" />
                  </svg>
                  <span className="text-gray-700">Comment</span>
                  <span className="text-gray-400">{post.comments}</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-2 rounded-lg hover:bg-gray-50">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                  <span className="text-gray-700">Share</span>
                  <span className="text-gray-400">{post.shares}</span>
                </button>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </div>
  );                    
}


