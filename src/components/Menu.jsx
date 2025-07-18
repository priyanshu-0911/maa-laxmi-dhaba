import { menuSections } from '../data/menu';

export default function Menu() {
  return (
    <section id="menu" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="text-yellow-400">Maa Laxmi</span> Full Menu
        </h2>

        {menuSections.map((section) => (
          <div key={section.title} className="mb-16">
            <h3 className="text-3xl font-semibold mb-8 text-center text-yellow-300">
              {section.title}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-zinc-800 rounded-2xl shadow-xl h-full flex flex-col hover:scale-[1.02] transition duration-300"
                >
                  <div className="w-full h-48 bg-zinc-700 flex items-center justify-center shrink-0">
                    <span className="text-zinc-500 text-sm">Image Soon</span>
                  </div>

                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="text-lg font-bold mb-1">{item.name}</h4>
                    <p className="text-yellow-400 font-bold text-xl mt-auto">
                      ₹{item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
