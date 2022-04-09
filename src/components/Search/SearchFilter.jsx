import React from 'react'
import JSONDATA from '../../tools/cities.json';

export const SearchFilter = ({ location, setLocation, setIsSearch }) => {
    return (
        <div className={"search-filter"}>
            {location && JSONDATA.filter(value => {
                if (value.city.toLowerCase().includes(location.toLowerCase())) {
                    return value
                } else {
                    return null
                }
            }).map(item => {
                return (
                    <li
                        className="search-item"
                        key={item.city}
                        onClick={(e) => {
                            setLocation(e.target.innerHTML)
                            setIsSearch(false)
                        }}
                    >
                        {item.city}
                    </li>
                )
            })}
        </div>
    )
}
