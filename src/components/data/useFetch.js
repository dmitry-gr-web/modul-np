import { useEffect, useState } from 'react';
export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState('');
	useEffect(() => {
        setTimeout(() => {
            try {
                // setIsLoading(true)

                    // const fetchData = async () => {
                    //     const res = await fetch(url);
                    //     const data = await res.json();
                    //     setData(data);
                    // };
                    // fetchData();
            
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, 0);
	}, [url]);
	//const {data, error, isLoading} = useFetch()  uzaem
	return { data, isLoading, error };
};
