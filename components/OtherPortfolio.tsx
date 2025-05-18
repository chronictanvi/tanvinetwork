export default function OtherPortfolio() {
  const items = [
    {
      title: 'Akademi Mag',
      image: '/static/images/DataEcologies.jpg', // replace with your actual path
      link: 'https://example.com/akademi-mag',
    },
    {
      title: 'The Lab',
      image: '/static/images/DataEcologies.jpg',
      link: 'https://tanvi.network/blog/posters',
    },
    {
      title: 'Posters',
      image: '/static/images/DataEcologies.jpg',
      link: 'https://example.com/posters',
    },
  ]

  return (
    <div className="s  mx-auto py-10">
      <hr></hr>
      <p className="container my-6 text-lg sm:text-xl">
        I‘m inquisitive, and love experimenting with mediums and methods on my own. I also
        co-founded Akademi Mag. You can find my visual and typographical adventures here:
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col transition hover:opacity-90"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-auto w-full rounded-md object-cover shadow-md"
            />
            <h3 className="mt-2 text-sm text-gray-800 group-hover:underline dark:text-gray-100">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
