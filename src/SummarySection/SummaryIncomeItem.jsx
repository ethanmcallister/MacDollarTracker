import './SummaryIncomeItem.css'

export default function SummaryIncomeItem(props) {
    const colorStyling = {color: props.color}
    
    let expensesStyling;
    if (props.name === "Total Expenses") {
        expensesStyling = {borderBottom: "1px solid white"};
    } else {
        expensesStyling = {};
    }

    return (
        <div style={expensesStyling} className='summary-income-item'>
            <h4 style={colorStyling} className="summary-income-item-name">{props.name}</h4>
            <p className="summary-income-item-amount">${props.amount}</p>
        </div>
    );
}
