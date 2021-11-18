import React from "react";
import ServiceBGC from "../src/components/common/ServiceBGC";
import ServicePricingSection from "../src/components/common/ServicePricingSection";
import ServiceProcessSection from "../src/components/common/ServiceProcessSection";
import Service2Area from "../src/components/Service-2/Service2Area";
import Service2SkillArea from "../src/components/Service-2/Service2SkillArea";
import Footer2 from "../src/layout/Footer/Footer2";
import Header1 from "../src/layout/Header/Header1";

const service2 = () => {
    return (
        <>
            {/*====== Header Start ======*/}
            <Header1 />
            {/*====== Header End ======*/}
            {/*====== Breadcrumb section Start ======*/}
            <ServiceBGC />
            {/*====== Breadcrumb section End ======*/}
            {/*====== Service Area Start ======*/}
            <Service2Area />
            {/*====== Service Area End ======*/}
            {/*====== Process Area Start ======*/}
            <ServiceProcessSection />
            {/*====== Process Area End ======*/}
            {/*====== Skill area Start ======*/}
            <Service2SkillArea />
            {/*====== Skill area End ======*/}
            {/*====== Pricing Section Start ======*/}
            <ServicePricingSection />
            {/*====== Pricing Section End ======*/}
            {/*====== Footer Start ======*/}
            <Footer2 />
            {/*====== Footer End ======*/}
        </>
    );
};

export default service2;
