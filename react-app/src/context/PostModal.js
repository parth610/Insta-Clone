// frontend/src/context/Modal.js
import React, { useContext, useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import SinglePageView from '../components/SinglePageView/SinglePageView';
import './PostModal.css';

const PostModalContext = React.createContext();

export function PostModalProvider({ children }) {
    const modalRef = useRef();
    const [value, setValue] = useState();

    useEffect(() => {
        setValue(modalRef.current);
    }, [])

    return (
        <>
            <PostModalContext.Provider value={value}>
                {children}
            </PostModalContext.Provider>
            <div ref={modalRef} />
        </>
    );
}

export function PostModal({ onClose, children }) {
    const modalNode = useContext(PostModalContext);
    if (!modalNode) return null;

    return ReactDOM.createPortal(
        <div id="postModal">
            <div id="postModal-background" onClick={onClose} />
            <div id="postModal-content">
                {children}
            </div>
            <div className="postModal__commentSection">
                <SinglePageView />
            </div>
        </div>,
        modalNode
    );
}
