import Image from './Image'
import Link from './Link'

const Card = ({ title, description, calltoaction, imgSrc, href }) => (
  <div className=" px-5 py-10 md:flex md:px-10 md:py-3 ">
    <div className={`${imgSrc && 'h-full'} "md:w-1/2 " overflow-hidden`}>
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center "
              width={1000}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center "
            width={1000}
            height={306}
          />
        ))}
    </div>
    <div className="py-5 md:w-1/2 md:px-8 md:py-2">
      <h2 className=" pl-1 text-3xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose my-2 max-w-none pb-5 pl-1 leading-6 tracking-tighter text-gray-500 dark:text-gray-400">
        {description}
      </p>
      {href && (
        <Link
          href={href}
          className="hover:text-black-600 hover:bg-white-300 my-3 border-spacing-4 rounded-full border border-primary-400 bg-transparent p-3 text-xs font-medium uppercase leading-6 tracking-wide text-primary-400 hover:bg-primary-400 hover:text-white"
          aria-label={`Link to ${title}`}
        >
          {calltoaction} &rarr;
        </Link>
      )}
    </div>
  </div>
)

export default Card
