const Results = ({
  errors,
  accuracyPercentage,
  total,
  className,
}: {
  errors: number;
  accuracyPercentage: number;
  total: number;
  className: string;
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  return (
    <ul
      className={`flex flex-col items-center text-primary space-y-3 ${className}`}
    >
      <li className="text-xl font-smaibold">Result</li>
      <li>Accuracy: {accuracyPercentage}</li>
      <li className="text-red-100">Errors: {errors}</li>
      <li>Type: {total}</li>
    </ul>
  );
};

export default Results;
