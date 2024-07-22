const CutText = ({
    children,
    className="",
  }) => {
    return (
      <span
        className={`block overflow-hidden text-ellipsis line-clamp-2 cut-text ${className}`}
      >
        {children}
      </span>
    );
  };
  export default CutText;
  