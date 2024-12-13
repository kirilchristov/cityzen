import { content } from '@/app/utilities/content'
import { notFound } from 'next/navigation'

interface SeasonPageProps {
  params: Promise<{ id: string }>
}

export default async function SeasonPage({ params }: SeasonPageProps) {
  const { id } = await params
  const seasonId = parseInt(id, 10)
  const season = content.find((s) => s.id === seasonId)

  if (!season) {
    return notFound()
  }
  return (
    <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-light text-gray-900 mb-4 text-center">
        {season.title}
      </h1>

      {/* Short Season Description */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-8">
        <p className="text-gray-600 text-center">{season.description}</p>
      </div>

      {/* Video List with Descriptions */}
      <div className="space-y-8">
        {season.videos.map((video) => (
          <div
            key={video.id}
            className="bg-white shadow-md rounded overflow-hidden"
          >
            <h2 className="text-2xl font-light text-gray-900 p-4">
              {video.title}
            </h2>
            <div className="relative w-full aspect-video">
              <iframe
                className="w-full h-full"
                src={video.embedUrl}
                title={video.title}
                allowFullScreen
              />
            </div>
            {/* Episode Description */}
            <div className="bg-gray-100 p-4 shadow-sm">
              <p className="text-gray-600">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
