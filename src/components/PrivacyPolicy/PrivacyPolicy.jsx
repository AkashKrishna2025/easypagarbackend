// import React, { useEffect } from "react";

// const PrivacyPolicy = () => {
//   useEffect(()=>{
//     window.scrollTo(0,0);
//   },[])
//   return (
//     <div className="w-full text-black flex flex-col min-h-[100vh] items-center px-20 p-4 max-sm:px-4 gap-5 mt-4">
//       <h4 className="text-2xl font-bold">Privacy Policy</h4>
//       <span className="text-left leading-6	tracking-wide	">
//         We prioritize the protection of your data and its security. By using Our
//         Website, you consent to abide by our Privacy Policy, accessible on the
//         website. Our Website is hosted in India. If you access the Website from
//         a region with different laws or regulations regarding the collection,
//         use, or disclosure of personal data compared to those in India, by
//         continuing to use the Website, you are agreeing to transfer your data to
//         India and to its processing there.
//       </span>
//       <h3 className="underline text-xl font-semibold">
//         Copyright Infringements
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         We respect the intellectual property rights of others. If you believe
//         that any content available on or through the Website infringes upon any
//         copyright you own or control, please immediately notify us using the
//         contact information provided below in this Privacy Policy by writing
//         email to the person responsible for posting or storing the material
//         mentioned in the Website. Please be aware that according to applicable
//         law, you may be held liable for damages if you provide false information
//         about the website. Therefore, if you are unsure whether material found
//         on or linked to by the Website infringes your copyright, it is
//         recommended to seek advice from legal counsel beforehand.
//       </span>
//       <h3 className="underline text-xl font-semibold">Term and Termination</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         These Terms of Use will remain valid as long as you use the Website.
//         While other provisions exist within these Terms of Use, we reserve the
//         right, at our sole discretion and without prior notice or liability, to
//         restrict access to and use of the Website (including blocking specific
//         IP addresses) for any individual, for any reason or no reason, including
//         but not limited to violations of any representation, warranty, or
//         agreement stated in these Terms of Use or any applicable law or
//         regulation. We retain the right to terminate your usage or participation
//         in the Website, or to delete your account and any associated content or
//         information you have posted, at any time, without warning, at our sole
//         discretion.
//         <br /> <br /> If your account is terminated or suspended for any reason,
//         you are expressly prohibited from re-registering and establishing a new
//         account under your own name, an alias, or the identity of any other
//         individual, whether real or fictitious, including those you may
//         represent. Alongside account suspension or termination, we retain the
//         right to pursue appropriate legal measures, including but not limited to
//         civil, criminal, and injunctive actions.
//       </span>
//       <h3 className="underline text-xl font-semibold">
//         Modifications and Interruptions
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         We retain the authority to change, amend, or delete the content of the
//         Website at our sole discretion and without prior notice, for any reason
//         or at any time. However, we are not obliged to update any information on
//         our Website. Furthermore, we reserve the right to modify or terminate
//         all or part of the Website without prior notice. We shall not be held
//         liable to you or any third party for any alterations, changes in
//         pricing, suspensions, or discontinuation of the Website.
//       </span>
//       <h3 className="underline text-xl font-semibold">
//         Jurisdiction, Governing Laws, and Dispute Resolution
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         These Terms will be governed by and interpreted and enforced in
//         accordance with the laws of India. Subject to other provisions in this
//         Clause, courts in [Hubli] shall have exclusive jurisdiction over all
//         disputes arising from these Terms or the use of the Services. Any
//         disputes, controversies, conflicts, or differences arising from these
//         Terms shall be resolved through arbitration in [Hubli] under the
//         Arbitration and Conciliation Act, 1996, which is considered to be
//         incorporated by reference in this Clause. The arbitration panel will
//         consist of one arbitrator appointed by the Company. English will be the
//         language used in the arbitration proceedings. The parties involved in
//         the arbitration must maintain confidentiality and not disclose any
//         information except to those with a legitimate need or legal advisors,
//         unless required by law. The arbitrator's decision will be final and
//         binding on all parties involved.
//       </span>
//       <span className="text-left leading-6	tracking-wide	">
//         We cannot guarantee uninterrupted availability of the Website.
//         Occasional hardware, software, or other issues, or the need for
//         maintenance related to the Website, may result in interruptions, delays,
//         or errors. We reserve the right to change, revise, update, suspend,
//         discontinue, or otherwise modify the Website at any time or for any
//         reason without prior notice to you. By using the Website, you
//         acknowledge that we bear no liability for any loss, damage, or
//         inconvenience arising from your inability to access or use the Website
//         during any downtime or discontinuance. These Terms of Use do not impose
//         on us any obligation to maintain and support the Website or to provide
//         any corrections, updates, or releases related to it.
//       </span>
//       <h3 className="underline text-xl font-semibold">Governing Law</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         These Terms will be governed by and construed in accordance with the
//         laws of India. MWB Technologies India Pvt Ltd and yourself hereby agree
//         irrevocably that any dispute arising in connection with these terms
//         shall be exclusively resolved by the courts of India.
//       </span>
//       <h3 className="underline text-xl font-semibold">DISPUTE RESOLUTION</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         You agree to unequivocally refer all disputes concerning these Terms or
//         the relationship established by this Agreement to the jurisdiction of
//         the courts in India, without the possibility of revocation. MWB
//         Technologies India Pvt. Ltd also reserves the right to initiate
//         proceedings regarding the substance of the matter in the courts of the
//         country where you reside, or if these Terms are entered into in the
//         course of your trade or profession, the state of your principal place of
//         business.
//       </span>
//       <h3 className="underline text-xl font-semibold">Corrections</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         There may be instances of typographical errors, inaccuracies, or
//         omissions in the information presented on the Website, such as
//         descriptions, pricing, availability, and other details. We reserve the
//         right to rectify any such errors, inaccuracies, or omissions, and to
//         amend or update the information on the Website without prior notice.
//       </span>
//       <h3 className="underline text-xl font-semibold">Disclaimer</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         The website is provided on an "as-is" and "as-available" basis. You
//         agree that your use of the website and our services is at your sole
//         risk. To the fullest extent permitted by law, we disclaim all
//         warranties, express or implied, regarding the website and your use
//         thereof, including, without limitation, implied warranties of
//         merchantability, fitness for a particular purpose, and non-infringement.
//         We make no warranties or representations about the accuracy or
//         completeness of the website's content or links to other websites, and we
//         assume no liability or responsibility for
//       </span>
//       <ol>
//         <li>
//           1. Any errors, mistakes, or inaccuracies of content and materials,
//         </li>
//         <li>
//           2. Personal injury or property damage resulting from your access to
//           and use of the website,
//         </li>
//         <li>
//           3. Unauthorized access to or use of our secure servers and/or any
//           personal or financial information stored therein,
//         </li>
//         <li>
//           4. Interruption or cessation of transmission to or from the website,
//         </li>
//         <li>
//           5. Bugs, viruses, trojan horses, or similar malicious elements
//           transmitted through the website by third parties
//         </li>
//         <li>
//           6. Errors or omissions in any content and materials, or for any loss
//           or damage incurred as a result of the use of any content posted,
//           transmitted, or made available via the website.
//         </li>
//       </ol>
//       <span className="text-left leading-6	tracking-wide	">
//         We do not warrant, endorse, guarantee, or assume responsibility for any
//         product or service advertised or offered by a third party through the
//         website, any linked website, or mobile application featured in any
//         banner or other advertising. We will not be a party to or in any way be
//         responsible for monitoring any transaction between you and any
//         third-party providers of products or services. As with the purchase of a
//         product or service through any medium or environment, you should use
//         your best judgment and exercise caution where appropriate.
//       </span>
//       <h3 className="underline text-xl font-semibold">
//         Limitations of Liability
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         Under no circumstances will we or our directors, employees, or agents be
//         liable to you or any third party for any direct, indirect,
//         consequential, exemplary, incidental, special, or punitive damages,
//         including lost profit, lost revenue, loss of data, or other damages
//         arising from your use of the website, regardless of whether we have been
//         advised of the possibility of such damages.
//       </span>
//       <h3 className="underline text-xl font-semibold">Indemnification</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         You agree to defend, indemnify, and hold us harmless, including our
//         subsidiaries, affiliates, and all of our respective officers, agents,
//         partners, and employees, against any loss, damage, liability, claim, or
//         demand, including reasonable attorneys’ fees and expenses, brought by
//         any third party due to or arising out of:
//         <br />
//         <br />
//         1. Your Contributions
//         <br />
//         2. Your use of the Website
//         <br />
//         3. Breach of these Terms of Use
//         <br />
//         4. Any violation of your representations and warranties outlined in
//         these Terms of Use
//         <br />
//         5. Your infringement upon the rights of a third party, including but not
//         limited to intellectual property rights.
//         <br />
//         6. Any harmful action towards another user of the Website with whom you
//         connected via the Website.
//         <br />
//         <br />
//         However, we reserve the right, at your expense, to assume exclusive
//         defense and control of any matter for which you are obligated to
//         indemnify us, and you agree to cooperate, at your expense, with our
//         defense of such claims. We will endeavor to notify you of any such
//         claim, action, or proceeding subject to this indemnification as soon as
//         we become aware of it.
//       </span>

