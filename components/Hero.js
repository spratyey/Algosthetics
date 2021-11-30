import Link from '@/components/Link'
import TitleAnim from '@/components/TitleAnim'
const Hero = () => {
  return (
    <section className="grid lg:grid-rows-1 lg:grid-cols-2 items-center justify-between py-8 min-w-screen">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 xl:mb-0">
          <div className="relative top-0 mb-28 mt-10 px-20">
          <TitleAnim />
          </div>
          
          <h1 className="text-3xl font-extrabold font-display leading-tight sm:text-4xl sm:leading-none md:text-5xl lg:text-5xl xl:text-6xl">
            Algosthetics
                  </h1>
            
                  
        
        <p className="mt-2 text-lg ">
          Insert CoolMarketingSpeak here
        </p>

      </div>
      <div className="py-12 grid grid-cols-1 gap-8 grid-rows-2">
        <div className="grid gap-8 items-start my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/tags/bezierbusiness">
              <a className="relative px-7 py-4 bg-white dark:bg-gray-980 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-green-600 -rotate-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg> */}
                  <span className="pr-6 text-gray-900 dark:text-indigo-300">
                   Bezier Business
                  </span>
                </span>
                <span className="pl-6 absolute right-6 text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition duration-200">
                  Link &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        <div className="grid gap-8 items-start my-2">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <Link href="/content">
              <a className="relative px-7 py-4 bg-white dark:bg-gray-980 rounded-lg leading-none flex items-center divide-x divide-gray-600">
                <span className="flex items-center space-x-5">
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-pink-600 -rotate-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg> */}
                  <span className="pr-6 text-gray-900 dark:text-yellow-200">
                    Generating Art
                  </span>
                </span>
                <span className="pl-6 absolute right-6 text-white group-hover:text-gray-900 dark:group-hover:text-gray-100 transition duration-200">
                  Link &rarr;
                </span>
              </a>
            </Link>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default Hero
