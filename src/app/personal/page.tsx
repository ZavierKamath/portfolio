export default function Personal() {
  return (
    <main className="container mx-auto min-h-screen py-12">
      <h1 className="text-gradient mb-8">Personal Projects</h1>
      <p className="text-body-lg mb-8">
        Side projects and experiments that showcase creativity and continuous learning.
      </p>
      <div className="card">
        <h3 className="mb-4">Navigation Testing</h3>
        <p className="text-body">
          This page helps test the active route highlighting. Notice how the navigation
          automatically highlights &quot;Personal&quot; when you&apos;re on this page.
        </p>
      </div>
    </main>
  );
}
