import { createContext, useContext, useState } from "react";


const Notification = ({notificacionData}) => {
    const notificationStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "green",
      color: "white",
      padding: 10,
      borderRadius: 5,
      textAlign: "center",
      maxWidth: 300,
    }

    return (
      <article style={notificationStyle}>
        <h3>Success</h3>
        { notificacionData.text }

      </article>
    )
  }

export const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [notificacionData, setNotificationData] = useState({
        type: "Success",
        text: ""
    })

    const showNotification = (type, text) => {
        setNotificationData({type, text})
        setTimeout(() => {
          setNotificationData(prev => ({ ...prev, text: ""}))
        }, 3000)

    }
    return (
        <NotificationContext.Provider value={{ showNotification }}>
            {notificacionData.text && <Notification notificacionData={notificacionData} /> }
            { children }

        </NotificationContext.Provider>
    )
}

