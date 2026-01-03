export const FullLoader = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center text-sm">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
        <p>{text}</p>
      </div>
    </div>
  );
};
