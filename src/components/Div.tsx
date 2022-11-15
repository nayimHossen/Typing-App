const Div = ({ total, type }: { total: any; type: string }) => {
  return (
    <div className="w-full bg-secondary mb-3 h-28 rounded-lg text-base-100 flex items-center justify-center">
      <div>
        <h2>{type}</h2>
        <p>{total}</p>
      </div>
    </div>
  );
};

export default Div;
