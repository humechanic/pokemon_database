import { useEffect, useRef } from "react";

export default (ref, isLoading, callback) => {
    const observer = useRef();

    useEffect(() => {
        if (isLoading) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        const cb = (entries, _) => {
            if (entries[0].isIntersecting) {
                callback();
            }
        };
        observer.current = new IntersectionObserver(cb);
        if (ref.current) observer.current.observe(ref.current);
    }, [isLoading]);
};
