import {Footer} from "./footer.js";
import {Head} from "./head.js";
import {KeyPileGroup} from "./keypile.js";
import ReactDOMServer from "react-dom/server.js"
import React from "react";

const PageSection: React.FC = ({children}) => {
    return <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-5 d-flex flex-column align-items-center justify-content-center">
            {children}
        </div>
    </div>;
}

const NavBar: React.FC = () => {
    return <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">
                <img src="img/logo_48.png" alt="Logo" width="48" height="48"/>
            </a>
        </div>
    </nav>;
};

const GreeterSection: React.FC = () => {
    return <PageSection>
        <h1 className="display-5 fw-bold">Download <kbd>Any</kbd> Key!</h1>
        <div className="col-md-8 fs-4 text-center">
            <p>
                Tired of those games that ask you to "Press Any Key", but you don't have an <kbd>Any</kbd> Key?
                You've been stuck at those loading screens for all these years, desperately searching for a keyboard
                that will give you that <strong>blessèd</strong> plastic cap.
            </p>
            <p>
                Well, search no more! Our <em>software-only</em> solution will finally give you the key that you
                need to finally start popular games such as Borderlands 3, Microsoft Flight Simulator, and Mass
                Effect.
            </p>
        </div>
        <a className="btn btn-primary btn-lg" role="button" href="#downloads">Give it to me!</a>
    </PageSection>;
};

const DownloadSection: React.FC = () => {
    return <PageSection>
        <h1 id="downloads" className="display-5 fw-bold">Downloads</h1>
        <div className="col-md-8 fs-4">
            <KeyPileGroup/>
            <small>By the way, you'll need Blender to open these.</small>
        </div>
    </PageSection>;
};

export function render() {
    return "<!DOCTYPE html>\n" + ReactDOMServer.renderToStaticMarkup(
        <html lang="en">
        <Head/>
        <body className="min-vh-100 d-flex flex-column">
        <div className="min-vh-100">
            <NavBar/>
            <GreeterSection/>
        </div>
        <div className="min-vh-100">
            <DownloadSection/>
        </div>
        <Footer/>
        </body>
        </html>
    );
}
