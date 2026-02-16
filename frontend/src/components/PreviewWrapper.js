import "./PreviewWrapper.css";

export default function PreviewWrapper({ children, scale = 1 }) {
    
  return (
    <div className="preview-outer">
      <div
        className="preview-inner"
        style={{
          transform: `scale(${scale})`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
