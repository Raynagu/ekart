const Button = ({ children, ...otherProps }) => {
    return (
        <button className="btn btn-primary" {...otherProps}>
            {children}
        </button>
    );
};

export default Button;
