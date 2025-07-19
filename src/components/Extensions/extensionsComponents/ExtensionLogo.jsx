export function ExtensionLogo({ src, alt}) {
  const handleError = (e) => {
    e.target.src = "https://via.placeholder.com/60x60/666666/FFFFFF?text=?";
  };

  return (
    <img
      src={src}
      alt={alt}
      className="w-[60px] h-[60px] rounded-[10px]"
      onError={handleError}
    />
  );
}