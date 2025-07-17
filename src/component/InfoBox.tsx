
type InfoBoxType = {
    mode: 'hint' | 'warning' | 'none';
};

const InfoBox = ({ mode}: InfoBoxType) => {
    if (mode == 'warning') {
        return (
            <aside className="infobox infobox-warning">
                <h2>Today is a busy day! Keep up the good work!</h2>
            </aside>
        )

    } else if (mode == 'hint') {
        return (
            <aside className="infobox infobox-hint">
                <h2>No tasks for today yet. </h2>
                
            </aside>
        )
    } else {
        return (
            <aside className="infobox infobox-none">
                <h2>Here are your tasks for today: </h2>
            </aside>
        )
    }
}

export default InfoBox;