import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import Seo from '../components/Seo';
import '../styles/Checkout.scss';

const Checkout = () => {
    const { cartItems, cartTotal, clearCart } = useCart();

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
    });

    const [paymentMethod, setPaymentMethod] = useState('card');
    const [cardData, setCardData] = useState({
        number: '',
        expiry: '',
        cvc: '',
    });

    const [promoCode, setPromoCode] = useState('');
    const [discount, setDiscount] = useState(0);
    const [appliedPromo, setAppliedPromo] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderSuccess, setOrderSuccess] = useState(null);

    const shippingFee = cartTotal > 100 || appliedPromo === 'FREESHIP' ? 0 : 15.00;
    const finalTotal = Math.max(0, cartTotal - discount + shippingFee);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCardChange = (e) => {
        const { name, value } = e.target;
        setCardData(prev => ({ ...prev, [name]: value }));
    };

    const handleApplyPromo = (e) => {
        e.preventDefault();
        const code = promoCode.trim().toUpperCase();
        if (!code) return;

        if (code === 'ACME10') {
            const disc = cartTotal * 0.10;
            setDiscount(disc);
            setAppliedPromo('ACME10');
            toast.success('Promo code ACME10 applied! 10% OFF', { icon: '🎉' });
        } else if (code === 'FREESHIP') {
            setDiscount(0);
            setAppliedPromo('FREESHIP');
            toast.success('Promo code FREESHIP applied! Free Shipping', { icon: '🚚' });
        } else {
            toast.error('Invalid promo code. Try ACME10 or FREESHIP');
        }
    };

    const handleSubmitOrder = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.address) {
            toast.error('Please complete all required shipping fields');
            return;
        }

        if (paymentMethod === 'card' && (!cardData.number || !cardData.expiry || !cardData.cvc)) {
            toast.error('Please enter complete card details');
            return;
        }

        setIsSubmitting(true);

        setTimeout(() => {
            const orderId = 'ACME-' + Math.floor(100000 + Math.random() * 900000);
            setOrderSuccess({
                orderId,
                total: finalTotal,
                items: [...cartItems],
                shippingAddress: formData
            });
            clearCart();
            setIsSubmitting(false);
            toast.success('Order placed successfully!', { icon: '🎉', duration: 5000 });
        }, 1200);
    };

    return (
        <div className="checkout-page">
            <Seo
                title="Checkout — Acme Outdoors"
                description="Secure checkout for your Acme Outdoors adventure gear."
                path="/checkout"
            />

            <div className="checkout-container">
                {orderSuccess ? (
                    <motion.div 
                        className="order-success"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="success-icon">✓</div>
                        <h2>Thank You For Your Order!</h2>
                        <div className="order-badge">Order ID: #{orderSuccess.orderId}</div>
                        <p>
                            We have received your order for <strong>{orderSuccess.items.length} item(s)</strong> totaling <strong>${orderSuccess.total.toFixed(2)} USD</strong>. 
                            A confirmation receipt has been sent to <strong>{orderSuccess.shippingAddress.email}</strong>.
                        </p>
                        <p>
                            Your items will be packed with care and shipped to: <br />
                            <strong>{orderSuccess.shippingAddress.fullName}</strong> — {orderSuccess.shippingAddress.address}, {orderSuccess.shippingAddress.city} {orderSuccess.shippingAddress.zip}
                        </p>
                        <Link to="/shop" className="back-home-btn">Continue Shopping</Link>
                    </motion.div>
                ) : cartItems.length === 0 ? (
                    <div className="empty-checkout">
                        <h2>Your Cart is Empty</h2>
                        <p>You don't have any gear in your cart yet. Visit our shop to gear up!</p>
                        <Link to="/shop" className="shop-btn">Explore Shop</Link>
                    </div>
                ) : (
                    <>
                        <div className="checkout-header">
                            <motion.h1 
                                initial={{ opacity: 0, y: -15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                Secure Checkout
                            </motion.h1>
                            <p>Complete your purchase to outfit your next adventure.</p>
                        </div>

                        <form onSubmit={handleSubmitOrder}>
                            <div className="checkout-grid">
                                {/* Left Column: Customer details & payment */}
                                <div className="checkout-form-column">
                                    <div className="checkout-card">
                                        <h2>
                                            <span className="step-num">1</span>
                                            Customer Information
                                        </h2>
                                        <div className="form-group">
                                            <label>Email Address *</label>
                                            <input 
                                                type="email" 
                                                name="email"
                                                required
                                                placeholder="adventurer@example.com"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Phone Number</label>
                                            <input 
                                                type="tel" 
                                                name="phone"
                                                placeholder="(405) 555-0199"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="checkout-card">
                                        <h2>
                                            <span className="step-num">2</span>
                                            Shipping Address
                                        </h2>
                                        <div className="form-group">
                                            <label>Full Name *</label>
                                            <input 
                                                type="text" 
                                                name="fullName"
                                                required
                                                placeholder="Jane Doe"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Street Address *</label>
                                            <input 
                                                type="text" 
                                                name="address"
                                                required
                                                placeholder="123 Mountain Trail Rd"
                                                value={formData.address}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="form-group">
                                                <label>City *</label>
                                                <input 
                                                    type="text" 
                                                    name="city"
                                                    required
                                                    placeholder="Oklahoma City"
                                                    value={formData.city}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>State / Region</label>
                                                <input 
                                                    type="text" 
                                                    name="state"
                                                    placeholder="OK"
                                                    value={formData.state}
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Postal / ZIP Code *</label>
                                            <input 
                                                type="text" 
                                                name="zip"
                                                required
                                                placeholder="73129"
                                                value={formData.zip}
                                                onChange={handleInputChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="checkout-card">
                                        <h2>
                                            <span className="step-num">3</span>
                                            Payment Method
                                        </h2>
                                        <div className="payment-options">
                                            <div 
                                                className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('card')}
                                            >
                                                <div className="pay-icon">💳</div>
                                                <div className="pay-title">Credit Card</div>
                                            </div>
                                            <div 
                                                className={`payment-option ${paymentMethod === 'promptpay' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('promptpay')}
                                            >
                                                <div className="pay-icon">📱</div>
                                                <div className="pay-title">PromptPay / QR</div>
                                            </div>
                                            <div 
                                                className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}
                                                onClick={() => setPaymentMethod('cod')}
                                            >
                                                <div className="pay-icon">📦</div>
                                                <div className="pay-title">Cash on Delivery</div>
                                            </div>
                                        </div>

                                        {paymentMethod === 'card' && (
                                            <div className="card-fields">
                                                <div className="form-group">
                                                    <label>Card Number</label>
                                                    <input 
                                                        type="text" 
                                                        name="number"
                                                        placeholder="4242 •••• •••• 4242"
                                                        maxLength={19}
                                                        value={cardData.number}
                                                        onChange={handleCardChange}
                                                    />
                                                </div>
                                                <div className="form-row">
                                                    <div className="form-group">
                                                        <label>Expiry Date</label>
                                                        <input 
                                                            type="text" 
                                                            name="expiry"
                                                            placeholder="MM/YY"
                                                            maxLength={5}
                                                            value={cardData.expiry}
                                                            onChange={handleCardChange}
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label>CVC / CVV</label>
                                                        <input 
                                                            type="text" 
                                                            name="cvc"
                                                            placeholder="123"
                                                            maxLength={4}
                                                            value={cardData.cvc}
                                                            onChange={handleCardChange}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {paymentMethod === 'promptpay' && (
                                            <div style={{ textAlign: 'center', padding: '16px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
                                                <div style={{ fontSize: '3rem', marginBottom: '8px' }}>📲</div>
                                                <p style={{ color: '#fff', fontWeight: 600, margin: '0 0 6px' }}>Scan PromptPay QR Code</p>
                                                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>A secure QR code will be generated upon submitting your order.</p>
                                            </div>
                                        )}

                                        {paymentMethod === 'cod' && (
                                            <div style={{ padding: '16px', background: 'rgba(0,0,0,0.4)', borderRadius: '8px' }}>
                                                <p style={{ color: '#fff', fontWeight: 600, margin: '0 0 6px' }}>Pay Upon Delivery</p>
                                                <p style={{ color: '#9ca3af', fontSize: '0.85rem', margin: 0 }}>Please prepare exact cash when your package arrives at your door.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Right Column: Order summary */}
                                <div className="checkout-summary-column">
                                    <div className="checkout-card order-summary">
                                        <h2>Order Summary ({cartItems.length})</h2>

                                        <div className="summary-items">
                                            {cartItems.map((item) => (
                                                <div className="summary-item" key={item.id}>
                                                    <img src={item.image} alt={item.title} />
                                                    <div className="item-meta">
                                                        <h4>{item.title}</h4>
                                                        <p>Qty: {item.quantity}</p>
                                                    </div>
                                                    <div className="item-price">
                                                        ${(item.priceValue * item.quantity).toFixed(2)}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="promo-box">
                                            <input 
                                                type="text" 
                                                placeholder="Promo code (e.g. ACME10)"
                                                value={promoCode}
                                                onChange={(e) => setPromoCode(e.target.value)}
                                            />
                                            <button type="button" onClick={handleApplyPromo}>Apply</button>
                                        </div>

                                        <div className="summary-totals">
                                            <div className="total-row">
                                                <span>Subtotal</span>
                                                <span>${cartTotal.toFixed(2)} USD</span>
                                            </div>
                                            {discount > 0 && (
                                                <div className="total-row">
                                                    <span>Discount ({appliedPromo})</span>
                                                    <span className="discount-val">-${discount.toFixed(2)} USD</span>
                                                </div>
                                            )}
                                            <div className="total-row">
                                                <span>Shipping</span>
                                                <span>{shippingFee === 0 ? <strong style={{ color: '#10b981' }}>FREE</strong> : `$${shippingFee.toFixed(2)} USD`}</span>
                                            </div>
                                            <div className="total-row grand-total">
                                                <span>Total</span>
                                                <span>${finalTotal.toFixed(2)} USD</span>
                                            </div>
                                        </div>

                                        <button 
                                            type="submit" 
                                            className="submit-order-btn"
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Processing Order...' : `Complete Order — $${finalTotal.toFixed(2)}`}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Checkout;
