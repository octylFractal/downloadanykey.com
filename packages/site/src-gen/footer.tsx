import React from "react";

const FakeNotice: React.FC = () => {
    return <small>
        This site is fake. Please don't take it seriously.
    </small>;
};

const LicenseNotice: React.FC = () => {
    return <p>
        <a property="dct:title" rel="cc:attributionURL"
           href="https://downloadanykey.com">downloadanykey.com</a>
        {' by '}
        <a rel="cc:attributionURL dct:creator" property="cc:attributionName"
           href="https://octyl.net">
            Octavia Togami
        </a>
        {' '}is licensed under{' '}
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/?ref=chooser-v1"
           target="_blank" rel="license noopener noreferrer"
           style={{display: "inline-block"}}>
            CC BY-NC-SA 4.0
            {['CC', 'BY', 'NC', 'SA'].map(name =>
                <img style={{height: "22px !important", marginLeft: "3px", verticalAlign: "text-bottom"}}
                     src={`./img/license/${name.toLowerCase()}.svg`}
                     alt={name}
                     key={name}/>
            )}
        </a>
    </p>;
};

export const Footer: React.FC = () => {
    return <footer className="mt-auto py-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <FakeNotice/>
                </div>
                <div className="col">
                    <LicenseNotice/>
                </div>
            </div>
        </div>
    </footer>;
};
