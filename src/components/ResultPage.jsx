const ResultPage = (result) => {
//{JSON.stringify(result)}

    return ( 
            
                <div className="preds">
                   
                    <div className="pred-cat"> 
                        Predicted Category: 
                        
                        { result.result.category ?? 'not exist'} 
                    </div>
                </div>
                
           
        );

}

export default ResultPage;