import React from 'react'

export const About = () => {
  return (
    <div>
        <div className="container max-w-3xl mx-auto px-4 py-10 text-black">
      <h1 className="text-3xl font-bold mb-4">About This Project</h1>
      <p className="mb-4">
        This is a movie discovery web app built using <strong>React</strong> and <strong>Tailwind CSS</strong>. It utilizes the <strong>TMDB API</strong> to fetch and display information about movies and TV shows.
      </p>
      <p className="mb-4">
        The project is developed as a personal portfolio demo to showcase frontend skills in building a responsive, API-driven web interface.
      </p>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Developer</h2>
        <p className="mb-2">👨‍💻 Hossein Bagheri</p>
        <p>
          <a href="https://github.com/yourusername" className="text-blue-400 underline" target="_blank">
            GitHub
          </a>{" "}
          |{" "}
          <a href="https://linkedin.com/in/yourusername" className="text-blue-400 underline" target="_blank">
            LinkedIn
          </a>
        </p>
      </div>
    </div>
    </div>
  )
}
