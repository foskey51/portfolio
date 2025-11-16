import React, { useState, useEffect } from 'react';
import { GitCommit, GitPullRequest, Star, GitFork, MessageSquare, AlertCircle } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const GitHubActivityCard = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubEvents();
  }, []);

  const fetchGitHubEvents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`https://api.github.com/users/${import.meta.env.VITE_GH_USERNAME}/events`);
      if (!response.ok) throw new Error('Failed to fetch events');
      const data = await response.json();
      setEvents(
        //skip displaying /portfolio repository 
        data.filter(event => !event.repo?.name?.includes("portfolio"))
      );
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'PushEvent':
        return <GitCommit className="w-4 h-4" />;
      case 'PullRequestEvent':
        return <GitPullRequest className="w-4 h-4" />;
      case 'WatchEvent':
        return <Star className="w-4 h-4" />;
      case 'ForkEvent':
        return <GitFork className="w-4 h-4" />;
      case 'IssuesEvent':
      case 'IssueCommentEvent':
        return <MessageSquare className="w-4 h-4" />;
      case 'CreateEvent':
      case 'DeleteEvent':
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <GitCommit className="w-4 h-4" />;
    }
  };

  const getEventUrl = (event) => {
    const repo = event.repo.name;
    const baseUrl = `https://github.com/${repo}`;

    switch (event.type) {
      case 'PushEvent':
        // Link to the specific commit or branch
        if (event.payload.commits && event.payload.commits.length > 0) {
          return `${baseUrl}/commit/${event.payload.commits[0].sha}`;
        }
        return `${baseUrl}/commits/${event.payload.ref?.replace('refs/heads/', '') || 'main'}`;

      case 'PullRequestEvent':
        // Direct link to the PR
        if (event.payload.pull_request?.html_url) {
          return event.payload.pull_request.html_url;
        }
        if (event.payload.number) {
          return `${baseUrl}/pull/${event.payload.number}`;
        }
        return baseUrl;

      case 'PullRequestReviewEvent':
      case 'PullRequestReviewCommentEvent':
        // Direct link to the PR being reviewed
        if (event.payload.pull_request?.html_url) {
          return event.payload.pull_request.html_url;
        }
        if (event.payload.pull_request?.number) {
          return `${baseUrl}/pull/${event.payload.pull_request.number}`;
        }
        return baseUrl;

      case 'IssuesEvent':
        // Direct link to the issue
        if (event.payload.issue?.html_url) {
          return event.payload.issue.html_url;
        }
        if (event.payload.issue?.number) {
          return `${baseUrl}/issues/${event.payload.issue.number}`;
        }
        return baseUrl;

      case 'IssueCommentEvent':
        // Direct link to the comment
        if (event.payload.comment?.html_url) {
          return event.payload.comment.html_url;
        }
        if (event.payload.issue?.html_url) {
          return event.payload.issue.html_url;
        }
        return baseUrl;

      case 'CreateEvent':
        // Link to the created branch/tag
        if (event.payload.ref_type === 'branch' && event.payload.ref) {
          return `${baseUrl}/tree/${event.payload.ref}`;
        }
        if (event.payload.ref_type === 'tag' && event.payload.ref) {
          return `${baseUrl}/releases/tag/${event.payload.ref}`;
        }
        return baseUrl;

      case 'DeleteEvent':
        // Link to branches or tags page
        if (event.payload.ref_type === 'branch') {
          return `${baseUrl}/branches`;
        }
        if (event.payload.ref_type === 'tag') {
          return `${baseUrl}/tags`;
        }
        return baseUrl;

      case 'ReleaseEvent':
        // Link to the release
        if (event.payload.release?.html_url) {
          return event.payload.release.html_url;
        }
        return `${baseUrl}/releases`;

      case 'WatchEvent':
      case 'ForkEvent':
        return baseUrl;

      default:
        return baseUrl;
    }
  };

  const formatEventDescription = (event) => {
    const repo = event.repo.name;

    switch (event.type) {
      case 'PushEvent':
        const commits = event.payload.size || event.payload.commits?.length || 1;
        return (
          <span>
            Pushed {commits} commit{commits !== 1 ? 's' : ''} to <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'PullRequestEvent':
        return (
          <span>
            {event.payload.action} pull request in <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'WatchEvent':
        return (
          <span>
            Starred <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'ForkEvent':
        return (
          <span>
            Forked <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'IssuesEvent':
        return (
          <span>
            {event.payload.action} issue in <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'IssueCommentEvent':
        return (
          <span>
            Commented on issue in <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'CreateEvent':
        return (
          <span>
            Created {event.payload.ref_type} in <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'DeleteEvent':
        return (
          <span>
            Deleted {event.payload.ref_type} in <span className="font-semibold">{repo}</span>
          </span>
        );
      case 'PullRequestReviewEvent':
        return (
          <span>
            Reviewed pull request in <span className="font-semibold">{repo}</span>
          </span>
        );
      default:
        return (
          <span>
            Activity in <span className="font-semibold">{repo}</span>
          </span>
        );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    if (diffDays < 30) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;

    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  const getCommitDetails = (event) => {
    if (event.type !== 'PushEvent' || !event.payload.commits) return null;

    return event.payload.commits.slice(0, 3).map((commit, idx) => (
      <div key={idx} className="ml-6 mt-1 text-xs text-gray-600 dark:text-gray-400">
        <span className="font-mono">{commit.sha.substring(0, 7)}</span> - {commit.message.split('\n')[0]}
      </div>
    ));
  };

  if (loading) {
    return (
      <div className="flex flex-col w-full h-full p-6">
        <div className="flex items-center justify-center flex-1">
          <div className="text-gray-500 dark:text-gray-400">Loading activity...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col w-full h-full p-6">
        <div className="flex items-center justify-center flex-1">
          <div className="text-red-500">Error fetching resource</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-[90%] mb-5 pr-1 pt-3 border rounded-lg bg-gradient-to-tr backdrop-blur-lg dark:from-white/15 dark:to-black/4 mx-auto shadow-md shadow-gray-400 dark:shadow-md dark:shadow-gray-400 dark:text-white text-black md:mb-0 md:h-full md:w-full overflow-auto">
      <div className="flex flex-col w-full h-full p-6">
        <div className="flex items-center justify-center gap-3 mb-6">
          <FiGithub className="text-2xl" />
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contribution Activity</h2>
        </div>
        <div className="flex-1 overflow-y-auto max-h-[calc(100vh-60vh)] space-y-4">
          {events.length === 0 ? (
            <div className="text-gray-500 dark:text-gray-400">No recent activity</div>
          ) : (
            events.map((event, index) => (
              <div key={`${event.id}-${index}`} className="flex gap-3 relative">
                <div className="flex-shrink-0 flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 relative z-10">
                    {getEventIcon(event.type)}
                  </div>
                  {index < events.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 dark:bg-gray-700 mt-2 mb-2" style={{ minHeight: '40px' }} />
                  )}
                </div>

                <div className="flex-1 min-w-0 pb-6">
                  <a
                    href={getEventUrl(event)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-gray-50 dark:hover:bg-gray-900 rounded-md p-2 -ml-2 transition-colors"
                  >
                    <div className="text-sm text-gray-900 dark:text-gray-100">
                      {formatEventDescription(event)}
                    </div>

                    {getCommitDetails(event)}

                    <div className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                      {formatDate(event.created_at)}
                    </div>
                  </a>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GitHubActivityCard;