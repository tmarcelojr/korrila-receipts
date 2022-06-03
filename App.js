class App extends React.Component {
    state = {
        receipts: receipts
    }

    handleFilter = (e) => {
        const filteredReceipts = receipts.filter(receipt => receipt.person.toLowerCase().includes(e.target.value.toLowerCase()))
        this.setState({
            receipts: filteredReceipts
        })
    }

    isPaid = (e, clickedReceipt) => {
        console.log('clicked', clickedReceipt)
        const paidReceiptIndex = this.state.receipts.indexOf(clickedReceipt)
        console.log(paidReceiptIndex)
        const unpaidReceipts = this.state.receipts.filter(receipt => receipt != this.state.receipts[paidReceiptIndex])
        this.setState({
            receipts: unpaidReceipts
        })
    }

    render() {
        return (
            <div id='wrapper'>
                <h1>Korilla Unpaid Receipts</h1>
                <small>Filter through receipts using search field.</small>
                <small>Click on receipt to mark is as paid and remove from list.</small>
                <input type="text" onChange={this.handleFilter}/>
                <div id='receipt-container'>
                    {
                        this.state.receipts.map(receipt => {
                            return (
                                <div onClick={(e) => this.isPaid(e, receipt)}>
                                    {!receipt.paid && <Receipt receipt={receipt} />}
                                    {/* {
                                        receipt.paid
                                        ? ''
                                        : <Receipt receipt={receipt} />
                                    } */}
                                </div>
                            )
                        })
                    }
                </div>
            </ div>

        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)