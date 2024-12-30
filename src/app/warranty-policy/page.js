export const metadata = {
    title: "Warranty Policy | Zealoops",
    description: `Explore Zealoops' Warranty Policy. Learn about the coverage, terms, and conditions for our electric cycles and accessories. We are committed to delivering quality and reliability, backed by a warranty to ensure customer satisfaction.`,
    keywords: "warranty policy, Zealoops warranty, product warranty, e-bike warranty, electric cycle coverage, warranty terms, warranty conditions, warranty period, product reliability, customer assurance, defective product warranty, repair policy, replacement warranty, quality guarantee, warranty claims, cycle accessories warranty, Zealoops warranty details, warranty support, reliable products, warranty process, customer satisfaction warranty",
  };
  
import React from 'react';
import styles from './warranty.module.css';

const WarrantyPolicy = () => {
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>
                Warranty <span className={styles.highlight}>Policy</span>
            </h1>
            <p className={styles.p}>
                {`
                Please make sure you register your product on www.zealoops.com (the "Website") in order to activate your warranty. Simply sign in to the website and proceed with the Register My Bike instructions. In order to register your product, you must upload a copy of your invoice as evidence of purchase. A confirmation email or message will be sent to you when your transaction has been examined and approved. Please be aware that your warranty won't be activated unless your product is registered on our website. To register your product and activate the warranty, you have 30 days from the date of purchase.
                `}</p><p className={styles.p}>{`This warranty policy ("Warranty") issued by Zealoops Private Limited, (hereinafter referred to as "Company"), relates to its bicycle products and spare parts thereof (hereinafter referred to as "Product(s)") which have been sold by the Company to its end users/buyers (hereinafter referred to as "Customers") in accordance with general terms of purchase any other agreements/policies agreed upon by the Customers.
                `}
            </p>

            <h5 className={styles.h5}>
                {`1. Company warrants Frame of the bicycle against defects in the workmanship and materials:`}
            </h5>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th className={styles.th}>{`S.no.`}</th>
                        <th className={styles.th}>{`Component Under Warranty`}</th>
                        <th className={styles.th}>{`Period of Warranty`}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={styles.td}>{`1`}</td>
                        <td className={styles.td}>{`E-Bikes (Battery & Motors)`}</td>
                        <td className={styles.td}>{`2 Years`}</td>
                    </tr>
                    <tr>
                        <td className={styles.td}>{`2`}</td>
                        <td className={styles.td}>{`Frame`}</td>
                        <td className={styles.td}>{`3 Years`}</td>
                    </tr>
                </tbody>
            </table>
            <p className={styles.p}>
                {`*Applicable only to the original. Any frame damage must only be the result of manufacturing defects.`}
            </p>

            <h5 className={styles.h5}>{`2. This warranty does not cover the following:`}</h5>
            <ul className={styles.ul}>
                <li className={styles.li}>{`Accessories normal deterioration.`}</li>
                <li className={styles.li}>{`Improper assembly.`}</li>
                <li className={styles.li}>{`Improper aftercare maintenance.`}</li>
                <li className={styles.li}>{`Installation of parts, accessories, or attachments that were not originally designed to work with the bicycle or the product as it was sold.`}</li>
                <li className={styles.li}>{`Accidental, improper, abusive, or neglected damage or failure.`}</li>
                <li className={styles.li}>{`Labour costs for a part substitution or conversion.`}</li>
            </ul>

            <p className={styles.p}>
                {`
                The Company disclaims all liability for any loss or damage (including, without limitation, special, indirect, incidental, economic, consequential, loss or damage to property other than the Product itself, loss of profits, business interruption, punitive damages, or other losses) resulting from or relating to the Product. Any warranty claim must be made via an authorized company retailer or in accordance with the conditions of the website and must be accompanied by authentic documentation of the claim. Any warranty claim must be submitted via an authorized company retailer, in accordance with the conditions of the website, or by providing authentic proof of purchase or invoice.
                The sole remedy under this warranty, which is strictly restricted to the repair or replacement of a faulty item or component, is the aforementioned repair or replacement. The customer is responsible for paying any warranty service fees, including those associated with the transfer of components and/or the installation of any new components. Certain components might not be accessible for older models as a result of product evolution and obsolescence. In these situations, the customer is in charge of finding and paying for the components.
                The consumer must submit their receipt, invoice, or bill in order for your claims to be handled without issue. Consequently, kindly store your receipt and other purchase records in a secure location. The cost of shipping warranty returns to the company and the cost of return shipping are the responsibility of the customer. The buyer must send the item, along with his or her name, address, phone number, and proof of purchase, to the email address info@zealoops.com.
                `}
            </p>

            <h2 className={styles.h2}>{`THE FOLLOWING EXCLUSION APPLIES TO ALL MODELS`}</h2>
            <ul className={styles.ul}>
                <li className={styles.li}>{`Any unit used for rentals or other commercial purposes, stunt riding, ramp jumping, acrobatics, bicycle motocross, dirt biking, or other similar activities are not covered by this warranty.`}</li>
                <li className={styles.li}>{`Accidental or malfunctioning damage or misuse caused to the Product by human action, whether intentional or not, including but not limited to misuse or mishandling, fire, or any other disaster. Infrequent product maintenance.`}</li>
                <li className={styles.li}>{`Damaged or missing parts are reported one week after the stated purchase date.`}</li>
                <li className={styles.li}>{`The product is subject to normal wear and tear to tires, bulbs, chains, chainring signs, gears, cables, pedals, and handles, etc., as well as corrosion, rust, stains, scratches, bumps on the body or bends of the frame, forks, handlebars, safety posts, fenders, rims, or accessories, or the coating of the product are not covered by warranty unless the damage or defect is the direct result of a proven manufacturing defect.`}</li>
                <li className={styles.li}>{`Damage caused in transit when the product is shipped for maintenance or repair purposes or product-related or product-related.`}</li>
                <li className={styles.li}>{`All warranties will be void if the serial number has been altered, erased, or erased.`}</li>
                <li className={styles.li}>{`This warranty does not apply to any product that has been altered or repaired, adjusted, or serviced by persons other than those authorized by the company to do so.`}</li>
                <li className={styles.li}>{`This warranty is voided entirely by any modification to the frame, fork, or components.`}</li>
                <li className={styles.li}>{`This warranty lasts from the date of purchase, is for the original owner only, and is non-transferable.`}</li>
                <li className={styles.li}>{`Shipping, delivery, labour, and handling charges incurred when replacing parts are not covered by the warranty and are the responsibility of the customer.`}</li>
                <li className={styles.li}>{`Discoloration of parts such as paint, stickers, and plastic parts due to direct exposure to sunlight.`}</li>
            </ul>

            <p className={styles.p}>
                {`
                Normal wear and tear is not covered by the warranty. Certain parts of the Product are subject to wear and tear and should be periodically replaced during their normal operation. Rate of wear and tear depends on care and maintenance as well as how the customer/you use the product (travel distance, type of terrain, wet roads, dirt, etc.). Bicycles that are often left outdoors can also experience wear and tear from the weather. All parts of a bicycle require regular maintenance and servicing. The warranties as set forth herein provide the sole and exclusive remedy in lieu of all other rights and remedies, including but not limited to the implied warranties of merchantability or fit for a particular use and any contractual, negligent and other rights expressed or implied by law or equity.
                This warranty is valid only within the geographical limits of the Republic of India. The company reserves the right to modify this warranty at its sole discretion without prior notice.
                For any questions regarding warranty conditions, please contact us at info@zealoops.com or call on our number +91 91053 00803.
                `}
            </p>

            <div className={styles.center}>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSea15AfhrNpUpLahsi4LsrLxqepfYEOZYqfmwIrH5K9GLYpGA/viewform?usp=sf_link" className={styles.button}>{`Claim Warranty`}</a>
            </div>
        </section>
    );
};

export default WarrantyPolicy;
