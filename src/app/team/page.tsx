import Image from 'next/image'

const teamMembers = [
  {
    name: 'Кирил Христов',
    role: 'Автор',
    bio: 'Лице на предаването “Ние и градът” по БНТ 1 и съ-автор на CityZen. Започва да се занимава с телевизия през 2002 в музикалната телевизия ММ. Прес последните 10 години се занимава с маркетинг, реклама и онлайн медии. Интересува се от иновативни бизнес и други решения.',
    image: '/images/team/kiril.jpg',
  },
  {
    name: 'Евелина Павлова',
    role: 'Автор и редактор',
    bio: 'Радио и Телевизионен журналист. Водещ на предването „Аз Обичам България” - Нова Телевизия. Криейтив директор и главен редактор на предаването „Ние и градът” – БНТ1. Програмен Директор в Радио ФМ+, Радио Star FM, Радио Мила Голд. Модератор на различни форуми посветени, както на медийния и музикалния бизнес, така и на различни обществено-значими въпроси.',
    image: '/images/team/maria.jpg',
  },
  {
    name: 'Георги Руков',
    role: 'Продуцент',
    bio: 'Грижи се за перфектния кадър и творческото заснемане.',
    image: '/images/team/ivan.jpg',
  },
  {
    name: 'Стефан Щерев',
    role: 'Продуцент',
    bio: 'Създава интригуващи сценарии за всяка продукция.',
    image: '/images/team/alexander.jpg',
  },
]

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-light text-gray-900 mb-8 text-center">
        Нашият Екип
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="group rounded-lg overflow-hidden shadow-md border border-gray-200 hover:border-gray-900 transition"
          >
            <div className="relative w-full h-60">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-light text-gray-900 group-hover:underline">
                {member.name}
              </h2>
              <h3 className="text-gray-600 mt-1">{member.role}</h3>
              <p className="text-gray-600 mt-2">{member.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
