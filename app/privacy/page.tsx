// app/privacy/page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | VibeCodex",
  description: "Learn how VibeCodex collects, uses, and protects your personal information.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="container prose prose-neutral mx-auto px-4 py-12 dark:prose-invert">
      <h1>Privacy&nbsp;Policy</h1>

      <p>
        Last updated: <strong>12&nbsp;July&nbsp;2025</strong>
      </p>

      <h2>1.&nbsp;Introduction</h2>
      <p>
        VibeCodex (<em>&quot;we&quot;, &quot;our&quot;, &quot;us&quot;</em>) respects your privacy and is committed to
        protecting any personal data you share with us. This Privacy Policy explains what data we collect, why we
        collect it, and how we use, store, and safeguard it.
      </p>

      <h2>2.&nbsp;Data&nbsp;We&nbsp;Collect</h2>
      <ul>
        <li>
          <strong>Account data</strong> – name, email address, authentication provider ID.
        </li>
        <li>
          <strong>Usage data</strong> – pages visited, components generated, completion counts, and interaction logs.
        </li>
        <li>
          <strong>Technical data</strong> – IP address, browser type / version, device identifiers, and cookies.
        </li>
      </ul>

      <h2>3.&nbsp;How&nbsp;We&nbsp;Use&nbsp;Your&nbsp;Data</h2>
      <p>We process personal data to:</p>
      <ol>
        <li>Provide and improve the VibeCodex platform and services.</li>
        <li>Authenticate users and secure access to private workspaces and projects.</li>
        <li>Deliver customer support and respond to inquiries.</li>
        <li>Generate anonymised statistics that help us understand usage trends.</li>
        <li>Comply with legal obligations.</li>
      </ol>

      <h2>4.&nbsp;Legal Basis</h2>
      <p>
        We rely on your <em>consent</em>, our <em>legitimate interests</em>, and where applicable the necessity to
        perform a contract to process your data.
      </p>

      <h2>5.&nbsp;Data&nbsp;Sharing&nbsp;and&nbsp;Processors</h2>
      <p>
        We never sell your personal data. We may share it with trusted vendors (e.g.&nbsp;Vercel for hosting, Supabase
        for authentication) strictly to operate VibeCodex. Each vendor is bound by data-processing agreements and
        appropriate security measures.
      </p>

      <h2>6.&nbsp;International&nbsp;Transfers</h2>
      <p>
        Your information may be processed outside your home jurisdiction. We ensure adequate safeguards, such as
        Standard Contractual Clauses, are in place when data leaves the&nbsp;EEA, UK, or Switzerland.
      </p>

      <h2>7.&nbsp;Data&nbsp;Retention</h2>
      <p>
        We retain personal data only as long as necessary for the purposes stated above or as required by law. You can
        request deletion of your account at any time.
      </p>

      <h2>8.&nbsp;Your&nbsp;Rights</h2>
      <p>
        Depending on your jurisdiction, you may have rights to access, rectify, erase, restrict, or port your personal
        data and to object to certain processing activities. Contact us to exercise these rights.
      </p>

      <h2>9.&nbsp;Children&rsquo;s Privacy</h2>
      <p>
        VibeCodex is not directed to children under 13. We do not knowingly collect data from children. If you believe a
        child has provided us with personal information, please contact us so we can delete it.
      </p>

      <h2>10.&nbsp;Contact Us</h2>
      <p>
        For privacy questions or requests, email&nbsp;
        <a href="mailto:contact@zentrik.ai">contact@zentrik.ai</a>.
      </p>
    </main>
  )
}
