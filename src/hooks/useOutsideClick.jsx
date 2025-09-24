import { useEffect, useRef } from "react";

const useOutsideClick = (callback) => {
    const ref = useRef();

    // execute this whenever the component is used
    useEffect(() => {
        const handleClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };

        document.addEventListener('click', handleClick);

        // cleanup
        return () => {
            document.removeEventListener('click', handleClick);
        }
    }, [ref]);

    return ref;
};

export default useOutsideClick;
