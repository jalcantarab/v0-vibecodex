"use client"

interface IntegrationGuideProps {
  phase: {
    title: string
    description: string
  }
  tool: {
    name: string
    id: string
  }
}

export function IntegrationGuide({ phase, tool }: IntegrationGuideProps) {
  return (
    <div className="space-y-4 rounded-md border p-6 bg-muted/30">
      <h3 className="font-medium text-lg">Integration Guide</h3>
      <div className="space-y-3 text-sm text-muted-foreground">
        <p>After copying the prompt above, paste it into {tool.name} and follow these steps:</p>
        <ol className="list-decimal pl-5 space-y-2">
          <li>Wait for {tool.name} to generate the initial code structure.</li>
          <li>Verify that the basic layout matches the description in the prompt.</li>
          <li>If any elements are missing, you can ask {tool.name} to add them specifically.</li>
          <li>Once you're satisfied with the result, save or deploy your project.</li>
        </ol>
        <p className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-md text-amber-800 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-300">
          <strong>Common issues:</strong> If the spacing looks off, you can adjust it by telling {tool.name}: "Please
          increase the spacing between elements to make it more readable."
        </p>
      </div>
    </div>
  )
}
