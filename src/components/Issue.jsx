import React, { useState, useEffect } from 'react';
import { Bug, GitPullRequest, ExternalLink, CheckCircle } from 'lucide-react';
const googleSheetsUrl = process.env.REACT_APP_GOOGLE_SHEETS_URLT;

export default function Issue() {
    const [issues, setIssues] = useState([]);
    const [techStacks, setTechStacks] = useState([]);
    const [techStackFilter, setTechStackFilter] = useState('All Tech Stacks');

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await fetch(googleSheetsUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.text();
                const json = JSON.parse(data.substring(47).slice(0, -2));
                const rows = json.table.rows;
    
                const fetchedIssues = rows.map((row, index) => {
                    return {
                        id: index + 1,
                        title: row.c[7]?.v || 'No title',
                        issueNumber: row.c[2]?.v || 0,
                        ProjectLink: row.c[2]?.v || 'No ProjectLink',
                        techStack: row.c[5]?.v || 'No tech stack',
                        status: row.c[3]?.v || 'Open',
                        githubUrl: row.c[6]?.v || '#',
                    };
                });
    
                setIssues(fetchedIssues);
    
                const uniqueTechStacks = Array.from(new Set(
                    fetchedIssues.flatMap(issue => 
                        issue.techStack.split(',').map(stack => stack.trim())
                    )
                ));
                setTechStacks(['All Tech Stacks', ...uniqueTechStacks]);
            } catch (error) {
                console.error("Failed to fetch issues:", error);
            }
        };
    
        fetchIssues();
    }, []);

    const filteredIssues = issues.filter(issue => {
        const matchesTechStack = techStackFilter === 'All Tech Stacks' || issue.techStack.split(',').map(stack => stack.trim()).includes(techStackFilter);
        return matchesTechStack;
    });
    return (
        <div className="min-h-screen bg-gray-900">

            {/* Open Issues and Tech Stack Filter */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-white">Open Issues</h2>
                
                {/* Tech Stack Filter on the right side */}
                <select
                    value={techStackFilter}
                    onChange={(e) => setTechStackFilter(e.target.value)}
                    className="bg-gray-800 text-gray-300 rounded px-4 py-2"
                >
                    {techStacks.map((stack) => (
                        <option key={stack} value={stack}>
                            {stack}
                        </option>
                    ))}
                </select>
            </div>

            {/* Issues Table */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="bg-gray-800 rounded-lg overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-700">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">ID</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Issue</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Project Link</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Tech Stack</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Issue Link</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                            {filteredIssues.map((issue) => (
                                <tr key={issue.id} className="hover:bg-gray-700">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">#{issue.id}</td>
                                    <td className="px-6 py-4 text-sm font-medium text-blue-400">
                                        <div>
                                            <div className="font-medium">{issue.title}</div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                        <a href={issue.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400">
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            {issue.ProjectLink}
                                        </a>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{issue.techStack}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center">
                                        {issue.status === 'Open' && <Bug className="w-4 h-4 mr-1 text-green-400" />}
                                        {issue.status === 'In Progress' && <GitPullRequest className="w-4 h-4 mr-1 text-yellow-400" />}
                                        {issue.status === 'Resolved' && <CheckCircle className="w-4 h-4 mr-1 text-blue-500" />}
                                        <span className="text-white">{issue.status}</span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                        <a href={issue.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400">
                                            <ExternalLink className="w-4 h-4 mr-1" />
                                            View
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