//       <h3 className="underline text-xl font-semibold">User Data</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         We will store certain data that you send to the Website to manage its
//         performance, as well as data related to your usage of the Website. While
//         we regularly back up data, you are solely accountable for all data you
//         transmit or that relates to any activity you conduct using the Website.
//         By using the Website, you acknowledge that we are not liable to you for
//         any loss or corruption of such data, and you waive any claims against us
//         arising from any such loss or corruption.
//       </span>

//       <h3 className="underline text-xl font-semibold">
//         Electronic Communications, Transactions, and Signatures
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         By accessing the Website, sending us emails, and filling out online
//         forms, you engage in electronic communications. You agree to receive
//         electronic communications and acknowledge that all agreements, notices,
//         disclosures, and other communications provided to you electronically,
//         via email or on the Website, satisfy any legal requirement for written
//         communication.
//         <br />
//         <br />
//         You also agree to the use of electronic signatures, contracts, orders,
//         and other records, as well as electronic delivery of notices, policies,
//         and transaction records initiated or completed by us or via the Website.
//         You waive any rights or requirements under any statutes, regulations,
//         rules, ordinances, or other laws in any jurisdiction that mandate an
//         original signature, or the delivery or retention of non-electronic
//         records, or require payments or the granting of credits by means other
//         than electronic methods.
//       </span>

