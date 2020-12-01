import React from "react";

interface INotificationProps {
    message?: string;
}

const Notification: React.FC<INotificationProps> = ({ message }) => {
    if (message === null) {
        return null;
    }

    return <div className="error">{message}</div>;
};

export default Notification;
