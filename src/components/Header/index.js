import React from 'react';
import logo from './images/logo.png'
import './style.css'

export const Header =({handleSubmit}) =>{
    const onSubmit = (ev) => {
        ev.preventDefault();
        // alert('works');
        let input = document.querySelector('.search-input');
        handleSubmit(input.value);
    }


    return (
            <header className={'header'}>
                <div className={'logo'}>
                    <a href="/">
                        <img src={logo} alt="loGo"/>
                    </a>

                </div>
                <div className={'search-form'}>
                    <form action="" onChange={onSubmit}>
                        <label>
                            <input name='search' className={'search-input'} type="text" placeholder={"Search by artist's name"}/>
                        </label>
                    </form>


                </div>
            </header>
        )

}
