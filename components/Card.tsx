import Image from './Image'
import Link from './Link'

const Card = ({ title, description, calltoaction, imgSrc, href }) => (
  <div className=" px-10 py-3 md:flex ">
    <div className={`${imgSrc && 'h-full'} "md:w-1/2 p-10" overflow-hidden`}>
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
      <h2 className=" text-2xl font-bold leading-8 tracking-tight">
        {href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            {title}
          </Link>
        ) : (
          title
        )}
      </h2>
      <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
      {href && (
        <Link
          href={href}
          className="text-base font-medium leading-6 text-primary-400 hover:text-red-600 dark:hover:text-primary-300"
          aria-label={`Link to ${title}`}
        >
          {calltoaction} &rarr;
        </Link>
      )}
    </div>
  </div>
)

export default Card
