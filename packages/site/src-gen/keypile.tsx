import React from "react";

interface KeyPileCardProps {
    imageUrl: string;
    imageAlt: string;
    title: string;
    flavorText: string;
    downloadUrl: string;
}

const KeyPileCard: React.FC<KeyPileCardProps> = ({imageUrl, imageAlt, title, flavorText, downloadUrl}) => {
    return <div className="col-sm-3">
        <div className="card border-primary h-100">
            <img src={imageUrl} className="card-img-top border-bottom border-secondary" alt={imageAlt}/>
            <div className="card-body d-flex flex-column">
                <h3 className="card-title">{title}</h3>
                <p className="card-text">{flavorText}</p>
                <a href={downloadUrl} className="btn btn-primary mt-auto" role="button">Download</a>
            </div>
        </div>
    </div>;
};

export const KeyPileGroup: React.FC = () => {
    return <div className="container rounded bg-dark p-3">
        <div className="card-group">
            <div className="row">
                <KeyPileCard
                    imageUrl="./img/anykeypile1.png"
                    imageAlt="A single Any key."
                    title="Any Key"
                    flavorText="Our Any Key starter pack. Good for launching one game."
                    downloadUrl="./downloads/AnyKeyPile1.blend"/>
                <KeyPileCard
                    imageUrl="./img/anykeypile2.png"
                    imageAlt="Five Any keys."
                    title="Any Keys (5)"
                    flavorText="Five Any Keys, for those who love our product."
                    downloadUrl="./downloads/AnyKeyPile2.blend"/>
                <KeyPileCard
                    imageUrl="./img/anykeypile3.png"
                    imageAlt="Twenty-Five Any keys."
                    title="Any Keys (25)"
                    flavorText="Twenty-Five Any Keys, providing nearly unlimited game-starting capability."
                    downloadUrl="./downloads/AnyKeyPile3.blend"/>
                <KeyPileCard
                    imageUrl="./img/anykeypile4.png"
                    imageAlt="One-Hundred Any keys."
                    title="Any Keys (100)"
                    flavorText="A family-sized pack of Any Keys. For your family of one."
                    downloadUrl="./downloads/AnyKeyPile4.blend"/>
            </div>
        </div>
    </div>;
};
