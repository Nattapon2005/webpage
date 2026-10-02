import React from 'react';
import { motion } from 'framer-motion';

const Responding = () => {
    return (
        <div style={{ paddingTop: '150px', paddingBottom: '100px', minHeight: '80vh', backgroundColor: '#f9f9f9' }}>
            <div className="container">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    style={{ background: '#fff', padding: '60px', borderRadius: '15px', boxShadow: '0 15px 40px rgba(0,0,0,0.08)' }}
                >
                    <h1 style={{ fontSize: '42px', marginBottom: '30px', color: '#222', fontWeight: '800' }}>
                        How We're Responding to COVID-19
                    </h1>
                    
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                        At Acme Outdoors, the health and safety of our customers and team members is our highest priority. 
                        We are closely monitoring the situation with COVID-19 and taking all necessary precautions to ensure a safe environment while continuing to serve your outdoor needs.
                    </p>
                    
                    <h2 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px', color: '#333', fontWeight: '700' }}>
                        Our Commitment to Safety
                    </h2>
                    
                    <ul style={{ fontSize: '18px', lineHeight: '2', color: '#555', marginLeft: '25px', marginBottom: '30px' }}>
                        <li><strong>Enhanced Cleaning:</strong> Rigorous sanitation procedures in all our facilities.</li>
                        <li><strong>Social Distancing:</strong> Strict measures implemented for all packaging and operations.</li>
                        <li><strong>Contactless Options:</strong> Safe delivery and pickup options available for all online orders.</li>
                        <li><strong>Team Support:</strong> Ensuring our staff has flexible working arrangements, paid leave, and protective gear.</li>
                    </ul>
                    
                    <h2 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px', color: '#333', fontWeight: '700' }}>
                        Shop Online with Confidence
                    </h2>
                    
                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                        Our online store remains open 24/7. We are working diligently with our shipping partners to ensure your orders arrive as quickly and safely as possible, though some minor delays may occasionally occur.
                    </p>

                    <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#555' }}>
                        We deeply appreciate your continued support during these challenging times. 
                        By supporting small businesses like ours, you help keep our team working. Stay safe, and we look forward to outfitting your next adventure.
                    </p>
                    
                    <div style={{ marginTop: '50px', borderTop: '2px solid #eee', paddingTop: '30px' }}>
                        <p style={{ fontSize: '16px', color: '#888', fontStyle: 'italic' }}>
                            - Jane & John Doe, Acme Outdoors Founders
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Responding;
