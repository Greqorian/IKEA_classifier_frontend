const ResultPage = (result) => {
    //{JSON.stringify(result)}

    return (

        <div className="info-frame">

            <div className="text-center">
                <h4>This product looks like:</h4>
                <h4>{result.result.category ? result.result.category : 'not exist'}</h4>
            </div>
            <div className="text-left">
                <p>There is % probability that this is:</p>
                {Object.keys(result.result.probs).map(key => {
                    if (result.result.probs[key] * 100 > 0) { 
                        return <p>{key} : {(result.result.probs[key] * 100).toFixed(0)} %</p> }
                })
                }


            </div>
        </div>


    );

}

export default ResultPage;