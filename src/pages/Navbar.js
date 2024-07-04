import React, { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css'; // Ensure this file exists in the same directory

const Navbar = () => {
    const cursorRef = useRef(null);
    const sidebarRef = useRef(null);

    const handleHover = (e) => {
        const span = e.target.querySelector('span');
        if (!span) return;

        const { offsetX: x, offsetY: y } = e.nativeEvent;
        const move = 25;
        const xMove = (x / e.target.offsetWidth) * (move * 2) - move;
        const yMove = (y / e.target.offsetHeight) * (move * 2) - move;
        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') {
            span.style.transform = '';
        }
    };

    useEffect(() => {
        const animateCursor = (e) => {
            const cursor = cursorRef.current;
            const sidebar = sidebarRef.current;

            if (!cursor || !sidebar) return;

            const { clientX: x, clientY: y } = e;
            const { left, top, width, height } = sidebar.getBoundingClientRect();

            const isInSidebar = x >= left && x <= left + width && y >= top && y <= top + height;

            if (isInSidebar) {
                cursor.style.left = `${x}px`;
                cursor.style.top = `${y}px`;
                cursor.style.opacity = 1;
            } else {
                cursor.style.opacity = 0;
            }
        };

        window.addEventListener('mousemove', animateCursor);

        return () => {
            window.removeEventListener('mousemove', animateCursor);
        };
    }, []);

    return (
        <div className="sidebar" ref={sidebarRef}>
            <NavLink to="/home" activeClassName="active" className="hover-this" onMouseMove={handleHover} onMouseLeave={handleHover}>
                <span>Home</span>
            </NavLink>
            <NavLink to="/about" activeClassName="active" className="hover-this" onMouseMove={handleHover} onMouseLeave={handleHover}>
                <span>About</span>
            </NavLink>
            <NavLink to="/services" activeClassName="active" className="hover-this" onMouseMove={handleHover} onMouseLeave={handleHover}>
                <span>Services</span>
            </NavLink>
            <NavLink to="/contact" activeClassName="active" className="hover-this" onMouseMove={handleHover} onMouseLeave={handleHover}>
                <span>Contact</span>
            </NavLink>
            <div className="cursor" ref={cursorRef}></div>
        </div>
    );
};

export default Navbar;
