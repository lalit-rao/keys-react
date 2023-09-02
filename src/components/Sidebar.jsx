import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="main-sidebar">
            <div className="bar">
                <div className="bar-box bar-box1">
                    <a className="color-non-deficit" href="/a">Resumes</a>
                </div>
                <div className="bar-box bar-main-box bar-box2 special-box">
                    <a className="color-non-deficit" href="/a">> Resrank </a>
                </div>
                <div className="bar-box bar-box2">
                    <a className="color-deficit" href="/a">-- Upload Resumes </a>
                </div>
                <div className="bar-box bar-box2">
                    <a className="color-deficit" href="/a">-- Job Description </a>
                </div>
                <div className="bar-box bar-box2">
                    <a className="color-deficit" href="/a">-- Search </a>
                </div>
                <div className="bar-box bar-main-box bar-box2 special-box">
                    <a className="color-non-deficit" href="/a">> Resnalyze </a>
                </div>
                <div className="bar-box bar-box2">
                    <a className="color-deficit" href="/a">-- List </a>
                </div>
                <div className="bar-box bar-box2">
                    <a className="color-deficit" href="/a">-- Search </a>
                </div>
                <div className="bar-box bar-box2 special-box">
                    <a className="color-non-deficit" href="/a">> GPT Interviewer </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;