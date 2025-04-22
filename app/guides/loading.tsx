export default function Loading() {
  return (
    <div className="container py-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="h-12 w-1/3 bg-muted animate-pulse rounded-md mx-auto"></div>
        <div className="h-6 w-2/3 bg-muted animate-pulse rounded-md mx-auto"></div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-80 bg-muted animate-pulse rounded-xl"></div>
          ))}
        </div>
      </div>
    </div>
  )
}
