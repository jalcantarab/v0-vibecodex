import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "License - VibeCodex",
  description: "MIT License for the VibeCodex project.",
}

export default function LicensePage() {
  const currentYear = new Date().getFullYear()
  const copyrightHolder = "Jorge Alcantara Barroso, Zentrik AI"

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">License</h1>
        <p className="mt-4 text-xl text-muted-foreground">VibeCodex is released under the MIT License.</p>
      </header>

      <div className="prose prose-invert dark:prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <p>
          Copyright (c) 2023-{currentYear} {copyrightHolder}
        </p>

        <p>
          Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
          documentation files (the &quot;Software&quot;), to deal in the Software without restriction, including without
          limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
          Software, and to permit persons to whom the Software is furnished to do so, subject to the following
          conditions:
        </p>

        <p>
          The above copyright notice and this permission notice shall be included in all copies or substantial portions
          of the Software.
        </p>

        <p>
          THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT
          NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO
          EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
          AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE
          OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  )
}
