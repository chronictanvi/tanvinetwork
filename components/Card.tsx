import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="p-10  md:flex ">
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
    <div className="py-5 md:w-1/2 md:px-8">
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
          className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link to ${title}`}
        >
          Learn more &rarr;
        </Link>
      )}
    </div>
  </div>
)

export default Card
