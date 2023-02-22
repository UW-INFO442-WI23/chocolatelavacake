
import React from 'react';
import {useState} from "react";
import info442data from "../data/info442data.json";

export default function Mission(props) {

    // adding filter feature
    // add tag/category to organization in JSON file
    // create drop down menu
    // create filter options
    // filter function


    let orgArray = [...info442data];
    const [textContent, setTextContent] = useState("");
    let rows = results(orgArray);

    const handleChange = (event) => {
        //let data = [...orgArray];
        const typedContent = event.target.value;
        setTextContent(typedContent);
        //console.log(typedContent);

    }

    if (textContent.length > 0) {
        let data = [...orgArray];
        data = data.filter((org) => {
            let name = org.title;
            //console.log("checking: " + name.toUpperCase() + " " + name.includes(typedContent.toUpperCase()));
            return (name.toUpperCase().includes(textContent.toUpperCase()));
        });
        rows = results(data);
    }

    function results(data) {
        data = data.map((org) => {
            let row = (
                <tr key = {org.title}>
                    <td>
                        {org.title}
                    </td>
                </tr>
            );
            return row;
        })
        return data;
    }


    return(
        <div className='container-mission'>
            <h2>
                Get Involved
            </h2>
            <p>
                Lorem ipsum dolor sit amet. Vel enim officia et amet quasi in voluptatem provident vel animi internos et voluptatem molestias non consequatur totam! Ut obcaecati enim cum veniam tempore hic quidem consectetur ut consectetur alias.
            </p>
            <div className='search-filter'>
                <input className='search' placeholder="Search for an Organization"  value={textContent} onChange={handleChange}/>
                <button className='filter'> 
                    filter
                </button>
            </div>
            <div className='org'>
                <table>
                    <tbody>
                        {rows} 
                    </tbody> 
                </table>
            </div>
        </div>
    )
};