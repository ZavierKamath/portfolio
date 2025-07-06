export default function Industry() {
  return (
    <main className="container mx-auto min-h-screen py-12">
      <h1 className="text-gradient mb-8">Industry Experience</h1>
      <div className="space-y-8">
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i} className="card">
            <h3 className="mb-4">Industry Project {i + 1}</h3>
            <p className="text-body-lg mb-4">
              This is an industry project showcasing real-world application of technical skills.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-supernova-orange/20 text-supernova-orange rounded-full text-sm">
                Full Stack
              </span>
              <span className="px-3 py-1 bg-stellar-blue/20 text-stellar-blue rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-aurora-green/20 text-aurora-green rounded-full text-sm">
                Production
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
