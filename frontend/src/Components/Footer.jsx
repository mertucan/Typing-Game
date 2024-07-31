import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full mt-10 mb-3 xl:mt-0 xl:absolute xl:bottom-0 flex justify-center">
      <div>
        <div className="">
          <p className="text-sm font-medium text-purple-500">
            <a
              href="https://github.com/mertucan"
              rel="noopener noreferrer"
              className="ml-1"
              target="_blank"
            >
              <span className="font-semibold">  © {new Date().getFullYear()} Made by mertucan</span>
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
