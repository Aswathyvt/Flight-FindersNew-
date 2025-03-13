export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variantStyles = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-100",
    ghost: "bg-transparent hover:bg-gray-100",
  };

  const styles = `${baseStyles} ${variantStyles[variant] || ""} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
