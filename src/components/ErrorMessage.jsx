const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center text-red-500 font-bold">
      {message}
    </div>
  );
};

export default ErrorMessage;