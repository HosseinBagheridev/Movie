import React from 'react'

export const About = () => {
  return (
     <div className="container max-w-3xl mx-auto px-4 py-1 my-10 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      
      <p className="mb-4">
        <strong>MyFlix</strong> is a movie discovery web app built using <strong>React</strong> and <strong>Tailwind CSS</strong>. 
        It leverages the <a href="https://www.themoviedb.org/" className="text-blue-500 underline" target="_blank">TMDB API</a> 
        to fetch and display trending movies, search results, and detailed movie information.
      </p>

      <p className="mb-4">
        The project is created as a portfolio piece to demonstrate frontend development skills such as working with APIs, routing using <strong>React Router</strong>, 
        and handling data with <strong>Axios</strong>. The UI is styled using Tailwind's utility classes and is fully responsive.
      </p>

      <p className="mb-4">
        You can explore the source code on 
        {" "}
        <a href="https://github.com/HosseinBagheridev/movie" className="text-blue-500 underline" target="_blank">GitHub Repository</a>.
        For more projects and contributions, visit my 
        {" "}
        <a href="https://github.com/HosseinBagheridev" className="text-blue-500 underline" target="_blank">GitHub Profile</a>.
      </p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Developer</h2>
        <p className="mb-2">👨‍💻 Hossein Bagheri</p>
        <p className="mb-2">
          Email: <a href="mailto:HosseinBagheri.dev@gmail.com" className="text-blue-500 underline">HosseinBagheri.dev@gmail.com</a>
        </p>
        <p className="mb-2">
          Telegram:{" "}
          <a href="https://t.me/hussayn13" className="text-blue-500 underline" target="_blank">@hussayn13</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/HosseinBagheridev" className="text-blue-500 underline" target="_blank">
            github.com/HosseinBagheridev
          </a>
        </p>
      </div>
    </div>
  )
}
