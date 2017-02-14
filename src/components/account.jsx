class Account extends React.Component {
    saque() {

    }

    depositar() {

    }

    render() {
        let props = this.props;

        return (
            <section className="account">
                <div className="account__header">
                    <div className="account__header__title">
                        {props.account.title + ' (' + props.account.percent + '%)'}
                    </div>
                    <div className="account__header__options"></div>
                </div>
                <div className="account__body">
                    <div className="account__body__display">
                        <div className="account__body__display__current">
                            <div className="account__body__display__label">saldo mês atual:</div>
                            <div className="account__body__display__number">R$ {props.account.total.toFixed(2)}</div>
                        </div>
                        <div className="account__body__display__accumulated">
                            <div className="account__body__display__label">saldo acumulado:</div>
                            <div className="account__body__display__number is-smaller">R$ {props.account.total.toFixed(2)}</div>
                        </div>
                    </div>

                    <div className="account__body__actions">
                        <button type="button" className="btn is-raised">Adicionar</button>
                        <button type="button" className="btn is-raised is-accent">Subtrair</button>
                    </div>
                </div>
            </section>
        )
    }
}
