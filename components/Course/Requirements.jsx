export default function Requirements({ requirements }) {
  return (
    <div className="my-12 text-white">
      <h2
        style={{ borderBottom: "2px #0F969C solid" }}
        className="text-3xl pb-4"
      >
        Requirements
      </h2>
      <ol className="list-decimal pl-4 mt-4">
        {requirements?.map((requirement) => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ol>
    </div>
  );
}
