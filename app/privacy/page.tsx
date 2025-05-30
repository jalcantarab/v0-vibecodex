import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy - VibeCodex",
  description: "Privacy Policy for VibeCodex, an open-source project by Zentrik AI.",
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "May 30, 2025"
  const contactEmail = "contact@zentrik.ai"
  const websiteName = "VibeCodex"
  const companyName = "Zentrik AI"
  // Assuming a placeholder URL, replace if you have a specific one
  const websiteUrl = "https://github.com/jalcantarab/v0-vibecodex"

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 sm:px-6 lg:px-8">
      <header className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-xl text-muted-foreground">Last Updated: {lastUpdated}</p>
      </header>

      <div className="prose prose-invert dark:prose-invert max-w-none text-muted-foreground prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-primary/80">
        <p>
          Welcome to {websiteName} (the &quot;Site&quot;), an open-source project by {companyName}. We are committed to
          protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your
          information when you visit our website {websiteUrl}, including any other media form, media channel, mobile
          website, or mobile application related or connected thereto (collectively, the &quot;Site&quot;). Please read
          this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access
          the site.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect on the Site
          includes:
        </p>
        <h3>Personal Data</h3>
        <p>
          Personally identifiable information, such as your name, email address, and demographic information, that you
          voluntarily give to us when you register with the Site, participate in our community (e.g., GitHub
          discussions, newsletter sign-up), or when you choose to participate in various activities related to the Site.
          You are under no obligation to provide us with personal information of any kind; however, your refusal to do
          so may prevent you from using certain features of the Site.
        </p>
        <h3>Derivative Data</h3>
        <p>
          Information our servers automatically collect when you access the Site, such as your IP address, your browser
          type, your operating system, your access times, and the pages you have viewed directly before and after
          accessing the Site. If you are using our mobile application, this information may also include your device
          name and type, your operating system, your phone number, your country, your likes and replies to a post, and
          other interactions with the application and other users via server log files, as well as any other information
          you choose to provide.
        </p>
        <h3>Analytics Data</h3>
        <p>
          We may use third-party vendors, such as Vercel Analytics or Google Analytics, to allow tracking technologies
          and remarketing services on the Site through the use of first-party cookies and third-party cookies, to, among
          other things, analyze and track users’ use of the Site, determine the popularity of certain content and better
          understand online activity. By accessing the Site, you consent to the collection and use of your information
          by these third-party vendors. You are encouraged to review their privacy policy and contact them directly for
          responses to your questions. We do not transfer personal information to these third-party vendors.
        </p>

        <h2>Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient, and customized
          experience. Specifically, we may use information collected about you via the Site to:
        </p>
        <ul>
          <li>Administer the open-source project and community.</li>
          <li>Create and manage your account (if applicable).</li>
          <li>Email you regarding your account or order (if applicable).</li>
          <li>Enable user-to-user communications.</li>
          <li>Generate a personal profile about you to make future visits to the Site more personalized.</li>
          <li>Increase the efficiency and operation of the Site.</li>
          <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          <li>Notify you of updates to the Site.</li>
          <li>Offer new products, services, and/or recommendations to you.</li>
          <li>Perform other business activities as needed.</li>
          <li>Prevent fraudulent transactions, monitor against theft, and protect against criminal activity.</li>
          <li>Request feedback and contact you about your use of the Site.</li>
          <li>Resolve disputes and troubleshoot problems.</li>
          <li>Respond to product and customer service requests.</li>
          <li>Send you a newsletter.</li>
        </ul>

        <h2>Disclosure of Your Information</h2>
        <p>
          We may share information we have collected about you in certain situations. Your information may be disclosed
          as follows:
        </p>
        <h3>By Law or to Protect Rights</h3>
        <p>
          If we believe the release of information about you is necessary to respond to legal process, to investigate or
          remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may
          share your information as permitted or required by any applicable law, rule, or regulation.
        </p>
        <h3>Third-Party Service Providers</h3>
        <p>
          We may share your information with third parties that perform services for us or on our behalf, including data
          analysis, email delivery, hosting services, customer service, and marketing assistance.
        </p>
        <h3>Open Source Community</h3>
        <p>
          As an open-source project, certain information you provide in public forums (e.g., GitHub issues, pull
          requests, discussions) will be publicly visible.
        </p>

        <h2>Tracking Technologies</h2>
        <h3>Cookies and Web Beacons</h3>
        <p>
          We may use cookies, web beacons, tracking pixels, and other tracking technologies on the Site to help
          customize the Site and improve your experience. When you access the Site, your personal information is not
          collected through the use of tracking technology. Most browsers are set to accept cookies by default. You can
          remove or reject cookies, but be aware that such action could affect the availability and functionality of the
          Site.
        </p>

        <h2>Security of Your Information</h2>
        <p>
          We use administrative, technical, and physical security measures to help protect your personal information.
          While we have taken reasonable steps to secure the personal information you provide to us, please be aware
          that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission
          can be guaranteed against any interception or other type of misuse.
        </p>

        <h2>Policy for Children</h2>
        <p>
          We do not knowingly solicit information from or market to children under the age of 13. If you become aware of
          any data we have collected from children under age 13, please contact us using the contact information
          provided below.
        </p>

        <h2>Your Privacy Rights</h2>
        <p>
          Depending on your location, you may have certain rights regarding your personal information, such as the right
          to access, correct, or delete your data. Please contact us if you wish to exercise these rights.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on this page and updating the &quot;Last Updated&quot; date. You are advised to review this
          Privacy Policy periodically for any changes.
        </p>

        <h2>Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
          <br />
          {companyName}
          <br />
          Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>
      </div>
    </div>
  )
}
