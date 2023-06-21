import { useState } from "react";
import ListItem from "../listItem/ListItem";
import "./list.scss";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
// import {
//     ArrowBackIosOutlined,
//     ArrowForwardIosOutlined,
// } from "@material-ui/icons";

export default function List() {

    return (
        <div className="list">
            <span className="listTitle">Continue to watch</span>
            <div className="wrapper">
                <Splide options={{
                    perMove: 1,
                    perPage: 3,
                    width: '90%',
                    pagination: false,
                    gap: 10
                }}>
                    <SplideSlide>
                        <ListItem />
                    </SplideSlide>
                    <SplideSlide>
                        <ListItem />
                    </SplideSlide>
                    <SplideSlide>
                        <ListItem />
                    </SplideSlide>

                </Splide>
            </div>


        </div>
    );
}