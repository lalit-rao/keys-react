import './Layout.css';

const Layout = () => {
    return (
        <div className="main-layout">
            <h1 className="heading-layout">RESRANK</h1>
            <div className="main-bar-layout">
                <div className="bar-layout-1">
                    <p className="bar-layout-text">Upload</p>
                    <p className="bar-layout-text">Job Description</p>
                    <p className="bar-layout-text">Search</p>
                </div>
                <div className="bar-layout-2">
                    <p className="bar-layout-text">Filter</p>
                    <p className="bar-layout-text">Sort</p>
                </div>
            </div>
            <div className="box-layout">
                <div className="small-box-layout">
                    <div className="small-box-layout-rectangle">
                        <p className="small-box-layout-rectangle-text">Upload</p>
                    </div>
                    <div className="small-box-layout-rectangle-2">
                        <p className="small-box-layout-rectangle-2-text">Drag and drop your files to Upload</p>
                    </div>
                    <div className="small-box-layout-rectangle-3">
                        <p className="small-box-layout-rectangle-text-3">Select Files</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Layout;