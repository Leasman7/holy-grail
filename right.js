function Right(props) {
    return (<>
        <aside>
            <PlusMinus section="aside" handle={props.handle}/>
            <div className="section">Right:{props.data.right}</div>
            <Data data={props.data}/>
        </aside>
    </>);
}