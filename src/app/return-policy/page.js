import styles from './return.module.css';

const Component = () => {
  return (
    <section className={styles.container}>
      <div className={styles.policy}>
        <h5 className={styles.subheading}>Shipping Policy</h5>
        <p className={styles.text}>
          {`The customer is responsible for ensuring that the delivery address provided is accurate and valid. In cases
          of re-delivery or non-delivery, any additional costs incurred will be borne by the customer. ZEALOOPS will
          not be held accountable for any damages or losses resulting from mismanagement by third-party delivery
          service providers during transit. If ZEALOOPS is unable to deliver ordered products for any reason, the
          customer will be refunded via the same online payment method used for the purchase, or credited with a
          deposit to their account within 7 business days.

          When placing an order on the Website, customers are required to provide a valid phone number and email
          address. By providing this information, customers consent to be contacted by ZEALOOPS via phone calls and SMS
          alerts regarding purchases, shipments, or delivery updates. Unless explicitly objected to by the user,
          ZEALOOPS may utilize personal information for promotional phone calls or SMS messages.`}
        </p>
      </div>

      <div className={styles.policy}>
        <h5 className={styles.subheading}>Refund & Cancellation</h5>
        <p className={styles.text}>
          {`Our utmost priority is ensuring total customer satisfaction. If you are dissatisfied with our services, we
          will refund your money according to our refund policy, provided that the reasons are genuine and substantiated
          after a thorough investigation by our dedicated teams. Our policy regarding cancellation and refunds is
          outlined as follows:`}
        </p>
      </div>

      <div className={styles.policy}>
        <h5 className={styles.subheading}>Cancellation Policy</h5>
        <p className={styles.text}>
          {`You have the option to cancel your order within 24 hours of placing it. However, if you choose to cancel after
          the product status has changed to 'shipped' or 'out for delivery’, the company reserves the right to impose a
          'cancellation fee' before processing the refund for your order.`}
        </p>
      </div>

      <div className={styles.policy}>
        <h5 className={styles.subheading}>Return Policy</h5>
        <p className={styles.text}>
          {`Once the product/s has been delivered, returns or cancellations are not accepted, and no refunds will be
          issued. The product/s are shipped at the risk of the client/customer, and we are not responsible for any
          damages that may occur during transport.`}
        </p>
      </div>

      <div className={styles.policy}>
        <h5 className={styles.subheading}>Refund Policy</h5>
        <p className={styles.text}>
          {`In the event of cancellation, clients/customers are responsible for covering the cancellation fee. Refunds
          will be processed to the original source account provided during purchase, after deducting the cancellation
          fee. Once the refund is initiated by us, it is anticipated to appear in the customer’s source account within
          7 to 15 business days, in accordance with the regulations set forth by the Reserve Bank of India (RBI).`}
        </p>
      </div>

      <div className={styles.policy}>
        <h5 className={styles.subheading}>Confidentiality (Privacy Policy)</h5>
        <p className={styles.text}>
          {`The information gathered from the User will be treated as confidential and will not be disclosed to third
          parties. However, the website retains the right to share basic details of this confidential information for
          promotional purposes related to both the User and the Website's business. Confidential information will only
          be disclosed to Law Enforcement Agencies in accordance with proper procedures. Additionally, confidential
          information may be shared if necessary for launching on other platforms such as IOS, Android, Google,
          Microsoft, etc.`}
        </p>
      </div>
    </section>
  );
};

export default Component;
