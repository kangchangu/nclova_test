import { useEffect, useState } from "react";




const Fetch = () => {
    const [isLoading , setIsLoading] = useState(true);
    const [data , setData] = useState({});


    const mockFetch = () => {
        new Promise(resolve => {
            setTimeout(
              resolve([
                { id: '1', name: 'Person1' },
                { id: '2', name: 'Person2' },
              ]),
              100,
            );
          });
        }
        
    useEffect(() => {
        const loadResult = async() => {
            const fetchResult = await mockFetch();

            console.log(fetchResult)
            setData(fetchResult);
            setIsLoading(false);

        };

        loadResult();
    } , [])



    return(
        <div>
            {isLoading ? (
                <div> is Loading </div>
            ) : (
                <div>
                    <ul>
                        {data ? 
                        (
                            data.map(item => {
                                <li>{item.name}</li>
                            })
                        )
                         : (<></>)}
                        

                    </ul>
                </div>
            )}
        </div>
    )
}

export default Fetch;