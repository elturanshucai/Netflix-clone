import { useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

export default function List({ list }) {

    return (
        <div className="list">
            <span className="listTitle">{list.title}</span>
            <div className="wrapper">
                <Splide options={{
                    perMove: 1,
                    perPage: 3,
                    width: '90%',
                    pagination: false,
                    gap: 10
                }}>
                    {
                        list?.content.map((id, i) => (
                            <SplideSlide key={i}>
                                <ListItem index={i} filmId={id} />
                            </SplideSlide>
                        ))
                    }
                </Splide>
            </div>


        </div>
    );
}