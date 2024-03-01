import Navbar from "./_components/navbar";

const AdminLayout = (
    {
        children
    }: {
        children: React.ReactNode
    }) => {

    return (
        <>
            <Navbar/>
            <div className="flex h-full w-full pt-16 z-50">
                {children}
            </div>
        </>
    )
}

export default AdminLayout;
