import React from 'react';
import { Link } from 'react-router-dom';

function BreadcrumbNav({ items }) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            {items.map((item, index) => (
                <li className={`breadcrumb-item ${item.isActive ? 'active' : ''}`} key={index}>
                {item.isActive ? (
                    item.label
                ) : (
                    <Link to={item.to}>{item.label}</Link>
                )}
                </li>
            ))}
            </ol>
        </nav>
        );
    }

export default BreadcrumbNav;