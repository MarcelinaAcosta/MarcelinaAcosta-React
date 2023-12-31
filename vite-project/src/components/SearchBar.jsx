import React from 'react'

 function SearchBar() {
  return (
    <div className="containerSearchInput">
        <input type="text"  placeholder="Search..." className='inputSearch'/>
        <button className='btnSvgSearch'>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m775.5-168.5-247.766-248Q498-390.5 459-376.75 420-363 383.158-363q-91.362 0-154.01-62.814-62.648-62.815-62.648-153.5Q166.5-670 229.041-733q62.542-63 153.5-63 90.959 0 153.959 62.891t63 153.688q0 40.421-15 79.421-15 39-38.5 65.713L794-187l-18.5 18.5ZM383-388.5q80.5 0 135.75-55.059t55.25-136q0-80.941-55.25-135.941t-136-55Q302-770.5 247-715.441t-55 136q0 80.941 55.042 135.941 55.041 55 135.958 55Z"/></svg>
        </button>
    
    </div>
  )
}
export default SearchBar;
