import React from "react";
import "./TopBar.scss";
import logo from "../media/LOGO bright@2x.png";
import avatarImage from "../media/icons8-circled-user-male-skin-type-3-96.png";

function NotificationListGroupItem() {
    const [isNotificationItemSeen, setNotificationItem] = React.useState(false);

    return (
        <a href="/" type="button" className="list-group-item list-group-item-action" onClick={() => {
            setNotificationItem(true);
        }}>
            <div className="row">
                <div className="col-1">
                    <span id="secondary-unread-dot" style={{visibility: (isNotificationItemSeen && "hidden")}}/>
                </div>
                <div className="col-11 lh-sm fs-6">
                    <span className="text-dark text-break">
                        The material you requested for has been sent to you via mail. Please check your inbox.
                    </span>
                    <br/><span className="fw-lighter">5 days ago</span>
                </div>
            </div>
        </a>
    );
}

export default function TopBar() {
    const [isBellClicked, setBellClicked] = React.useState(false);

    const accountChangeOptions = (
        <ul className="list-group">
            <a href="/" type="button" className="list-group-item list-group-item-action">
                <i className="fas fa-user me-3"/>Profile
            </a>
            <a href="/" type="button" className="list-group-item list-group-item-action">
                <i className="fas fa-cog me-3"/>Account
            </a>
            <a href="/" type="button" className="list-group-item list-group-item-action">
                <i className="fas fa-sign-out-alt me-3"/>Logout
            </a>
        </ul>
    );

    return (
        <React.Fragment>
            <nav className="navbar navbar-light bg-light px-3 px-xl-5">
                <div className="container-xxl d-flex align-items-center">
                    <a href="/" className="navbar-brand position-relative me-auto" role="button">
                        <img src={logo} alt="jee carnot logo" height="50"/>
                    </a>
                    <div id="user-section">
                        <span className="notifications">
                            <i className={(isBellClicked ? "far" : "fas") + " fa-bell"} data-bs-toggle="collapse"
                               data-bs-target="#collapseExample1" aria-expanded="false"
                               aria-controls="collapseExample1" role="button" onClick={() => {
                                setBellClicked(true);
                            }}/>
                               <div className="collapse dropdown-menu-end mt-3" id="collapseExample1">
                                    <div className="card">
                                        <div className="card-header text-center fs-5">
                                            <i className="far fa-bell py-1"/>Notifications
                                        </div>
                                        <ul className="list-group">
                                            {NotificationListGroupItem()}
                                            {NotificationListGroupItem()}
                                            {NotificationListGroupItem()}
                                            <a href="/" type="button" className="list-group-item list-group-item-action
                                            text-center text-primary">See all notifications</a>
                                        </ul>
                                    </div>
                               </div>
                        </span>
                        <span className="mx-lg-5 mx-4" id="vertical-separator-line"/>
                        <span className="user-info">
                            <img src={avatarImage} alt="user avatar" className="avatar" data-bs-toggle="collapse"
                                 data-bs-target="#collapseExample2" aria-controls="collapseExample2" role="button"/>
                            <div className="collapse dropdown-menu-end mt-3" id="collapseExample2">
                                <div className="card">
                                    <div className="card-header fs-5">
                                        <div className="row">
                                            <div className="col-3 px-0">
                                                <img src={avatarImage} alt="user avatar" className="avatar"
                                                     data-bs-toggle="collapse" data-bs-target="#collapseExample2"
                                                     aria-controls="collapseExample2"/>
                                            </div>
                                            <div className="col-9 lh-sm fs-6 px-0">Swati Mishra<br/>
                                                <small className="fw-lighter">swati.mishra@gmail.com</small>
                                            </div>
                                        </div>
                                    </div>
                                    {accountChangeOptions}
                                </div>
                            </div>
                        </span>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}
