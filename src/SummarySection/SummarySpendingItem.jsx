import './SummarySpendingItem.css'

export default function SummarySpendingItem(props) {

    return (
        <div className="summary-spending-item">
            <h4 className="summary-spending-item-name">{props.name}</h4>
            <p className="summary-spending-item-amount">$1000.00</p>
        </div>
    );
}
