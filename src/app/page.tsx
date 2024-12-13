import { seasons } from './utilities/seasons'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">
        Сезони
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {seasons.map((season) => (
          <a
            key={season.id}
            href={`/seasons/${season.id}`}
            className="group block p-6 rounded-lg border border-gray-200 hover:border-gray-900 transition"
          >
            <div className="relative w-full h-48 mb-4">
              <Image
                src={season.image}
                alt={season.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="text-2xl font-light text-gray-900 group-hover:underline">
              {season.title}
            </h2>
            <p className="text-gray-600 mt-2">{season.description}</p>
          </a>
        ))}
      </div>
    </main>
  )
}
