const AdminLayout = ({ children }) => {
    return (
        <div className="py-12 px-4">
            <div className="w-full mx-auto sm:px-2 lg:px-4">{children}</div>
        </div>
    );
};

export default AdminLayout;
