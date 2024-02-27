const FileStructure = ({ data, level = 1 }) => {
  if (typeof data === "string") {
    return <div style={{ marginLeft: level * 20 }}>{data}</div>;
  }
  const entries = Object.entries(data);
  return (
    <div>
      {entries &&
        entries.map(([key, value]) => (
          <div>
            <div key={key} style={{ marginLeft: level * 20 }}>
              <strong>{key}:</strong>
              <FileStructure data={value} level={level + 1} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default FileStructure;