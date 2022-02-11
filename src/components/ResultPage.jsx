const ResultPage = (result) => {


    return ( 
            <div className="container">
                <div className="row center-div preds">
                    <div className="col-12 center-div pred-cat"> Predicted Category: {result['category']}</div>
                </div>
                
            </div>
        );

}

export default ResultPage;