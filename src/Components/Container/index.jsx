const Container = ({ children, className = "" }) => {
    return <div className={`sm:py-9 sm:mx-12 mx-4 ${className}`}>{children}</div>;
};

export default Container;
