export default function About() {
  return (
    <main className="container mx-auto min-h-screen py-12">
      <h1 className="text-gradient mb-8">About Me</h1>
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="card">
            <h3 className="mb-4">Background</h3>
            <p className="text-body-lg mb-4">
              My journey from astrophysics to AI represents a natural evolution of curiosity about
              complex systems and patterns. Starting with the vast cosmos, I&apos;ve applied the
              same analytical thinking to neural networks and machine learning.
            </p>
            <p className="text-body-lg">
              The mathematical foundations from physics have proven invaluable in understanding deep
              learning architectures and optimization algorithms.
            </p>
          </div>

          <div className="card">
            <h3 className="mb-4">Current Focus</h3>
            <p className="text-body-lg mb-4">
              Currently working on applications of machine learning to scientific discovery,
              bridging the gap between theoretical physics and practical AI implementations.
            </p>
            <ul className="space-y-2 text-body">
              <li>• Neural network architectures for scientific computing</li>
              <li>• Data analysis and visualization</li>
              <li>• Research reproducibility and open science</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="card">
            <h3 className="mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">PhD in Astrophysics</h4>
                <p className="text-moonlight-gray/80">University of Science • 2020-2024</p>
              </div>
              <div>
                <h4 className="font-semibold">MS in Physics</h4>
                <p className="text-moonlight-gray/80">Research University • 2018-2020</p>
              </div>
              <div>
                <h4 className="font-semibold">BS in Physics</h4>
                <p className="text-moonlight-gray/80">Tech Institute • 2014-2018</p>
              </div>
            </div>
          </div>

          <div className="card">
            <h3 className="mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="mailto:contact@example.com" className="link flex items-center space-x-2">
                <span>📧</span>
                <span>contact@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center space-x-2"
              >
                <span>💼</span>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="link flex items-center space-x-2"
              >
                <span>🔗</span>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
