const Styling = ({Image}) => {
    const { src, title}=Image;
   return (
       <>
        <div className="characters">
            <div className="character">
                <img className="avatar" src={src} alt="avatar"/>
                <p className="avatar-title">{title.toUpperCase()}</p>
            </div>
        </div>
    </>
    )
}
export default Styling



