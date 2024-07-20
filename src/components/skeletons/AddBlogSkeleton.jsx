const AddBlogSkeleton = () => (
    <div className="p-4 max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="h-8 w-48 bg-gray-300 rounded-md mb-4"></div>
        <div className="w-full sm:w-auto">
          <div className="h-10 bg-gray-300 rounded-md mb-6"></div>
        </div>
      </div>
      <div className="mb-4">
        <div className="h-6 bg-gray-300 rounded-md mb-2"></div>
        <div className="h-10 bg-gray-200 rounded-md"></div>
      </div>
      <div className="h-[500px] mb-4 bg-gray-200 animate-pulse rounded-md"></div>
      <div className="bg-gray-300 h-10 w-32 rounded-md"></div>
    </div>
  );
  
  export default AddBlogSkeleton;
  