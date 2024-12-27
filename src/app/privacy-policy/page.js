import styles from './privacy.module.css';

const PrivacyPolicy = () => {
  return (
    <section className={styles.section}>
      <h5 className={styles.heading}>Privacy Policy of (ZEALOOPS) Eltires Private Limited</h5>
      <p className={styles.text}>
        {`(Zealoops) Eltires Private Limited oversees operations on the https://www.zealoops.com/ website, offering its SERVICE. By opting to utilize our Service, you consent to the gathering and utilization of information as per this policy. The Personal Information we gather serves the purpose of enhancing and delivering the Service. Rest assured, we pledge not to utilize or disclose your information to any third party, except as stipulated within this Privacy Policy. The terminology employed in this Privacy Policy aligns with that of our Terms and Conditions, which can be accessed at https://www.zealoops.com/, unless specifically outlined otherwise within this Privacy Policy.`}
      </p>

      <h5 className={styles.heading}>Information Collection and Use</h5>
      <p className={styles.text}>
        {`In order to enhance your user experience with our Service, we may request certain personally identifiable information from you, such as your name, phone number, and postal address. This information will be utilized for the purpose of contacting or identifying you.`}
      </p>

      <h5 className={styles.heading}>Log Data</h5>
      <p className={styles.text}>
        {`We wish to advise you that whenever you access our Service, we gather information known as Log Data, which is transmitted to us by your browser. This Log Data might encompass details such as your computer's Internet Protocol ("IP") address, browser version, the specific pages of our Service you visit, the date and time of your visit, the duration spent on those pages, along with other statistical data.`}
      </p>

      <h5 className={styles.heading}>Cookies</h5>
      <p className={styles.text}>
        {`Cookies are small data files that typically function as anonymous unique identifiers. When you visit a website, these files are sent to your browser and stored on your computer's hard drive. Our website utilizes these "cookies" to gather information and enhance our Service. You have the choice to accept or decline these cookies, and you will be notified when a cookie is being sent to your computer. However, if you opt to decline our cookies, certain parts of our Service may not be accessible to you.`}
      </p>

      <h5 className={styles.heading}>Service Providers</h5>
      <p className={styles.text}>
        {`We may enlist the assistance of third-party companies and individuals for several reasons. It's important for our Service users to be aware that these third parties may have access to your Personal Information. Their access is necessary for them to carry out tasks assigned to them on our behalf. However, they are under obligation not to disclose or utilize this information for any other purpose.`}
      </p>
      <ul className={styles.list}>
        <li className='.li'>Facilitating our Service</li>
        <li className='.li'>Providing the Service on our behalf</li>
        <li className='.li'>Performing Service-related services</li>
        <li className='.li'>Assisting us in analyzing how our Service is utilized</li>
      </ul>

      <h5 className={styles.heading}>Security</h5>
      <p className={styles.text}>
        {`Your trust in providing us with your Personal Information is highly valued, and we endeavor to employ commercially acceptable methods to safeguard it. However, it's important to acknowledge that no method of transmission over the internet or electronic storage can be guaranteed to be 100% secure and reliable. Therefore, we cannot assure absolute security of your information.`}
      </p>

      <h5 className={styles.heading}>Links to Other Sites</h5>
      <p className={styles.text}>
        {`Within our Service, you may encounter links directing you to other websites. Clicking on a third-party link will redirect you to that particular site. It's important to note that these external sites are independently operated and not under our control. Consequently, we strongly recommend that you review the Privacy Policy of these websites. We bear no control over, and accept no liability for, the content, privacy policies, or practices of any third-party sites or services.`}
      </p>

      <h5 className={styles.heading}>Children's Privacy</h5>
      <p className={styles.text}>
        {`Our Services are not intended for individuals under the age of 13. We do not knowingly gather personally identifiable information from children under 13 years old. If we become aware that a child under 13 has provided us with personal information, we promptly remove it from our servers. If you are a parent or guardian and are aware that your child has provided us with personal information, please contact us so that we can take appropriate action.`}
      </p>

      <h5 className={styles.heading}>Changes to This Privacy Policy</h5>
      <p className={styles.text}>
        {`We reserve the right to periodically update our Privacy Policy. Therefore, we recommend that you check this page regularly for any revisions. Any changes to the Privacy Policy will be communicated by posting the updated version on this page. Such changes take effect immediately upon being posted here.`}
      </p>

      <h5 className={styles.heading}>Contact us at</h5>
      <p className={styles.text}>
        {`Email: `}
        <a className='.a' href="mailto:info@zealoops.com">info@zealoops.com</a>
        <br />
        {`Contact no.: `}
        <a className='.a' href="tel:+919105300803">+91 91053 00803</a>
      </p>
    </section>
  );
};

export default PrivacyPolicy;
