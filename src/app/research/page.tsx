export default function Research() {
  return (
    <main className="container mx-auto min-h-screen py-12">
      <h1 className="text-gradient mb-8">Research Projects</h1>
      <div className="space-y-8">
        {Array.from({ length: 10 }, (_, i) => (
          <div key={i} className="card">
            <h3 className="mb-4">Research Project {i + 1}</h3>
            <p className="text-body-lg mb-4">
              This is a research project that demonstrates scroll behavior. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-pulsar-purple/20 text-pulsar-purple rounded-full text-sm">
                Machine Learning
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                Python
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                Research
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
