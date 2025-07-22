export default function OtherPortfolio() {
  const items = [
    {
      title: 'Pentagram',
      image: '/static/images/pentagram.png', // replace with your actual path
      link: 'https://www.pentagram.com/work/gates-foundation-25th-anniversary',
    },
    {
      title: 'Posters',
      image: '/static/images/posters.png',
      link: 'https://tanvi.network/blog/posters',
    },
    {
      title: 'Print',
      image: '/static/images/TheRosa_Issue2_cover.png',
      link: 'https://tanvi.network/blog/TheRosa',
    },
  ]

  return (
    <div className=" py-10 md:max-w-6xl">
      {/* <hr></hr> */}
      <p className=" container my-6 max-w-[59ch] py-12 text-lg text-gray-500 dark:text-gray-400 ">
        Other work:
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col transition hover:opacity-90"
          >
            <img src={item.image} alt={item.title} className="h-96 w-96 object-cover shadow-md" />
            <h3 className="mt-2 text-sm text-gray-800 group-hover:underline dark:text-gray-100">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  )
}
