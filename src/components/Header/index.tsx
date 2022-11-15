// import { useTheme } from 'app/state/application/hooks'
// import { useEffect } from 'react'

const Header = () => {
  //   const theme = useTheme()
  //   useEffect(() => {}, [theme])

  return (
    <nav className="w-full sticky top-0 z-20 border-b border-base-100 bg-neutral">
      <div className="container flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <a href="#" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element  */}
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="MetaPop" />
          <span className="self-center text-xl font-semibold whitespace-nowrap bg-primar">MetaPop</span>
        </a>
        <div className="flex items-center">
          <a href="#" className="text-sm font-medium hover:text-primary-content">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 inline-block mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>
            Login with your wallet
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
