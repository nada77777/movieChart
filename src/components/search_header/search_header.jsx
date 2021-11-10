import React, { useRef } from 'react';
import { useHistory } from 'react-router';
import styles from './search_header.module.css';

const SearchHeader = ({ search }) => {
    const history = useHistory();
    console.log(history);
    const inputRef = useRef();

    const inputKeyword = (event) => {
        const value = inputRef.current.value;
        event.preventDefault();
        search(value);
        inputRef.current.value = "";
    };

    const onKeyPress = (event) => {
        if(event.target === 'Enter'){
            inputKeyword();
        }else{
            return;
        }
    };
    return(
        <header className={styles.header}>
            <h1 className={styles.logo}>
                <img className={styles.banner_img} alt="img" src="/img/banner.jpg"/>
            </h1>
            <form className={styles.form}>
                <input ref={inputRef} className={styles.input}
                type="text"
                placeholder="Search..."
                onKeyPress={onKeyPress}
                />
                <button className={styles.button} onClick={inputKeyword}>
                    Search
                </button>
            </form>
        </header>
    );
}

export default SearchHeader;