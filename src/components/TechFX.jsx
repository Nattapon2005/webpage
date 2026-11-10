import { useEffect, useRef } from 'react';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* --------------------------------------------------------------------------
   Soft light layer
   Minimal ambient washes that sit behind the page content.
   -------------------------------------------------------------------------- */

const PointerLight = () => {
    const lightRef = useRef(null);

    useEffect(() => {
        if (prefersReducedMotion()) return undefined;
        if (!window.matchMedia('(pointer: fine)').matches) return undefined;

        const light = lightRef.current;
        if (!light) return undefined;

        let targetX = window.innerWidth * 0.7;
        let targetY = window.innerHeight * 0.3;
        let currentX = targetX;
        let currentY = targetY;
        let frame = 0;

        const handleMove = (event) => {
            targetX = event.clientX;
            targetY = event.clientY;
        };

        const render = () => {
            currentX += (targetX - currentX) * 0.06;
            currentY += (targetY - currentY) * 0.06;
            light.style.transform = `translate3d(${currentX - 260}px, ${currentY - 260}px, 0)`;
            frame = window.requestAnimationFrame(render);
        };

        render();
        window.addEventListener('pointermove', handleMove, { passive: true });

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('pointermove', handleMove);
        };
    }, []);

    return <div ref={lightRef} className="tech-pointer-light" aria-hidden="true" />;
};

const TechFX = () => {
    return (
        <>
            <div className="tech-backdrop" aria-hidden="true">
                <div className="tech-aurora tech-aurora--red" />
                <div className="tech-aurora tech-aurora--cyan" />
                <div className="tech-aurora tech-aurora--warm" />
            </div>
            <PointerLight />
        </>
    );
};

export default TechFX;
