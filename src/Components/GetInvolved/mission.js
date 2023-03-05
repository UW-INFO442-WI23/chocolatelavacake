
import React from 'react';
import {useState, useEffect} from "react";
import { useRef } from "react";
import info442data from "../data/info442data.json";

export default function Mission(props) {

    // adding filter feature
    // add tag/category to organization in JSON file
    // create drop down menu
    // create filter options
    // filter function

    const DATA = [...info442data];
    let orgArray = [...DATA]; // initialize all orgs
    const [textContent, setTextContent] = useState("");
    const [shownCards, changeCards] = useState(orgArray);
    let shownData = [...orgArray];

    const [appliedLocation, applyLocation] = useState([]);
    const [appliedTags, applyTags] = useState([]);

    

    let rows = results(orgArray);

    const checkBoxLocation = (event) => {
        if (event.target.checked) {
            applyLocation([...appliedLocation, event.target.value]);
          } else {
            applyLocation(
              appliedLocation.filter((filterTag) => filterTag !== event.target.value)
            )
          }
    }
    const checkBoxTags = (event) => { 
        if (event.target.checked) {
            applyTags([...appliedTags, event.target.value]);
          } else {
            applyTags(
              appliedTags.filter((filterTag) => filterTag !== event.target.value)
            )
          }
    }
    
    // if filters are applied, filter the data
    if (appliedLocation.length > 0 || appliedTags.length > 0) {

        let filterData = [...orgArray];
        filterData = filterData.filter((org) => {
            return (appliedLocation.every(i => org.location.includes(i)));
        });

        filterData = filterData.filter((org) => {
            return (appliedTags.every(i => org.tags.includes(i)));
        });
        shownData = filterData;
        rows = results(filterData);

    } else {
        shownData = DATA; // if there is no filters applied, return normal data
    }
   
    /* When user searches in search bar */
    const handleChange = (event) => {
        const typedContent = event.target.value;
        setTextContent(typedContent); // update state w/ search
    }

    if (textContent.length > 0) { // if user searched something
        let data = [...shownData];
        data = data.filter((org) => { // filter for matching orgs
            let name = org.title;
            return (name.toUpperCase().includes(textContent.toUpperCase()));
        });
        rows = results(data);
    }

    const handleClick = (event) => { // make box show up when clicked
        console.log("clicked");
        var element = document.getElementById('overlay');
        element.classList.toggle("show");
    }
    
    return(
        <div className='container-mission' id='get-involved'>
            <h2>
                Get Involved
            </h2>
            <p>
                Lorem ipsum dolor sit amet. Vel enim officia et amet quasi in voluptatem provident vel animi internos et voluptatem molestias non consequatur totam! Ut obcaecati enim cum veniam tempore hic quidem consectetur ut consectetur alias.
            </p>
            <div className='search-filter'>
                <input className='search' placeholder="Search for an Organization"  value={textContent} onChange={handleChange}/>
                <div className='filter-over'>
                    <button className='filter-btn' onClick = {handleClick}> 
                        filter
                    </button>
                    <div id='overlay' className='filter-overlay'>
                        <div className='overlay-header'>
                            <i class="fa-solid fa-xmark" onClick={handleClick}></i>
                            <h4>Location</h4>
                        </div>

                        <input type='checkbox' id="US" className='filter-selection' onChange={checkBoxLocation} value = "US"/>
                        <label for="location1"> US </label><br/>
                        <input type='checkbox' id="International" className='filter-selection' onChange={checkBoxLocation} value = "International"/>
                        <label for="location2"> International </label><br/>

                        <h4>Organization Type</h4>

                        <input type='checkbox' id="Political" className='filter-selection' onChange={checkBoxTags} value="Political"/>
                        <label for="tag1"> Political </label><br/>
                        <input type='checkbox' id="Violence" className='filter-selection' onChange={checkBoxTags} value="Violence"/>
                        <label for="tag2"> Violence </label><br/>
                        <input type='checkbox' id="Economic" className='filter-selection' onChange={checkBoxTags} value="Economic"/>
                        <label for="tag3"> Economic </label><br/>
                        <input type='checkbox' id="Health" className='filter-selection' onChange={checkBoxTags} value="Health"/>
                        <label for="tag4"> Health </label><br/>
                        
                    </div>
                </div>
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