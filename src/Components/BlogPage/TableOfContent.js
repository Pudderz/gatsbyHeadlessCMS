import React, { useState, useEffect } from "react";
import CloseIcon from '@material-ui/icons/Close';
import "../../styles/tocStyles.scss";
import { IconButton } from "@material-ui/core";

function renderItems(items, activeIds) {
  return (
    <ol  style={{padding:'0px', listStyle:'none'}}>
      {items.map((item) => 
        <li key={item.url}>
          {item.url && (
            <a
              className={`hover ${
                activeIds === item.url.slice(1) ? "active" : ""
              }`}
              href={item.url}
            >
              {item.title}
            </a>
          )}
          {item.items && renderItems(item.items, activeIds)}
        </li>
      )}
    </ol>
  );
}

function getIds(items) {
  return items.reduce((acc, item) => {
    if (item.url) {
      // url has a # as first character, remove it to get just the id
      acc.push(item.url.slice(1));
    }
    if (item.items) {
      acc.push(...getIds(item.items));
    }
    return acc;
  }, []);
}

function useActiveId(idArray) {
  const [intersectingId, setIntersectingId] = useState("placeholder");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            //changes intersecting id if intersecting
            setIntersectingId(entry.target.id);
          }
        });
      },
      { rootMargin: `0% 0% -80% 0%` }
    );

    idArray.forEach((id) => {
      observer.observe(document.getElementById(id));
    });

    return () => {
      idArray.forEach((id) => {
        observer.unobserve(document.getElementById(id));
      });
    };
  }, []);
  return intersectingId;
}

export function TableOfContents(props) {
  const [display, setDisplay]= useState(true)
  const idArray = getIds(props.items);
  const activeId = useActiveId(idArray);


  const handleClose = () =>{  
    setDisplay(!display);
  }

  return (
    <>
      <div id="examples" style={{position:display?"sticky": "inherit"}}>
        <div style={{display:'flex', justifyContent:'space-between'}}>

        <summary style={{alignSelf:'center'}}>Table of Contents</summary>
        <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon fontSize="small" />
        </IconButton>
        </div>
        
        <ol className="example" style={{display:display?"flex":"none"}}>{renderItems(props.items, activeId)}</ol>
        {props.children}
      
      </div>

      
    </>
  );
}

export default TableOfContents;
