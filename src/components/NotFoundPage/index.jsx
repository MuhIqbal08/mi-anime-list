import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-96 mt-32 gap-2">
        <h1 className="font-bold text-3xl text-accent">Error 404 : Not Found</h1>
        <Link to={'/'} className="font-semibold underline text-xl text-primary hover:text-accent transition-all">Go To Homepage</Link>
      <div className="flex justify-center items-center">
      </div>
    </div>
  );
};

export default NotFoundPage;
