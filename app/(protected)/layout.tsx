const ProtectedLayout = ({ 
    children
  }: { 
    children: React.ReactNode
  }) => {
    return ( 
      <div className="h-full flex">
        {children}
      </div>
     );
  }
   
  export default ProtectedLayout;