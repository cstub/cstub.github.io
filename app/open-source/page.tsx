import projectData from '@/data/openSourceData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'
import { FaGithub, FaCodeBranch, FaStar, FaExclamationCircle, FaPenNib } from 'react-icons/fa'
import { HiOutlineExternalLink } from 'react-icons/hi'

export const metadata = genPageMetadata({ title: 'Open Source' })

const MarkdownComponents = {
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary-500 underline hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
    >
      {children}
    </a>
  ),
}

export default function Work() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Open Source Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My open source projects and contributions. View my full profile on{' '}
            <a
              href="https://github.com/cstub"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-500 underline hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-16">
            {projectData.map((d) => (
              <div key={d.title} className="group flex items-start gap-8">
                <div className="flex-grow">
                  <div className="mb-2 flex items-center gap-3">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      {d.title}
                    </h2>
                    <span
                      className={`rounded-full px-3 py-1 text-sm ${
                        d.isOwnProject
                          ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                          : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                      }`}
                    >
                      {d.isOwnProject ? 'Personal Project' : 'Contribution'}
                    </span>
                  </div>
                  <div className="prose max-w-none text-gray-500 dark:prose-invert dark:text-gray-400">
                    <ReactMarkdown components={MarkdownComponents}>{d.description}</ReactMarkdown>
                  </div>
                  <div className="mb-4 mt-6 flex flex-wrap gap-2">
                    {d.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3">
                    {d.repo_id && (
                      <a
                        href={`https://github.com/${d.repo_id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-600 focus:z-10 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub className="h-4 w-4" />
                        View Repository
                      </a>
                    )}
                    {d.contribution && (
                      <a
                        href={d.contribution}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-600 focus:z-10 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaCodeBranch className="h-4 w-4" />
                        View Contributions
                      </a>
                    )}
                    {d.citation && (
                      <a
                        href={d.citation}
                        className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-600 focus:z-10 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaPenNib className="h-4 w-4" />
                        View Citations
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
