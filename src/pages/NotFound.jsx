import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Seo from '../components/Seo';

const NotFound = () => {
    return (
        <div style={{
            minHeight: '75vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px 20px',
            background: '#0b0b12',
            color: '#fff'
        }}>
            <Seo
                title="404 — Page Not Found | Acme Outdoors"
                description="The page you are looking for does not exist."
                path="/404"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                    maxWidth: '560px',
                    background: 'rgba(18, 18, 28, 0.8)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '50px 30px',
                    boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                    backdropFilter: 'blur(16px)'
                }}
            >
                <div style={{
                    fontSize: '5rem',
                    fontWeight: 800,
                    letterSpacing: '-2px',
                    color: '#eb5757',
                    lineHeight: 1,
                    marginBottom: '10px'
                }}>
                    404
                </div>
                <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '12px'
                }}>
                    Lost In The Wilderness?
                </div>
                <p style={{
                    color: '#9ca3af',
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    marginBottom: '32px'
                }}>
                    The trail you're following seems to have ended or doesn't exist. Let's get you back to camp safely.
                </p>

                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link
                        to="/"
                        style={{
                            padding: '12px 28px',
                            background: '#eb5757',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            boxShadow: '0 8px 20px rgba(235, 87, 87, 0.35)',
                            transition: 'all 0.25s'
                        }}
                    >
                        Back to Home
                    </Link>
                    <Link
                        to="/shop"
                        style={{
                            padding: '12px 28px',
                            background: 'rgba(255, 255, 255, 0.08)',
                            color: '#fff',
                            textDecoration: 'none',
                            borderRadius: '8px',
                            fontWeight: 600,
                            border: '1px solid rgba(255, 255, 255, 0.15)',
                            transition: 'all 0.25s'
                        }}
                    >
                        Browse Shop
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default NotFound;
