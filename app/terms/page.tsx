// app/terms/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | VibeCodex",
  description: "Review the terms and conditions that govern your use of the VibeCodex platform.",
}

export default function TermsOfServicePage() {
  return (
    <main className="container prose prose-neutral mx-auto px-4 py-12 dark:prose-invert">
      <h1>Terms&nbsp;of&nbsp;Service</h1>

      <p>
        Last updated: <strong>12&nbsp;July&nbsp;2025</strong>
      </p>

      <h2>1.&nbsp;Acceptance&nbsp;of&nbsp;Terms</h2>
      <p>
        By accessing or using VibeCodex (<em>&quot;Service&quot;</em>) you agree to be bound by these Terms of Service (
        <em>&quot;Terms&quot;</em>). If you do not agree, you may not use the Service.
      </p>

      <h2>2.&nbsp;Accounts</h2>
      <ul>
        <li>You must be at least 13 years old to create an account.</li>
        <li>You are responsible for safeguarding your login credentials and all activity under your account.</li>
      </ul>

      <h2>3.&nbsp;License&nbsp;and&nbsp;Intellectual&nbsp;Property</h2>
      <p>
        We grant you a limited, non-exclusive, non-transferable license to access and use the Service. All content
        provided by VibeCodex—including code templates, documentation, and graphics—remains our intellectual property
        unless stated otherwise.
      </p>

      <h2>4.&nbsp;User&nbsp;Content</h2>
      <p>
        You retain ownership of code, text, or media you upload or generate with VibeCodex (
        <em>&quot;User&nbsp;Content&quot;</em>). By submitting User Content you grant us a worldwide, royalty-free
        license to store, display and process it solely to operate and improve the Service.
      </p>

      <h2>5.&nbsp;Prohibited&nbsp;Conduct</h2>
      <ul>
        <li>Reverse-engineering or scraping the Service.</li>
        <li>Uploading content that is unlawful, harmful, or infringes third-party rights.</li>
        <li>Using VibeCodex to develop weapons, facilitate violence, or spread hate.</li>
      </ul>

      <h2>6.&nbsp;Termination</h2>
      <p>
        We may suspend or terminate your account at any time for violation of these Terms. Upon termination your right
        to use the Service ceases immediately.
      </p>

      <h2>7.&nbsp;Disclaimers</h2>
      <p>
        The Service is provided &quot;as is&quot; without warranties of any kind, express or implied. We do not
        guarantee that generated code is error-free or fit for a particular purpose.
      </p>

      <h2>8.&nbsp;Limitation&nbsp;of&nbsp;Liability</h2>
      <p>
        To the maximum extent permitted by law, VibeCodex and its affiliates shall not be liable for indirect,
        incidental, or consequential damages arising out of or in connection with the Service.
      </p>

      <h2>9.&nbsp;Governing&nbsp;Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, USA, without regard to conflict-of-law
        principles.
      </p>

      <h2>10.&nbsp;Changes&nbsp;to&nbsp;Terms</h2>
      <p>
        We may update these Terms occasionally. We will notify you of material changes. Continued use of the Service
        after changes means you accept the revised Terms.
      </p>

      <h2>11.&nbsp;Contact</h2>
      <p>
        Questions? Email&nbsp;
        <a href="mailto:contact@zentrik.ai">contact@zentrik.ai</a>.
      </p>
    </main>
  )
}