//       <h3 className="underline text-xl font-semibold">Miscellaneous</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         These Terms of Use, along with any policies or operational regulations
//         posted on the Website or related to it, constitute the entire agreement
//         and understanding between you and us (MWB Technologies India Pvt. Ltd).
//         Our failure to enforce any right or provision of these Terms of Use does
//         not waive such right or provision. These Terms of Use operate to the
//         fullest extent permitted by law. We reserve the right to assign any or
//         all of our rights and obligations to others at any time. We are not
//         responsible or liable for any loss, damage, delay, or failure to act
//         caused by any circumstance beyond our reasonable control.
//       </span>

//       <h3 className="underline text-xl font-semibold">
//         Changes to this Privacy Policy
//       </h3>
//       <span className="text-left leading-6	tracking-wide	">
//         We may update our Privacy Policy from time to time. We will notify you
//         of any changes by posting the new Privacy Policy on this page.
//         <br />
//         <br />
//         We will let you know via email and/or a prominent notice on this
//         website, prior to the change becoming effective and update the "Last
//         updated" date at the top of this Privacy Policy. You are advised to
//         review this Privacy Policy periodically for any changes. Changes to this
//         Privacy Policy are effective when they are posted on this page.
//       </span>

//       <h3 className="underline text-xl font-semibold">Contact Us</h3>
//       <span className="text-left leading-6	tracking-wide	">
//         If you have any questions about this Privacy Policy, you can contact us
//         at:
//         <br />
//         <br />
//         By writing on our support Email:{" "}
//         <a
//           className="underline font-medium"
//           href="mailto:reachus@wbtechindia.com"
//         >
//           reachus@wbtechindia.com
//         </a>
//         .
//         <br />
//         By visiting our website:{" "}
//         <a className="underline font-medium" href="http://www.wbtechindia.com">
//           www.wbtechindia.com
//         </a>
//         ,<br />
//         Designated Grievance Officer: Mr Dinesh Jain
//         <br />
//         Address: CTS 122/141A, W B PLAZA, NEW COTTON MARKET, OPP TRAFFIC POLICE
//         <br/>
//         STATION, HUBLI, Dharwad, Karnataka, 580029
//         {/* Email:{" "} */}
//         {/* <a className="underline font-medium"href="mailto:dinesh.jain@wbtechindia.com">
//           dinesh.jain@wbtechindia.com
//         </a> */}
//         <br />
//         Designated Compliance Officer: Mrs Monica D.
//         <br />
//         Address: CTS 122/141A, W B PLAZA, NEW COTTON MARKET, OPP TRAFFIC POLICE
//         <br/>
//         STATION, HUBLI, Dharwad, Karnataka, 580029
//         {/* Email:{" "} */}
//         {/* <a className="underline font-medium"href="mailto:monica.s.d@wbtechindia.com">
//           monica.s.d@wbtechindia.com
//         </a> */}
//       </span>
//     </div>
//   );
// };

