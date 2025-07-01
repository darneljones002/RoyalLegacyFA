const products = [
  {
    title: 'Vertical Leap Unleashed',
    url: 'https://verticalleapunleashed.glide.page',
  },
  {
    title: 'Speed and Agility Unleashed',
    url: 'https://speedandagilityunleashed.glide.page',
  },
  {
    title: 'Middleton Mentality Program (Mental Health)',
    url: 'https://middletonmentality.glide.page',
  },
];

function Products() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4">
      <h2 className="text-3xl md:text-5xl font-extrabold text-platinum mb-10">Our Programs</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((product) => (
          <a
            key={product.title}
            href={product.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-800 to-black rounded-xl p-6 text-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.6)] hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-bold mb-4 text-platinum drop-shadow-[2px_2px_6px_rgba(255,255,255,0.2)]">{product.title}</h3>
            <p className="text-gray-400 text-sm">Click to learn more and join the program</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Products;
