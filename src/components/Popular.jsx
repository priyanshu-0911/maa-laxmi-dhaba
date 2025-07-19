export default function Popular() {
  const popularItems = [
    { name: "Paneer Tikka", price: 210 },
    { name: "Dal Baafla", price: 120 },
    { name: "Veg Kolhapuri", price: 140 },
    { name: "Tomato Soup", price: 50 },
  ];

  return (
    <section className="py-14 bg-zinc-950">
      <h2 className="text-3xl md:text-4xl text-center mb-10 text-yellow-300 font-semibold">
        Chef's Picks
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
        {popularItems.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-800 rounded-2xl p-5 text-center shadow-md hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-bold mb-2">{item.name}</h3>
            <p className="text-yellow-400 text-lg">₹{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
