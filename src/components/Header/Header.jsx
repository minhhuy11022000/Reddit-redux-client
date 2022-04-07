import './Header.css';

const Header = ({ setEdit }) => {

    const handleEdit = () => {
        setEdit(true);
    }

    return (
        <>
            <header
                style={{
                    backgroundColor: '#ff9051',
                    backgroundImage: "linear-gradient(180deg, #ff9051 2%, #ff9051, 65%, #181818 100%"
                }}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>Edit</div>
                    <img className="info-ava" src="https://preview.redd.it/rrz3hmsxcll71.png?width=640&crop=smart&auto=webp&s=87cc5ed38d8f088ef9fffef7a4c5756b64309d6a" alt="" />
                    <div className="info-username">Minh Huy</div>
                    <div className="info-age"></div>
                    <div className="info-about">I'm a Software Engineer</div>
                </div>
            </header>
        </>
    );
}

export default Header;