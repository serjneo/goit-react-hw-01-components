import PropTypes from "prop-types";
import s from "./Statistics.module.css"

function Statistics({ title, stats }) {
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    function getRandomColor() {
        return `rgb(${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)}, ${randomIntegerFromInterval(0, 255)})`
    }
    return (
        <section className={s.statistics}>
            <h2 className={s.title}>{title}</h2>

            <ul className={s.statList}>
                {stats.map(data => (
                    <li key={data.id} className={s.item} style={{backgroundColor: getRandomColor()}}>
                    <span className={s.label}>{data.label}</span>
                    <span className={s.percentage}>{data.percentage}%</span>
                    </li>))}
            </ul>
        </section>)
}

Statistics.defaultProps = {
    title: "Upload stats",
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),

}

export default Statistics;