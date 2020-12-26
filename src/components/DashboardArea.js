import React from "react";
import "./DashboardArea.scss";

export default function DashboardArea() {
    const leftSideBarStudent = (
        <React.Fragment>
            <div className="left-bar-item py-3 active" role="button">
                <i className="fas fa-home me-2 me-lg-3"/>home
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-book me-2 me-lg-3"/>study material
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-newspaper me-2 me-lg-3"/>blog
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-comments me-2 me-lg-3"/>feedback
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-question me-2 me-lg-3"/>faq
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-info-circle me-2 me-lg-3"/>help and support
            </div>
        </React.Fragment>
    );

    const leftSideBarMentor = (
        <React.Fragment>
            <div className="left-bar-item py-3 active" role="button">
                <i className="fas fa-home me-2 me-lg-3"/>home
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-user-graduate me-2 me-lg-3"/>your students
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-book me-2 me-lg-3"/>material requests
            </div>
            <div className="left-bar-item py-3" role="button">
                <i className="fas fa-money-check me-2 me-lg-3"/>payment history
            </div>
        </React.Fragment>
    );

    const [isHomeActive, setHome] = React.useState(true);

    const quoteComponent = (
        <React.Fragment>
            <p className="h5 text-center text-secondary fw-bolder">Quote of the day</p>
            < div id="quote-of-the-day" className="px-lg-2 py-3">
                < p className="text-start text-secondary"><i className="fas fa-quote-left"/></p>
                <p className="text-primary text-center text-break text-wrap">
                    Search for role models you can look up to and people who take an interest in your career. But
                    here's
                    an important warning: you don't have to have mentors who look like you. Had I been waiting for a
                    black, female Soviet specialist mentor, I would still be waiting. Most of my mentors have been
                    old
                    white men, because they were the ones who dominated my field.
                </p>
                < p className="text-end text-secondary"><i className="fas fa-quote-right"/></p>
            </div>
            <p className="text-center text-secondary fw-bolder">----------</p>
            <p className="text-center text-secondary text-capitalize">Albert Einstein</p>
        </React.Fragment>
    );

    const mentorInfoComponent = (
        <React.Fragment>
            <div className="bg-primary text-light text-capitalize text-center pt-0 mt-0">your mentor</div>
            <div className="py-3">
                <p className="text-wrap text-break">
                    <span className="text-primary">Name: </span>
                    <span className="text-secondary">Albert Einstein</span>
                </p>
                <p className="text-wrap text-break">
                    <span className="text-primary">Email: </span>
                    <span className="text-secondary">Albert.Einstein@gmail.com</span>
                </p>
                <p className="text-wrap text-break">
                    <span className="text-primary">Phone: </span>
                    <span className="text-secondary">9876543210</span>
                </p>
            </div>
            <div className="align-items-center"><button className="btn btn-primary text-capitalize" style={{borderRadius: "50%"}}>call mentor</button></div>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <div className="row">
                <div className="col-3 col-xl-2 left-side-bar bg-primary text-uppercase pe-0 pt-5" onClick={() => {
                    setHome(false);
                }}>
                    {leftSideBarStudent}
                    {leftSideBarMentor}
                </div>
                <div className="col-6 col-xl-8 main-stage-area">
                    main stage area
                </div>
                <div className="col-3 col-xl-2 bg-light py-5">
                    {isHomeActive ? quoteComponent : mentorInfoComponent}
                </div>
            </div>
        </React.Fragment>
    );
}
