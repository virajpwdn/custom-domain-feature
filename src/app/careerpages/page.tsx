"use client";
import React, { useState } from "react";

// Job type definition
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  posted: string;
  description: string;
  requirements: string[];
  logo: string;
}

// Sample job data
const sampleJobs: Job[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $150,000",
    posted: "2 days ago",
    description: "We're looking for a senior frontend developer to join our growing team. You'll work with React, TypeScript, and modern web technologies.",
    requirements: ["5+ years React experience", "TypeScript proficiency", "Modern CSS frameworks"],
    logo: "🚀"
  },
  {
    id: 2,
    title: "Backend Engineer",
    company: "DataFlow Systems",
    location: "New York, NY",
    type: "Full-time",
    salary: "$110,000 - $140,000",
    posted: "1 week ago",
    description: "Join our backend team to build scalable microservices and APIs. Work with Node.js, Python, and cloud technologies.",
    requirements: ["Node.js or Python", "Database design", "Cloud platforms (AWS/Azure)"],
    logo: "⚡"
  },
  {
    id: 3,
    title: "UX/UI Designer",
    company: "Creative Studio",
    location: "Remote",
    type: "Contract",
    salary: "$80,000 - $100,000",
    posted: "3 days ago",
    description: "Create beautiful and intuitive user experiences. Work closely with product managers and developers.",
    requirements: ["Figma/Sketch expertise", "User research", "Prototyping"],
    logo: "🎨"
  },
  {
    id: 4,
    title: "DevOps Engineer",
    company: "CloudScale Technologies",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$130,000 - $160,000",
    posted: "5 days ago",
    description: "Manage our infrastructure and deployment pipelines. Work with Kubernetes, Docker, and CI/CD systems.",
    requirements: ["Kubernetes", "Docker", "CI/CD pipelines", "Monitoring tools"],
    logo: "☁️"
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateLab",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$140,000 - $180,000",
    posted: "1 day ago",
    description: "Lead product strategy and work with cross-functional teams to deliver amazing user experiences.",
    requirements: ["Product strategy", "Agile methodologies", "Data analysis"],
    logo: "📊"
  },
  {
    id: 6,
    title: "Mobile Developer",
    company: "AppCraft",
    location: "Los Angeles, CA",
    type: "Full-time",
    salary: "$100,000 - $130,000",
    posted: "4 days ago",
    description: "Build native iOS and Android applications. Work with React Native and modern mobile development tools.",
    requirements: ["React Native", "iOS/Android", "Mobile UI/UX"],
    logo: "📱"
  },
  {
    id: 7,
    title: "Data Scientist",
    company: "Analytics Pro",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$125,000 - $155,000",
    posted: "6 days ago",
    description: "Analyze large datasets and build machine learning models to drive business insights.",
    requirements: ["Python/R", "Machine Learning", "Statistics", "SQL"],
    logo: "📈"
  },
  {
    id: 8,
    title: "Cybersecurity Specialist",
    company: "SecureNet",
    location: "Denver, CO",
    type: "Full-time",
    salary: "$115,000 - $145,000",
    posted: "2 weeks ago",
    description: "Protect our systems and data from cyber threats. Conduct security audits and implement security measures.",
    requirements: ["Security certifications", "Network security", "Risk assessment"],
    logo: "🔒"
  },
  {
    id: 9,
    title: "Full Stack Developer",
    company: "StartupXYZ",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $120,000",
    posted: "3 days ago",
    description: "Join our early-stage startup and build features end-to-end. Work with modern web technologies and databases.",
    requirements: ["React/Next.js", "Node.js", "Database design", "API development"],
    logo: "🚀"
  },
  {
    id: 10,
    title: "QA Engineer",
    company: "QualityFirst",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$85,000 - $110,000",
    posted: "1 week ago",
    description: "Ensure our software quality through comprehensive testing. Work with automated testing tools and frameworks.",
    requirements: ["Test automation", "Selenium/Cypress", "API testing", "Bug tracking"],
    logo: "🔍"
  }
];

const CareerPages = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [filterLocation, setFilterLocation] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = sampleJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === "All" || job.type === filterType;
    const matchesLocation = filterLocation === "All" || 
                           job.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesType && matchesLocation;
  });

  const jobTypes = ["All", ...new Set(sampleJobs.map(job => job.type))];
  const locations = ["All", ...new Set(sampleJobs.map(job => job.location))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Next <span className="text-blue-600">Career</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover amazing job opportunities from top companies around the world
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <input
                type="text"
                placeholder="Job title, company, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Job Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Job Type
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {jobTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Location Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Location
              </label>
              <select
                value={filterLocation}
                onChange={(e) => setFilterLocation(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredJobs.length}</span> of {sampleJobs.length} jobs
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-3xl">{job.logo}</div>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                  {job.type}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
              <p className="text-gray-600 font-medium mb-2">{job.company}</p>
              <p className="text-gray-500 mb-3">{job.location}</p>
              
              <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-green-600 font-semibold">{job.salary}</span>
                <span className="text-gray-500 text-sm">{job.posted}</span>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200">
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center">
                  <div className="text-4xl mr-4">{selectedJob.logo}</div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h2>
                    <p className="text-gray-600 font-medium">{selectedJob.company}</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <span className="text-gray-500">Location</span>
                  <p className="font-medium">{selectedJob.location}</p>
                </div>
                <div>
                  <span className="text-gray-500">Type</span>
                  <p className="font-medium">{selectedJob.type}</p>
                </div>
                <div>
                  <span className="text-gray-500">Salary</span>
                  <p className="font-medium text-green-600">{selectedJob.salary}</p>
                </div>
                <div>
                  <span className="text-gray-500">Posted</span>
                  <p className="font-medium">{selectedJob.posted}</p>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Job Description</h3>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  {selectedJob.requirements.map((req, index) => (
                    <li key={index}>{req}</li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                  Apply Now
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                  Save Job
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerPages;
