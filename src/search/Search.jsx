import { useEffect, useState } from "react";


const StaticData = [ 
  {name: 'Afghanistan', code: 'AF'}, 
  {name: 'Åland Islands', code: 'AX'}, 
  {name: 'Albania', code: 'AL'}, 
  {name: 'Algeria', code: 'DZ'}, 
  {name: 'American Samoa', code: 'AS'}, 
  {name: 'AndorrA', code: 'AD'}, 
  {name: 'Angola', code: 'AO'}, 
  {name: 'Anguilla', code: 'AI'}, 
  {name: 'Antarctica', code: 'AQ'}, 
  {name: 'Antigua and Barbuda', code: 'AG'}, 
  {name: 'Argentina', code: 'AR'}, 
  {name: 'Armenia', code: 'AM'}, 
  {name: 'Aruba', code: 'AW'}, 
  {name: 'Australia', code: 'AU'}, 
  {name: 'Austria', code: 'AT'}, 
  {name: 'Azerbaijan', code: 'AZ'}, 
  {name: 'Bahamas', code: 'BS'}, 
  {name: 'Bahrain', code: 'BH'}, 
  {name: 'Bangladesh', code: 'BD'}, 
  {name: 'Barbados', code: 'BB'}, 
  {name: 'Belarus', code: 'BY'}, 
  {name: 'Belgium', code: 'BE'}, 
  {name: 'Belize', code: 'BZ'}, 
  {name: 'Benin', code: 'BJ'}, 
  {name: 'Bermuda', code: 'BM'}, 
  {name: 'Bhutan', code: 'BT'}, 
  {name: 'Bolivia', code: 'BO'}, 
  {name: 'Bosnia and Herzegovina', code: 'BA'}, 
  {name: 'Botswana', code: 'BW'}, 
  {name: 'Bouvet Island', code: 'BV'}, 
  {name: 'Brazil', code: 'BR'}, 
  {name: 'British Indian Ocean Territory', code: 'IO'}]

 function Search() {
  const [searchData, setSearchData] = useState(StaticData);
  const [searchValue, seSearchValue] = useState([]);

  // const getData = async () => {
  //   const data = await fetch(api);
  //   let returnData = await data.json();
  //   console.log(data);
  //   return returnData;
  // };
  // let api =
  //   "https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json";

  // Fetch countries on component mount
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
      .then(response => response.json())
      .then(data => {
        setSearchData(data);
        seSearchValue(data); // Initialize with all data
      })
      .catch(error => console.error('Error fetching countries:', error));
  }, []); // The empty array ensures this effect is only run on mount

  const handleSearch = (event) => {
    let value = event.target.value;
    if (value === "") {
      seSearchValue([]);
    } else {
      const filteredData = searchData.filter((item) =>
        item.name.toLowerCase().includes(value)
      );
      seSearchValue(filteredData);
    }
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input type="text" onChange={handleSearch} />
      <div>
        <ul>
          {searchValue && searchValue.map((item) => <li>{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
}


export default Search;