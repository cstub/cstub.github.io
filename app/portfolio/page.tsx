import projectData from '@/data/portfolioData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

const slugify = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

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

export const metadata = genPageMetadata({ title: 'Portfolio' })

export default function Work() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Portfolio
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            My professional work experience.
          </p>
        </div>
        <div className="container py-12">
          <div className="space-y-16">
            {projectData.map((d) => (
              <div
                key={d.title}
                id={slugify(d.title)}
                className="group flex scroll-mt-16 flex-col items-center gap-8 md:flex-row md:items-start"
              >
                {d.imgSrc && (
                  <div className="w-full max-w-[192px] flex-shrink-0 md:w-auto">
                    <Image
                      src={d.imgSrc}
                      alt={`${d.title} project`}
                      width={192}
                      height={192}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                )}
                <div className="flex-grow">
                  <h2 className="mb-2 text-2xl font-bold text-gray-900 dark:text-gray-100">
                    {d.title}
                  </h2>
                  <p className="mb-1 text-lg text-gray-500 dark:text-gray-400">
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {d.client}
                      </a>
                    ) : (
                      d.client
                    )}
                  </p>
                  <p className="mb-4 text-lg text-gray-500 dark:text-gray-400">{d.role}</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
