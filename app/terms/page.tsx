import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service - VibeCodex",
  description: "Terms of Service for VibeCodex, an open-source project by Zentrik AI.",
}

export default function TermsOfServicePage() {
  const lastUpdated = "May 30, 2025"
  const contactEmail = "jorge@zentrik.ai"
  const websiteName = "VibeCodex"
  const companyName = "Zentrik AI"
  // Assuming a placeholder URL, replace if you have a specific one
  const websiteUrl = "https://github.com/jalcantarab/v0-vibecodex"
  const governingLawJurisdiction = "State of [Your State/Country], [Your Country]" // Placeholder

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-xl text-muted-foreground">Last Updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-invert dark:prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <p className="border border-yellow-500/50 bg-yellow-500/10 p-4 rounded-md text-yellow-300">
          <strong>Important:</strong> This is a template Terms of Service. It is recommended to have these terms
          reviewed by a legal professional to ensure they meet all your specific operational and compliance needs.
        </p>

        <p>
          Welcome to {websiteName} (the &quot;Site&quot;), an open-source project provided by {companyName}{" "}
          (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). These Terms of Service (&quot;Terms&quot;) govern your
          access to and use of our website located at {websiteUrl} and any related services (collectively, the
          &quot;Service&quot;). Please read these Terms carefully. By accessing or using our Service, you agree to be
          bound by these Terms. If you do not agree to these Terms, do not use the Service.
        </p>

        <h2>1. Use of the Service</h2>
        <p>
          You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to use
          the Service:
        </p>
        <ul>
          <li>In any way that violates any applicable federal, state, local, or international law or regulation.</li>
          <li>
            For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them
            to inappropriate content, asking for personally identifiable information, or otherwise.
          </li>
          <li>
            To transmit, or procure the sending of, any advertising or promotional material, including any &quot;junk
            mail,&quot; &quot;chain letter,&quot; &quot;spam,&quot; or any other similar solicitation.
          </li>
          <li>
            To impersonate or attempt to impersonate {companyName}, a {companyName} employee, another user, or any other
            person or entity.
          </li>
          <li>
            To engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Service, or
            which, as determined by us, may harm {companyName} or users of the Service or expose them to liability.
          </li>
        </ul>

        <h2>2. Intellectual Property Rights</h2>
        <p>
          The Service and its original content (excluding content provided by users or available under an open-source
          license), features, and functionality are and will remain the exclusive property of {companyName} and its
          licensors. The VibeCodex software itself is licensed under the MIT License, as detailed on our{" "}
          <Link href="/license">License page</Link>.
        </p>
        <p>
          Our trademarks and trade dress may not be used in connection with any product or service without the prior
          written consent of {companyName}.
        </p>

        <h2>3. Open Source Project</h2>
        <p>
          {websiteName} is an open-source project. Contributions to the project are governed by the terms outlined in
          our{" "}
          <Link href="https://github.com/jalcantarab/v0-vibecodex/blob/main/CONTRIBUTING.md">
            Contributing Guidelines
          </Link>{" "}
          and are subject to the project&apos;s <Link href="/license">MIT License</Link>.
        </p>

        <h2>4. User Content</h2>
        <p>
          If the Service allows you to post, link, store, share, and otherwise make available certain information, text,
          graphics, videos, or other material (&quot;User Content&quot;), you are responsible for the User Content that
          you post to the Service, including its legality, reliability, and appropriateness.
        </p>
        <p>
          By posting User Content to the Service, you grant us the right and license to use, modify, publicly perform,
          publicly display, reproduce, and distribute such User Content on and through the Service in connection with
          the open-source nature of the project. You retain any and all of your rights to any User Content you submit,
          post, or display on or through the Service and you are responsible for protecting those rights.
        </p>

        <h2>5. Termination</h2>
        <p>
          We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any
          reason whatsoever, including without limitation if you breach the Terms.
        </p>
        <p>Upon termination, your right to use the Service will immediately cease.</p>

        <h2>6. Disclaimer of Warranties</h2>
        <p>
          The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. The Service is provided
          without warranties of any kind, whether express or implied, including, but not limited to, implied warranties
          of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
        </p>
        <p>
          {companyName}, its subsidiaries, affiliates, and its licensors do not warrant that a) the Service will
          function uninterrupted, secure, or available at any particular time or location; b) any errors or defects will
          be corrected; c) the Service is free of viruses or other harmful components; or d) the results of using the
          Service will meet your requirements.
        </p>

        <h2>7. Limitation of Liability</h2>
        <p>
          In no event shall {companyName}, nor its directors, employees, partners, agents, suppliers, or affiliates, be
          liable for any indirect, incidental, special, consequential, or punitive damages, including without
          limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access
          to or use of or inability to access or use the Service; (ii) any conduct or content of any third party on the
          Service; (iii) any content obtained from the Service; and (iv) unauthorized access, use, or alteration of your
          transmissions or content, whether based on warranty, contract, tort (including negligence), or any other legal
          theory, whether or not we have been informed of the possibility of such damage, and even if a remedy set forth
          herein is found to have failed of its essential purpose.
        </p>

        <h2>8. Governing Law</h2>
        <p>
          These Terms shall be governed and construed in accordance with the laws of {governingLawJurisdiction}, without
          regard to its conflict of law provisions.
        </p>
        <p>
          Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of
          these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our
          Service and supersede and replace any prior agreements we might have had between us regarding the Service.
        </p>

        <h2>9. Changes to Terms</h2>
        <p>
          We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
          material, we will provide at least 30 days&apos; notice prior to any new terms taking effect. What constitutes
          a material change will be determined at our sole discretion.
        </p>
        <p>
          By continuing to access or use our Service after any revisions become effective, you agree to be bound by the
          revised terms. If you do not agree to the new terms, you are no longer authorized to use the Service.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          If you have any questions about these Terms, please contact us:
          <br />
          {companyName}
          <br />
          Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>
    </div>
  )
}
