const UserAvatar = ({ avatar, className = "" }) => {
    const appUrl = import.meta.env.VITE_APP_URL;
    const imageUrl = avatar
        ? `${appUrl}/storage/${avatar}`
        : `https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=338&ext=jpg&ga=GA1.1.2082370165.1716422400&semt=ais_user`;
    return (
        <div className="avatar">
            <div className={className}>
                <img src={imageUrl} alt="Profile Picture" />
            </div>
        </div>
    );
};

export default UserAvatar;
