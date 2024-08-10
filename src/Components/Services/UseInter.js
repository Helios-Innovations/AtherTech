// src/hooks/useIntersectionObserver.js
import { useEffect, useRef, useCallback } from 'react';

const UseInter = (options) => {
    const elementsRef = useRef([]);
    const observerRef = useRef(null);

    const setElements = useCallback((nodes) => {
        elementsRef.current = nodes;
    }, []);

    useEffect(() => {
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observerRef.current.unobserve(entry.target); // Stop observing once the element is visible
                }
            });
        }, options);

        elementsRef.current.forEach(element => {
            observerRef.current.observe(element);
        });

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [options]);

    return setElements;
};

export default UseInter;
