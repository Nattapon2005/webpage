import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const Responding = () => {
    return (
        <div className="responding-page">
            <Seo
                title="Our COVID-19 Response"
                description="How Acme Outdoors is responding to COVID-19 with enhanced cleaning, social distancing, contactless delivery and team support."
                path="/responding"
            />
            <div className="container">
                <motion.div
                    className="responding-doc"
                    initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
                    animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <h1>
                        How We're Responding to COVID-19
                    </h1>

                    <p>
                        At Acme Outdoors, the health and safety of our customers and team members is our highest priority.
                        We are closely monitoring the situation with COVID-19 and taking all necessary precautions to ensure a safe environment while continuing to serve your outdoor needs.
                    </p>

                    <h2>
                        Our Commitment to Safety
                    </h2>

                    <ul>
                        <li><strong>Enhanced Cleaning:</strong> Rigorous sanitation procedures in all our facilities.</li>
                        <li><strong>Social Distancing:</strong> Strict measures implemented for all packaging and operations.</li>
                        <li><strong>Contactless Options:</strong> Safe delivery and pickup options available for all online orders.</li>
                        <li><strong>Team Support:</strong> Ensuring our staff has flexible working arrangements, paid leave, and protective gear.</li>
                    </ul>

                    <h2>
                        Shop Online with Confidence
                    </h2>

                    <p>
                        Our online store remains open 24/7. We are working diligently with our shipping partners to ensure your orders arrive as quickly and safely as possible, though some minor delays may occasionally occur.
                    </p>

                    <p>
                        We deeply appreciate your continued support during these challenging times.
                        By supporting small businesses like ours, you help keep our team working. Stay safe, and we look forward to outfitting your next adventure.
                    </p>

                    <div className="responding-signoff">
                        <p>
                            - Jane &amp; John Doe, Acme Outdoors Founders
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Responding;
