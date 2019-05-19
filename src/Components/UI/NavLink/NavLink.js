import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavLink.module.css';
const navLink = (props) => {
    return (
        <li>
            <Link style={styles.List} to  = {props.linkURL}>{props.linkText}</Link>
        </li>
    );
}

export default navLink;