// export default PrivacyPolicy;
import React from "react";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(()=>{
        window.scrollTo(0,0);
     },[])
  return (
    <div className="max-w-full mx-20 px-4 py-8 text-justify">
      <section id="privacy-policy" className="py-8 px-4 md:px-8">
        <h1 className="text-lg text-center font-bold mb-4 mt-4">
          Privacy Policy of EasyPagar App
        </h1>
      </section>

      <section id="effective-date" className="py-2 px-4 md:px-8">
  <h2 className="text-sm font-semibold mb-2">
    Effective Date last updated
  </h2>
  <p className="text-xs leading-10">
    App Effective Date: 01-04-2024 Last updated: 01-04-2024
  </p>
</section>


      <section id="introduction" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-2">Introduction</h2>
        <p className="text-xs leading-10">
          This document is published in accordance with the provisions of Rule 3
          (1) of the Information Technology (Intermediaries Guidelines) Rules,
          2011 that require publishing the Terms for access the EasyPagar App.
          This document meets the stipulations and conditions mentioned in
          Section 65B (2) of the Indian Evidence Act, 1872. Privacy issues are a
          high priority for us at MWB Technologies India Private Limited and we
          follow standard industry practices to maintain your Personal
          information. This Privacy Policy describes our policies and procedures
          on the data capture, use, and disclosure of your Personal information
          when the user uses the EasyPagar App. Please read the following to
          learn more about our Privacy Policy
        </p>
      </section>

      <section id="interpretation-definitions" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">
          Interpretation and Definitions
        </h2>
        <p className="text-xs leading-10 ">
          Interpretation and Definitions Interpretation The words in which the
          initial letter is capitalized have meanings defined under the
          following conditions. The following definitions should have the same
          meaning, regardless of whether they appear in the singular or plural.
          Definitions For the purposes of this Privacy Policy: "App" refers to
          EasyPagar App in the agreement. The terms "Registered user," "user,"
          and "you" refer, as appropriate, to the person, business, or other
          legal entity that this person is representing when accessing or using
          the EasyPagar App. “Account” refers to the unique account created for
          you to access our EasyPagar App. "Privacy Policy" refers to all
          relevant notices, instructions, policies, rules, regulations,
          guidelines, and specifications that are given to you, displayed on the
          EasyPagar App, or referred to in this agreement. Any device that can
          access the EasyPagar App is referred to as a "Device" including mobile
          phones, digital tablets, desktop computers, and laptops. Any
          information that relates to an identified or recognizable individual
          (EasyPagar App user) is considered as "Personal information or data."
          “Usage Data” refers to Data collected automatically, either generated
          by the use of the EasyPagar App or from the EasyPagar App
          infrastructure itself (for example, the duration of a page visit).
          “Affiliate” refers to the entity that controls, is controlled by, or
          is under common control with a party, where "control" means ownership
          of 50% or more of the shares, equity interest, or other securities
          entitled to vote for the election of directors or other managing
          authority. “Company” referred to as either "we", us," or "our" in this
          agreement refers to MWB Technologies India Private Limited. “Country”
          refers to India. “Third-party” means any natural or legal person who
          processes the data on behalf of the Company. It refers to Third-party
          companies or individuals employed by the Company to facilitate the
          service, provide the service on behalf of the Company, to perform
          services related to the application, or assist the Company in
          analyzing how the EasyPagar App is used.
        </p>
      </section>

      <section id="collecting-using-data" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">
          Collecting and Using Your Personal Data
        </h2>

        <h3 className="text-xs leading-10 font-semibold mt-4 mb-2">
          Types of Data Collected
        </h3>
        <p className="text-xs leading-10 mb-4">
          <strong>Personal Data:</strong> While using our EasyPagar App, we may
          ask you to provide us with certain personally identifiable information
          that can be used to contact or identify you. Personally identifiable
          information may include, but is not limited to:
          <ul className="list-disc pl-6 mb-4">
            <li>Email address</li>
            <li>First name and last name</li>
            <li>Telephone number</li>
            <li>Mobile number</li>
            <li>Address, State, ZIP/Postal Code, City</li>
            <li>Usage Data</li>
          </ul>
          <strong>Usage Data:</strong> Usage Data is collected automatically
          when the user uses the EasyPagar App. Usage Data may include Personal
          information such as your Device internet protocol address (e.g., IP
          address), browser type, browser version, the pages of our EasyPagar
          App that you visit, the time and date of your visit, the time spent on
          those pages, unique Device identifiers, and other diagnostic Data.
          When you access the EasyPagar App through a Device, we may collect
          certain Personal information automatically, including, but not limited
          to, the type of Devices you use, your Device unique ID, the IP address
          of your Device, your operating system, the type of internet browser
          you use, unique Device identifiers and other diagnostic data.
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Use of Your Personal Data
        </h3>
        <p className="text-xs leading-10  mb-4">
          The Company may use Personal Data for the following purposes:
          <ul className="text-xs leading-10 list-disc pl-6 mb-4">
            <li>
              <strong>To provide and maintain the EasyPagar App:</strong>{" "}
              Including monitoring the usage of the EasyPagar App.
            </li>
            <li>
              <strong>To manage your account:</strong> To manage your
              registration as a user of the EasyPagar App and provide access to
              different functionalities available to you as a Registered user.
            </li>
            <li>
              <strong>For the performance of a contract:</strong> For the
              development, compliance, and undertaking of the purchase contract
              for the products, items, or services you have purchased or of any
              other contract with us through the EasyPagar App.
            </li>
            <li>
              <strong>To contact you:</strong> By email, telephone calls, SMS,
              or other equivalent forms of electronic communication regarding
              updates or informative communications related to functionalities,
              products, or contracted services.
            </li>
            <li>
              <strong>To provide you:</strong> With news, special offers, and
              general information about other applications, services, and events
              that we offer similar to those you have already purchased or
              enquired about, unless you have opted not to receive such
              information.
            </li>
            <li>
              <strong>To manage your requests:</strong> To attend and manage
              your requests.
            </li>
            <li>
              <strong>For business transfers:</strong> To evaluate or conduct a
              merger, divestiture, restructuring, reorganization, dissolution,
              or other sale or transfer of some or all of Our assets.
            </li>
            <li>
              <strong>For other purposes:</strong> Such as data analysis,
              identifying usage trends, determining the effectiveness of our
              promotional campaigns, and evaluating and improving our service,
              products, marketing, and your experiences.
            </li>
          </ul>
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Sharing Your Personal Data
        </h3>
        <p className="text-xs leading-10  mb-4">
          We may share your Personal information in the following situations:
          <ul className="text-xs leading-10  list-disc pl-6 mb-4">
            <li>
              <strong>With Third-party:</strong> To monitor and analyse the use
              of our EasyPagar App and to contact you.
            </li>
            <li>
              <strong>With Affiliates:</strong> Including our parent Company and
              any other subsidiaries, joint venture partners, or other companies
              that we control or that are under common control with us.
            </li>
            <li>
              <strong>With business partners:</strong> To offer you certain
              products, services, or promotions.
            </li>
            <li>
              <strong>With other users:</strong> Any Personal information
              provided by you will not be considered personal information if it
              is freely available and/or accessible in the public domain.
            </li>
            <li>
              <strong>With your consent:</strong> We may disclose your Personal
              information for any other purpose with your consent.
            </li>
          </ul>
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Retention and Transfer of Your Personal Data
        </h3>
        <p className="text-xs leading-10  mb-4">
          <strong>Retention of Personal Data:</strong> The Company will retain
          your Personal Data only for as long as necessary for the purposes set
          out in this Privacy Policy, to comply with legal obligations, resolve
          disputes, and enforce legal agreements and policies. The Company will
          also retain the data for internal analysis, except when used to
          strengthen security or improve functionality, or when legally
          obligated to retain data longer.
        </p>
        <p className="text-xs leading-10  mb-4">
          <strong>Transfer of Personal Data:</strong> Your information,
          including Personal Data, is processed at the Company’s operating
          offices and other places where the parties involved in the processing
          are located. This means that Personal information may be transferred
          and maintained on computers located outside your state, province, or
          country. Your consent to this represents your agreement to that
          transfer. The Company will take all steps reasonably necessary to
          ensure that your Data is treated securely and in accordance with this
          Privacy Policy.
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Deleting Your Personal Data
        </h3>
        <p className="text-xs leading-10 mb-4">
          You have the right to delete or request assistance in deleting the
          Personal Data that we have collected about you. The EasyPagar App may
          allow you to delete certain Personal information from within the App.
          You may update, amend, or delete your Personal information by signing
          in to your EasyPagar Account, if you have one, and visiting the
          settings section. You may also contact us to request access to,
          correct, or delete any Personal information provided to us. Note that
          we may need to retain certain information when we have a legal
          obligation or lawful basis to do so.
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Disclosure of Your Personal Data
        </h3>
        <p className="text-xs leading-10  mb-4">
          <strong>Business Transactions:</strong> If the Company is involved in
          a merger, acquisition, or asset sale, your Personal Data may be
          transferred. Notice will be provided before your Personal Data is
          transferred and becomes subject to a different Privacy Policy.
        </p>
        <p className="text-xs leading-10  mb-4">
          <strong>Law Enforcement:</strong> Under certain circumstances, the
          Company may be required to disclose your Personal Data if required by
          law or in response to valid requests by public authorities.
        </p>
        <p className="text-xs leading-10  mb-4">
          <strong>Other Legal Requirements:</strong> The Company may disclose
          your Personal Data to comply with legal obligations, protect and
          defend the rights or property of the Company, prevent or investigate
          possible wrongdoing in connection with the EasyPagar App, protect the
          personal safety of users, or protect against legal liability.
        </p>

        <h3 className="text-sm font-semibold mt-4 mb-2">
          Security of Your Personal Data
        </h3>
        <p className="text-xs leading-10 ">
          We take due care to protect Personal Data with technical measures in
          place to prevent unauthorized access, accidental loss, destruction, or
          damage. Employees handling Personal Data have been trained to protect
          it from unauthorized usage. We maintain physical, electronic, and
          procedural safeguards in connection with the collection, storage, and
          disclosure of Personal Data. While we take reasonable steps to protect
          your Personal Data, no method of transmission over the internet or
          electronic storage is 100% secure. The security of your Personal Data
          is important to us, but absolute security cannot be guaranteed.
        </p>
      </section>

      <section id="usage-policy" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">Usage Policy</h2>

        <p className="text-xs leading-10  mb-4">
          We are not responsible for any losses or damages incurred by users
          accessing the EasyPagar App outside of India.
        </p>

        <h3 className="text-sm font-semibold mb-2">Competency to Contract</h3>
        <p className="text-xs leading-10 ">
          By agreeing to this Privacy Policy, a user (which is a natural person)
          represents that the user is at least the age of majority, i.e., 18
          years old, and is competent to contract. Additionally, where the user
          is registered on behalf of, and is the authorized representative of, a
          company, partnership, or any other legal entity, such user has been
          duly authorized by such entity and is permitted under applicable law
          to accept these terms of service. If the user is a natural person who
          is not of the age of majority or is not competent to contract, the
          user may not use the EasyPagar App or provide any Personal information
          to the EasyPagar App.
        </p>
      </section>
      <section id="links-websites" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">
          Links to Other Websites or Payment Gateways
        </h2>

        <p className="text-xs leading-10 ">
          The EasyPagar App may contain links to other websites and payment
          gateways that are not operated by us. If you click on a third-party
          link, you will be directed to that third-party site. We strongly
          advise you to review the Privacy Policy of every site you visit. We
          have no control over and assume no responsibility for the content,
          cookies, privacy policies, or practices of any third-party. We accept
          no liability of whatsoever nature related to websites and payment
          gateways operated by third-parties, and under no circumstances shall
          we be liable for any loss or damage caused by your use or reliance on
          information obtained through third-party sites or services.
        </p>
      </section>

      <section id="copyright-violation" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">Copyright Violation</h2>

        <p className="text-xs leading-10 ">
          Copyright violation includes stealing codes, programs, and other
          information illegally and creating imitated copies by unauthorized
          means, utilizing the data either for personal benefit or
          profit-making. Such actions are subject to legal action as per the
          applicable laws.
        </p>
      </section>

      <section id="reservation-rights" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">Reservation of Rights</h2>

        <p className="text-xs leading-10 ">
          MWB Technologies India Private Limited reserves the right to change,
          modify, or amend any part of the EasyPagar App at any time.
        </p>
      </section>

      <section id="subscription" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">Subscription</h2>

        <p className="text-xs leading-10 mb-4">
          We offer users the ability to subscribe to different versions of the
          EasyPagar App, detailed as follows:
        </p>

        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">1. EasyPagar Basic</h3>
          <p className="text-xs leading-10 ">
            Includes 1 Branch & 5 Employees with features such as Attendance,
            Location-Based Auto Approval, Leave, Loan, Advances, and
            Downloadable reports like Attendance Report, Salary Report, Loan,
            and Advances Reports.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">2. EasyPagar Plus</h3>
          <p className="text-xs leading-10 ">
            Includes 1 Branch & 10 Employees with features such as Attendance,
            Location-Based Auto Approval, Leave, Loan, Advances, and
            Downloadable Reports like Attendance Report, Salary Report, and Loan
            and Advances Details.
          </p>
        </div>

        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-2">3. EasyPagar Pro</h3>
          <p className="text-xs leading-10 ">
            Includes 1 Branch & 20 Employees with features such as Attendance,
            Department Management, 600 Messages & 300 Advertisements with 1-year
            validity, Location-Based Auto Approval, Leave, Loan, Advances,
            Expenses, and Downloadable Reports including Attendance Report,
            Salary Report, Loan and Advances Reports, Expenses Reports, and
            Annual Reports. Role creation for Manager & Unit Head is also
            available.
          </p>
        </div>

        <p className="text-xs leading-10  mb-4">
          Users can purchase Add-ons for additional features in their existing
          version. Higher subscription versions are available for more features
          at the applicable subscription amount. Subscriptions and Add-ons have
          validity from the date of purchase and will expire accordingly. All
          versions, features, and subscription policies are subject to change as
          decided by MWB Technologies India Private Limited. We are not liable
          for any loss or damage resulting from the termination or modification
          of any facilities or benefits available to users.
        </p>
      </section>

      <section id="changes-policy" className="py-8 px-4 md:px-8">
        <h2 className="text-sm font-semibold mb-4">
          Changes to This Privacy Policy
        </h2>

        <p className="text-xs leading-10 ">
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page. We will
          let you know via email and/or a prominent notice on the EasyPagar App,
          prior to the change becoming effective, and update the "Last updated"
          date at the top of this Privacy Policy. You are advised to review this
          Privacy Policy periodically for any changes. Changes to this Privacy
          Policy are effective when they are posted on this page.
        </p>
      </section>

      <section id="contact-us" className="py-8 px-4 md:px-8">
  <h2 className="text-sm font-semibold mb-4">Contact Us</h2>
  
  <p className="text-xs leading-10   mb-4">
    If you have any questions about this Privacy Policy, you can contact us in the following ways:
  </p>
  
  <ul className="list-disc list-inside mb-4 pl-4">
    <li className="text-xs leading-10 ">
      By writing to our support email: <a href="mailto:reachus@wbtechindia.com" className="text-blue-500 hover:underline">reachus@wbtechindia.com</a>
    </li>
    <li className="text-xs leading-10 ">
      By visiting our website: <a href="http://www.wbtechindia.com" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">www.wbtechindia.com</a>
    </li>
    <li className="text-xs leading-10 ">
      Address: CTS 122/141A, W B Plaza, New Cotton Market, Opp Traffic Police Station, Hubli, Dharwad, Karnataka, 580029
    </li>
  </ul>
</section>

    </div>
  );
};

export default PrivacyPolicy;
