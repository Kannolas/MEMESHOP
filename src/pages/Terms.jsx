import React from "react";
import InfoSample from "./InfoSample";


function Terms(){
    const text = "Terms of Service\n\nWelcome to our online clothing store! This website and its related services are provided to you based on the following terms of service:\n\n1. General Provisions\n\n1.1. Services Provided\n\nWe provide services for the sale of clothing through our online store. We guarantee the quality of our products and their compliance with the description on the website.\n\n1.2. Website Usage Terms\n\nBy using this website, you agree to comply with these terms of service. If you do not agree to these terms, please do not use our website.\n\n2. Purchases\n\n2.1. Placing Orders\n\nWhen placing an order on our website, you agree to provide accurate and complete information about yourself and your contact details. We are not responsible for any inaccuracies in the information provided that may lead to delays or the inability to fulfill the order.\n\n2.2. Prices and Payment\n\nThe prices for our products are listed on the website in Russian rubles. We reserve the right to change the prices of our products without prior notice. Payment for the order is made on the website using the payment systems listed on the payment page.\n\n2.3. Delivery\n\nWe provide delivery of orders throughout Russia. The cost and terms of delivery are indicated on the order confirmation page. We are not responsible for delayscaused by unforeseen circumstances such as weather conditions or strikes.\n\n3. Returns and Exchanges\n\n3.1. Returns\n\nYou can return a product purchased on our website in accordance with our return policy. The return of a product is possible only if it has not been used, retains its original appearance and packaging.\n\n3.2. Exchanges\n\nIf you wish to exchange a purchased product for a different size or model, please contact our customer support service. We will assist you with selecting a product and the exchange procedure.\n\n4. Confidentiality\n\n4.1. Processing of Personal Data\n\nWe process your personal data in accordance with our privacy policy. We do not disclose your data to third parties without your consent, except when necessary to fulfill your order or in accordance with the legislation of the Russian Federation.\n\n4.2. Use of Cookies\n\nWe use cookies to improve the performance of the website and provide you with more personalized services. Cookies do not contain your personal data and can be disabled in your browser settings.\n\n5. Limitation of Liability\n\n5.1. Limitation of Liability\n\nWe are not liable for any losses incurred by you as a result of using our website or its related services, except when such liability is explicitly provided for by the legislation of the Russian Federation.\n\n5.2. Limitation of Warranties\n\nWe do not provide any warranties, express orimplied, regarding the operation of the website or its related services, including but not limited to the warranty of fitness for a particular purpose. Some jurisdictions do not allow the limitation of warranties, so some of the above limitations may not apply to you.\n\n6. Changes to the Terms of Service\n\nWe reserve the right to change these terms of service at any time without prior notice. Please check this page regularly to stay informed of any changes.\n\n7. Contact Information\n\nIf you have any questions or comments regarding our terms of service, please contact us at support@ouronlineshop.com."
return(
    <div className="Terms">
        <InfoSample main={"Terms of service"} 
        info =
            {text.split("\n").map((line, i) => (
                <React.Fragment key={i}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
        />
    </div>
)
}

export default Terms;